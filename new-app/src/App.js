import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import "./App.css"; // Assuming you have some basic styling here

function App() {
  const API = "http://localhost:8001/bots";

  const [allBots, setAllBots] = useState([]);

  const [yourArmy, setYourArmy] = useState([]);

  // 1. FETCH ALL BOTS

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setAllBots(data))
      .catch((error) => console.error("Error fetching bots:", error));
  }, []);

  // 2. ENLIST BOT (Add to Army)

  const enlistBot = (bot) => {
    const isAlreadyEnlisted = yourArmy.some((armyBot) => armyBot.id === bot.id);

    if (!isAlreadyEnlisted) {
      setYourArmy([...yourArmy, bot]);
    } else {
      console.log(`${bot.name} is already in the army!`);
    }
  };

  const releaseBot = (botId) => {
    // Filter out the bot from the army state
    const updatedArmy = yourArmy.filter((bot) => bot.id !== botId);
    setYourArmy(updatedArmy);
  };

  const dischargeBot = (botId) => {
    // HTTP DELETE Request to JSON Server
    fetch(`${API}/${botId}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          // Remove from ALL BOTS collection
          const updatedAllBots = allBots.filter((bot) => bot.id !== botId);
          setAllBots(updatedAllBots);

          // Remove from YOUR ARMY collection (in case it was enlisted)
          releaseBot(botId);

          console.log(`Bot ${botId} discharged forever.`);
        } else {
          throw new Error("Failed to discharge bot on server.");
        }
      })
      .catch((error) => console.error("Error discharging bot:", error));
  };

  // Logic to determine which bots are in the collection (not in the army)
  const availableBots = allBots.filter(
    (bot) => !yourArmy.some((armyBot) => armyBot.id === bot.id)
  );

  return (
    <div className="App">
      <header>
        <h1>Bot Army Commander</h1>
      </header>

      {/* Renders the enlisted bots at the top */}
      <YourBotArmy
        yourArmy={yourArmy}
        onRelease={releaseBot}
        onDischarge={dischargeBot}
      />

      <BotCollection
        bots={allBots}
        yourArmy={yourArmy}
        onEnlist={enlistBot}
        onDischarge={dischargeBot}
      />
    </div>
  );
}

export default App;
