import { useState } from 'react';
import { COPY, type Lang } from '../content';
import { Faq, Footer, Gallery, Header, Hero, Rsvp, Schedule, Story, Travel, Venue } from '../components';

export function App() {
	const [lang, setLang] = useState<Lang>('en');
	const copy = COPY[lang];

	return (
		<div lang={lang}>
			<Header copy={copy} lang={lang} onLangChange={setLang} />
			<main>
				<Hero copy={copy} />
				<Story copy={copy} />
				<Schedule copy={copy} />
				<Gallery copy={copy} />
				<Venue copy={copy} />
				<Travel copy={copy} />
				<Rsvp copy={copy} />
				<Faq copy={copy} />
			</main>
			<Footer copy={copy} />
		</div>
	);
}

export default App;
