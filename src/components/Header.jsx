function Header({ treats, tps }) {
  return (
    <header>
      <h1 className="title">Cat Clicker</h1>
      <div className="stats">
        <p>Cat Treats: {treats}</p>
        <p>({tps} per second)</p>
      </div>
    </header>
  );
}

export default Header;
