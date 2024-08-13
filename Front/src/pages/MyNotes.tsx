import React from 'react';
import NavBarDefault from '../components/navbars/NavBarDefault';
import '../styles/index.css';
import SakuraLeaves from '../components/utils/SakuraLeaves';
import FilteredNotes from '../components/FilteredNotes';


export const MyNotes: React.FC = () => {
    return (
        <div>
            <NavBarDefault />
            <FilteredNotes  />
            <SakuraLeaves />
        </div>
    );
}