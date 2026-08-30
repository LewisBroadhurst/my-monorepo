import type { Copy } from '../content';
import { SectionHeading } from './SectionHeading';

export function Venue({ copy }: { copy: Copy }) {
	const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(copy.venue.address)}`;

	return (
		<section id="venue" className="scroll-mt-20 bg-forest px-5 py-24 text-center text-ivory">
			<div className="mx-auto max-w-2xl">
				<SectionHeading light>{copy.venue.heading}</SectionHeading>

				<p className="font-display text-3xl font-medium">{copy.venue.name}</p>
				<p className="mt-2 text-sm uppercase tracking-[0.2em] text-gold-soft">{copy.venue.address}</p>

				<p className="mt-8 font-light leading-relaxed text-ivory/80">{copy.venue.body}</p>

				<a
					href={mapsUrl}
					target="_blank"
					rel="noreferrer"
					className="mt-10 inline-block rounded-full border border-gold-soft px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-gold-soft transition-colors hover:bg-gold-soft hover:text-forest"
				>
					{copy.venue.mapCta}
				</a>
			</div>
		</section>
	);
}
