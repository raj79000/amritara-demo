'use client';
import { useState, useEffect } from 'react';
import styles from "./about.module.css";
import { postAPI } from '../../../lib/api/api';

const AboutSec = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [content, setContent] = useState({
    visible: '',
    hidden: '',
    title: '',
  });

  const showChar = 301;

  // Function to strip HTML tags and return plain text
  const stripHtml = (html) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  useEffect(() => {
    const fetchAboutContent = async () => {
      try {
        const data = await postAPI('homeaboutus', { about_id: 2 });
        if (data.status && data.data) {
          const plainText = stripHtml(data.data.description);
          setContent({
            visible: plainText.substring(0, showChar),
            hidden: plainText.length > showChar ? plainText.substring(showChar) : '',
            title: data.data.title,
          });
        }
      } catch (error) {
        console.error("Failed to fetch About Us content:", error);
      }
    };

    fetchAboutContent();
  }, []);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="h-full flex items-center justify-center">
      <div className={`${styles.about} py-5`}>
        <div className={`${styles.about_main_box} container`}>
          <div className="row g-5 justify-content-center">
            <div className="col-lg-11 text-center">
              <h1 className="about-sec-title mb-4 global-heading">{content.title || "Amritara Hotels & Resorts"}</h1>
              <p className={`${styles.about_text} mb-4`}>
                {content.visible}
                {!isExpanded && content.hidden && <span className="moreellipses">&nbsp;...</span>}
                {isExpanded && (
                  <span className="morecontent">
                    <br />
                    <br />
                    {content.hidden}
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
  );
};

export default AboutSec;
