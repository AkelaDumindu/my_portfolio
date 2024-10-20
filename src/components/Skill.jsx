import React from 'react'
import SkillCard from './SkillCard';


const skillItem = [
    {
      imgSrc: 'src/assets/images/react.png',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: 'src/assets/images/flutter.png',
      label: 'Flutter',
      desc: 'Framework'
    },
    {
      imgSrc: 'src/assets/images/js.png',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: 'src/assets/images/node.jpeg',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
        imgSrc: 'src/assets/images/spring.png',
        label: 'Spring Boot',
        desc: 'Java Framework'
      },
    {
      imgSrc: 'src/assets/images/java.png',
      label: 'java',
      desc: 'Progrmming Language'
    },
    {
      imgSrc: 'src/assets/images/mongo.jpeg',
      label: 'MongoDB',
      desc: 'Database'
    },
    {
      imgSrc: 'src/assets/images/angular.jpeg',
      label: 'Angular',
      desc: 'Framework'
    },
    {
      imgSrc: 'src/assets/images/laravel.svg',
      label: 'laravel',
      desc: 'PHP Framework'
    },
    {
        imgSrc: 'src/assets/images/php.jpeg',
        label: 'PHP',
        desc: 'Programming Language'
      },
  ];

const Skill = () => {
  return (
    <section className='section'>
        <div className="container">
            <h2 className="headline-2">
                Essential Tools I Use
            </h2>
            <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch]'>
            Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
            </p>

            <div className='grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]'>
                {
                    skillItem.map(({imgSrc, label, desc}, key)=>(
                        <SkillCard 
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                        />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skill