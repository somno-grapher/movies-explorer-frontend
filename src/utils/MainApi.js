class MainApi {
  constructor(basePath) {
    this._basePath = basePath;
  }

  _getJsonParsingPromise(jsonResponse) {
    if (jsonResponse.ok) {
      return jsonResponse.json();
    }
    if (jsonResponse.status === 400) { return Promise.reject(`При регистрации пользователя произошла ошибка.`); }
    if (jsonResponse.status === 404) { return Promise.reject(`Страница по указанному маршруту не найдена.`); }
    if (jsonResponse.status === 409) { return Promise.reject(`Пользователь с таким email уже существует.`); }
    if (jsonResponse.status === 500) { return Promise.reject(`На сервере произошла ошибка.`); }
    return Promise.reject(`Что-то пошло не так...`)
  }

  async register(email, password, name) {
    const jsonResponse = await fetch(`${this._basePath}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password, name })
    });
    return this._getJsonParsingPromise(jsonResponse);
  };

  // TODO delete
  // register(email, password, name) {
  //   return fetch(`${this._basePath}/signup`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ email, password, name })
  //   })
  //     .then(this._getJsonPromise);
  // };

}
export default MainApi;
