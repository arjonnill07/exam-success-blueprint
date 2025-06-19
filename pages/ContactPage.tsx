import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';
import LinkedInIcon from '../components/icons/LinkedInIcon';
import GitHubIcon from '../components/icons/GitHubIcon';
import EmailIconSolid from '../components/icons/EmailIconSolid';
import PhoneIcon from '../components/icons/PhoneIcon';
import FacebookIcon from '../components/icons/FacebookIcon'; // Actual Facebook logo
import LightbulbIcon from '../components/icons/LightbulbIcon'; // Placeholder for Portfolio
import SparklesIcon from '../components/icons/SparklesIcon';

const contactInfo = [
	{
		name: 'LinkedIn',
		url: 'https://www.linkedin.com/in/arjon-golder/',
		icon: LinkedInIcon,
		handle: 'arjon-golder',
	},
	{
		name: 'GitHub',
		url: 'https://github.com/arjonnill07',
		icon: GitHubIcon,
		handle: 'arjonnill07',
	},
	{
		name: 'Email',
		url: 'mailto:arjongoldercse@gmail.com',
		icon: EmailIconSolid,
		handle: 'arjongoldercse@gmail.com',
	},
	{
		name: 'Phone',
		url: 'tel:01881896752',
		icon: PhoneIcon,
		handle: '01881896752',
	},
	{
		name: 'Facebook',
		url: 'https://www.facebook.com/arjon.nill',
		icon: FacebookIcon, // Use the real Facebook icon
		handle: 'arjon.nill',
	},
	{
		name: 'Portfolio',
		url: 'https://arjongolder.vercel.app/',
		icon: LightbulbIcon,
		handle: 'arjongolder.vercel.app',
	},
];

const ContactPage: React.FC = () => {
	// Confetti state (simple emoji burst)
	const [showConfetti, setShowConfetti] = React.useState(false);
	const handleConfetti = () => {
		setShowConfetti(true);
		setTimeout(() => setShowConfetti(false), 1800);
	};
	return (
		<div className="animate-fadeIn min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-6 px-2 md:px-0 flex flex-col items-center justify-center relative overflow-x-hidden">
			{/* Modern Greeting & Mascot */}
			<div className="flex flex-col items-center mb-4">
				<div className="animate-bounce-slow mb-1">
					<SparklesIcon className="w-14 h-14 text-yellow-400 drop-shadow-lg" />
				</div>
				<h1 className="text-3xl md:text-4xl font-extrabold text-indigo-800 drop-shadow text-center mb-1">
					Contact & Connect
				</h1>
				<p className="text-base text-blue-800 mt-0 text-center max-w-xl font-medium">
					You’ve reached the end of the exam success adventure, but your journey continues! Whether you want to share feedback, ask a question, I’d love to hear from you.
				</p>
			</div>
			{/* Confetti burst on click */}
			{showConfetti && (
				<div className="pointer-events-none fixed inset-0 flex items-center justify-center z-50 animate-fadeIn">
					<div className="text-5xl select-none">✨</div>
				</div>
			)}
			<SectionWrapper>
				<div className="flex flex-col items-center w-full mt-0">
					<Card
						title="Contact Methods"
						className="w-full max-w-xl mx-auto shadow-lg border border-indigo-100 bg-white/95 rounded-2xl p-4 flex flex-col items-center"
					>
						<div className="grid grid-cols-2 gap-2 my-2 w-full justify-items-center">
							{contactInfo.map((contact) => {
								const ContactIconComponent = contact.icon;
								return (
									<a
										key={contact.name}
										href={contact.url}
										target="_blank"
										rel="noopener noreferrer"
										className="flex flex-col items-center gap-1 p-3 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-blue-100 hover:to-indigo-100 rounded-xl shadow transition-all duration-300 border border-indigo-200 group hover:scale-105 w-full text-center relative"
										onClick={handleConfetti}
									>
										<span className="absolute -top-2 -right-2 animate-spin-slow pointer-events-none text-base">
											
										</span>
										<ContactIconComponent className="w-8 h-8 text-indigo-600 group-hover:text-blue-700 transition-transform duration-300 flex-shrink-0 mb-0.5" />
										<span className="text-base font-semibold text-indigo-800 truncate">
											{contact.name}
										</span>
										<span className="text-slate-500 text-xs group-hover:text-indigo-500 truncate">
											{contact.handle}
										</span>
									</a>
								);
							})}
						</div>
						<p className="text-xs text-gray-500 mt-4 text-center italic">
							Keep exploring, keep learning, and keep forging your unique path to mastery!
						</p>
					</Card>
				</div>
			</SectionWrapper>
			{/* Professional Footer */}
			<footer className="mt-6 text-center text-xs text-indigo-400 opacity-90">
				<span role="img" aria-label="rocket">
					🚀
				</span>{' '}
				 Made with passion, pixels, and plenty of ☕ by Arjon Golder. {' '}
				<span role="img" aria-label="star">
					⭐
				</span>
			</footer>
		</div>
	);
};

export default ContactPage;