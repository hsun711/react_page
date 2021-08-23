import React from 'react';
import caveman from './img/caveman-small.jpg';
import cook from './img/cook-small.jpg';
import doctor from './img/doctor-small.jpg';
import engineer from './img/engineer-small.jpg';

const NextSection = () => {
    return (
        <div>
            <section className="container ">
                <div className="character">
                    <img src={caveman} alt="caveman" />
                    <div className="pro">
                        <h4>Viking</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis ab quae cupiditate mollitia eaque.</p>
                    </div>
                </div>

                <div className="character">
                    <img src={cook} alt="cook" />
                    <div className="pro">
                        <h4>Zombie</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis ab quae cupiditate mollitia eaque modi impedit unde facilis veritatis reiciendis nulla voluptatum excepturi esse.</p>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="character">
                    <img src={doctor} alt="doctor" />
                    <div className="pro">
                        <h4>Viking</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis ab quae cupiditate mollitia eaque.</p>
                    </div>
                </div>

                <div className="character">
                    <img src={engineer} alt="engineer" />
                    <div className="pro">
                        <h4>Zombie</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis ab quae cupiditate mollitia eaque modi impedit unde facilis veritatis reiciendis nulla voluptatum excepturi esse.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NextSection
