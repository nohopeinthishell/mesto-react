import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose, onAddPlace}) {
  const nameRef = React.useRef();
  const linkRef = React.useRef();


  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: nameRef.current.value,
      link: linkRef.current.value
    });
  }

  return(
    <PopupWithForm
    name={"cards"}
    title={"Новое место"}
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={handleSubmit}
  >
    <label className="popup__label">
      <input
        ref={nameRef}
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
        ref={linkRef}
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
  )
}

export default AddPlacePopup 