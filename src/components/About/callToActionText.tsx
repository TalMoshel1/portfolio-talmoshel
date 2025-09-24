import React from "react";
import { Varela_Round } from "next/font/google";
import "../components-css/CallToActionSection.css"; // Adjust path as needed



const varela = Varela_Round({
    subsets: ["hebrew"],
    weight: "400",
    display: "swap",
});

const CallToActionText: React.FC = () => {
    return (
        <h1 className={varela.className} style={{ color: "white" }}>
            קרא לפעולה
        </h1>
    );
};

export default CallToActionText;