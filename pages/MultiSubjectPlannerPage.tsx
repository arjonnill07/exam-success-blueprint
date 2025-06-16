import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';
import LightbulbIcon from '../components/icons/LightbulbIcon';
import ClockIcon from '../components/icons/ClockIcon';
import RepeatIcon from '../components/icons/RepeatIcon';
import ListChecksIcon from '../components/icons/ListChecksIcon';
import BarChartIcon from '../components/icons/BarChartIcon';

const MultiSubjectPlannerPage: React.FC = () => {
	return (
		<div className="animate-fadeIn min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100 py-12 px-2 md:px-0">
			<SectionWrapper
				title={
					<span className="text-3xl md:text-4xl font-extrabold text-indigo-800 drop-shadow">
						Multi-Subject Study Planning:{' '}
						<span className="text-blue-600">Strategy in Action</span>
					</span>
				}
				subtitle={
					<span className="text-lg md:text-xl text-indigo-700">
						See how real students use these strategies to master every subject.
						This is your roadmap—follow it, adapt it, and make it your own!
					</span>
				}
			>
				{/* Hero Visual Pathway */}
				<div className="flex flex-col items-center mb-16">
					<div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-5xl">
						<Card
							title={
								<span className="text-xl font-bold text-green-700">
									1. List & Prioritize
								</span>
							}
							icon={
								<ListChecksIcon className="w-10 h-10 text-green-600" />
							}
							className="flex-1 text-center bg-white/90 shadow-lg rounded-2xl p-6"
						>
							<p className="text-base md:text-lg text-gray-700">
								Write down all your subjects. Mark which ones are toughest or have
								exams soon.
								<br />
								<span className="font-semibold text-blue-700">
									(Strategy: Pomodoro, Spaced Repetition)
								</span>
							</p>
						</Card>
						<span className="hidden md:block text-4xl text-indigo-300 font-extrabold">
							→
						</span>
						<Card
							title={
								<span className="text-xl font-bold text-blue-700">
									2. Build Your Weekly Plan
								</span>
							}
							icon={<ClockIcon className="w-10 h-10 text-blue-600" />}
							className="flex-1 text-center bg-white/90 shadow-lg rounded-2xl p-6"
						>
							<p className="text-base md:text-lg text-gray-700">
								Distribute your study hours. Give more time to weak or urgent
								subjects.
								<br />
								<span className="font-semibold text-blue-700">
									(Strategy: Time Blocking, Interleaving)
								</span>
							</p>
						</Card>
						<span className="hidden md:block text-4xl text-indigo-300 font-extrabold">
							→
						</span>
						<Card
							title={
								<span className="text-xl font-bold text-yellow-700">
									3. Make Learning Stick
								</span>
							}
							icon={
								<LightbulbIcon className="w-10 h-10 text-yellow-500" />
							}
							className="flex-1 text-center bg-white/90 shadow-lg rounded-2xl p-6"
						>
							<p className="text-base md:text-lg text-gray-700">
								After each session, use Active Recall or Feynman Technique. Quiz
								yourself, or explain the topic to a friend.
								<br />
								<span className="font-semibold text-blue-700">
									(Strategy: Active Recall, Feynman)
								</span>
							</p>
						</Card>
					</div>
				</div>

				{/* Real-World Examples Table Infused */}
				<SectionWrapper
					title={
						<span className="text-2xl md:text-3xl font-bold text-indigo-800">
							Strategy in Action: Real-World Examples
						</span>
					}
					subtitle={
						<span className="text-lg text-indigo-700">
							Every subject, every plan—powered by proven strategies.
						</span>
					}
					className="mb-16"
				>
					<div className="overflow-x-auto rounded-xl shadow-lg bg-white/90">
						<table className="min-w-full rounded-xl text-base md:text-lg">
							<thead>
								<tr className="bg-indigo-100">
									<th className="py-3 px-4 text-left font-bold text-indigo-800">
										Subject
									</th>
									<th className="py-3 px-4 text-left font-bold text-indigo-800">
										Strategy Used
									</th>
									<th className="py-3 px-4 text-left font-bold text-indigo-800">
										Example Action
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="py-3 px-4">Math</td>
									<td className="py-3 px-4">Spaced Repetition</td>
									<td className="py-3 px-4">
										Review formulas every 3 days
									</td>
								</tr>
								<tr className="bg-blue-50">
									<td className="py-3 px-4">Biology</td>
									<td className="py-3 px-4">Active Recall</td>
									<td className="py-3 px-4">
										Quiz yourself after each chapter
									</td>
								</tr>
								<tr>
									<td className="py-3 px-4">English</td>
									<td className="py-3 px-4">Pomodoro</td>
									<td className="py-3 px-4">25 min reading, 5 min break</td>
								</tr>
								<tr className="bg-blue-50">
									<td className="py-3 px-4">History</td>
									<td className="py-3 px-4">Feynman Technique</td>
									<td className="py-3 px-4">Explain a topic to a friend</td>
								</tr>
							</tbody>
						</table>
					</div>
				</SectionWrapper>

				{/* Step-by-Step with Strategy Callouts */}
				<SectionWrapper
					title={
						<span className="text-2xl md:text-3xl font-bold text-indigo-800">
							How to Build Your Own Plan (With Strategies)
						</span>
					}
					subtitle={
						<span className="text-lg text-indigo-700">
							Follow these steps and infuse each one with a powerful technique.
						</span>
					}
				>
					<div className="grid md:grid-cols-2 gap-10">
						<Card
							title={
								<span className="text-lg font-bold text-green-700">
									Step 1: List Your Subjects & Priorities
								</span>
							}
							icon={<ListChecksIcon className="w-8 h-8 text-green-500" />}
						>
							<p className="text-base text-gray-700">
								Write down all your exam subjects. For each, note your confidence
								level and exam date.
								<br />
								<span className="block mt-2 text-blue-700 font-semibold">
									Tip: Use Pomodoro to break big lists into small, focused
									sprints!
								</span>
							</p>
						</Card>
						<Card
							title={
								<span className="text-lg font-bold text-yellow-700">
									Step 2: Identify Strengths & Weaknesses
								</span>
							}
							icon={<BarChartIcon className="w-8 h-8 text-yellow-500" />}
						>
							<p className="text-base text-gray-700">
								Mark which subjects or topics you find most challenging. These
								should get extra time in your plan.
								<br />
								<span className="block mt-2 text-blue-700 font-semibold">
									Tip: Use Spaced Repetition to review weak areas more often.
								</span>
							</p>
						</Card>
						<Card
							title={
								<span className="text-lg font-bold text-blue-700">
									Step 3: Allocate Weekly Time
								</span>
							}
							icon={<ClockIcon className="w-8 h-8 text-blue-500" />}
						>
							<p className="text-base text-gray-700">
								Distribute your available study hours across subjects, giving more
								to those with closer exams or weaker areas.
								<br />
								<span className="block mt-2 text-blue-700 font-semibold">
									Tip: Try Interleaving—mix up subjects in a single session!
								</span>
							</p>
						</Card>
						<Card
							title={
								<span className="text-lg font-bold text-purple-700">
									Step 4: Make Learning Stick
								</span>
							}
							icon={<LightbulbIcon className="w-8 h-8 text-purple-500" />}
						>
							<p className="text-base text-gray-700">
								After each study block, use Active Recall (test yourself) or
								Feynman Technique (teach someone else).
								<br />
								<span className="block mt-2 text-blue-700 font-semibold">
									Tip: End every session with a quick self-quiz or summary.
								</span>
							</p>
						</Card>
						<Card
							title={
								<span className="text-lg font-bold text-pink-700">
									Step 5: Track & Reflect
								</span>
							}
							icon={<RepeatIcon className="w-8 h-8 text-pink-500" />}
						>
							<p className="text-base text-gray-700">
								Use a notebook or calendar to tick off completed sessions. Adjust
								your plan each week based on what’s working.
								<br />
								<span className="block mt-2 text-blue-700 font-semibold">
									Tip: Celebrate small wins—consistency beats cramming!
								</span>
							</p>
						</Card>
					</div>
				</SectionWrapper>

				{/* Final Motivational Callout */}
				<div className="mt-20 flex flex-col items-center">
					<div className="bg-gradient-to-r from-indigo-200 to-blue-100 rounded-2xl shadow-xl p-10 max-w-2xl text-center">
						<h2 className="text-3xl md:text-4xl font-extrabold text-indigo-800 mb-3">
							You’re Not Alone—You’re on a Winning Path!
						</h2>
						<p className="text-xl text-gray-700 mb-4">
							Every top student you admire started with a plan, used these
							strategies, and kept going even when it was tough. You can do it
							too. Come back to this page whenever you need a boost or a reminder
							of your power!
						</p>
						<p className="text-lg text-blue-700 font-semibold">
							“Success is the sum of small efforts, repeated day in and day
							out.”
						</p>
						<p className="text-base text-gray-500 mt-2">— Robert Collier</p>
					</div>
				</div>
			</SectionWrapper>
		</div>
	);
};

export default MultiSubjectPlannerPage;
