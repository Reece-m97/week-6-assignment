import { useEffect } from "react";
import ClickableCat from "./ClickableCat";
import RecruitCats from "./RecruitCats";

function GameArea({
  treats,
  setTreats,
  tps,
  setTps,
  ttc,
  setTtc,
  colonySize,
  setColonySize,
  catClicks,
  setCatClicks,
}) {
  // Increase treats based on TPS every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTreats((Treats) => Treats + tps);
      setTtc((ttc) => ttc + tps);
    }, 1000);

    return () => clearInterval(interval);
  }, [tps, setTreats, setTtc]);

  return (
    <main>
      <div className="game-container">
        <RecruitCats
          treats={treats}
          setTreats={setTreats}
          tps={tps}
          setTps={setTps}
          ttc={ttc}
          setTtc={setTtc}
          colonySize={colonySize}
          setColonySize={setColonySize}
        />
        <ClickableCat
          treats={treats}
          setTreats={setTreats}
          ttc={ttc}
          setTtc={setTtc}
          catClicks={catClicks}
          setCatClicks={setCatClicks}
        />
      </div>
    </main>
  );
}

export default GameArea;
