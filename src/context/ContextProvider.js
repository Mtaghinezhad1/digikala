import React from "react";
import { useState } from "react";

const AppContext = React.createContext();


const AppProvider = ({ children }) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isOpenSideMenu, setIsOpenSideMenu] = useState(false);
    const [isOpenToggleMenu, setIsOpenToggleMenu] = useState(false);

    const openModal = () => {
        setIsOpenModal(true);
    }
    const closeModal = () => {
        setIsOpenModal(false);
    }
    const openSideMenu = () => {
        setIsOpenSideMenu(true);
    }
    const closeSideMenu = () => {
        setIsOpenSideMenu(false);
    }
    const handleToggler = () => {
        setIsOpenToggleMenu(!isOpenToggleMenu);
    }
    
    return <AppContext.Provider
        value={{ isOpenModal, openModal, closeModal, isOpenSideMenu, openSideMenu, closeSideMenu, isOpenToggleMenu, setIsOpenToggleMenu, handleToggler}}>
        {children}
    </AppContext.Provider>
}



export { AppContext, AppProvider };