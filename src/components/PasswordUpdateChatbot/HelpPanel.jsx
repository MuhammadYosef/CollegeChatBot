// src/components/PasswordUpdateChatbot/HelpPanel.jsx
import React from "react";
import { Check } from "lucide-react";

/**
 * HelpPanel - Expandable panel showing password requirements and guidelines
 * 
 * Features:
 * - Password security guidelines in Hebrew
 * - Premium styling with gradient background
 * - Visual checkmark indicators for each requirement
 * - Smooth slide-down animation
 * - Easy close functionality
 * 
 * Props:
 * @param {Function} toggleHelp - Function to close/hide the help panel
 */
const HelpPanel = ({ toggleHelp }) => {
	return (
		<div className="help-panel">
			{/* Header with title and close button */}
			<div className="help-panel-header">
				<h2 className="help-panel-title">
					הוראות לסיסמה תקינה
				</h2>
				<button
					onClick={toggleHelp}
					className="help-panel-close"
					aria-label="סגור את חלון ההוראות"
				>
					סגור את החלון
				</button>
			</div>
			
			{/* Password Requirements List */}
			<ul className="help-list" role="list">
				{/* Requirement 1: Minimum length */}
				<li className="help-list-item" role="listitem">
					<span className="help-check-icon">
						<Check size={10} aria-hidden="true" />
					</span>
					<span>השתמש לפחות ב-8 תווים - יותר ארוך זה יותר חזק</span>
				</li>
				
				{/* Requirement 2: Character variety */}
				<li className="help-list-item" role="listitem">
					<span className="help-check-icon">
						<Check size={10} aria-hidden="true" />
					</span>
					<span>כלול אותיות גדולות, מספרים וסמלים</span>
				</li>
				
				{/* Requirement 3: Avoid personal info */}
				<li className="help-list-item" role="listitem">
					<span className="help-check-icon">
						<Check size={10} aria-hidden="true" />
					</span>
					<span>הימנעו משימוש במידע אישי או במילים נפוצות</span>
				</li>
			</ul>
		</div>
	);
};

export default HelpPanel;