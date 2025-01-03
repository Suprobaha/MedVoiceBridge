import React from 'react'


const Hero =({title, imageUrl})=>{
    return (
        <>
       <div className='hero container'>
        <div className='banner'>
            <h1>{title}</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At odio minima laudantium illum eius rem et molestiae voluptatem illo, aliquid recusandae facilis, reiciendis excepturi corporis, explicabo voluptate sapiente dicta totam quia dignissimos! Recusandae maxime molestiae fugiat perferendis deserunt, iste optio rem, adipisci voluptatum dolores, cum facere fuga explicabo nihil necessitatibus!
            </p>

        </div>
        <div className='banner'>
            <img style={{ height: '600px' }} src={imageUrl} alt="hero" className='animated-image' />
            <span>
                <img src="/Vector.png" alt="vector" />
            </span>

        </div>


       </div>
       </>
    );
};

export default Hero;