# 🤖 Bot Army Commander

Welcome to the **Bot Army Commander** application! This is a React single-page application that allows a user to browse a collection of available bots, enlist them into a personal army, and manage their status using a local JSON server for data persistence.

## ✨ Features

* **View Bot Collection:** Display all available bots fetched from the mock API.
* **Enlist Bots:** Click a bot card to add it to your `YourBotArmy` section.
* **Prevent Duplicates:** A bot can only be enlisted into the army once.
* **Release Bots:** Click an enlisted bot in your army to release it (removes it from the army, but keeps it in the collection).
* **Permanent Discharge:** Click the **'X'** button on any bot card to permanently discharge the bot, deleting it from both the frontend view and the backend database (`db.json`) via a `DELETE` request.

---

## ⚙️ Setup and Installation

Follow these steps to get the project running locally.

### Prerequisites

You need **Node.js ($\ge$ v16.x)** and **npm** installed on your machine.

### 1. Install Dependencies

Assuming you are in the project root (`/bot-army-app/bot-army-app`), install all necessary dependencies:

```bash
# This is usually done with create-react-app, but ensures all are present
npm install

# Install json-server (your mock backend)
npm install json-server