import { SITE, BUSINESS } from "@data/client";

export function getLocalBusinessSchema(origin) {
	const sameAs = [];
	if (BUSINESS.socials?.facebook) sameAs.push(BUSINESS.socials.facebook);
	if (BUSINESS.socials?.google) sameAs.push(BUSINESS.socials.google);
	if (BUSINESS.socials?.bbb) sameAs.push(BUSINESS.socials.bbb);
	if (BUSINESS.socials?.instagram) sameAs.push(BUSINESS.socials.instagram);
	const streetAddress = [BUSINESS.address.lineOne, BUSINESS.address.lineTwo].filter(Boolean).join(", ");
	const openingHoursSpecification = (BUSINESS.hours || []).map((entry) => ({
		"@type": "OpeningHoursSpecification",
		"dayOfWeek": `https://schema.org/${entry.dayOfWeek}`,
		"opens": entry.opens,
		"closes": entry.closes,
	}));
	const areaServed = (BUSINESS.serviceAreas || []).map((area) => ({
		"@type": "AdministrativeArea",
		"name": area,
	}));

	return {
		"@context": "https://schema.org",
		"@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
		"name": BUSINESS.name,
		"url": SITE.url,
		"logo": origin + BUSINESS.logo,
		"image": origin + BUSINESS.logo,
		"email": BUSINESS.email,
		"telephone": BUSINESS.phoneForTel,
		"priceRange": "$$",
		"address": {
			"@type": "PostalAddress",
			"streetAddress": streetAddress,
			"addressLocality": BUSINESS.address.city,
			"addressRegion": BUSINESS.address.state,
			"postalCode": BUSINESS.address.zip,
		},
		"openingHoursSpecification": openingHoursSpecification,
		"areaServed": areaServed,
		"contactPoint": [
			{
				"@type": "ContactPoint",
				"telephone": BUSINESS.phoneForTel,
				"contactType": "customer service",
				"areaServed": "US-FL",
				"availableLanguage": ["en"],
			},
		],
		"sameAs": sameAs,
		"inLanguage": SITE.locale,
	};
}
