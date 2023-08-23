import Header from "../Header/Header";
import Footer from "../Footer";

export default function LayoutSemBarraLateral({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}