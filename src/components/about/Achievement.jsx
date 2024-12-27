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
  title="Champion of Codesprint 7.0 (2023)"
  des="Secured first place in Codesprint 7.0 (2023), showcasing exceptional problem-solving and algorithmic skills in a competitive programming environment. This achievement highlights expertise in coding under pressure and working efficiently to deliver optimal solutions."
  certificateImages={[
    "../images/galleryImages/1.jpeg",
    "../images/galleryImages/1.jpeg",
  ]}
/>

<AchievementCard
  imageIcon="../images/resumeImages/ix_logo.jpg" // Replace with the actual path to the IX 2023 Designathon logo
  title="IX 2023 Inter-University Designathon"
  des="Participated in the IX 2023 Inter-University Designathon, organized by the IEEE Computer Society Student Branch Chapter of IIT. It was an inspiring event that pushed the boundaries of creativity, innovation, and teamwork."
  certificateImages={[
    "../images/galleryImages/1.jpeg"
  ]}
/>

<AchievementCard
  imageIcon="../images/resumeImages/cypher_logo.jpg" // Replace with the actual path to the Cypher 1.0 Hackathon logo
  title="Cypher 1.0 Hackathon - Top 10 Finalist"
  des="On May 3rd, 2023, Team_Syntax_Error secured a place among the top 10 finalists in the Cypher 1.0 Hackathon, held at General Sir John Kotelawala Defence University. The event featured a thrilling hackathon and a Capture the Flag competition."
  certificateImages={[
    "../images/galleryImages/1.jpeg"
  ]}
/>

        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
