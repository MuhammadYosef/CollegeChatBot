// src/components/PasswordUpdateChatbot/CircularImageIcon.jsx
import React from "react";
import imageSrc from "../../assets/Logo.jpg";

/**
 * CircularImageIcon - Reusable circular image component for displaying logos/avatars
 * 
 * Features:
 * - Circular clipping with overflow hidden
 * - Customizable size
 * - Responsive image scaling
 * - Fallback background color
 * - Proper image optimization
 * 
 * Props:
 * @param {number} size - Diameter of the circular container in pixels (default: 70)
 * @param {string} className - Additional CSS classes to apply
 */
const CircularImageIcon = ({ size = 70, className = "" }) => {
	return (
		<div
			className={`rounded-full overflow-hidden flex items-center justify-center bg-indigo-200 ${className}`}
			style={{ width: size, height: size }}
		>
			{/* College Logo Image */}
			<img 
				src={imageSrc} 
				alt="לוגו המכללה" 
				className="h-full w-full object-cover"
			/>
		</div>
	);
};

export default CircularImageIcon;