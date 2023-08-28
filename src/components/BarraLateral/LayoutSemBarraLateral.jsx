import HeaderDeslogado from "../Header/HeaderDeslogado";

export default function LayoutSemBarraLateral({ children }) {
    return (
        <div>
            <HeaderDeslogado />
            {children}
        </div>
    );
}