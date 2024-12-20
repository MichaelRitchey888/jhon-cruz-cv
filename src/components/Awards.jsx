import React, { useState } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { awards } from '../constants';
import { download } from '../assets';

const AwardCard = ({ award, index }) => {
  const { image, title, company, issuedAt, logo } = award;

  const [hover, setHover] = useState(false);

  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="award_image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px] text-center">
            {title}
          </h3>
          <div className="mt-4 text-secondary text-[14px]">
            <div className="flex flex-row items-center justify-center gap-2">
              <div className="bg-[#1d1836] w-14 h-14 border-gray-600 border-2 rounded-full p-2">
                <img
                  src={logo}
                  className="w-full h-full object-contain"
                  alt="company_log"
                />

                {hover && (
                  <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                    <a
                      href={image}
                      download={`${title} @${company}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="bg-gray-700 w-10 h-10 mr-2 rounded-full flex justify-center items-center cursor-pointer">
                        <img
                          src={download}
                          alt="download"
                          className="w-1/2 h-1/2 object-contain"
                        />
                      </div>
                    </a>
                  </div>
                )}
              </div>
              <div>
                <p className="text-white font-medium mb-2">{company}</p>
                <p>{issuedAt}</p>
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Awards = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>What I am proud of</p>
        <h2 className={`${styles.sectionHeadText}`}>Honors & Awards.</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap justify-center gap-7">
        {awards.map((award, index) => (
          <AwardCard key={award.image} award={award} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Awards, 'awards');
