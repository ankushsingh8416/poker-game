import { useState } from 'react';
import './faq.css';

function Faq() {
  const faqData1 = [
    {
      title: '1. How do I start playing on Betchain? ',
      content:
        'To start playing, simply visit our website or access Betchain directly on Telegram. Sign up or log in, deposit ETH, and choose from our exciting range of games to get started. ',
      isOpen: false,
    },
    {
      title: '2. What games are available on Betchain? ',
      content:
        'Betchain offers a diverse selection of casino-style games, including slots, poker, roulette, ludo, and more. Explore our gaming section to find your favorites. ',
      isOpen: false,
    },
    {
      title: '3. How are payouts handled on Betchain? ',
      content:
        'Payouts on Betchain are made in ETH (Ethereum). When you win a game, your winnings will be credited to your account in ETH, providing a seamless and secure transaction process. ',
      isOpen: false,
    },
    {
      title: '4. Is Betchain secure? ',
      content:
        'Yes, ensuring the security of our platform and our users information is a top priority. We employ robust encryption and security measures to protect all transactions and user data. ',
      isOpen: false,
    },
    {
      title: '5. Can I play Betchain games on mobile devices? ',
      content:
        'Yes, Betchain is designed to be mobile-friendly. You can enjoy our games on your smartphone or tablet by accessing our website or directly through the Telegram app. ',
      isOpen: false,
    },
    {
      title: '6. How fair are Betchain games? ',
      content:
        'We use cutting-edge technology to ensure fairness and transparency in all our games. Our games are built on provably fair algorithms, providing every player with an equal chance to win. ',
      isOpen: false,
    },
    {
      title: '7. What are the deposit and withdrawal processes? ',
      content:
        'Deposits can be made using ETH directly into your Betchain account. Withdrawals follow a simple process where you can transfer your ETH winnings to your preferred wallet securely. ',
      isOpen: false,
    },
    {
      title: '8. Is there customer support available? ',
      content:
        'Absolutely, our dedicated customer support team is available to assist you with any queries or concerns. You can reach out to us through our contact form or designated support channels. ',
      isOpen: false,
    },
    {
      title: '9. Are there any geographical restrictions for playing on Betchain? ',
      content:
        'Betchain follows legal compliance and may have geographical restrictions based on local regulations. Please check your jurisdictions laws regarding online gaming and cryptocurrency use before participating. ',
      isOpen: false,
    },
    {
      title: '10. Can I play Betchain games without using Telegram? ',
      content:
        'While our platform is optimized for Telegram integration, you can also access and play Betchain games directly through our website. ',
      isOpen: false,
    },
  ];

  const toggleAccordion = (index: number) => {
    setFaqData((prevState) =>
      prevState.map((faq, idx) =>
        idx === index ? { ...faq, isOpen: !faq.isOpen } : { ...faq, isOpen: false }
      )
    );
  };
  
  const [faqData, setFaqData] = useState(faqData1);

  return (
    <>
      <div id="faq_container">
        <div className="heading">
          <h1>FAQ</h1>
        </div>
       <div className="faq_question">
       {faqData.map((faq, index) => (
          <div className="faq_box" key={index}>
            <div
              className="faq-title"
              onClick={() => toggleAccordion(index)}
            >
              <h2>{faq.title}</h2>
              <i className="fa-solid fa-angle-down"></i>
            </div>
            {faq.isOpen && (
              <div className="faq-dec">
                <p>{faq.content}</p>
              </div>
            )}
          </div>
        ))}
       </div>
        
      </div>
    </>
  );
}

export default Faq;
