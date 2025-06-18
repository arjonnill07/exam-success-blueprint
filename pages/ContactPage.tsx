import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';
import LinkedInIcon from '../components/icons/LinkedInIcon';
import GitHubIcon from '../components/icons/GitHubIcon';
import EmailIconSolid from '../components/icons/EmailIconSolid';
import PhoneIcon from '../components/icons/PhoneIcon';
import FacebookIcon from '../components/icons/UsersIcon'; // Placeholder for Facebook
import LightbulbIcon from '../components/icons/LightbulbIcon'; // Placeholder for Portfolio
import SparklesIcon from '../components/icons/SparklesIcon';

const contactInfo = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/arjon-golder/",
    icon: LinkedInIcon,
    handle: "arjon-golder"
  },
  {
    name: "GitHub",
    url: "https://github.com/arjonnill07",
    icon: GitHubIcon,
    handle: "arjonnill07"
  },
  {
    name: "Email",
    url: "mailto:arjongoldercse@gmail.com",
    icon: EmailIconSolid,
    handle: "arjongoldercse@gmail.com"
  },
  {
    name: "Phone",
    url: "tel:01881896752",
    icon: PhoneIcon,
    handle: "01881896752"
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/arjon.nill",
    icon: FacebookIcon,
    handle: "arjon.nill"
  },
  {
    name: "Portfolio",
    url: "https://arjongolder.vercel.app/",
    icon: LightbulbIcon,
    handle: "arjongolder.vercel.app"
  }
];

const ContactPage: React.FC = () => {
  // Confetti state (simple emoji burst)
  const [showConfetti, setShowConfetti] = React.useState(false);
  const handleConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 1800);
  };
  return (
    <div className="animate-fadeIn min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-12 px-2 md:px-0 flex flex-col items-center justify-center relative overflow-x-hidden">
      {/* Animated Mascot & Fun Greeting */}
      <div className="flex flex-col items-center mb-6">
        <div className="animate-bounce-slow mb-2">
          <SparklesIcon className="w-16 h-16 text-yellow-400 drop-shadow-lg" />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-700 drop-shadow text-center">Let’s Connect! 🎉</h1>
        <p className="text-lg text-blue-700 mt-2 text-center max-w-xl">You’ve reached the end of the exam success adventure, but your journey continues! Whether you want to share feedback, ask a question, or just say hi, I’d love to hear from you.</p>
      </div>
      {/* Confetti burst on click */}
      {showConfetti && (
        <div className="pointer-events-none fixed inset-0 flex items-center justify-center z-50 animate-fadeIn">
          <div className="text-6xl select-none">
            🎊✨🎉🥳🎈
          </div>
        </div>
      )}
      <SectionWrapper
        title="Connect & Continue Your Journey"
        subtitle="Thank you for embarking on this learning quest! If you have questions, ideas, or wish to connect, here’s how you can reach out. This platform is here to support your exam journey."
      >
        <div className="flex flex-col items-center w-full mt-8">
          <Card 
            title="Contact Methods"
            className="w-full max-w-2xl mx-auto shadow-2xl border-2 border-indigo-100 bg-white/90 rounded-2xl p-8 flex flex-col items-center"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-4 w-full justify-items-center">
              {contactInfo.map(contact => {
                const ContactIconComponent = contact.icon;
                return (
                  <a
                    key={contact.name}
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-4 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-blue-100 hover:to-indigo-100 rounded-xl shadow-md transition-all duration-300 border border-indigo-200 group hover:scale-110 w-full text-center relative"
                    onClick={handleConfetti}
                  >
                    <span className="absolute -top-3 -right-3 animate-spin-slow pointer-events-none">✨</span>
                    <ContactIconComponent className="w-10 h-10 text-indigo-600 group-hover:text-blue-700 transition-transform duration-300 flex-shrink-0 mb-1" />
                    <span className="text-lg font-semibold text-indigo-700 truncate">{contact.name}</span>
                    <span className="text-slate-500 text-sm group-hover:text-indigo-500 truncate">{contact.handle}</span>
                  </a>
                );
              })}
            </div>
            <p className="text-xs text-gray-500 mt-8 text-center italic">
              Keep exploring, keep learning, and keep forging your unique path to mastery!
            </p>
          </Card>
        </div>
      </SectionWrapper>
      {/* Playful Footer */}
      <footer className="mt-10 text-center text-sm text-indigo-400 opacity-80">
        <span role="img" aria-label="rocket">🚀</span> Made with passion, pixels, and plenty of ☕ by Arjon Golder. <span role="img" aria-label="star">⭐</span>
      </footer>
    </div>
  );
};

export default ContactPage;