// src/components/PasswordUpdateChatbot/ChatWindow.jsx
import React from "react";
import { steps } from "../../data/steps";

/**
 * Helper function to render text with bold formatting
 * Words wrapped in ** (e.g., **bold**) will be rendered in bold
 * @param {string} text - Text that may contain **bold** markers
 * @returns {Array} Array of React elements with proper bold formatting
 */
const renderTextWithBold = (text) => {
	const parts = text.split(/(\*\*[^*]+\*\*)/g);
	return parts.map((part, index) => {
		if (part.startsWith("**") && part.endsWith("**")) {
			const boldText = part.slice(2, -2);
			return (
				<span key={index} style={{ fontWeight: 700, color: '#312e81' }}>
					{boldText}
				</span>
			);
		}
		return part;
	});
};

/**
 * Function to parse and format message text with RTL and mixed content support
 * Handles:
 * - URLs (makes them clickable links with LTR direction)
 * - Step patterns (e.g., "צעד 1:" with special styling)
 * - Bold text (**text**)
 * - Line breaks
 * - Mixed Hebrew/English content
 * 
 * @param {string} text - Raw message text
 * @returns {Array} Array of React elements with proper formatting
 */
const parseMessage = (text) => {
	const urlRegex = /(https?:\/\/[^\s]+)/g;
	const stepRegex = /(צעד \d+:)/g;

	return text.split("\n").map((line, lineIndex) => (
		<React.Fragment key={lineIndex}>
			{line.split(urlRegex).map((part, partIndex) => {
				if (part.match(urlRegex)) {
					return (
						<span key={partIndex} className="inline-block" dir="ltr">
							<a
								href={part}
								target="_blank"
								rel="noopener noreferrer"
								style={{
									color: '#4f46e5',
									fontWeight: 600,
									textDecoration: 'none',
									borderBottom: '2px solid #c7d2fe',
									transition: 'all 0.2s ease',
									paddingBottom: '1px',
								}}
								onMouseEnter={(e) => {
									e.target.style.borderBottomColor = '#4f46e5';
									e.target.style.color = '#4338ca';
								}}
								onMouseLeave={(e) => {
									e.target.style.borderBottomColor = '#c7d2fe';
									e.target.style.color = '#4f46e5';
								}}
								aria-label={`פתח קישור: ${part}`}
							>
								{part}
							</a>
						</span>
					);
				} else {
					const stepParts = part.split(stepRegex);
					return stepParts.map((subPart, subIndex) => {
						if (subPart.match(stepRegex)) {
							return (
								<span
									key={subIndex}
									style={{
										color: '#4f46e5',
										fontWeight: 700,
										display: 'inline-block',
										marginLeft: '4px',
										background: 'linear-gradient(135deg, #eef2ff, #e0e7ff)',
										padding: '2px 8px',
										borderRadius: '6px',
										fontSize: '0.95em',
									}}
								>
									{subPart}
								</span>
							);
						}
						return <span key={subIndex}>{renderTextWithBold(subPart)}</span>;
					});
				}
			})}
			{lineIndex < text.split("\n").length - 1 && <br />}
		</React.Fragment>
	));
};

/**
 * ChatWindow - Main content area displaying current step information
 * 
 * Features:
 * - Displays step-specific messages and images
 * - Rich text formatting (bold, links, step indicators)
 * - Smooth transitions between steps
 * - Premium full-page design with chat bubbles
 * - RTL (Right-to-Left) support for Hebrew text
 * - Mixed content support (Hebrew + English/URLs)
 * 
 * Props:
 * @param {number} currentStep - Current step index (0-based)
 * @param {boolean} animating - Whether step transition is in progress
 */
const ChatWindow = ({ currentStep, animating }) => {
	const step = steps[currentStep];

	return (
		<div
			style={{
				transition: 'opacity 0.3s ease, transform 0.3s ease',
				opacity: animating ? 0 : 1,
				transform: animating ? 'translateY(8px)' : 'translateY(0)',
			}}
		>
			{/* Message Section with Bot Avatar and Chat Bubble */}
			<div className="message-container" dir="rtl">
				{/* Bot Avatar */}
				<div className="bot-avatar">
					{React.cloneElement(step.icon, {
						size: 22,
						className: "text-white",
						style: { color: 'white' },
					})}
				</div>

				{/* Chat Message Bubble */}
				<div className="message-bubble">
					<div className="message-text" dir="rtl">
						{parseMessage(step.message)}
					</div>
				</div>
			</div>

			{/* Step Image */}
			<div className="step-image-container">
				<img
					src={step.image}
					alt={step.alt}
					className="step-image"
					loading="lazy"
				/>
			</div>
		</div>
	);
};

export default ChatWindow;
