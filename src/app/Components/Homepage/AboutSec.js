'use client';
import { useState, useEffect } from 'react';
import styles from "./about.module.css";


const AboutSec = () => {

  const [isExpanded, setIsExpanded] = useState(false);
  const [content, setContent] = useState({
    visible: '',
    hidden: '',
  });

  const fullText = `Amritara takes you on an unforgettable journey between the fragrance of Goa to cold waves of the Himalayas, Living close to wildlife in Karnataka and embarking towards the serenity of Kerala.
  We seek in amplifying the sanctity of Amritsar and then keep you longing for the calmness of the river Ganges. From discovering the royalty of Rajasthan to reliving the Heritage of Banaras, we make sure that we feed the senses of our customers to an extent that they keep us in their memories forever. Each of our luxurious properties is strategically located & designed keeping in mind the class taste of visitors. Let's begin life on your journey again.`;
  
    const showChar = 304;
    useEffect(() => {
      if (fullText.length > showChar) {
        setContent({
          visible: fullText.substring(0, showChar),
          hidden: fullText.substring(showChar),
        });
      } else {
        setContent({
          visible: fullText,
          hidden: '',
        });
      }
    }, []);
  
    const toggleReadMore = () => {
      setIsExpanded(!isExpanded);
    };

  return (
    <>
      <div className='h-full flex items-center justify-center'>
    
        <div className={`${styles.about} py-5`}>
          <div className={`${styles.about_main_box} container`}>
            <div className="row g-5 justify-content-center">
             
              <div className="col-lg-11 text-center">
                <h1 className="about-sec-title mb-4 global-heading">Amritara Hotels & Resorts</h1>
                <p className={`${styles.about_text} mb-4`}>
                                {content.visible}
                                {!isExpanded && content.hidden && <span className="moreellipses">&nbsp;...</span>}
                                {isExpanded && (
                                  <span className="morecontent">
                                    {content.hidden.split('\n').map((line, idx) => (
                                      <span key={idx}>
                                        <br />
                                        <br />
                                        {line}
                                      </span>
                                    ))}
                                  </span>
                                )}
                                {content.hidden && (
                                  <>
                                    &nbsp;&nbsp;
                                    <a className={styles.morelink} onClick={toggleReadMore}>
                                      {isExpanded ? 'Read less' : 'Read more'}
                                    </a>
                                  </>
                                )}
                              </p>
                
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default AboutSec
