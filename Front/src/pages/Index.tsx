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
            <h2 className='card-title text-center'>¿Cómo te sientes hoy?</h2>
            <NoteWriter />
        </div>
    );
}