import React, { useState } from 'react';
import phoneIcon from '../assets/Images/phone-icon.svg';
import chatBubbleIcon from '../assets/Images/chat-bubble-icon.svg';
import arrowDown from '../assets/Images/arrow-down.svg';
import arrowUp from '../assets/Images/arrow-up.svg';

const Questionair = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Is any of my personal information stored in the App?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium molestias autem assumenda minima distinctio veniam ipsam veritatis porro est odio, cumque, non aut quae quis, qui asperiores modi omnis ea? Ratione, nisi voluptatibus eligendi laudantium quisquam nostrum ut unde magnam, optio rerum labore quia, explicabo consectetur amet deleniti accusamus odio."
    },
    {
      question: "What formats can I download my transaction history in?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aliquam voluptatibus quidem excepturi ipsa aut facere odit assumenda. Ad doloribus deleniti sequi voluptate doloremque adipisci non soluta dolorem quidem esse!"
    },
    {
      question: "Can I schedule future transfers?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quam molestiae nisi dolores atque ratione laboriosam maiores eos distinctio perspiciatis?"
    },
    {
      question: "When can I use Banking App services?",
      answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, accusamus."
    },
    {
      question: "Can I create my own password that is easy for me to remember?",
      answer: "Lorem ipsum dolor sit amet."
    },
    {
      question: "What happens if I forget or lose my password?",
      answer: "Lorem."
    }
  ];

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
              <div className="faq-box" key={index}>
                <div className="faq-question" onClick={() => toggleAccordion(index)}>
                  <h3>{item.question}</h3>
                  <img className="faq-toggle-icon" src={activeIndex === index ? arrowUp : arrowDown} alt="Toggle" />
                </div>
                {activeIndex === index && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
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
