import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, yourArmy, onEnlist, onDischarge }) {
  const isBotInArmy = (botId) => {
    return yourArmy.some((armyBot) => armyBot.id === botId);
  };

  const availableBots = bots.filter((bot) => !isBotInArmy(bot.id));

  return (
    <div className="bot-collection-container">
      <h2>Available Bots ({availableBots.length})</h2>
      <div className="bot-collection-list">
        {bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            inArmy={isBotInArmy(bot.id)}
            onEnlist={onEnlist}
            onRelease={() => {}}
            onDischarge={onDischarge}
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
