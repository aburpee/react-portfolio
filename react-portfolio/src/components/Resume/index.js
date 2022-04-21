import React from 'react';

function Resume() {
    const resume = [
        {
            name: 'resume',
            description: 'adams resume'
        }
    ]

    return (
        <section className='text-center'>
            <h1>Adam's Resume</h1>
            <div className='flex-row justify-content-around'>
                {resume.map((image,i) => (
                    <img
                        src={require(`../../assets/resume/${i}.jpg`).default}
                        alt={image.name}
                        className='m-3'
                        key={image.name}
                    />
                ))}
            </div>
        </section>
    )
}

export default Resume;