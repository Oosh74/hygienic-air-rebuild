// ===== SITE CONSTANTS =====
export const SITE = {
	title: "Hygienic Air, Inc",
	tagline: "Professional Air Duct, Dryer Vent, and Chimney Cleaning",
	description:
		"Hygienic Air, Inc provides residential, commercial, and industrial air duct, dryer vent, chimney, and overhead cleaning services across Central Florida.",
	url: "https://www.hygienicairplus.com",
	author: "Hygienic Air, Inc",
	locale: "en-US",
};

// ===== BUSINESS INFO =====
export const BUSINESS = {
	name: SITE.title,
	email: "info@hygienicairplus.com",
	phoneForTel: "+1-352-801-2788",
	phoneFormatted: "(352) 801-2788",
	logo: "/assets/favicons/android-chrome-512x512.png",
	address: {
		lineOne: "1880 Nature Cove Ln",
		lineTwo: "",
		city: "Clermont",
		state: "FL",
		zip: "34711",
		mapLink:
			"https://www.google.com/maps/place/Hygienic+Air+Plus/@28.5261222,-81.7240563,17z",
	},
	socials: {
		facebook: "https://www.facebook.com/hygienicair",
		google: "http://google.com/search?q=Hygienic+Air+Plus",
		bbb: "https://www.bbb.org/us/fl/clermont/profile/air-duct-cleaning/hygienic-air-plus-0733-90445717",
	},
	hours: [
		{ dayOfWeek: "Monday", opens: "07:00", closes: "20:00" },
		{ dayOfWeek: "Tuesday", opens: "07:00", closes: "20:00" },
		{ dayOfWeek: "Wednesday", opens: "07:00", closes: "20:00" },
		{ dayOfWeek: "Thursday", opens: "07:00", closes: "20:00" },
		{ dayOfWeek: "Friday", opens: "07:00", closes: "20:00" },
		{ dayOfWeek: "Saturday", opens: "07:00", closes: "19:00" },
		{ dayOfWeek: "Sunday", opens: "08:00", closes: "17:00" },
	],
	serviceAreas: [
		"Central Florida",
		"Orlando Market",
		"Tampa Market",
		"Lakeland Market",
		"Ocala Market",
		"Daytona Market",
		"Melbourne Market",
		"Spring Hill Market",
		"Homosassa Springs Market",
		"Port St. Lucie Market",
		"Sebring Market",
		"Sarasota Market",
		"Gainesville Market",
		"The Villages Market",
		"Palm Coast Market",
		"DeLand / Deltona Market",
	],
};

// ===== SEO DEFAULTS =====
export const SEO = {
	title: SITE.title,
	description: SITE.description,
};

// ===== OPEN GRAPH DEFAULTS =====
export const OG = {
	locale: "en_US",
	image: "/images/heroes/home-hero.jpg",
};
