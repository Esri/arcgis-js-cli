import React from 'react';

interface HeaderProps {
    appTitle: string;
}

export const Header = ({ appTitle }: HeaderProps) => {
    return (
        <header className="header">
            <span>{appTitle}</span>
        </header>
    );
};
