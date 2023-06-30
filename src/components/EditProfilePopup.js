import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({profileInfo, isOpen, onClose, onUpdateUser }) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  React.useEffect(() => {
    setName(profileInfo.name);
    setDescription(profileInfo.about);
  }, [profileInfo]);

  return (
    <PopupWithForm
      name={"profile"}
      title={"Редактировать профиль"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__label">
        <input
          value={name || ""}
          onChange={handleNameChange}
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
          value={description || ""}
          onChange={handleDescriptionChange}
          type="text"
          className="popup__input popup__input_type_job"
          id="job-input"
          name="job"
          placeholder="Введите описание"
          required=""
          minLength="{2}"
          maxLength="{200}"
        />
        <span className="popup__input-error job-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
