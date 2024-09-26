import { useState } from "react";

export default function Play({ initialName, symbol, onNameChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onNameChange(playerName); // تحديث الاسم في الأب عند الحفظ
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let initialplayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    initialplayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li>
      <span>
        {initialplayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
