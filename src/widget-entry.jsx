// src/widget-entry.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import ChatbotWidget from "./components/PasswordUpdateChatbot/ChatbotWidget";
import "./index.css";

// Global widget initialization
window.YVCPasswordChatbot = {
	init: function (containerId = null) {
		// Create or find container
		let container;
		if (containerId) {
			container = document.getElementById(containerId);
		} else {
			container = document.createElement("div");
			container.id = "yvc-password-chatbot-widget";
			document.body.appendChild(container);
		}

		if (!container) {
			console.error("YVC Chatbot: Container not found");
			return;
		}

		// Render widget
		const root = createRoot(container);
		root.render(<ChatbotWidget />);

		console.log("YVC Password Chatbot initialized");
		return root;
	},

	destroy: function () {
		const widget = document.getElementById("yvc-password-chatbot-widget");
		if (widget) {
			widget.remove();
			console.log("YVC Password Chatbot destroyed");
		}
	},
};

// Auto-initialize if data attribute exists
document.addEventListener("DOMContentLoaded", function () {
	if (document.querySelector("[data-yvc-chatbot]")) {
		window.YVCPasswordChatbot.init();
	}
});
