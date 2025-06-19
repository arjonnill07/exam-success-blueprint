import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { STRATEGIES, MOTIVATIONAL_QUOTES } from '../constants';
import TargetIcon from '../components/icons/TargetIcon';

const testimonials = [
  {
    name: 'সঞ্চিতা, আইবিএ, ঢাকা বিশ্ববিদ্যালয়',
    text: '“আসলে আগে আমি বুঝতেই পারতাম না কীভাবে পড়া শুরু করব। সবই মনে হতো একসাথে চাপ হয়ে এসেছে। আপনি যেভাবে স্ট্র্যাটেজিগুলো শিখিয়েছেন—পোমোডোরো, অ্যাকটিভ রিকল—সেটা আমার চোখ খুলে দিয়েছে। এখন মনে হয় আমি শুধু পড়ি না, বুঝে পড়ি। নিজেকে কন্ট্রোলে আনতে শিখেছি।”',
  },
  {
    name: 'রিফাত, ঢাকা রেসিডেনসিয়াল মডেল কলেজ',
    text: '“আগে পড়াশোনা আমার জন্য একটা যুদ্ধ ছিল। যত পড়তাম, তত বেশি ভয় লাগতো। আপনি যখন স্পেসড রিপিটিশন আর স্মার্ট প্ল্যানিং দেখালেন, তখনই প্রথম মনে হলো—এই সিস্টেমটা আমার জন্য কাজ করবে। এখন পরীক্ষার আগেও মাথা ঠান্ডা থাকে। নিজের ওপর বিশ্বাসটা ফিরেছে।”',
  },
  {
    name: 'তাসনিম, শের-ই-বাংলা মেডিকেল কলেজ',
    text: '“মেডিকেলের জন্য প্রস্তুতি নিতে গিয়ে এক সময় ভেঙে পড়েছিলাম। আপনি আমাকে বলেছিলেন, ‘সব কিছু একসাথে না, ধাপে ধাপে আগাও।’ তখন থেকেই ৮০/২০ রুল আর গোল সেটিং আমার রুটিনের অংশ হয়ে গেছে। সত্যি বলতে, এই স্ট্র্যাটেজিগুলো না থাকলে আমি এতদূর আসতে পারতাম না।”',
  },
];


