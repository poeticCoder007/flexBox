import React from 'react'
import "./Services.css"

const Service = () => {
    return (
        <>
            <section className="services">
                <h1 >Our Services</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, necessitatibus. Fugit fugiat blanditiis repudiandae tempora at voluptas, reiciendis, aspernatur atque illum sequi, incidunt dolor nisi ut aperiam magnam deleniti asperiores ullam repellat unde dignissimos adipisci. Aliquid sunt debitis quod ipsa necessitatibus consequuntur, accusantium, facilis atque voluptatem, maiores illum explicabo ducimus velit sint dicta nulla sequi voluptates ut. Dolore, tenetur nihil. Debitis odit eaque possimus iste blanditiis illum aperiam ad labore, sequi voluptates tempora veniam reiciendis deleniti qui laboriosam perspiciatis. Quod minima rerum enim aperiam ullam nihil impedit consectetur odio mollitia, totam non et iure provident nulla recusandae voluptatibus repellendus doloribus!</p>
                <div className="container">
                    <div className="serviceBx" data-center-center="opacity:1;left:0;" data-200-bottom="opacity:0;left:-400px;">
                        <div>
                            <img src="https://raw.githubusercontent.com/Devrajsinh03/Photos/main/tech.png" alt=""/>
                            <h2>Teach</h2>
                        </div>
                    </div>
                    <div className="serviceBx" data-center-center="opacity:1;bottom:0;" data-200-bottom="opacity:0;bottom:-400px;">
                        <div>
                            <img src="https://raw.githubusercontent.com/Devrajsinh03/Photos/main/read.png" alt=""/>
                            <h2>Learn</h2>
                        </div>
                    </div>
                    <div className="serviceBx" data-center-center="opacity:1;right:0;" data-200-bottom="opacity:0;right:-400px;">
                        <div>
                            <img src="https://raw.githubusercontent.com/Devrajsinh03/Photos/main/create.png" alt=""/>
                            <h2>Create</h2>
                        </div>
                    </div> 
                </div>
            </section>
        </>
    )
}

export default Service
