import React from 'react';
import NavBarDefault from '../components/navbars/NavBarDefault';
import '../styles/index.css';
import WelcomeMessage from '../components/RandomGreeting';
import NoteWriter from '../components/NoteWriter';


export const Index: React.FC = () => {
    return (
        <div>
            <NavBarDefault />
            <WelcomeMessage username="Usuario" />
            <NoteWriter />
        </div>
    );
}