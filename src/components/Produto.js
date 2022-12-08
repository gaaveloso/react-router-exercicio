import { useNavigate, useParams } from "react-router-dom";
import { goToHomePage } from "../routes/coordinator";

export const Produto = () => {
    const navigate = useNavigate();
    const pathParams = useParams()

    return (
        <div>
            <h1>{pathParams.id}</h1>
            <button onClick={() => goToHomePage(navigate)}>Página inicial</button>
        </div>
    )
}
