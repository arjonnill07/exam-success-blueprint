import React, { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';
import MailIconOutline from '../components/icons/MailIcon'; // Renamed to avoid conflict, for form
import UserCircleIcon from '../components/icons/UserCircleIcon';
import ChatBubbleLeftEllipsisIcon from '../components/icons/ChatBubbleLeftEllipsisIcon';
import LinkedInIcon from '../components/icons/LinkedInIcon';
import GitHubIcon from '../components/icons/GitHubIcon';
import EmailIconSolid from '../components/icons/EmailIconSolid';
import PhoneIcon from '../components/icons/PhoneIcon';

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
  }
];


const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="animate-fadeIn">
      <SectionWrapper
        title="Connect & Continue Your Journey"
        subtitle="Thank you for embarking on this learning quest! If you have questions, ideas, or wish to connect, here’s how you can reach out. This platform is here to support your exam journey."
      >
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form Card */}
          <Card title="Send a Message" icon={<ChatBubbleLeftEllipsisIcon className="w-8 h-8 text-blue-600" />}>
            {isSubmitted ? (
              <div className="p-4 text-center bg-green-100 text-green-700 rounded-lg">
                <h4 className="font-semibold text-lg">Thank You!</h4>
                <p>Your message has been received (conceptually!).</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <UserCircleIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email Address
                  </label>
                  <div className="relative">
                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MailIconOutline className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your question or feedback..."
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </Card>

          {/* Arjon Golder's Contact Information Card */}
          <Card title="Direct Contact Details" icon={<UserCircleIcon className="w-8 h-8 text-blue-600" />}>
            <div className="space-y-6 my-2">
              {contactInfo.map(contact => {
                const ContactIconComponent = contact.icon;
                return (
                  <a
                    key={contact.name}
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-indigo-50 hover:bg-indigo-100 rounded-xl shadow-md transition-all duration-300 group border border-indigo-200"
                  >
                    <ContactIconComponent className="w-7 h-7 md:w-8 md:h-8 text-indigo-600 mr-4 transition-transform duration-300 group-hover:scale-110 flex-shrink-0" />
                    <div className="flex-grow min-w-0"> {/* Added for text truncation */}
                      <p className="text-md md:text-lg font-semibold text-indigo-700 truncate">{contact.name}</p>
                      <p className="text-slate-500 text-sm md:text-base group-hover:text-indigo-500 truncate">{contact.handle}</p>
                    </div>
                  </a>
                );
              })}
            </div>
             <p className="text-xs text-gray-500 mt-6 text-center">
                Keep exploring, keep learning, and keep forging your unique path to mastery!
             </p>
          </Card>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ContactPage;