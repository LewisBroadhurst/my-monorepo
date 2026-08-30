/**
 * All copy for the site, in English and Polish.
 * Body text is Lorem Ipsum for now — swap it for real copy before sending
 * the link to guests.
 */

export type Lang = 'en' | 'pl';

const LOREM_SHORT =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const LOREM_MEDIUM =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

export interface ScheduleItem {
	time: string;
	title: string;
	description: string;
}

export interface FaqItem {
	question: string;
	answer: string;
}

export interface Copy {
	nav: {
		story: string;
		schedule: string;
		venue: string;
		travel: string;
		rsvp: string;
		faq: string;
	};
	hero: {
		eyebrow: string;
		names: string;
		date: string;
		place: string;
		scroll: string;
	};
	story: {
		heading: string;
		body: string[];
		photoAlt: string;
	};
	gallery: {
		alts: string[];
	};
	schedule: {
		heading: string;
		subheading: string;
		items: ScheduleItem[];
	};
	venue: {
		heading: string;
		name: string;
		address: string;
		body: string;
		mapCta: string;
	};
	travel: {
		heading: string;
		subheading: string;
		cards: { title: string; body: string }[];
	};
	rsvp: {
		heading: string;
		body: string;
		cta: string;
		deadline: string;
	};
	faq: {
		heading: string;
		items: FaqItem[];
	};
	footer: {
		message: string;
		madeWith: string;
	};
}

export const COPY: Record<Lang, Copy> = {
	en: {
		nav: {
			story: 'Our Story',
			schedule: 'Schedule',
			venue: 'Venue',
			travel: 'Travel & Stay',
			rsvp: 'RSVP',
			faq: 'FAQ',
		},
		hero: {
			eyebrow: 'Save the date — we’re getting married',
			names: 'Ania & Jan',
			date: '12 June 2027',
			place: 'Kraków, Poland',
			scroll: 'Scroll for details',
		},
		story: {
			heading: 'Our Story',
			body: [LOREM_MEDIUM, LOREM_SHORT],
			photoAlt: 'Hands of the couple with wedding rings',
		},
		gallery: {
			alts: ['Wedding bouquet', 'Flower-lined ceremony aisle', 'Newlyweds showered in confetti'],
		},
		schedule: {
			heading: 'The Day',
			subheading: 'A rough shape of how the celebration will unfold.',
			items: [
				{ time: '15:00', title: 'Ceremony', description: LOREM_SHORT },
				{ time: '16:30', title: 'Toast & Photos', description: LOREM_SHORT },
				{ time: '18:00', title: 'Wedding Dinner', description: LOREM_SHORT },
				{ time: '21:00', title: 'First Dance & Party', description: LOREM_SHORT },
				{ time: '00:00', title: 'Midnight Snack', description: LOREM_SHORT },
			],
		},
		venue: {
			heading: 'The Venue',
			name: 'Dwór Lorem Ipsum',
			address: 'ul. Przykładowa 12, 30-001 Kraków, Poland',
			body: LOREM_MEDIUM,
			mapCta: 'Open in Google Maps',
		},
		travel: {
			heading: 'Travel & Stay',
			subheading: 'Everything you need to plan your trip to Poland.',
			cards: [
				{ title: 'Getting There', body: LOREM_MEDIUM },
				{ title: 'Where to Stay', body: LOREM_MEDIUM },
				{ title: 'Getting Around', body: LOREM_SHORT },
				{ title: 'Good to Know', body: LOREM_SHORT },
			],
		},
		rsvp: {
			heading: 'RSVP',
			body: LOREM_SHORT,
			cta: 'Let us know you’re coming',
			deadline: 'Please reply by 1 March 2027',
		},
		faq: {
			heading: 'Questions & Answers',
			items: [
				{ question: 'What should I wear?', answer: LOREM_SHORT },
				{ question: 'Can I bring a plus one?', answer: LOREM_SHORT },
				{ question: 'Are children welcome?', answer: LOREM_SHORT },
				{ question: 'What about gifts?', answer: LOREM_SHORT },
				{ question: 'Will there be vegetarian options?', answer: LOREM_SHORT },
			],
		},
		footer: {
			message: 'We can’t wait to celebrate with you.',
			madeWith: 'With love, Ania & Jan',
		},
	},
	pl: {
		nav: {
			story: 'Nasza historia',
			schedule: 'Plan dnia',
			venue: 'Miejsce',
			travel: 'Dojazd i nocleg',
			rsvp: 'RSVP',
			faq: 'Pytania',
		},
		hero: {
			eyebrow: 'Zarezerwujcie datę — bierzemy ślub',
			names: 'Ania & Jan',
			date: '12 czerwca 2027',
			place: 'Kraków, Polska',
			scroll: 'Przewiń po szczegóły',
		},
		story: {
			heading: 'Nasza historia',
			body: [LOREM_MEDIUM, LOREM_SHORT],
			photoAlt: 'Dłonie pary młodej z obrączkami',
		},
		gallery: {
			alts: ['Bukiet ślubny', 'Aleja ceremonii przystrojona kwiatami', 'Para młoda obsypana konfetti'],
		},
		schedule: {
			heading: 'Plan dnia',
			subheading: 'Tak mniej więcej będzie wyglądać nasze świętowanie.',
			items: [
				{ time: '15:00', title: 'Ceremonia', description: LOREM_SHORT },
				{ time: '16:30', title: 'Toast i zdjęcia', description: LOREM_SHORT },
				{ time: '18:00', title: 'Obiad weselny', description: LOREM_SHORT },
				{ time: '21:00', title: 'Pierwszy taniec i zabawa', description: LOREM_SHORT },
				{ time: '00:00', title: 'Nocna przekąska', description: LOREM_SHORT },
			],
		},
		venue: {
			heading: 'Miejsce',
			name: 'Dwór Lorem Ipsum',
			address: 'ul. Przykładowa 12, 30-001 Kraków, Polska',
			body: LOREM_MEDIUM,
			mapCta: 'Otwórz w Google Maps',
		},
		travel: {
			heading: 'Dojazd i nocleg',
			subheading: 'Wszystko, czego potrzebujecie, aby zaplanować podróż.',
			cards: [
				{ title: 'Jak dojechać', body: LOREM_MEDIUM },
				{ title: 'Gdzie nocować', body: LOREM_MEDIUM },
				{ title: 'Transport na miejscu', body: LOREM_SHORT },
				{ title: 'Warto wiedzieć', body: LOREM_SHORT },
			],
		},
		rsvp: {
			heading: 'RSVP',
			body: LOREM_SHORT,
			cta: 'Potwierdźcie przybycie',
			deadline: 'Prosimy o odpowiedź do 1 marca 2027',
		},
		faq: {
			heading: 'Pytania i odpowiedzi',
			items: [
				{ question: 'Jaki obowiązuje strój?', answer: LOREM_SHORT },
				{ question: 'Czy mogę przyjść z osobą towarzyszącą?', answer: LOREM_SHORT },
				{ question: 'Czy dzieci są mile widziane?', answer: LOREM_SHORT },
				{ question: 'Co z prezentami?', answer: LOREM_SHORT },
				{ question: 'Czy będą opcje wegetariańskie?', answer: LOREM_SHORT },
			],
		},
		footer: {
			message: 'Nie możemy się doczekać, aby świętować razem z Wami.',
			madeWith: 'Z miłością, Ania & Jan',
		},
	},
};
