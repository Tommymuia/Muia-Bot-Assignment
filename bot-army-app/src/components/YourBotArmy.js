import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ yourArmy, onRelease, onDischarge }) {
  if (yourArmy.length === 0) {
    return (
      <div className="your-bot-army army-container empty">
        <p>Your Bot Army is empty! Enlist a bot from the collection below.</p>
      </div>
    );
  }

  return (
    <div className="your-bot-army army-container">
      <h2>Your Enlisted Army ({yourArmy.length})</h2>
      <div className="bot-army-list">
        {yourArmy.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            inArmy={true}
            onRelease={onRelease}
            onDischarge={onDischarge}
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
