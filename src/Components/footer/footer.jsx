import React from 'react';

export default function Footer() {
    const footerStyle = {
        backgroundColor: '#f5f5f5',
        padding: '20px 0',
        textAlign: 'center',
        borderTop: '1px solid #e0e0e0',
        width: '100%',
        marginTop: 'auto',
    };

    const textStyle = {
        color: '#666',
        fontSize: '14px',
        margin: '0',
    };

    return (
        <footer style={footerStyle}>
            <p style={textStyle}>© 2024 My Notes App. All rights reserved.</p>
        </footer>
    );
}
