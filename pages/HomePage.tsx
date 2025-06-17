import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';
import { STRATEGIES, MOTIVATIONAL_QUOTES } from '../constants';
import BookOpenIcon from '../components/icons/BookOpenIcon';
import TargetIcon from '../components/icons/TargetIcon';
import ClipboardListIcon from '../components/icons/ClipboardListIcon';
import ZapIcon from '../components/icons/ZapIcon';

const testimonials = [
	{
		name: 'Ayesha, Class 10',
		text: '“This app made planning so easy! I finally stopped cramming and my grades shot up.”',
	},
	{
		name: 'Rahim, Class 12',
		text: '“The strategies here are simple but powerful. I felt confident for the first time.”',
	},
	{
		name: 'Mitu, Class 8',
		text: '“I loved the quick tips and the colorful design. Studying feels less scary now!”',
	},
];

const HomePage: React.FC = () => {
	const [quote, setQuote] = useState('');
	const [testimonialIdx, setTestimonialIdx] = useState(0);

	useEffect(() => {
		setQuote(
			MOTIVATIONAL_QUOTES[
				Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)
			]
		);
		const interval = setInterval(() => {
			setTestimonialIdx((idx) => (idx + 1) % testimonials.length);
		}, 6000);
		return () => clearInterval(interval);
	}, []);

	const featuredStrategies = STRATEGIES.slice(0, 3);

	return (
		<div className="animate-fadeIn">
			{/* Hero Section - Modern Minimalist, Light Blue Texture */}
			<div
				className="relative py-20 px-4 text-center overflow-hidden rounded-b-3xl shadow-lg mb-12 border-b border-slate-200"
				style={{
					background: `linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%)`,
					backgroundImage: `url('data:image/svg+xml;utf8,<svg width=\'100%\' height=\'100%\' xmlns=\'http://www.w3.org/2000/svg\'><defs><radialGradient id=\'a\' cx=\'50%\' cy=\'50%\' r=\'80%\' fx=\'50%\' fy=\'50%\'><stop offset=\'0%\' stop-color=\'%23bae6fd\' stop-opacity=\'0.4\'/><stop offset=\'100%\' stop-color=\'%23f0f9ff\' stop-opacity=\'0.7\'/></radialGradient></defs><rect width=\'100%\' height=\'100%\' fill=\'url(%23a)\'/></svg>')`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
				}}
			>
				<h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-blue-900 drop-shadow-sm">
					Bangladesh’s Exam Success Blueprint
				</h1>
				<p className="text-2xl md:text-3xl mb-6 max-w-2xl mx-auto font-medium text-blue-700 drop-shadow-sm">
					Study smarter, not harder.{' '}
					<span className="text-sky-500 font-bold">Ace your exams</span> with
					confidence!
				</p>
				<div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
					<Link
						to="/strategies"
						className="bg-sky-200 hover:bg-sky-300 text-blue-900 font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-transform transform hover:scale-105 border border-sky-300"
					>
						Explore Strategies
					</Link>
					<Link
						to="/manage-subjects"
						className="bg-white hover:bg-blue-50 text-blue-700 font-bold py-3 px-8 rounded-full text-lg shadow-lg border-2 border-sky-200 transition-transform transform hover:scale-105"
					>
						Plan Your Studies
					</Link>
					<Link
						to="/quick-prep"
						className="inline-flex items-center bg-white hover:bg-sky-100 text-sky-600 font-bold py-3 px-8 rounded-full text-lg shadow-lg border border-sky-200 transition-transform transform hover:scale-105 animate-pulse"
					>
						<ZapIcon className="w-5 h-5 mr-2" /> Exam SOS!
					</Link>
				</div>
				<div className="max-w-xl mx-auto bg-white/80 rounded-xl p-6 mt-6 shadow border border-sky-100">
					<p className="text-lg md:text-xl italic text-blue-800">“{quote}”</p>
				</div>
			</div>

			{/* Core Features Section */}
			<SectionWrapper
				title={<span>Unlock Your Potential</span>}
				subtitle="Discover the tools and techniques to ensure academic success. You're supported every step of the way!"
				id="features"
			>
				<div className="grid md:grid-cols-3 gap-8">
					<Link to="/manage-subjects" className="block hover:no-underline group">
						<Card
							title={
								<span className="flex items-center gap-2">
									<ClipboardListIcon className="w-7 h-7" /> Multi-Subject Planning
								</span>
							}
						>
							<p>
								Organize study schedules, balance coursework, and track progress
								across all subjects efficiently. Let's build a solid plan.
							</p>
							<span className="mt-4 inline-block text-blue-600 font-semibold group-hover:underline">
								Plan Studies &rarr;
							</span>
						</Card>
					</Link>
					<Link to="/subject-mastery" className="block hover:no-underline group">
						<Card
							title={
								<span className="flex items-center gap-2">
									<BookOpenIcon className="w-7 h-7" /> Subject-Specific Mastery
								</span>
							}
						>
							<p>
								Dive deep into individual subjects. Discover tailored techniques to
								overcome test anxiety and achieve true understanding for each one.
							</p>
							<span className="mt-4 inline-block text-blue-600 font-semibold group-hover:underline">
								Master Subjects &rarr;
							</span>
						</Card>
					</Link>
					<Link to="/strategies" className="block hover:no-underline group">
						<Card
							title={
								<span className="flex items-center gap-2">
									<TargetIcon className="w-7 h-7" /> Proven Study Strategies
								</span>
							}
						>
							<p>
								Explore a comprehensive library of scientifically-backed study
								methods curated to boost retention and performance, explained
								clearly.
							</p>
							<span className="mt-4 inline-block text-blue-600 font-semibold group-hover:underline">
								Discover Techniques &rarr;
							</span>
						</Card>
					</Link>
				</div>
			</SectionWrapper>

			{/* Featured Strategies Section */}
			<SectionWrapper
				title={<span>Featured Techniques</span>}
				subtitle="Start with these powerful strategies. They make a real difference!"
				className="bg-sky-50"
				id="featured-strategies"
			>
				<div className="grid md:grid-cols-3 gap-8">
					{featuredStrategies.map((strategy) => {
						const IconComponent = strategy.icon;
						return (
							<Link
								key={strategy.id}
								to="/strategies"
								state={{ scrollToId: strategy.id }}
								className="block hover:no-underline group"
							>
								<Card
									title={
										<span className="flex items-center gap-2">
											<IconComponent className="w-7 h-7" /> {strategy.title}
										</span>
									}
								>
									<p>{strategy.description}</p>
									<span className="mt-4 inline-block text-blue-600 font-semibold group-hover:underline">
										Learn More &rarr;
									</span>
								</Card>
							</Link>
						);
					})}
				</div>
			</SectionWrapper>

			{/* Student Success Testimonials */}
			<SectionWrapper
				title={<span>Student Success</span>}
				subtitle="Real stories from Bangladeshi students"
			>
				<div className="max-w-2xl mx-auto">
					<div className="bg-white rounded-2xl shadow-lg p-8 text-center border-l-4 border-blue-200 min-h-[140px] transition-all duration-500">
						<p className="italic text-lg text-blue-800 mb-2">
							{testimonials[testimonialIdx].text}
						</p>
						<div className="text-blue-700 font-semibold">
							— {testimonials[testimonialIdx].name}
						</div>
					</div>
				</div>
			</SectionWrapper>

			{/* Call to Action Section */}
			<SectionWrapper className="bg-sky-900 text-white" id="cta">
				<div className="text-center max-w-3xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Ready to Transform Your Study Habits?
					</h2>
					<p className="text-lg mb-8">
						Join countless students achieving their academic goals with smarter
						study strategies. It's time to study smarter, not just harder, with
						this guide by your side.
					</p>
					<Link
						to="/strategies"
						className="bg-sky-200 hover:bg-sky-300 text-blue-900 font-bold py-4 px-10 rounded-full text-xl shadow-lg transition-transform transform hover:scale-105"
					>
						Let's Get Started!
					</Link>
				</div>
			</SectionWrapper>
		</div>
	);
};

export default HomePage;
