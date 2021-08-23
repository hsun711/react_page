import React, { Component } from 'react'
import Section from './Section';
import NextSection from './NextSection';

class Content extends Component {

    next = () => {
        let more = document.querySelector('.more');
        more.style.display = "flex";
    }

    render() {

        return (
            <main className="main">
                <div className="title">
                    <h2>Character Intorduce</h2>
                </div>
            
                <Section />

                <div className="btn">
                    <button href="#" onClick={this.next}>Next</button>
                </div>

                <div className='more'>
                    <NextSection />
                </div>
            </main>
        )
    }
}

export default Content;
