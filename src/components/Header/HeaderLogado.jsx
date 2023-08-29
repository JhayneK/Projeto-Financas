import React, { useState, useEffect, useRef } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function HeaderLogado() {
    const [menuVisible, setMenuVisible] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const closeMenu = () => {
        setMenuVisible(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        if (menuVisible) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuVisible]);

    return (
        <div className="header">
            <div className="header-content">
                <nav className="navbar">
                    <div className="header-title" onClick={toggleMenu}>
                        <span style={{display: "flex", alignItems: "center"}}><FiChevronDown />Perfil</span>
                    </div>
                    {menuVisible && (
                        <div className="header-menu-options" ref={menuRef}>
                            <div className="header-options">
                                <span>Sair</span>
                            </div>
                        </div>
                    )}
                </nav>
            </div>
        </div>
    );
}