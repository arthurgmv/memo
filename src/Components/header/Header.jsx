import React from 'react';

const Header = () => {
    const headerStyle = {
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px 20px',
        marginBottom: "2rem",
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    };

    const titleStyle = {
        margin: 0,
        fontSize: '24px',
    };

    const navStyle = {
        display: 'flex',
        gap: '15px',
    };

    const linkStyle = {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '16px',
    };

    return (
        <header style={headerStyle}>
            <h1 style={titleStyle}>My Notes App</h1>
            <nav style={navStyle}>
                <a href="https://github.com/arthurgmv" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/arthur-gabriel-de-menezes-viana-1223a6239/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                    LinkedIn
                </a>
            </nav>
        </header>
    );
};

export default Header;
