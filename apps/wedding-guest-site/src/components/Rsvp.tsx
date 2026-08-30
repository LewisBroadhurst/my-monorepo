import type { Copy } from '../content';
import { SectionHeading } from './SectionHeading';

export function Rsvp({ copy }: { copy: Copy }) {
	return (
		<section id="rsvp" className="scroll-mt-20 bg-parchment px-5 py-24 text-center">
			<div className="mx-auto max-w-xl">
				<SectionHeading>{copy.rsvp.heading}</SectionHeading>
				<p className="font-light leading-relaxed text-ink-soft">{copy.rsvp.body}</p>

				<a
					href="mailto:hello@example.com"
					className="mt-10 inline-block rounded-full bg-forest px-10 py-4 text-xs font-medium uppercase tracking-[0.2em] text-ivory transition-colors hover:bg-forest-soft"
				>
					{copy.rsvp.cta}
				</a>

				<p className="mt-6 font-display text-lg italic text-gold">{copy.rsvp.deadline}</p>
			</div>
		</section>
	);
}