const HomePage: React.FC = () => {
	const [quote, setQuote] = useState('');
	const [testimonialIdx, setTestimonialIdx] = useState(0);
	const featuredStrategies = STRATEGIES.slice(0, 3);

	useEffect(() => {
		setQuote(
			MOTIVATIONAL_QUOTES[
				Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)
			]
		);
		const interval = setInterval(() => {
			setTestimonialIdx((idx) => (idx + 1) % testimonials.length);
		}, 8000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="animate-fadeIn">
			{/* Hero Section - Clean, Focused */}
			<div className="relative py-20 px-4 text-center overflow-hidden rounded-b-3xl shadow-lg mb-10 border-b border-slate-200 bg-gradient-to-br from-sky-100 via-blue-50 to-white">
				<h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-blue-900 drop-shadow-sm leading-tight">
					Bangladesh’s Exam Success Blueprint
				</h1>
				<p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto font-semibold text-blue-700 drop-shadow-sm leading-snug">
					Study smarter, not harder.{' '}
					<span className="text-sky-500 font-bold">Ace your exams</span> with
					confidence!
				</p>
				<Link
					to="/strategies"
					className="bg-gradient-to-r from-sky-400 to-blue-500 text-white font-extrabold py-5 px-12 rounded-full text-2xl shadow-2xl border-4 border-sky-200 transition-transform transform hover:scale-105 focus:ring-4 focus:ring-sky-300 mb-4 inline-block"
					style={{ boxShadow: '0 8px 32px 0 rgba(56,189,248,0.25)' }}
				>
					Get Started
				</Link>
				<div className="mt-6 max-w-xl mx-auto bg-white/90 rounded-xl p-8 shadow border border-sky-100">
					<p className="text-xl md:text-2xl italic text-blue-800 leading-relaxed">
						“{quote}”
					</p>
				</div>
			</div>

			{/* How It Works Section - Visual, Simple, Responsive, Interactive */}
			<div className="py-10 px-4 flex flex-col items-center">
				<h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
					How It Works
				</h2>
				<div className="flex flex-col md:flex-row gap-8 items-center w-full justify-center">
					{/* Step 1 */}
					<Link
						to="/strategies"
						className="flex flex-col items-center w-full max-w-xs flex-1 group focus:outline-none focus:ring-2 focus:ring-sky-400 rounded-xl transition"
					>
						<div className="bg-sky-200 p-6 rounded-full shadow-lg mb-2 border-4 border-sky-300 group-hover:scale-110 transition-transform">
							<TargetIcon className="w-10 h-10 text-blue-900" />
						</div>
						<span className="font-bold text-lg text-blue-900 text-center">
							Explore Proven Strategies
						</span>
						<span className="text-sky-700 text-sm mt-1 text-center">
							Find what works for you
						</span>
					</Link>
					{/* Arrow */}
					<span className="text-3xl text-sky-400 hidden md:inline">→</span>
					<span className="text-3xl text-sky-400 md:hidden">↓</span>
					{/* Step 2 */}
					<Link
						to="/manage-subjects"
						className="flex flex-col items-center w-full max-w-xs flex-1 group focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-xl transition"
					>
						<div className="bg-blue-100 p-6 rounded-full shadow-lg mb-2 border-4 border-blue-200 group-hover:scale-110 transition-transform">
							<svg
								className="w-10 h-10 text-blue-900"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M9 17v-2a4 4 0 014-4h4m0 0V7m0 4l-4-4m4 4l4-4"
								/>
							</svg>
						</div>
						<span className="font-bold text-lg text-blue-900 text-center">
							Plan & Track Progress
						</span>
						<span className="text-blue-700 text-sm mt-1 text-center">
							Stay organized, stress less
						</span>
					</Link>
					{/* Arrow */}
					<span className="text-3xl text-sky-400 hidden md:inline">→</span>
					<span className="text-3xl text-sky-400 md:hidden">↓</span>
					{/* Step 3 */}
					<Link
						to="/subject-mastery"
						className="flex flex-col items-center w-full max-w-xs flex-1 group focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-xl transition"
					>
						<div className="bg-blue-50 p-6 rounded-full shadow-lg mb-2 border-4 border-blue-100 group-hover:scale-110 transition-transform">
							<svg
								className="w-10 h-10 text-blue-900"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 20h9"
								/>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 4v16m0 0H3"
								/>
							</svg>
						</div>
						<span className="font-bold text-lg text-blue-900 text-center">
							Master Every Subject
						</span>
						<span className="text-blue-700 text-sm mt-1 text-center">
							Deep-dive for real results
						</span>
					</Link>
					{/* Arrow */}
					<span className="text-3xl text-sky-400 hidden md:inline">→</span>
					<span className="text-3xl text-sky-400 md:hidden">↓</span>
					{/* Step 4 */}
					<Link
						to="/quick-prep"
						className="flex flex-col items-center w-full max-w-xs flex-1 group focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded-xl transition"
					>
						<div className="bg-yellow-100 p-6 rounded-full shadow-lg mb-2 border-4 border-yellow-300 group-hover:scale-110 transition-transform">
							<svg
								className="w-10 h-10 text-yellow-600"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M13 16h-1v-4h-1m4 4h-1v-4h-1m-4 4h-1v-4h-1"
								/>
							</svg>
						</div>
						<span className="font-bold text-lg text-yellow-700 text-center">
							Exam SOS
						</span>
						<span className="text-yellow-700 text-sm mt-1 text-center">
							Last-minute help
						</span>
					</Link>
				</div>
				<p className="mt-6 text-sky-700 text-lg text-center max-w-xl">
					Jump in wherever you need. Every section is designed to help you
					succeed!
				</p>
			</div>

			{/* Featured Techniques - Modern, Subtle Effects */}
			<div className="py-12 px-4 bg-gradient-to-br from-sky-50 to-white">
				<h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
					Today’s Highlight
				</h2>
				<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{featuredStrategies.map((strategy) => {
						const IconComponent = strategy.icon;
						return (
							<div
								key={strategy.id}
								className="relative group bg-white rounded-3xl shadow-xl border-4 border-sky-100 p-8 flex flex-col items-center hover:shadow-2xl hover:border-blue-200 transition-all cursor-pointer"
							>
								<IconComponent className="w-14 h-14 text-blue-700 mb-4 group-hover:scale-110 transition-transform" />
								<h3 className="text-2xl font-bold text-blue-900 mb-2 text-center">
									{strategy.title}
								</h3>
								<p className="text-blue-700 text-lg mb-4 text-center">
									{strategy.description}
								</p>
								<Link
									to="/strategies"
									state={{ scrollToId: strategy.id }}
									className="bg-sky-200 hover:bg-sky-300 text-blue-900 font-bold py-2 px-6 rounded-full text-lg shadow-md transition-transform transform hover:scale-105 mt-auto"
								>
									Try This Now
								</Link>
							</div>
						);
					})}
				</div>
			</div>

			{/* Student Success Testimonials */}
			<div className="py-12 px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
					Student Success
				</h2>
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
			</div>
		</div>
	);
};

export default HomePage;
