'use client'
import React from 'react';

const SendQuestionToTal: React.FC = () => {
    const handleClick = () => {
        const phoneNumber = '0522233573';
        const whatsappUrl = `https://wa.me/${phoneNumber}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <button onClick={handleClick} style={{ padding: '10px 20px', backgroundColor: '#25D366', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', position:'sticky', top: '10svh'}}>
            Send Question to Tal
        </button>
    );
};

export default SendQuestionToTal;