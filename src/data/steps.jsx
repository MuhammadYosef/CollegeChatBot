import React from "react";
import {
	MessageSquare,
	User,
	Shield,
	AlertTriangle,
	Check,
} from "lucide-react";
import image1 from "../assets/imageOfStep1_.jpg";
import image2 from "../assets/imageOfStep2.jpg";
import image3 from "../assets/imageOfStep3.jpg";
import image4 from "../assets/imageOfStep4.jpg";
import image5 from "../assets/imageOfStep5_.jpg";
import image6 from "../assets/imageOfStep6.jpg";
import image7 from "../assets/imageOfStep7_.jpg";
import image8 from "../assets/imageOfStep8_.png";

export const steps = [
	{
		message:
			"שלום, אני העוזר הווירטואלי שלך, אעזור לך בתהליך החלפת הסיסמה." +
			"\n**להתחלת התהליך יש ללחוץ על כפתור הבא**",
		image: image1,
		alt: "Welcome",
		icon: <MessageSquare size={24} />,
	},
	{
		message:
			" צעד 1: לאחר כניסה לקישור " +
			"\n https://college.yvc.ac.il/my.policy " +
			"\n **'click here'** יש ללחוץ על",
		image: image2,
		alt: "reset password page",
		icon: <User size={24} />,
	},
	{
		message:
			// "צעד 2: **נא לרשום שם משתמש** -> **מספר תעודת זהות** -> **ללחוץ על מרובע אני לא רובוט** ->" +
			// "** שלח **",
			"צעד 2: יש להזין שם משתמש ומספר תעודת זהות" +
			" לאחר מכן לסמן תיבת האימות וללחוץ שלח",
		// ".יש להזין שם משתמש ומספר תעודת זהות" +
		// "\n  לאחר מכן יש לסמן את תיבת האימות וללחוץ על " +
		// "**שלח**",
		image: image3,
		alt: "Profile dropdown with Account Settings option highlighted",
		icon: <User size={24} />,
	},
	{
		message:
			" .צעד 3: יש לבחור את הדרך שבה יתקבל הקוד החד פעמי " +
			"\n **SMS** מומלץ לוודא שיש **קליטה** ואז לבחור",
		image: image4,
		alt: "Choose to send SMS",
		icon: <Shield size={24} />,
	},
	{
		message:
			" צעד 4: נא לשים לב להודעות של הטלפון תגיע הודעה רגילה SMS שמכילה סימסה חד פעמית," +
			"** מצורפת הודעה לדוגמא: **",
		image: image5,
		alt: "OTP Message",
		icon: <Shield size={24} />,
	},
	{
		message:
			"צעד 5: יש להזין את שם המשתמש ואת הקוד החד פעמי שהתקבל כמסרון או באפליקציית האימות",
		image: image6,
		alt: "Enter Username then OTP message then click send",
		icon: <Shield size={24} />,
	},
	{
		message:
			"צעד 6: כעת יש לבחור סיסמה חדשה, **הסיסמה צריכה לעמוד בתנאים המפורטים**",

		image: image7,
		alt: "Password change form with new password field and password strength indicator",
		icon: <AlertTriangle size={24} />,
	},
	{
		message:
			"מזל טוב! הסיסמה שלך עודכנה בהצלחה. מטעמי אבטחה, תתנתק ותצטרך להיכנס עם הסיסמה החדשה שלך," +
			"**  לעזרה נוספת**" +
			"\n**בטלפון** 04-6423472" +
			" \nsupport@yvc.ac.il **במייל**",
		image: image8,
		alt: "Success confirmation screen with login button",
		icon: <Check size={24} />,
	},
];
