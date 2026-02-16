// src/components/PasswordUpdateChatbot/NavigationControls.jsx
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * NavigationControls - Previous/Next navigation buttons for the chatbot steps
 * 
 * Features:
 * - Premium button styling with gradient and shadows
 * - Disabled states for first/last steps
 * - Loading states during animations
 * - Hebrew text with proper RTL support
 * - Accessibility features
 * - Directional hover animations
 * 
 * Props:
 * @param {number} currentStep - Current step index (0-based)
 * @param {number} stepsLength - Total number of steps
 * @param {Function} handlePrevStep - Function to go to previous step
 * @param {Function} handleNextStep - Function to go to next step
 * @param {boolean} animating - Whether step transition is in progress
 */
const NavigationControls = ({
	currentStep,
	stepsLength,
	handlePrevStep,
	handleNextStep,
	animating,
}) => {
	return (
		<div className="nav-controls">
			{/* Previous Button */}
			<button
				onClick={handlePrevStep}
				disabled={currentStep === 0 || animating}
				className="nav-btn nav-btn--prev"
				aria-label="חזור לשלב הקודם"
			>
				<ChevronLeft size={18} />
				הקודם
			</button>

			{/* Next/Finish Button */}
			<button
				onClick={handleNextStep}
				disabled={currentStep === stepsLength - 1 || animating}
				className="nav-btn nav-btn--next"
				aria-label={
					currentStep === stepsLength - 2 
						? "סיים את התהליך" 
						: "עבור לשלב הבא"
				}
			>
				{currentStep === stepsLength - 2 ? "סיום" : "הבא"}
				<ChevronRight size={18} />
			</button>
		</div>
	);
};

export default NavigationControls;