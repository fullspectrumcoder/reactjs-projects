import React from 'react';

export default function Footer() {
    return (
        <div className="footer">
            <p>Copyright &copy; {(new Date().getFullYear())} APEX, All Right Reserved.</p>
        </div>
    );
}
