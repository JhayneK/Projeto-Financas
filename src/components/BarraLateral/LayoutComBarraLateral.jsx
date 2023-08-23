import Header from "../Header/Header";
import BarraLateral from "../BarraLateral/BarraLateral"
import Footer from "../Footer";

export default function LayoutComBarraLateral({ children }) {
    return (
        <div>
            <Header />
            <BarraLateral />
            {children}
            <Footer />
        </div>
    );
}