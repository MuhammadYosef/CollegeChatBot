// src/components/PasswordUpdateChatbot/PasswordUpdateChatbot.jsx
import React, { useState } from "react";
import Header from "./Header";
import ChatWindow from "./ChatWindow";
import StepIndicator from "./StepIndicator";
import NavigationControls from "./NavigationControls";
import HelpPanel from "./HelpPanel";
import { steps } from "../../data/steps";
import "../../App.css";

/**
 * PasswordUpdateChatbot - Full-page chatbot component for password update guidance
 * 
 * Features:
 * - Step-by-step guided password update process
 * - Smooth animations between steps
 * - Help panel with password requirements
 * - Progress indication with animated bar
 * - Premium full-page responsive design
 * - Navigation controls with validation
 */
const PasswordUpdateChatbot = () => {
	// Current step in the password update process (0-based index)
	const [currentStep, setCurrentStep] = useState(0);
	
	// Animation state to prevent rapid step changes and provide smooth transitions
	const [animating, setAnimating] = useState(false);
	
	// Help panel visibility state
	const [showHelp, setShowHelp] = useState(false);

	/**
	 * Navigate to the next step with animation
	 * Prevents navigation if already at the last step or during animation
	 */
	const handleNextStep = () => {
		if (currentStep < steps.length - 1 && !animating) {
			setAnimating(true);
			setTimeout(() => {
				setCurrentStep(currentStep + 1);
				setAnimating(false);
			}, 300);
		}
	};

	/**
	 * Navigate to the previous step with animation
	 * Prevents navigation if already at the first step or during animation
	 */
	const handlePrevStep = () => {
		if (currentStep > 0 && !animating) {
			setAnimating(true);
			setTimeout(() => {
				setCurrentStep(currentStep - 1);
				setAnimating(false);
			}, 300);
		}
	};

	/**
	 * Toggle help panel visibility
	 */
	const toggleHelp = () => setShowHelp(!showHelp);

	return (
		<div className="chatbot-page">
			{/* Header Section */}
			<div className="shrink-0">
				<Header 
					showHelp={showHelp} 
					toggleHelp={toggleHelp}
				/>
				{/* Conditional Help Panel */}
				{showHelp && <HelpPanel toggleHelp={toggleHelp} />}
			</div>

			{/* Main Content Section - Scrollable */}
			<div className="chatbot-content">
				<ChatWindow 
					currentStep={currentStep} 
					animating={animating} 
				/>
			</div>

			{/* Footer Section */}
			<div className="chatbot-footer">
				{/* Step Counter */}
				<div className="step-counter">
					שלב {currentStep + 1} מתוך {steps.length}
				</div>

				{/* Step Progress Indicator */}
				<StepIndicator 
					steps={steps} 
					currentStep={currentStep} 
				/>
				
				{/* Navigation Controls */}
				<NavigationControls
					currentStep={currentStep}
					stepsLength={steps.length}
					handlePrevStep={handlePrevStep}
					handleNextStep={handleNextStep}
					animating={animating}
				/>
				
				{/* Animated Progress Bar */}
				<div className="progress-bar-track">
					<div
						className="progress-bar-fill"
						style={{ 
							width: `${((currentStep + 1) / steps.length) * 100}%` 
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default PasswordUpdateChatbot;