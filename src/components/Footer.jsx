import { useState } from "react";
import StatsModal from "./StatsModal";
import SettingsModal from "./SettingsModal";

function Footer({
  treats,
  tps,
  ttc,
  colonySize,
  catClicks,
  audioRef,
  isMuted,
  setIsMuted,
  volume,
  setVolume,
}) {
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <footer>
      <div className="footer-content">
        <button onClick={() => setIsStatsOpen(true)}>Stats</button>
        <button onClick={() => setIsSettingsOpen(true)}>Settings</button>
      </div>

      {isStatsOpen && (
        <StatsModal
          treats={treats}
          tps={tps}
          ttc={ttc}
          colonySize={colonySize}
          catClicks={catClicks}
          onClose={() => setIsStatsOpen(false)}
        />
      )}
      {isSettingsOpen && (
        <SettingsModal
          audioRef={audioRef}
          isMuted={isMuted}
          setIsMuted={setIsMuted}
          volume={volume}
          setVolume={setVolume}
          onClose={() => setIsSettingsOpen(false)}
        />
      )}
    </footer>
  );
}

export default Footer;
