import React from "react";
import MenuItem from "./menu-item";

const menuItems = [
    {
        name: "Kimchi",
        price: "5.00",
        img: "images/Kimchi.jpg"
    },

    {
        name: "Samgyeopsal",
        price: "10.00",
        img: "images/Samgyeopsal.webp"
    },

    {
        name: "Tteokbokki",
        price: "7.00",
        img: "images/Tteokbokki.webp"
    }
];

const mappedItems = menuItems.map((item) => {
    return <MenuItem name = {item.name} price = {item.price} img = {item.img} />;
});

export default function Menu(){
    return (
    <div className="menu-container">
        <h1 id="menu" className="menu-header">Restaurant Menu</h1>
        <div className="menu-items">{mappedItems}</div>
    </div>
    );
}