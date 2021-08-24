import React, {Component} from 'react';
import caveman from './img/caveman-small.jpg';
import cook from './img/cook-small.jpg';
import doctor from './img/doctor-small.jpg';
import engineer from './img/engineer-small.jpg';

const characters = [
    {
        img: caveman,
        name: 'Caveman',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis ab quae cupiditate mollitia eaque modi impedit unde facilis veritatis reiciendis nulla.'
    },
    {
        img: cook,
        name: 'Cook',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis ab quae cupiditate mollitia eaque modi impedit unde facilis.'
    },
    {
        img: doctor,
        name: 'Doctor',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis ab quae cupiditate mollitia eaque.'
    },
    {
        img: engineer,
        name: 'Engineer',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis ab quae cupiditate mollitia eaque modi impedit unde facilis veritatis reiciendis nulla voluptatum excepturi esse.'
    }

];

class NextSection extends Component {
    render() {
        return(
            <div>
                <section className="container">
                    {characters.map( char => (
                        <div className="character">
                            <img src={char.img} alt="pirate" />
                            <div className="pro">
                                <h4>{char.name}</h4>
                                <p>{char.desc}</p>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        );
    }
}

export default NextSection
