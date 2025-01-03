import React from 'react'


const Biography =({imageUrl})=>{
    return (
       <div className='container biography'>
        <div className='banner'>
            <img src={imageUrl} alt="AboutImage" />

        </div>
        <div className='banner'>
            <p>Biography</p>
            <h3>Who We Are</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda autem eum doloribus quo? Dolorem expedita consectetur odio temporibus eos quis incidunt earum molestiae? Dolorem eius assumenda placeat iure nobis dolores.
            </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
                Lorem ipsum dolor sit amet.
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam similique eos fuga magnam ullam, tempora laudantium, nihil magni repudiandae ipsum sapiente voluptates. Nesciunt, veniam ad. Molestiae ducimus tempore consequatur dolor perferendis rem vero commodi ut?
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio hic cumque inventore!</p>
            <p>
                Lorem, ipsum dolor.
            </p>

        </div>


       </div>
    )
}

export default Biography