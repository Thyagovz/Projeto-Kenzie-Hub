import logo from "../../assets/mainLogo.svg";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div>
          <img src={logo} alt="Logo Kenzie Hub" />
          <button>Sair</button>
        </div>
        <div>
            <p></p>
            <p></p>
        </div>
      </div>
    </header>
  );
};
