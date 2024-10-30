import React from 'react';
import Marquee from 'react-fast-marquee';

const skills = [
  { id: 1, name: 'TypeScript', url: '/images/skillImages/ts.png' },
  { id: 2, name: 'Redux', url: '/images/skillImages/redux.png' },
  { id: 3, name: 'JavaScript', url: '/images/skillImages/js.png' },
  { id: 4, name: 'MongoDB', url: '/images/skillImages/mongodb.png' },
  { id: 5, name: 'Node.js', url: '/images/skillImages/node.png' },
  { id: 6, name: 'Flutter', url: '/images/skillImages/flutter.png' },
  { id: 7, name: 'Tailwind', url: '/images/skillImages/tailwind.png' },
  { id: 8, name: 'Java', url: '/images/skillImages/java.png' },
  { id: 9, name: 'React', url: '/images/skillImages/react.png' },
  { id: 10, name: 'Angular', url: '/images/skillImages/angular.png' },
  { id: 11, name: 'Laravel', url: '/images/skillImages/laravel.png' },
  { id: 12, name: 'PHP', url: '/images/skillImages/php.png' },
  { id: 13, name: 'Spring Boot', url: '/images/skillImages/spring.png' },
];

const SkillsCarousel = () => {
  return (
    <div className="container">
      <div className="mt-4 text-xl font-bold tracking-tighter text-center text-blue-400">
        Technical Proficiency
      </div>
      <div className="flex m-auto overflow-hidden flex-nowrap">
        <Marquee speed={100}>
          <div className="flex ml-10 mt-20 space-x-10">
            {skills.map((skill, index) => (
              <div
                key={skill.id}
                className="flex flex-col items-center w-[200px]"
                
              >
                <img
                  src={skill.url}
                  alt={skill.name}
                  width={150}
                  height={150}
                  className="p-2 rounded aspect-square"
                  style={{ filter: 'invert(1) brightness(2)' }} // Makes the images appear white
                />
                <div className="text-1.2 w-full p-2 m-a mt-2 font-normal tracking-tighter text-center text-white rounded-xl bg-white/20">
                  {skill.name}
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default SkillsCarousel;
