import React from "react";

function Card({ card, onCardClick }) {
  return (
    <li className="places__card">
      <img
        alt={card.name}
        src={card.link}
        className="places__image"
        onClick={() => onCardClick({ link: card.link, name: card.name })}
      />
      <div className="places__items">
        <h2 className="places__text">{card.name}</h2>
        <div className="places__like">
          <button className="places__like-button" type="button" />
          <p className="places__like-count">{card.likes.length}</p>
        </div>
        <button
          className="places__delete-button places__delete-button_hidden"
          type="button"
        />
      </div>
    </li>
  );
}

export default Card;
