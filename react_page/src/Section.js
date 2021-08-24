import React, {Component} from 'react';
import pirate from './img/pirate.jpg';
import vendor from './img/vendor.jpg';
import viking from './img/viking.jpg';
import zombie from './img/zombie.jpg';

const characters = [
    {
        img: pirate,
        name: 'Pirate',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis ab quae cupiditate mollitia eaque modi impedit unde facilis veritatis reiciendis nulla.'
    },
    {
        img: vendor,
        name: 'Vendor',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis ab quae cupiditate mollitia eaque modi impedit unde facilis.'
    },
    {
        img: viking,
        name: 'Viking',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis ab quae cupiditate mollitia eaque.'
    },
    {
        img: zombie,
        name: 'Zombie',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis ab quae cupiditate mollitia eaque modi impedit unde facilis veritatis reiciendis nulla voluptatum excepturi esse.'
    }

];

class Section extends Component {
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


//  const Section = () => {
//      return (
//          <div>
//              <section className="container">
//                  <div className="character">
//                      <img src={pirate} alt="pirate" />
//                      <div className="pro">
//                          <h4>Pirate</h4>
//                          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis ab quae cupiditate mollitia eaque modi impedit unde facilis veritatis reiciendis nulla.</p>
//                     </div>
//                  </div>

//                  <div className="character">
//                      <img src={vendor} alt="vendor" />
//                      <div className="pro">
//                          <h4>Vendor</h4>
//                          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis ab quae cupiditate mollitia eaque modi impedit unde facilis.</p>
//                      </div>
//                  </div>
//              </section>
//              <section className="container">
//                  <div className="character">
//                      <img src={viking} alt="viking" />
//                      <div className="pro">
//                          <h4>Viking</h4>
//                          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis ab quae cupiditate mollitia eaque.</p>
//                      </div>
//                  </div>

//                  <div className="character">
//                      <img src={zombie} alt="zombie" />
//                      <div className="pro">
//                          <h4>Zombie</h4>
//                          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis ab quae cupiditate mollitia eaque modi impedit unde facilis veritatis reiciendis nulla voluptatum excepturi esse.</p>
//                      </div>
//                  </div>
//              </section>
//          </div>
            
//      )
//  }

export default Section

