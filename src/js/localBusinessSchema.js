import { SITE, BUSINESS } from "@data/client";

export function getLocalBusinessSchema(origin) {
	const sameAs = [];
	if (BUSINESS.socials?.facebook) sameAs.push(BUSINESS.socials.facebook);
	if (BUSINESS.socials?.instagram) sameAs.push(BUSINESS.socials.instagram);
	const streetAddress = [BUSINESS.address.lineOne, BUSINESS.address.lineTwo].filter(Boolean).join(", ");

	return {
		"@context": "https://schema.org",
		"@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
		"name": BUSINESS.name,
		"url": SITE.url,
		"logo": origin + BUSINESS.logo,
		"image": origin + BUSINESS.logo,
		"email": BUSINESS.email,
		"telephone": BUSINESS.phoneForTel,
		"address": {
			"@type": "PostalAddress",
			"streetAddress": streetAddress,
			"addressLocality": BUSINESS.address.city,
			"addressRegion": BUSINESS.address.state,
			"postalCode": BUSINESS.address.zip,
		},
		"sameAs": sameAs,
		"inLanguage": SITE.locale,
	};
}
