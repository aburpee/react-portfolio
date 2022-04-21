import React from 'react';

function Portfolio() {
  const projects = [
    {
      name: 'Run Buddy',
      category: 'projects',
      link: 'https://aburpee.github.io/run_buddy/',
      description:
        'A front end project'
    },
    {
      name: 'Su Casa',
      category: 'projects',
      link: 'https://dry-shelf-93414.herokuapp.com/',
      description:
        'A full stack react website my group and I built for a lovely restaurant in Paso Robles, California'
    },
    {
      name: 'Take A Hike',
      category: 'projects',
      link: 'https://amirb97.github.io/take-a-hike/',
      description:
        'A front end project meant to allow users to select their favorite hiking locations and see the weather for the following days'
    },
    {
      name: 'Voto',
      category: 'projects',
      link: 'https://mighty-taiga-27684.herokuapp.com/',
      description:
        'A project that allows user authentication to upload and vote on their favorite computer wallpapers'
    }
  ];

  return (
    <section className='text-center'>
      <h1>What you come for... my projects!</h1>
      <div className="flex-row justify-content-around">
        {projects.map((image, i) => (
          <img
            src={require(`../../assets/projects/${i}.jpg`).default}
            alt={image.name}
            className="m-3"
            key={image.name}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;