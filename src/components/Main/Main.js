import React from "react";
import "./main.css";

const Main = () => {
    return (
        <main className="page">
            <div className="page__main_block main_block">
                <div class="main_block__container _container">
                    <div className="main_block__body">
                        <h1 className="main_block__title">Finance and Consultancy Solution</h1>
                        <div className="main_block__text">
                            We know how large objects will act, but things on a small scale.
                        </div>
                        <div className="main_block__buttons">
                            <a href="#" className="main_block__button main_block__button_orange">Get Quote Now</a>
                            <a href="#" className="main_block__button main_block__button_border">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;