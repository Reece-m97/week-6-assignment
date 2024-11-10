import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import GameArea from "./components/GameArea";
import Footer from "./components/Footer";
import "./App.css";
import backgroundMusic from "./assets/background-music.mp3";

function App() {
  const [treats, setTreats] = useState(
    () => Number(localStorage.getItem("treats")) || 0
  );
  const [tps, setTps] = useState(
    () => Number(localStorage.getItem("tps")) || 0
  );
  const [ttc, setTtc] = useState(
    () => Number(localStorage.getItem("ttc")) || 0
  );
  const [colonySize, setColonySize] = useState(
    () => Number(localStorage.getItem("colonySize")) || 0
  );
  const [catClicks, setCatClicks] = useState(
    () => Number(localStorage.getItem("catClicks")) || 0
  );

  // State for background music control
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(null);

  // useEffect to save game state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("treats", treats);
    localStorage.setItem("tps", tps);
    localStorage.setItem("ttc", ttc);
    localStorage.setItem("colonySize", colonySize);
    localStorage.setItem("catClicks", catClicks);
  }, [treats, tps, ttc, colonySize, catClicks]);

  // Effect to handle background music
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;
    audio.muted = isMuted;

    // Play music if not muted
    if (!isMuted) {
      audio.play().catch((error) => {
        console.log("Autoplay was prevented:", error);
      });
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
    };
  }, [isMuted, volume]);

  return (
    <div className="App">
      {/* Background Music */}
      <audio ref={audioRef} loop src={backgroundMusic}></audio>

      <Header treats={treats} tps={tps} />
      <GameArea
        treats={treats}
        setTreats={setTreats}
        tps={tps}
        setTps={setTps}
        ttc={ttc}
        setTtc={setTtc}
        colonySize={colonySize}
        setColonySize={setColonySize}
        catClicks={catClicks}
        setCatClicks={setCatClicks}
      />
      <Footer
        treats={treats}
        tps={tps}
        ttc={ttc}
        colonySize={colonySize}
        catClicks={catClicks}
        audioRef={audioRef}
        isMuted={isMuted}
        setIsMuted={setIsMuted}
        volume={volume}
        setVolume={setVolume}
      />
    </div>
  );
}

export default App;
