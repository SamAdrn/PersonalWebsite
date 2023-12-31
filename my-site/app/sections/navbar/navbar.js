"use client";

import React, { useState } from "react";
import NavBrand from "./nav-brand";
import BurgerMenu from "./burger-menu";
import NavItemList from "./nav-item-list";

function Navbar({ isMobile, isScrollAtTop }) {
    const [mobileNavVisible, setMobileNavVisible] = useState(false);

    return (
        <nav
            className={
                "w-full sticky z-20 top-0 left-0 pb-1 transition-colors " +
                `${isScrollAtTop ? "bg-slate-100 shadow-lg" : "bg-amber-500"}`
            }
        >
            <div
                className={
                    "max-w-screen-xl flex flex-wrap items-center " +
                    "justify-between mx-auto p-4 transition-colors " +
                    `${isScrollAtTop ? "bg-slate-100" : "bg-amber-500"}`
                }
            >
                <NavBrand scrollAtTop={isScrollAtTop} />
                <BurgerMenu
                    onClick={() => setMobileNavVisible((b) => !b)}
                    scrollAtTop={isScrollAtTop}
                />
                <NavItemList
                    isMobile={isMobile}
                    mobileNavVisible={mobileNavVisible}
                    scrollAtTop={isScrollAtTop}
                />
            </div>
        </nav>
    );
}

export default Navbar;
