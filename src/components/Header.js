import { useNavigate } from "react-router-dom";
import { goToProductPage, goToProfilePage } from "../routes/coordinator";

function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <button onClick={() => goToProfilePage(navigate)}>
        Página de perfil
      </button>
      <button onClick={() => goToProductPage(navigate, "banana")}>Frutaria</button>
    </header>
  );
}

export default Header;
