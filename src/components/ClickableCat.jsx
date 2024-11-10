import { useState } from "react";
import CatImg from "../assets/Cat.webp";
import ClickSound from "../assets/click-sound.mp3";

function ClickableCat({
  treats,
  setTreats,
  ttc,
  setTtc,
  catClicks,
  setCatClicks,
}) {
  const [isClicked, setIsClicked] = useState(false);

  const handleCatClick = () => {
    setTreats(treats + 1);
    setTtc(ttc + 1);
    setCatClicks(catClicks + 1);

    // Trigger animation
    setIsClicked(true);

    // Remove animation class after 200ms (adjust duration as needed)
    setTimeout(() => {
      setIsClicked(false);
    }, 200);

    if (ClickSound.current) {
      ClickSound.current.currentTime = 0; // Reset the audio time
      ClickSound.current.play();
    }
  };

  return (
    <div className="center-area">
      <button
        onClick={handleCatClick}
        className={`cat-btn ${isClicked ? "enlarge" : ""}`}
      >
        <img src={CatImg} alt="Clickable Cat" className="cat-image" />
      </button>
      <p>Click the cat to collect Cat Treats!</p>
    </div>
  );
}

export default ClickableCat;
