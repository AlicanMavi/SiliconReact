// import React from 'react';
// import phoneIcon from '../assets/Images/phone-icon.svg';
// import chatBubbleIcon from '../assets/Images/chat-bubble-icon.svg';
// import arrowDown from '../assets/Images/arrow-down.svg';
// import arrowUp from '../assets/Images/arrow-up.svg';

// const Questionair = () => {
//   return (
//     <section className="questionair">
//       <div className="container">
//         <div className="questionair-page">

//           <div className="faq-left">
//             <div className="faq-left-text">
//               <h2>Any questions?<br />Check out the FAQs</h2>
//               <p>Still have unanswered questions and need to get <br />in touch?</p>
//             </div>

//             <div className="faq-left-boxes">
//               <div className="phone">
//                 <img src={phoneIcon} alt="Phone Icon" />
//                 <p>Still have questions?</p>
//                 <button>Contact us <i className="fa-solid fa-arrow-right"></i></button>
//               </div>

//               <div className="chat-bubble">
//                 <img src={chatBubbleIcon} alt="Chat Bubble Icon" />
//                 <p>Don't like phone calls?</p>
//                 <button>Contact us <i className="fa-solid fa-arrow-right"></i></button>
//               </div>
//             </div>
//           </div>

//           <div className="faq-right">
//             <nav className="faq-box">
//               <div className="faq-one">
//                 <h3>Is any of my personal information stored in the App? <img src={arrowDown} alt="Expand" /></h3>
//               </div>
//             </nav>

//             <nav className="faq-box">
//               <div className="faq-two">
//                 <h3>What formats can I download my transaction history in? <img src={arrowDown} alt="Expand" /></h3>
//               </div>
//             </nav>

//             <nav className="faq-box">
//               <div className="faq-three">
//                 <h3>Can I schedule future transfers? <img src={arrowUp} alt="Collapse" /></h3>
//                 <p>
//                   Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus.
//                   Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis
//                   accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida
//                   adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.
//                 </p>
//               </div>
//             </nav>

//             <nav className="faq-box">
//               <div className="faq-four">
//                 <h3>When can I use Banking App services? <img src={arrowDown} alt="Expand" /></h3>
//               </div>
//             </nav>

//             <nav className="faq-box">
//               <div className="faq-five">
//                 <h3>Can I create my own password that is easy for me to remember? <img src={arrowDown} alt="Expand" /></h3>
//               </div>
//             </nav>

//             <nav className="faq-box">
//               <div className="faq-six">
//                 <h3>What happens if I forget or lose my password? <img src={arrowDown} alt="Expand" /></h3>
//               </div>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Questionair;
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
