import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { STRATEGIES } from '../constants';
import { Strategy, StrategyCategory } from '../types';
import StrategyDetail from '../components/StrategyDetail';

const CATEGORY_META = [
	{ key: 'All', label: 'All' },
	{ key: StrategyCategory.MEMORY_ENHANCEMENT, label: 'Memory' },
	{ key: StrategyCategory.TIME_MANAGEMENT, label: 'Time' },
	{ key: StrategyCategory.LEARNING_TECHNIQUES, label: 'Learning' },
	{ key: StrategyCategory.STRESS_MANAGEMENT, label: 'Stress' },
];

function shuffleArray<T>(array: T[]): T[] {
	const arr = [...array];
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
}

const StrategiesDirectoryPage: React.FC = () => {
	const [filterCategory, setFilterCategory] = useState<'All' | StrategyCategory>('All');
	const [deckA, setDeckA] = useState<Strategy[]>([]);
	const [deckB, setDeckB] = useState<Strategy[]>([]);
	const [currentIdxA, setCurrentIdxA] = useState(0);
	const [currentIdxB, setCurrentIdxB] = useState(0);
	const [shuffledA, setShuffledA] = useState(false);
	const [shuffledB, setShuffledB] = useState(false);
	const [selectedStrategy, setSelectedStrategy] = useState<Strategy | null>(null);
	const location = useLocation();

	useEffect(() => {
		let filtered: Strategy[];
		if (filterCategory === 'All') {
			filtered = STRATEGIES;
		} else {
			filtered = STRATEGIES.filter(strategy => strategy.category === filterCategory);
		}
		// Split into two decks (alternating)
		const a: Strategy[] = [], b: Strategy[] = [];
		filtered.forEach((s, i) => (i % 2 === 0 ? a.push(s) : b.push(s)));
		setDeckA(a);
		setDeckB(b);
		setCurrentIdxA(0);
		setCurrentIdxB(0);
		setShuffledA(false);
		setShuffledB(false);
	}, [filterCategory]);

	useEffect(() => {
		if (location.state?.scrollToId) {
			const idxA = deckA.findIndex(s => s.id === location.state.scrollToId);
			const idxB = deckB.findIndex(s => s.id === location.state.scrollToId);
			if (idxA !== -1) setCurrentIdxA(idxA);
			if (idxB !== -1) setCurrentIdxB(idxB);
		}
	}, [location.state, deckA, deckB]);

	// Deck navigation logic
	const handleShuffleA = () => {
		setDeckA(shuffleArray(deckA));
		setCurrentIdxA(0);
		setShuffledA(true);
	};
	const handleShuffleB = () => {
		setDeckB(shuffleArray(deckB));
		setCurrentIdxB(0);
		setShuffledB(true);
	};
	const handleNextA = () => {
		setCurrentIdxA(idx => (idx + 1 < deckA.length ? idx + 1 : 0));
	};
	const handleNextB = () => {
		setCurrentIdxB(idx => (idx + 1 < deckB.length ? idx + 1 : 0));
	};
	const handlePrevA = () => setCurrentIdxA(idx => (idx - 1 >= 0 ? idx - 1 : deckA.length - 1));
	const handlePrevB = () => setCurrentIdxB(idx => (idx - 1 >= 0 ? idx - 1 : deckB.length - 1));

	return (
		<div className="bg-gradient-to-br from-white via-sky-50 to-blue-50 min-h-screen">
			{/* Hero Section */}
			<div className="py-10 px-4 text-center">
				<h1 className="text-5xl md:text-6xl font-extrabold mb-3 tracking-tight text-blue-900 leading-tight font-sans">
					Study Strategies
				</h1>
				<p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto font-medium text-blue-700 leading-snug">
					Explore proven techniques, filter by your needs, and discover your favorites—one card at a time.
				</p>
			</div>

			{/* Journey Path Filter */}
			<div className="flex flex-row items-center justify-center gap-2 w-full max-w-3xl mx-auto mb-10">
				{CATEGORY_META.map((stop, i) => (
					<React.Fragment key={stop.key}>
						<button
							onClick={() => { setFilterCategory(stop.key as 'All' | StrategyCategory); }}
							className={`px-6 py-2 rounded-full text-base font-bold transition-all duration-200 border border-sky-200 bg-white hover:bg-sky-100 focus:ring-2 focus:ring-sky-400 relative overflow-hidden ${filterCategory === stop.key ? 'bg-blue-600 text-white border-blue-600' : 'text-blue-700'}`}
						>
							<span>{stop.label}</span>
						</button>
						{i < CATEGORY_META.length - 1 && (
							<span className="text-lg text-gray-300">|</span>
						)}
					</React.Fragment>
				))}
			</div>

			{/* Card Deck Section */}
			<div className="flex flex-col md:flex-row items-center justify-center gap-12 min-h-[400px] pb-16 mt-4 w-full">
				<div className="flex flex-1 flex-col md:flex-row items-center justify-center gap-12 w-full max-w-4xl mx-auto">
					{/* Deck A */}
					<div className="flex flex-col items-center w-full md:w-1/2">
						<div className="relative z-10 w-[340px] max-w-full">
							{deckA[currentIdxA] && (
								<button
									onClick={() => setSelectedStrategy(deckA[currentIdxA])}
									className="w-full text-left group"
									aria-label={`View details for ${deckA[currentIdxA].title}`}
								>
									<div className="bg-white shadow-xl rounded-2xl border border-sky-100 p-8 flex flex-col items-center hover:shadow-2xl hover:scale-105 transition-all duration-300">
										<div className="mb-3 text-blue-600 text-4xl">{deckA[currentIdxA].icon && React.createElement(deckA[currentIdxA].icon, { className: 'w-10 h-10' })}</div>
										<h3 className="text-xl font-bold text-gray-800 text-center mb-1 leading-tight font-sans">{deckA[currentIdxA].title}</h3>
										<div className="text-sky-700 text-base font-medium mb-2 text-center">{deckA[currentIdxA].description.slice(0, 60)}...</div>
										<span className="mt-2 inline-block bg-sky-100 text-blue-900 font-semibold py-1 px-4 rounded-full text-sm">Learn More</span>
									</div>
								</button>
							)}
						</div>
						<div className="flex flex-row gap-4 mt-6">
							<button
								onClick={handlePrevA}
								className="bg-gray-100 hover:bg-blue-100 text-blue-700 font-bold p-2 rounded-full text-base shadow transition-transform hover:scale-105 flex items-center justify-center"
								disabled={deckA.length <= 1}
								aria-label="Previous"
							>
								<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
							</button>
							<button
								onClick={handleShuffleA}
								className={`bg-gradient-to-r from-pink-200 via-sky-200 to-blue-200 hover:from-pink-300 hover:to-blue-300 text-blue-900 font-bold py-2 px-6 rounded-full text-base shadow transition-transform hover:scale-110 ${shuffledA ? 'ring-2 ring-blue-400' : ''}`}
							>Shuffle</button>
							<button
								onClick={handleNextA}
								className="bg-gray-100 hover:bg-blue-100 text-blue-700 font-bold p-2 rounded-full text-base shadow transition-transform hover:scale-105 flex items-center justify-center"
								disabled={deckA.length <= 1}
								aria-label="Next"
							>
								<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
							</button>
						</div>
						<div className="mt-2 text-blue-800 font-semibold text-base">{deckA.length > 0 ? `Card ${currentIdxA + 1} of ${deckA.length}` : 'No strategies.'}</div>
					</div>
					{/* Deck B */}
					<div className="flex flex-col items-center w-full md:w-1/2">
						<div className="relative z-10 w-[340px] max-w-full">
							{deckB[currentIdxB] && (
								<button
									onClick={() => setSelectedStrategy(deckB[currentIdxB])}
									className="w-full text-left group"
									aria-label={`View details for ${deckB[currentIdxB].title}`}
								>
									<div className="bg-white shadow-xl rounded-2xl border border-sky-100 p-8 flex flex-col items-center hover:shadow-2xl hover:scale-105 transition-all duration-300">
										<div className="mb-3 text-blue-600 text-4xl">{deckB[currentIdxB].icon && React.createElement(deckB[currentIdxB].icon, { className: 'w-10 h-10' })}</div>
										<h3 className="text-xl font-bold text-gray-800 text-center mb-1 leading-tight font-sans">{deckB[currentIdxB].title}</h3>
										<div className="text-sky-700 text-base font-medium mb-2 text-center">{deckB[currentIdxB].description.slice(0, 60)}...</div>
										<span className="mt-2 inline-block bg-sky-100 text-blue-900 font-semibold py-1 px-4 rounded-full text-sm">Learn More</span>
									</div>
								</button>
							)}
						</div>
						<div className="flex flex-row gap-4 mt-6">
							<button
								onClick={handlePrevB}
								className="bg-gray-100 hover:bg-blue-100 text-blue-700 font-bold p-2 rounded-full text-base shadow transition-transform hover:scale-105 flex items-center justify-center"
								disabled={deckB.length <= 1}
								aria-label="Previous"
							>
								<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
							</button>
							<button
								onClick={handleShuffleB}
								className={`bg-gradient-to-r from-green-200 via-sky-200 to-blue-200 hover:from-green-300 hover:to-blue-300 text-blue-900 font-bold py-2 px-6 rounded-full text-base shadow transition-transform hover:scale-110 ${shuffledB ? 'ring-2 ring-blue-400' : ''}`}
							>Shuffle</button>
							<button
								onClick={handleNextB}
								className="bg-gray-100 hover:bg-blue-100 text-blue-700 font-bold p-2 rounded-full text-base shadow transition-transform hover:scale-105 flex items-center justify-center"
								disabled={deckB.length <= 1}
								aria-label="Next"
							>
								<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
							</button>
						</div>
						<div className="mt-2 text-blue-800 font-semibold text-base">{deckB.length > 0 ? `Card ${currentIdxB + 1} of ${deckB.length}` : 'No strategies.'}</div>
					</div>
				</div>
			</div>
			{/* Modal for Strategy Detail */}
			{selectedStrategy && (
				<div
					className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md flex justify-center items-center p-4 z-[100] overflow-y-auto"
					onClick={() => setSelectedStrategy(null)}
					role="dialog"
					aria-modal="true"
					aria-labelledby={`strategy-modal-title-${selectedStrategy.id}`}
				>
					<div
						className="bg-gradient-to-br from-slate-100 to-sky-100 p-1 rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
						onClick={e => e.stopPropagation()}
					>
						<div className="bg-white p-1 rounded-lg">
							<div id={`strategy-modal-title-${selectedStrategy.id}`} className="sr-only">{selectedStrategy.title} Details</div>
							<StrategyDetail strategy={selectedStrategy} />
							<button
								onClick={() => setSelectedStrategy(null)}
								className="mt-4 mb-2 ml-6 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
							>
								Close Details
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default StrategiesDirectoryPage;
