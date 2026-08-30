import type { Copy } from '../content';
import { SectionHeading } from './SectionHeading';

export function Story({ copy }: { copy: Copy }) {
	return (
		<section id="story" className="scroll-mt-20 bg-parchment px-5 py-24 text-center">
			<div className="mx-auto max-w-2xl">
				<SectionHeading>{copy.story.heading}</SectionHeading>
				{copy.story.body.map((paragraph, i) => (
					<p key={i} className="mb-5 font-light leading-relaxed text-ink-soft">
						{paragraph}
					</p>
				))}
			</div>
		</section>
	);
}
