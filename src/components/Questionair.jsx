import React, { useState, useEffect } from 'react';
import axios from 'axios';
import phoneIcon from '../assets/Images/phone-icon.svg';
import chatBubbleIcon from '../assets/Images/chat-bubble-icon.svg';
import arrowDown from '../assets/Images/arrow-down.svg';
import arrowUp from '../assets/Images/arrow-up.svg';

const Questionair = () => {
  const [faqData, setFaqData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  
  useEffect(() => {
    const fetchFaqData = async () => {
      try {
        const response = await axios.get('https://win24-assignment.azurewebsites.net/api/faq');
        setFaqData(response.data);
      } catch (error) {
        console.error('Error fetching FAQ data:', error);
      }
    };

    fetchFaqData();
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="questionair">
      <div className="container">
        <div className="questionair-page">

          <div className="faq-left">
            <div className="faq-left-text">
              <h2>Any questions?<br />Check out the FAQs</h2>
              <p>Still have unanswered questions and need to get <br />in touch?</p>
            </div>

            <div className="faq-left-boxes">
              <div className="phone">
                <img src={phoneIcon} alt="Phone Icon" />
                <p>Still have questions?</p>
                <button>Contact us <i className="fa-solid fa-arrow-right"></i></button>
              </div>

              <div className="chat-bubble">
                <img src={chatBubbleIcon} alt="Chat Bubble Icon" />
                <p>Don't like phone calls?</p>
                <button>Contact us <i className="fa-solid fa-arrow-right"></i></button>
              </div>
            </div>
          </div>

          <div className="faq-right">
            {faqData.map((item, index) => (
              <div className="faq-box" key={item.id}>
                <div className="faq-question" onClick={() => toggleAccordion(index)}>
                  <h3>{item.title}</h3>
                  <img className="faq-toggle-icon" src={activeIndex === index ? arrowUp : arrowDown} alt="Toggle" />
                </div>
                {activeIndex === index && (
                  <div className="faq-answer">
                    <p>{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Questionair;
