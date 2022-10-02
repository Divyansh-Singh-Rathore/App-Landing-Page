import React from 'react'

function About(props) {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src= {props.image} alt='' />
            </div>
            <div className='about-text'>
                <h2> {props.title} </h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur eos temporibus consequuntur ullam animi dolorum a perspiciatis nemo accusantium, ad in at expedita modi ratione iusto soluta laudantium suscipit itaque! Aliquam, adipisci.</p>
                <button> {props.button} </button>
            </div>
        </div>
    )
}

export default About