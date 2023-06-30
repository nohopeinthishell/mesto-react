import React from "react";

function PopupWithForm({ title, name, children, isOpen, onClose, onSubmit }) {
  return (
    <div className={`popup popup_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        />
        <form
          className={`popup__form popup__form_${name}`}
          name="form-profile"
          noValidate=""
          onSubmit={onSubmit}
        >
          <h2 className="popup__edit-text">{title}</h2>
          {children}
          <button
            type="submit"
            className={`popup__submit popup__submit_${name}`}
          >
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
