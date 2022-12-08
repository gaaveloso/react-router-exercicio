import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../routes/coordinator";

function ProfilePage() {
  const navigate = useNavigate();

  return (
    <section>
      <h1>Página de perfil</h1>
      <button onClick={() => {goToHomePage(navigate)}}>Página inicial</button>
    </section>
  );
}

export default ProfilePage;
