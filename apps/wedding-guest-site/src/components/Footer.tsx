import type { Copy } from '../content';

export function Footer({ copy }: { copy: Copy }) {
	return (
		<footer className="bg-forest px-5 py-16 text-center text-ivory">
			<p className="font-display text-2xl italic">{copy.footer.message}</p>
			<p className="mt-4 text-xs uppercase tracking-[0.3em] text-gold-soft">{copy.footer.madeWith}</p>
		</footer>
	);
}
