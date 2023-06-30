import React from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main({
  profileInfo,
  cards,
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onCardLike,
  onCardDelete,
}) {

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__edit-avatar" onClick={onEditAvatar}>
          <img
            className="profile__avatar"
            src={profileInfo.avatar}
            alt="фотография профиля"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{profileInfo.name}</h1>
          <button
            className="profile__edit-button"
            type="button"
            onClick={onEditProfile}
          />
          <p className="profile__job">{profileInfo.about}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={onAddPlace}
        />
      </section>
      <section className="places">
        <ul className="places__cards">
          {cards.map((card) => {
            return (
              <Card
                key={card._id}
                card={card}
                onCardClick={onCardClick}
                profileInfo={profileInfo}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
