import React from 'react'
import "./Help.css"

const Help = () => {
    return (
        <>
            <section className="about">
                <div className="contentBx redbg">
                    <h1>Contact Us</h1>
                    <div className="form" data-center-center="opacity:1;left:0;" data-200-bottom="opacity:0;left:-400px;">
                        <div className="inputBx">
                            <input type="text" placeholder="Full Name"/>
                        </div>
                        <div className="inputBx">
                            <input type="text" placeholder="Email"/>
                        </div>
                        <div className="inputBx">
                            <input type="text" placeholder="Mobile"/>
                        </div>
                        <div className="inputBx">
                            <textarea placeholder="Write your message here"></textarea>
                        </div>
                        <div className="inputBx">
                            <input type="submit" value="Send"/>
                        </div>
                    </div>
                </div>
                <div className="hright">
                    <img src="https://raw.githubusercontent.com/Devrajsinh03/Photos/3a936a86b6e9df5c9768a442c5451742851a144c/logosq.svg" alt="" />
                </div>
            </section>
        </>
    )
}

export default Help
