import React, { useState } from 'react';
import SidebarButton from './sidebarButton';

function Hamburger() {
    const [isOpen, setIsOpen] = useState(false)

    function renderCommand() {
        return isOpen ? 'close' : 'open';
    }

    function renderMenuClass() {
        return isOpen ? ('hamburger-menu active') : ('hamburger-menu');
    }

    return (
        <>
            <div className="hamburger-container flex pointer" onClick={() => setIsOpen(true)}>
                <div className="hamburger-icon mr-1-rem"></div>
                <h3 className="small">open</h3>
            </div>

            <div className={renderMenuClass()}>
                
                <div className="hamburger-menu-closer flex pointer" onClick={() => setIsOpen(false)}>
                    <div className="hamburger-icon mr-1-rem"></div>
                    <h3 className="small">close</h3>
                </div>

                <div className="hamburger-menu-items flex flex-column jc-center">
                    <SidebarButton
                        nav='/go'
                        text='Go!'
                        raiseClick={() => setIsOpen(false)}
                    />

                    <SidebarButton
                        nav='/'
                        text='Activity.'
                        raiseClick={() => setIsOpen(false)}
                    />

                    <SidebarButton
                        nav='/around-me'
                        text='Around Me.'
                        raiseClick={() => setIsOpen(false)}
                    />

                    <SidebarButton
                        nav='/account'
                        text='Acount.'
                        raiseClick={() => setIsOpen(false)}
                    />
                </div>
            </div>
        
        </>
    );
}

export default Hamburger;