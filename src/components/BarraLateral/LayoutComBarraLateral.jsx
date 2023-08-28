import BarraLateral from "../BarraLateral/BarraLateral"
import HeaderLogado from "../Header/HeaderLogado";

export default function LayoutComBarraLateral({ children }) {
    return (
        <div>
            <HeaderLogado />
            <BarraLateral />
            {children}
        </div>
    );
}