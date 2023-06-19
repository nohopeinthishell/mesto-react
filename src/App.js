import logo from "./logo.svg";
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import PopupWithForm from "./components/PopupWithForm";
import ImagePopup from "./components/ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name={"profile"}
        title={"Редактировать профиль"}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__label">
          <input
            type="text"
            className="popup__input popup__input_type_name"
            id="name-input"
            name="name"
            placeholder="Введите имя"
            required=""
            minLength="{2}"
            maxLength="{40}"
          />
          <span className="popup__input-error name-input-error"></span>
        </label>
        <label className="popup__label">
          <input
            type="text"
            className="popup__input popup__input_type_job"
            id="job-input"
            name="job"
            placeholder="Введите профессию"
            required=""
            minLength="{2}"
            maxLength="{200}"
          />
          <span className="popup__input-error job-input-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        name={"cards"}
        title={"Новое место"}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__label">
          <input
            type="text"
            className="popup__input popup__input_type_title"
            id="title-input"
            name="name"
            placeholder="Название"
            required=""
            minLength={2}
            maxLength={30}
          />
          <span className="popup__input-error title-input-error" />
        </label>
        <label className="popup__label">
          <input
            type="url"
            className="popup__input popup__input_type_link"
            id="link-input"
            name="link"
            placeholder="Ссылка на картинку"
            required=""
          />
          <span className="popup__input-error link-input-error" />
        </label>
      </PopupWithForm>
      <PopupWithForm name={"delete"} title={"Вы уверены?"} />
      <PopupWithForm
        name={"avatar"}
        title={"Обновить аватар"}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__label">
          <input
            type="url"
            className="popup__input popup__input_type_link"
            id="avatar-input"
            name="avatar"
            placeholder="Ссылка на картинку"
            required=""
          />
          <span className="popup__input-error avatar-input-error" />
        </label>
      </PopupWithForm>
      <ImagePopup
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
