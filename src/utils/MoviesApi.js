class MoviesApi {
  constructor(basePath) {
    this._basePath = basePath;
  }

  _handleJsonResponse(jsonResponse) {
    if (jsonResponse.ok) {
      return jsonResponse.json();
    }
    else {
      throw new Error()
    };
  }

  async getMovies() {
    const jsonResponse = await fetch(`${this._basePath}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    return this._handleJsonResponse(jsonResponse);
  };

}

export default MoviesApi;
