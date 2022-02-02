import React from "react";
import "./main.css";

const Main = () => {
    return (
        <main className="page">
            <div className="page__main_block main_block">
                <div class="main_block__container _container">
                    <div className="main_block__body">
                        <span className="main_block__text">Hi There</span>
                        <h1 className="main_block__title">I am Malenkov Dmitrii</h1>
                        <span className="main_block__text">Frontend Developer</span>
                        <div className="main_block__buttons">
                            <a href="#" className="main_block__button main_block__button_border">Learn More</a>
                        </div>
                    </div>
                    <div className="main_block__image">
                        picture block
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;