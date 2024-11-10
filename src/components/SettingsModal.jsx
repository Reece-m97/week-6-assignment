function SettingsModal({
  audioRef,
  isMuted,
  setIsMuted,
  volume,
  setVolume,
  onClose,
}) {
  // Mute button handler
  const toggleMute = () => {
    if (!audioRef.current) return;

    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Volume control handler
  const handleVolumeChange = (event) => {
    if (!audioRef.current) return;

    const newVolume = parseFloat(event.target.value);
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  // Delete save data
  const handleDeleteSave = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Game Settings</h2>
        <button onClick={toggleMute}>{isMuted ? "Unmute" : "Mute"}</button>
        <label htmlFor="volume-control">Volume:</label>
        <input
          type="range"
          id="volume-control"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
        />
        <button onClick={handleDeleteSave}>Delete Save Data</button>
      </div>
    </div>
  );
}

export default SettingsModal;
