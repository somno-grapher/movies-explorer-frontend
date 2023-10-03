class MainApi {
  constructor(basePath) {
    this._basePath = basePath;
  }

  _handleJsonResponse(jsonResponse, requestType) {
    if (jsonResponse.ok) {
      return jsonResponse.json()
        .catch(() => { throw new Error('Ошибка обработки ответа сервера.') });
    }
    else if (jsonResponse.status === 400) {
      var errorMessage;
      if (requestType === 'register') {
        errorMessage = 'При регистрации пользователя произошла ошибка.';
      } else if (requestType === 'login') {
        errorMessage = 'При авторизации произошла ошибка.';
      }
      throw new Error(errorMessage);
    }
    else if (jsonResponse.status === 401) { throw new Error(`Вы ввели неправильный логин или пароль.`); }
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
      throw new Error(`Проверьте соединение.`)
    }
    return this._handleJsonResponse(jsonResponse, 'register');
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
      throw new Error(`Проверьте соединение.`)
    }
    const responseObject = await this._handleJsonResponse(jsonResponse, 'login');
    if (responseObject.token) {
      // localStorage.setItem('jwt', responseObject.token);
      console.log(responseObject.token);
      return responseObject;
    }
  };

  // TODO: delete
  // login(email, password) {
  //   return fetch(`${this._basePath}/signin`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ email, password })
  //   })
  //     .then(this._handleJsonResponse)
  //     .then((responseObject) => {
  //       if (responseObject.token) {
  //         // localStorage.setItem('jwt', responseObject.token);
  //         console.log(responseObject.token);
  //         return responseObject;
  //       }
  //     });
  // };

}

export default MainApi;
