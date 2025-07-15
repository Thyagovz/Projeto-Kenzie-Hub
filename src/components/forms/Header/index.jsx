import logo from "../../../assets/mainLogo.svg";

export const Header = () => {
  return (
    <header>
      <div>
        <div>
          <img src={logo} alt="logo kenzie hub" />
          <button>Sair</button>
        </div>
      </div>
    </header>
  );
};
