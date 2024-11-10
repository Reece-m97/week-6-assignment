import { useState, useEffect } from "react";

const initialCats = [
  { name: "Street Cat", baseCost: 10, tps: 1 },
  { name: "Grandma Cat", baseCost: 100, tps: 5 },
  { name: "Fisher Cat", baseCost: 1000, tps: 10 },
  { name: "Hunter Cat", baseCost: 5000, tps: 20 },
  { name: "Neko Chef", baseCost: 10000, tps: 50 },
];

function RecruitCats({
  treats,
  setTreats,
  tps,
  setTps,
  colonySize,
  setColonySize,
}) {
  // Initialize catCosts from localStorage or use base costs
  const [catCosts, setCatCosts] = useState(() => {
    const savedCosts = JSON.parse(localStorage.getItem("catCosts"));
    return savedCosts || initialCats.map((cat) => cat.baseCost);
  });

  // Effect to save catCosts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("catCosts", JSON.stringify(catCosts));
  }, [catCosts]);

  const handleRecruit = (catIndex) => {
    const currentCost = catCosts[catIndex];
    if (treats >= currentCost) {
      // Deduct treats, increase TPS, and colony size
      setTreats(treats - currentCost);
      setTps(tps + initialCats[catIndex].tps);
      setColonySize(colonySize + 1);

      // Increase the cost by 15% for the next purchase
      const updatedCosts = catCosts.map((cost, index) =>
        index === catIndex ? Math.round(cost * 1.15) : cost
      );
      setCatCosts(updatedCosts);
    }
  };

  return (
    <section className="sidebar">
      <h2>Recruit Cats</h2>
      <ul>
        {initialCats.map((cat, index) => {
          const currentCost = catCosts[index];
          const canAfford = treats >= currentCost;

          return (
            <li key={index}>
              <button
                className={`recruit-btn ${!canAfford ? "disabled" : ""}`}
                onClick={() => handleRecruit(index)}
                disabled={!canAfford}
              >
                {cat.name} {"(Gain " + cat.tps + " TPS)"} - {currentCost} Treats
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default RecruitCats;
