import type { Copy } from '../content';
import { SectionHeading } from './SectionHeading';

export function Travel({ copy }: { copy: Copy }) {
	return (
		<section id="travel" className="scroll-mt-20 px-5 py-24">
			<div className="mx-auto max-w-4xl text-center">
				<SectionHeading>{copy.travel.heading}</SectionHeading>
				<p className="mb-14 font-light text-ink-soft">{copy.travel.subheading}</p>

				<div className="grid gap-6 text-left sm:grid-cols-2">
					{copy.travel.cards.map(card => (
						<article key={card.title} className="rounded-2xl border border-forest/10 bg-parchment/60 p-7">
							<h3 className="mb-3 font-display text-2xl font-medium text-forest">{card.title}</h3>
							<p className="text-sm font-light leading-relaxed text-ink-soft">{card.body}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
