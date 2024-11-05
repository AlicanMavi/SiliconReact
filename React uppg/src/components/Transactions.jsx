// import React from 'react';
// import transactionIphone1 from '../assets/Images/transaction-iphone-1.svg';
// import transactionsIphone2 from '../assets/Images/transactions-iphone-2.svg';
// import transactionsIphone3 from '../assets/Images/transactions-iphone-3.svg';

// const Transactions = () => {
//   return (
//     <section className="transactions">
//       <div className="container">
//         <div className="transactions-iphone">
//           <div>
//             <h1>How Does It Work?</h1>
//           </div>

//           <div className="transaction-img">
//             <img src={transactionIphone1} alt="Transaction iPhone 1" />
//             <img src={transactionsIphone2} alt="Transactions iPhone 2" />
//             <img src={transactionsIphone3} alt="Transactions iPhone 3" />
//           </div>

//           <div className="transaction-history">
//             <h4>Latest transaction history</h4>
//             <p>
//               Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed.
//               Arcu sociis tristique quisque hac in consectetur condimentum.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Transactions;

import React from 'react';
import transactionIphone1 from '../assets/Images/transaction-iphone-1.svg';
import transactionsIphone2 from '../assets/Images/transactions-iphone-2.svg';
import transactionsIphone3 from '../assets/Images/transactions-iphone-3.svg';

const Transactions = () => {
  // Kontrollera om dark mode är aktivt
  const isDarkMode = document.body.classList.contains('dark-mode');

  return (
    <section className={`transactions ${isDarkMode ? 'dark' : ''}`}>
      <div className="container">
        <div className="transactions-iphone">
          <div>
            <h1>How Does It Work?</h1>
          </div>

          <div className="transaction-img">
            <img src={transactionIphone1} alt="Transaction iPhone 1" />
            <img src={transactionsIphone2} alt="Transactions iPhone 2" />
            <img src={transactionsIphone3} alt="Transactions iPhone 3" />
          </div>

          <div className="transaction-history">
            <h4>Latest transaction history</h4>
            <p>
              Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed.
              Arcu sociis tristique quisque hac in consectetur condimentum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transactions;
