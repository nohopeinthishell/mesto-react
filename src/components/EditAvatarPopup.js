import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name={"avatar"}
      title={"Обновить аватар"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__label">
        <input
          ref={avatarRef}
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
  );
}

export default EditAvatarPopup;
