// src/components/PasswordUpdateChatbot/Header.jsx
import React from "react";
import { HelpCircle } from "lucide-react";
import CircularImageIcon from "./CircularImageIcon";

/**
 * Header - Top section of the full-page chatbot
 * 
 * Features:
 * - Premium gradient background with decorative elements
 * - College branding with logo and title
 * - Help button toggle
 * - Hebrew text support with proper RTL layout
 * - Accessibility features with proper ARIA labels
 * 
 * Props:
 * @param {Function} toggleHelp - Function to toggle help panel visibility
 * @param {boolean} showHelp - Whether help panel is currently visible
 */
const Header = ({ toggleHelp, showHelp }) => {
	return (
		<div className="chatbot-header">
			{/* Left Section: Help Button */}
			<div className="header-left">
				<button
					onClick={toggleHelp}
					className="header-btn"
					aria-label="הצג הוראות עזרה"
					aria-expanded={showHelp}
				>
					<HelpCircle size={20} />
				</button>
				
				<span className="header-badge">
					{showHelp ? "סגור הוראות" : "הוראות"}
				</span>
			</div>
			
			{/* Right Section: Title and College Logo */}
			<div className="header-right">
				<h1 className="header-title">
					עוזר להחלפת הסיסמה
				</h1>
				
				{/* College Logo */}
				<a
					href="https://www.yvc.ac.il/"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="אתר המכללה"
				>
					<CircularImageIcon size={48} className="flex-shrink-0" />
				</a>
			</div>
		</div>
	);
};

export default Header;
