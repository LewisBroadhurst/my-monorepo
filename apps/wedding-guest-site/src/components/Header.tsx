import type { Copy, Lang } from '../content';

interface HeaderProps {
	copy: Copy;
	lang: Lang;
	onLangChange: (lang: Lang) => void;
}

const NAV_LINKS: { id: string; key: keyof Copy['nav'] }[] = [
	{ id: 'story', key: 'story' },
	{ id: 'schedule', key: 'schedule' },
	{ id: 'venue', key: 'venue' },
	{ id: 'travel', key: 'travel' },
	{ id: 'rsvp', key: 'rsvp' },
	{ id: 'faq', key: 'faq' },
];

export function Header({ copy, lang, onLangChange }: HeaderProps) {
	return (
		<header className="fixed inset-x-0 top-0 z-50 border-b border-forest/10 bg-ivory/85 backdrop-blur">
			<div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
				<a href="#top" className="font-display text-xl font-semibold tracking-widest text-forest">
					A&nbsp;&amp;&nbsp;J
				</a>

				<nav className="hidden items-center gap-7 md:flex" aria-label="Main">
					{NAV_LINKS.map(({ id, key }) => (
						<a
							key={id}
							href={`#${id}`}
							className="text-xs font-medium uppercase tracking-[0.2em] text-ink-soft transition-colors hover:text-forest"
						>
							{copy.nav[key]}
						</a>
					))}
				</nav>

				<div
					className="flex items-center overflow-hidden rounded-full border border-forest/25 text-xs font-medium uppercase tracking-widest"
					role="group"
					aria-label="Language"
				>
					{(['en', 'pl'] as const).map(code => (
						<button
							key={code}
							type="button"
							onClick={() => onLangChange(code)}
							aria-pressed={lang === code}
							className={`px-3 py-1.5 transition-colors ${lang === code ? 'bg-forest text-ivory' : 'text-forest hover:bg-forest/10'}`}
						>
							{code.toUpperCase()}
						</button>
					))}
				</div>
			</div>
		</header>
	);
}
