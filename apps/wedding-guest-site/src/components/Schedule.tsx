import type { Copy } from '../content';
import { SectionHeading } from './SectionHeading';

export function Schedule({ copy }: { copy: Copy }) {
	return (
		<section id="schedule" className="scroll-mt-20 px-5 py-24">
			<div className="mx-auto max-w-3xl text-center">
				<SectionHeading>{copy.schedule.heading}</SectionHeading>
				<p className="mb-16 font-light text-ink-soft">{copy.schedule.subheading}</p>

				<ol className="relative mx-auto max-w-xl text-left">
					<span aria-hidden className="absolute inset-y-2 left-[4.5rem] w-px bg-gold-soft/60" />
					{copy.schedule.items.map(item => (
						<li key={item.time} className="relative mb-10 flex gap-8 last:mb-0">
							<span className="w-14 shrink-0 pt-0.5 font-display text-xl font-semibold text-gold">{item.time}</span>
							<span
								aria-hidden
								className="absolute left-[4.5rem] top-2.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-gold bg-ivory"
							/>
							<div className="pl-4">
								<h3 className="font-display text-2xl font-medium text-forest">{item.title}</h3>
								<p className="mt-1 text-sm font-light leading-relaxed text-ink-soft">{item.description}</p>
							</div>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}
