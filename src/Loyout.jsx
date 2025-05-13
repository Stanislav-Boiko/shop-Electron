import React from 'react';
import { Outlet } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "./store";
import './Loyout.scss';
import { ViewModeProvider } from './context/ViewModeContext';

function Loyout () {
    const modal = useSelector(state => state.modal);
    const cartLength = useSelector(state => state.cart.items.length);
    const favoritesLength = useSelector(state => state.favorites.items.length);
    const dispatch = useDispatch();

    return (
        <ViewModeProvider>
            <Header cartLength={cartLength} favoritesLength={favoritesLength} />
            <div className="container">
                <Outlet />
                <Modal
                    isOpen={modal.isOpen}
                    onClose={() => dispatch(closeModal())}
                    title={modal.title}
                    product={modal.product}
                    actionType={modal.actionType}
                    actionPayload={modal.actionPayload}
                />
                <Footer/>
            </div>
        </ViewModeProvider>
    )
}

export default Loyout;