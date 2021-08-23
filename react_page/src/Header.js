import React, {Component, useState} from 'react';
import Logo from './img/logo.png';
import BurgerMenu from './img/menu_hamburger_icon.png';
import CrossMenu from './img/close_icon.png';

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
        
            <Nav />
            <Menu />
        </header>
    );
}

function Nav() {
    return(
        <nav className="nav">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Sign in</li>
            </ul> 
        </nav>
    )
};


class Menu extends Component {
    state = {
        isOpen: true,
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };

    render() {
        const {isOpen} = this.state;
        return(
            <div id="menu" className={`${ isOpen ? '' : 'open' }`}>
            <div className="menuBtn">
                <span className="burger" onClick={this.toggle}><img src={BurgerMenu} alt="menu" /></span>
                <span className="close" onClick={this.toggle}><img src={CrossMenu} alt="close" /></span>
            </div>
            
            <div className="sideMenu">
                <ul className="sideNav">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Sign in</li>
                </ul>
            </div>
        </div>
        )
    }
}

// function Menu() {

//     const[ isOpen, toggleBtn] = useState(null);

//     const toggle = () => {
//         if(isOpen === null){
//             toggleBtn("open");
//         } else {
//             toggleBtn(null)
//         }
//     };


//     return(
//         <div id="menu" className={isOpen}>
//             <div className="menuBtn">
//                 <span className="burger" onClick={toggle}><img src={BurgerMenu} alt="menu" /></span>
//                 <span className="close" onClick={toggle}><img src={CrossMenu} alt="close" /></span>
//             </div>
            
//             <div className="sideMenu">
//                 <ul className="sideNav">
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                     <li>Sign in</li>
//                 </ul>
//             </div>
//         </div>
//     )
// };

export default Header;
