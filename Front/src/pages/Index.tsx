import React from 'react';
import NavBarDefault from '../components/navbars/NavBarDefault';
import '../styles/index.css';
import WelcomeMessage from '../components/RandomGreeting';

export const Index: React.FC = () => {
    return (
        <div>
            <NavBarDefault />
            <WelcomeMessage username="Usuario" />
        </div>
    );
}