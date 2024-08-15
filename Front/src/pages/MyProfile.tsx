import React from 'react';
import NavBarDefault from '../components/navbars/NavBarDefault';
import '../styles/index.css';
import SakuraLeaves from '../components/utils/SakuraLeaves';
import Profile from '../components/Profile';

export const MyProfile: React.FC = () => {
    return (
        <div>
            <NavBarDefault />
            <Profile/>
            <SakuraLeaves />
        </div>
    );
}