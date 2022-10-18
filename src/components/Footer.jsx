import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <>
            <section class="footer">
                <p class="text">Designed & Developed with <i class="fa fa-heart" aria-hidden="true"></i> By Devrajsinh</p>
                <ul>
                    <p class="text">Follow me on:</p>
                    <li><a href="https://www.instagram.com/devrajsinhg0hil/" target="_blank">
                        <i class="fa fa-instagram i" aria-hidden="true"></i></a>
                    </li>
                    <li><a href="https://twitter.com/DevrajsinhGohi5" target="_blank">
                        <i class="fa fa-twitter i" aria-hidden="true"></i></a>
                    </li>
                    <li><a href="https://www.linkedin.com/in/devrajsinh-gohil-8b0338208" target="_blank">
                        <i class="fa fa-linkedin i" aria-hidden="true"></i></a>
                    </li>
                    <li><a href="https://github.com/Devrajsinh03" target="_blank">
                        <i class="fa fa-github i" aria-hidden="true"></i></a>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Footer