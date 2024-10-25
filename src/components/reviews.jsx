import React from "react";

export default function Reviews(){
    return (
        <div className="review-container">
            <h1 className="review-header">Hear it from our satisfied customers!</h1>
            <div className="review">
                <div className="review-content">"The food at Jang's is absolutely incredible! I've never tasted Korean BBQ this authentic outside of Seoul. The flavors were bold yet perfectly balanced, and the presentation was impeccable. The staff were so welcoming and attentive, making the entire dining experience unforgettable. I will definitely be coming back!"</div>
                <div className="review-credit">— Sarah M.</div>
            </div>
            <div className="review">
                <div className="review-content">"Jang's International Restaurant blew me away. From the fresh kimchi to the tender bulgogi, every dish felt like a trip to Korea. The ambiance is cozy, yet modern, and perfect for a night out. They even accommodated my dietary restrictions without compromising the taste. 10/10 would recommend to anyone looking for an authentic Korean experience."</div>
                <div className="review-credit">— James L.</div>
            </div>
            <div className="review">
                <div className="review-content">"This is hands down my favorite restaurant! The bibimbap was packed with flavor, and the spicy tteokbokki was just the right amount of heat. Jang's International Restaurant captures the essence of Korean cuisine so well, it’s like comfort food with a gourmet twist. Plus, the service was quick and friendly!"</div>
                <div className="review-credit">— Emily R.</div>
            </div>
        </div>
    );
}