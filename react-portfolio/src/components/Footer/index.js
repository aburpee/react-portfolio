import React from 'react';

const Footer = () => {
    return(
        <footer className = 'w-100 mt-auto p-4'>
            <div className='container flex-row'>
                <div className='text-center col-4'>
                    <h2><a href='https://www.linkedin.com/in/adam-burpee/'>LinkedIn</a></h2>
                </div>
                <div className='text-center col-4'>
                    <h2><a href='https://github.com/aburpee'>github</a></h2>
                </div>
            </div>
        </footer>
    )
}

export default Footer;