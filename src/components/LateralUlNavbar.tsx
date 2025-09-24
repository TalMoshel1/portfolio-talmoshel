import React, { useEffect, useRef } from 'react';
import useScrollBeyond20svh from "@/hooks/useScrollBeyond20svh";
import "../components-css/LateralUlNavbar.css";

interface LateralUlNavbarProps {
    isOpen: boolean;
    toggle: React.MouseEventHandler<HTMLButtonElement>;
}

const LateralUlNavbar: React.FC<LateralUlNavbarProps> = ({ isOpen, toggle }) => {
    const menuRef = useRef<HTMLUListElement>(null);
    
    // ניהול פוקוס: העברת הפוקוס לתפריט כשהוא נפתח
    useEffect(() => {
        if (isOpen && menuRef.current) {
            // ממקד את האלמנט הראשון הניתן למיקוד בתוך התפריט
            const firstFocusableElement = menuRef.current.querySelector('button, a');
            if (firstFocusableElement) {
                (firstFocusableElement as HTMLElement).focus();
            }
        }
    }, [isOpen]);

    if (!isOpen) {
        return null;
    }

    return (
        <ul 
            ref={menuRef}
            className='lateralUlNavbar' 
            style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                position: 'absolute', 
                backgroundColor: 'white', 
                height: 'auto !important', 
                top: '0', 
                zIndex: '1', 
                padding: '2rem', 
                color: 'rgba(0, 0, 120, 1)'
            }}
        >
            <li className='lateral-ul-navbar-element'>
                <button 
                    onClick={toggle} 
                    aria-label="Close menu"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.5rem', marginBottom: '1rem' }}
                >
                    X
                </button>
            </li>
            <li className='lateral-ul-navbar-element'>
                <a href="/">בית</a>
            </li>
            <li className='lateral-ul-navbar-element'>
                <a href="/privacy">פרטיות</a>
            </li>
            <li className='lateral-ul-navbar-element'>
                <a href="#contact-form">צור קשר</a>
            </li>
                  <li>
              <a href="/terms-of-use">תנאי שימוש</a>
            </li>
        </ul>
    );
};

export default LateralUlNavbar;