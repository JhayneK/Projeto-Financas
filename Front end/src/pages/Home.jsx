import { useEffect } from "react";

export default function Home() {
    
    useEffect(() => {
        document.title = "Home";
    }, []);

    return (
        <div className="page-container">
            <div className="pages-deslogado-main-content">
                <h1>Home</h1>
            </div>
        </div>
    );
}