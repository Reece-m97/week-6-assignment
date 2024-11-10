function StatsModal({ treats, tps, ttc, colonySize, catClicks, onClose }) {
  // Helper function to format time
  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}h ${m}m ${s}s`;
  };

  // Tracking game time
  if (!localStorage.getItem("gameStartTime")) {
    localStorage.setItem("gameStartTime", Date.now());
  }

  // Calculate game time
  const gameStartTime =
    Number(localStorage.getItem("gameStartTime")) || Date.now();
  const currentTime = Date.now();
  const gameTime = Math.floor((currentTime - gameStartTime) / 1000);

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Game Statistics</h2>
        <p>Total Treats Collected: {ttc}</p>
        <p>Treats in the Bank: {treats}</p>
        <p>Treats Per Second: {tps}</p>
        <p>Game Time: {formatTime(gameTime)}</p>
        <p>Cat Colony Size: {colonySize}</p>
        <p>Cat Clicks: {catClicks}</p>
      </div>
    </div>
  );
}

export default StatsModal;
