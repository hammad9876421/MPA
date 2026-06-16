import { useState } from "react";
import "./App.css";

export default function App() {
  const [query, setQuery] = useState("");

  const mods = [
    {
      id: "sodium",
      name: "Sodium",
      desc: "Performance optimization mod",
      downloads: "12.4M",
    },
    {
      id: "jei",
      name: "JEI",
      desc: "Item recipe viewer",
      downloads: "50M",
    },
    {
      id: "jade",
      name: "Jade",
      desc: "HUD information mod",
      downloads: "8.1M",
    },
  ];

  return (
    <div className="app">

      {/* TOP BAR */}
      <div className="topbar">
        <input
          className="search"
          placeholder="Search mods..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="filterBtn">⚙</button>
      </div>

      {/* FILTERS */}
      <div className="filters">
        <button>1.21.1</button>
        <button>NeoForge</button>
        <button>All</button>
      </div>

      {/* LIST */}
      <div className="list">

        {mods.map((mod) => (
          <div className="card" key={mod.id}>

            <div className="icon" />

            <div className="info">
              <h3>{mod.name}</h3>
              <p>{mod.desc}</p>
              <span>{mod.downloads} downloads</span>
            </div>

            <div className="actions">
              <button className="pack">+Pack</button>
              <button className="dl">Download</button>
            </div>

          </div>
        ))}

      </div>

      {/* BOTTOM NAV */}
      <div className="bottomNav">
        <div>Search</div>
        <div>Pack</div>
        <div>Downloads</div>
        <div>Settings</div>
      </div>

    </div>
  );
}
