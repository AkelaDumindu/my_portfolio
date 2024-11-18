import SkillCard from './SkillCard';
import './skill.css';


const skillItem = [
  {
    imgSrc: '/images/skillImages/c.png',
    label: 'C',
    desc: 'Programming Language'
  },
    { 
      imgSrc: '/images/skillImages/react.png',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/skillImages/flutter.png',
      label: 'Flutter',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/skillImages/js.png',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/skillImages/nodeJs.png',
      label: 'NodeJS',
      desc: 'Web Server'
    },

    {
      imgSrc: '/images/skillImages/ts.png',
      label: 'PHP',
      desc: 'Programming Language'
    },
    {
        imgSrc: '/images/skillImages/spring boot.png',
        label: 'Spring Boot',
        desc: 'Java Framework'
      },
    {
      imgSrc: '/images/skillImages/java.png',
      label: 'java',
      desc: 'Progrmming Language'
    },
    {
      imgSrc: '/images/skillImages/mongodb.png',
      label: 'MongoDB',
      desc: 'Database'
    },
    {
      imgSrc: '/images/skillImages/angular.png',
      label: 'Angular',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/skillImages/laravel.png',
      label: 'laravel',
      desc: 'PHP Framework'
    },
    {
        imgSrc: '/images/skillImages/php.png',
        label: 'PHP',
        desc: 'Programming Language',
        
      },

      {
        imgSrc: '/images/skillImages/python.png',
        label: 'Tailwind',
        desc: 'Programming Language'
      },

      {
        
          imgSrc: '/images/skillImages/tailwind.png',
          label: 'Tailwind',
          desc: 'Programming Language'
        
      },
      {
        imgSrc: '/images/skillImages/firebase.png',
        label: 'Firebase',
        desc: 'Programming Language'
      }
  ];

const Skill = () => {
  return (
    <section className='section'>
        <div className="container ">
          <div className='skill-section'>
            <div className='flex flex-col items-center'>
            <h2 className="headline-2">
                Teck Stack
            </h2>
            <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch] text-center'>
            Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
            </p>
            </div>
          

            <div className='grid gap-3 grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))]'>
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
            
        </div>
    </section>
  )
}

export default Skill