import React from 'react'
import "./About.css"

const About = () => {
    return (
        <>
            <div className="acontainer">
                <div className="aleft">
                    <h1>About <span className="orange">
                            flexBox
                        </span>
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eos, deserunt doloribus maxime eaque, iste nisi ullam sequi quasi tempore illo quidem provident! Molestias quaerat, delectus, consequuntur natus aliquid nostrum debitis neque dolorem cum ex in aliquam assumenda corrupti quam animi veritatis reprehenderit magnam? Ab beatae necessitatibus est fuga maxime.</p>
                    <div className="btn">
                        <button>
                            Explore more
                        </button>
                    </div>
                </div>
                <div className="aright">
                    <img src="https://raw.githubusercontent.com/Devrajsinh03/Photos/main/about.png" alt="" />
                </div>
            </div>
        </>
    )
    }

export default About
