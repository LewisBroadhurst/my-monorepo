import type { Copy } from '../content';
import { PHOTOS } from '../photos';

export function Gallery({ copy }: { copy: Copy }) {
	return (
		<section aria-label="Photos" className="px-5 pb-24">
			<div className="mx-auto grid max-w-4xl grid-cols-3 items-center gap-4 sm:gap-6">
				{PHOTOS.gallery.map((src, i) => (
					<img
						key={src}
						src={src}
						alt={copy.gallery.alts[i]}
						loading="lazy"
						className={`w-full rounded-xl object-cover ${i === 1 ? 'aspect-[3/4]' : 'aspect-square'}`}
					/>
				))}
			</div>
		</section>
	);
}
