// src/components/PasswordUpdateChatbot/StepIndicator.jsx
import React from 'react';

/**
 * StepIndicator - Visual progress indicator showing current position in the step flow
 * 
 * Features:
 * - Premium dot-style progress indicator
 * - Different visual states for completed, current, and upcoming steps
 * - Smooth transitions between states with spring animation
 * - Active dot glow effect
 * 
 * Props:
 * @param {Array} steps - Array of all steps in the process
 * @param {number} currentStep - Current step index (0-based)
 */
const StepIndicator = ({ steps, currentStep }) => {
	return (
		<div className="step-indicator-bar" role="progressbar" aria-valuenow={currentStep + 1} aria-valuemin={1} aria-valuemax={steps.length}>
			{steps.map((_, index) => (
				<div
					key={index}
					className={`step-dot ${
						index === currentStep
							? 'step-dot--active'
							: index < currentStep
								? 'step-dot--completed'
								: 'step-dot--upcoming'
					}`}
					aria-label={`שלב ${index + 1} ${
						index === currentStep ? 'נוכחי' :
						index < currentStep ? 'הושלם' : 'בהמתנה'
					}`}
				/>
			))}
		</div>
	);
};

export default StepIndicator;