class Api {
  constructor() {}

  getProfileInfo() {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-66/users/me", {
      headers: {
        authorization: "32035f3b-2c7c-4514-95d9-d73394472392",
      },
    }).then((res) => this._getResponseData(res));
  }

  getInitialCards() {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-66/cards", {
      headers: {
        authorization: "32035f3b-2c7c-4514-95d9-d73394472392",
      },
    }).then((res) => this._getResponseData(res));
  }

  updateProfile = (data) => {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-66/users/me", {
      method: "PATCH",
      headers: {
        authorization: "32035f3b-2c7c-4514-95d9-d73394472392",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        about: data.job,
      }),
    }).then((res) => this._getResponseData(res));
  };

  postNewCard = (data) => {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-66/cards", {
      method: "POST",
      headers: {
        authorization: "32035f3b-2c7c-4514-95d9-d73394472392",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then((res) => this._getResponseData(res));
  };

  deleteItem(cardId) {
    return fetch(
      `https://mesto.nomoreparties.co/v1/cohort-66/cards/${cardId}`,
      {
        method: "DELETE",
        headers: {
          authorization: "32035f3b-2c7c-4514-95d9-d73394472392",
          "Content-Type": "application/json",
        },
      }
    ).then((res) => this._getResponseData(res));
  }

  updateAvatar = (data) => {
    return fetch(
      "https://mesto.nomoreparties.co/v1/cohort-66/users/me/avatar",
      {
        method: "PATCH",
        headers: {
          authorization: "32035f3b-2c7c-4514-95d9-d73394472392",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          avatar: data.avatar,
        }),
      }
    ).then((res) => this._getResponseData(res));
  };

  likeCard = (cardId) => {
    return fetch(
      `https://mesto.nomoreparties.co/v1/cohort-66/cards/${cardId}/likes`,
      {
        method: "PUT",
        headers: {
          authorization: "32035f3b-2c7c-4514-95d9-d73394472392",
        },
      }
    ).then((res) => this._getResponseData(res));
  };

  deleteLike = (cardId) => {
    return fetch(
      `https://mesto.nomoreparties.co/v1/cohort-66/cards/${cardId}/likes`,
      {
        method: "DELETE",
        headers: {
          authorization: "32035f3b-2c7c-4514-95d9-d73394472392",
        },
      }
    ).then((res) => this._getResponseData(res));
  };

  getAppInfo() {
    return Promise.all([this.getInitialCards(), this.getProfileInfo()]);
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }
}

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-66",
  headers: {
    authorization: "32035f3b-2c7c-4514-95d9-d73394472392",
    "Content-Type": "application/json",
  },
});

export default api;
