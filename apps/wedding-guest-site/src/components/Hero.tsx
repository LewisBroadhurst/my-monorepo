import type { Copy } from '../content';
import { PHOTOS } from '../photos';

export function Hero({ copy }: { copy: Copy }) {
	return (
		<section id="top" className="relative flex min-h-svh flex-col items-center justify-center px-5 text-center">
			{/* Soft washed-out photo backdrop */}
			<div aria-hidden className="absolute inset-0 overflow-hidden">
				<img src={PHOTOS.hero} alt="" className="h-full w-full object-cover" />
				<div className="absolute inset-0 bg-ivory/80" />
				<div className="absolute inset-0 bg-gradient-to-b from-ivory via-transparent to-ivory" />
			</div>

			<div className="relative">
				<p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-gold">{copy.hero.eyebrow}</p>

				<h1 className="font-display text-6xl font-medium text-forest sm:text-8xl">{copy.hero.names}</h1>

				<div className="mt-8 flex items-center justify-center gap-5 text-ink-soft">
					<span className="h-px w-10 bg-gold-soft" aria-hidden />
					<p className="font-display text-2xl italic sm:text-3xl">{copy.hero.date}</p>
					<span className="h-px w-10 bg-gold-soft" aria-hidden />
				</div>

				<p className="mt-3 text-sm uppercase tracking-[0.3em] text-ink-soft">{copy.hero.place}</p>
			</div>

			<a
				href="#story"
				className="absolute bottom-10 flex flex-col items-center gap-2 text-[0.65rem] uppercase tracking-[0.25em] text-ink-soft transition-colors hover:text-forest"
			>
				{copy.hero.scroll}
				<span aria-hidden className="animate-bounce text-base">
					↓
				</span>
			</a>
		</section>
	);
}
