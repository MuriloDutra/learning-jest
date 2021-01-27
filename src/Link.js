import React from 'react'


function Link(props){
    return (
        <a
            className="normal"
            href="http://www.facebook.com"
            onMouseEnter={() => console.log('onMouseEnter')}
            onMouseLeave={() => console.log('onMouseLeave')}
        >
            Facebook
        </a>
    )
}


export default Link