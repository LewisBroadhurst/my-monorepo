import type { Copy } from '../content';
import { PHOTOS } from '../photos';
import { SectionHeading } from './SectionHeading';

export function Story({ copy }: { copy: Copy }) {
	return (
		<section id="story" className="scroll-mt-20 bg-parchment px-5 py-24">
			<div className="mx-auto grid max-w-4xl items-center gap-12 md:grid-cols-2">
				{/* Arched, gold-framed photo */}
				<div className="mx-auto w-64 rounded-t-full border border-gold-soft p-3 sm:w-72">
					<img src={PHOTOS.story} alt={copy.story.photoAlt} className="aspect-[3/4] w-full rounded-t-full object-cover" loading="lazy" />
				</div>

				<div className="text-center md:text-left">
					<SectionHeading>{copy.story.heading}</SectionHeading>
					{copy.story.body.map((paragraph, i) => (
						<p key={i} className="mb-5 font-light leading-relaxed text-ink-soft">
							{paragraph}
						</p>
					))}
				</div>
			</div>
		</section>
	);
}
