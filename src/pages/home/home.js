import React from "react";
import NavBar from "../../components/navbar";
import AboutUs from "../../components/about-us";
import Menu from "../../components/menu";
import Reviews from "../../components/reviews";
import Footer from "../../components/footer";
import './home-styles.css';

export default function Home(){
    return (
        <div>
            <NavBar />
            <AboutUs />
            <Menu />
            <Reviews />
            <Footer />
        </div>
    );
}