import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

export default function HeaderLogado() {
    const [menuVisible, setMenuVisible] = useState(false);
    const [mouseOverMenu, setMouseOverMenu] = useState(false);
    const menuRef = useRef(null);
    const timeoutRef = useRef(null);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
        // Inicie o timer quando o menu for aberto
        if (!menuVisible) {
            timeoutRef.current = setTimeout(() => {
                if (!mouseOverMenu) {
                    closeMenu();
                }
            }, 900);  // 0.9 segundos
        }
    };

    const closeMenu = () => {
        setMenuVisible(false);
        clearTimeout(timeoutRef.current);
    };

    const handleTitleClick = () => {
        if (menuVisible) {
            closeMenu();
        } else {
            toggleMenu();
        }
    };

    const handleMouseEnter = () => {
        clearTimeout(timeoutRef.current);
        setMouseOverMenu(true);
    };

    const handleMouseLeave = () => {
        setMouseOverMenu(false);
        // Não inicie o timer se o menu não estiver visível
        if (menuVisible) {
            timeoutRef.current = setTimeout(() => {
                closeMenu();
            }, 900);  // 0.9 segundos
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuVisible &&
                menuRef.current &&
                !menuRef.current.contains(event.target)
            ) {
                closeMenu();
            }
        };

        const handleDocumentClick = (event) => {
            if (!menuRef.current.contains(event.target)) {
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
                    <div className="header-title" onClick={handleTitleClick}>
                        <span style={{ display: "flex", alignItems: "center" }}>
                            <FiChevronDown />Perfil
                        </span>
                    </div>
                    {menuVisible && (
                        <div
                            className="header-menu-options"
                            ref={menuRef}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="header-options">
                                {/* IMPLEMENTAR FUNÇÃO PARA EXCLUIR COOKIES E REDIRECIONAR USUÁRIO À RAIZ */}
                                <Link style={{textDecoration: "none", color: "black"}} to="/">
                                    <span>Sair</span>
                                </Link>
                            </div>
                        </div>
                    )}
                </nav>
            </div>
        </div>
    );
}
