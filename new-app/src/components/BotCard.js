import React from "react";

function BotCard({ bot, inArmy, onEnlist, onRelease, onDischarge }) {
  const {
    id,
    name,
    health,
    damage,
    armor,
    bot_class,
    avatar_url,
    catchphrase,
  } = bot;

  const handleCardClick = () => {
    if (inArmy) {
      onRelease(id);
    } else {
      onEnlist(bot);
    }
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onDischarge(id);
  };

  return (
    <div
      className={`bot-card ${inArmy ? "army-bot" : "collection-bot"}`}
      onClick={handleCardClick}
    >
      <img src={avatar_url} alt={name} className="bot-avatar" />
      <div className="bot-details">
        <h3>
          {name}{" "}
          <span className={`bot-class ${bot_class.toLowerCase()}`}>
            {bot_class}
          </span>
        </h3>
        <p className="catchphrase">"{catchphrase}"</p>

        <div className="stats">
          <span>Health {health}</span>
          <span>Damage {damage}</span>
          <span>Armor {armor}</span>
        </div>
      </div>

      <button className="discharge-btn" onClick={handleDeleteClick}>
        X
      </button>
    </div>
  );
}

export default BotCard;
