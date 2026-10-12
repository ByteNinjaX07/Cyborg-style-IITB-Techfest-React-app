import { useState } from 'react';
import styles from './FAQ.module.css';
import backgroundImage from '../assets/ChatGPT Image Oct 9, 2026, 08_25_32 PM.png';

function FAQ() {
  const [open, setOpen] = useState(null);

  const questions = [
    {
      q: 'What is Techfest?',
      a: "Techfest is IIT Bombay's annual science and technology festival.",
    },
    {
      q: 'Who can apply for the Campus Ambassador program?',
      a: 'Students can apply according to the official eligibility criteria.',
    },
    {
      q: 'What are the eligibility criteria?',
      a: 'Check the official application guidelines for eligibility details.',
    },
    {
      q: 'What are the responsibilities of a CA?',
      a: 'Campus Ambassadors promote Techfest and share updates with students.',
    },
    {
      q: 'What is the time commitment?',
      a: 'The time commitment depends on the assigned activities.',
    },
    {
      q: 'Will I get a certificate?',
      a: 'Certificate eligibility depends on completing program requirements.',
    },
    {
      q: 'Is there any stipend or reimbursement?',
      a: 'Check the official program guidelines for rewards or reimbursements.',
    },
    {
      q: 'What happens after I apply?',
      a: 'Check your email for application and selection updates.',
    },
    {
      q: 'Can international students apply?',
      a: 'Check the official eligibility guidelines.',
    },
    {
      q: 'Whom can I contact for more queries?',
      a: 'Visit the official Techfest website for contact details.',
    },
  ];

  return (
    <div className={styles['faqContainer']}>
      
      <div
        className={styles['bg']}
        style={{ backgroundImage: `url("${backgroundImage}")` }}
      />

      <h1 className={styles['heading']}>FREQUENTLY ASKED QUESTIONS</h1>

      <div className={styles['faqList']}>
        {questions.map((item, index) => (
          <div className={styles['faqItem']} key={index}>
            <button
              className={styles['question']}
              onClick={() =>
                setOpen(open === index ? null : index)
              }
            >
              <span>
                {index + 1}. {item.q}
              </span>

              <span className={styles['icon']}>
                {open === index ? '−' : '+'}
              </span>
            </button>

            {open === index && (
              <p className={styles['answer']}>{item.a}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;