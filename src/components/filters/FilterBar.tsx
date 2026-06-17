const chips = [
  "1.21.1 ▼",
  "NeoForge ▼",
  "All ▼",
];

export default function FilterBar() {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        overflowX: "auto",
        padding: "10px 0",
      }}
    >
      {chips.map((chip) => (
        <button
          key={chip}
          style={{
            background: "#1a2230",
            color: "white",
            border: "none",
            borderRadius: "999px",
            padding: "10px 16px",
            whiteSpace: "nowrap",
            fontSize: "14px",
          }}
        >
          {chip}
        </button>
      ))}
    </div>
  );
}
