class MainApi {
  constructor(basePath) {
    this._basePath = basePath;
    this._token = '';
  }

  _handleJsonResponse(jsonResponse, requestType) {
    let errorMessage;
    if (jsonResponse.ok) {
      return jsonResponse.json()
        .catch(() => { throw new Error('Ошибка обработки ответа сервера.') });
    }
    // TODO: tide up
    else if (jsonResponse.status === 400) {
      if (requestType === 'register') {
        errorMessage = 'При регистрации пользователя произошла ошибка.';
      } else if (requestType === 'login') {
        errorMessage = 'При авторизации произошла ошибка.';
      } else if (requestType === 'tokenCheck') {
        errorMessage = 'При проверке токена произошла ошибка.';
      }
      throw new Error(errorMessage);
    }
    else if (jsonResponse.status === 401) {
      if (requestType === 'login') {
        errorMessage = 'Вы ввели неправильный логин или пароль.';
      } else if (requestType === 'tokenCheck') {
        errorMessage = 'При авторизации произошла ошибка. Токен некорректен';
      }
      throw new Error(errorMessage);
    }
    else if (jsonResponse.status === 404) { throw new Error(`Страница по указанному маршруту не найдена.`); }
    else if (jsonResponse.status === 409) { throw new Error(`Пользователь с таким email уже существует.`); }
    else if (jsonResponse.status === 500) { throw new Error(`На сервере произошла ошибка.`); }
    else { throw new Error(`Что-то пошло не так...`); }
  }

  async register(email, password, name) {
    let jsonResponse;
    try {
      jsonResponse = await fetch(`${this._basePath}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, name })
      });
    } catch {
      throw new Error(`Проверьте соединение.`);
    }
    await this._handleJsonResponse(jsonResponse, 'register');
    return this.login(email, password);
  };

  async login(email, password) {
    let jsonResponse;
    try {
      jsonResponse = await fetch(`${this._basePath}/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
    } catch {
      throw new Error(`Проверьте соединение.`);
    }
    const responseObject = await this._handleJsonResponse(jsonResponse, 'login');
    if (responseObject.token) {
      localStorage.setItem('jwt', responseObject.token);
      return this.checkToken(responseObject.token);
    }
  };

  async checkToken(jwt) {
    let jsonResponse;
    try {
      jsonResponse = await fetch(`${this._basePath}/users/me`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwt}` // Bearer is optional
        }
      });
    } catch {
      throw new Error(`Проверьте соединение.`);
    }
    this._token = jwt;
    return this._handleJsonResponse(jsonResponse, 'tokenCheck');
  }

  setToken(token) {
    this._token = token;
  }

}

export default MainApi;
