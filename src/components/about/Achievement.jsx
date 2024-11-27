import React from 'react';
import { motion } from 'framer-motion';
import AchievementCard from './AchievementCard';
import './resumeCard.css';

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20 w-full"
    >
      <div className="w-full">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">My Achievement</h2>
        </div>
        <div className="timeline-container">
          <AchievementCard
            imageIcon="../images/resumeImages/CodeSprint.jpg"
            title="Codesprint 7.0"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad, Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad, Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
          />
          <AchievementCard
            imageIcon="../images/resumeImages/CodeSprint.jpg"
            title="Codesprint 7.0"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
