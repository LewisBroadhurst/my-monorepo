import type { Copy } from '../content';
import { SectionHeading } from './SectionHeading';

export function Faq({ copy }: { copy: Copy }) {
	return (
		<section id="faq" className="scroll-mt-20 px-5 py-24">
			<div className="mx-auto max-w-2xl text-center">
				<SectionHeading>{copy.faq.heading}</SectionHeading>

				<div className="text-left">
					{copy.faq.items.map(item => (
						<details key={item.question} className="group border-b border-forest/10 py-5">
							<summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl font-medium text-forest [&::-webkit-details-marker]:hidden">
								{item.question}
								<span aria-hidden className="text-gold transition-transform group-open:rotate-45">
									+
								</span>
							</summary>
							<p className="mt-3 text-sm font-light leading-relaxed text-ink-soft">{item.answer}</p>
						</details>
					))}
				</div>
			</div>
		</section>
	);
}
