import { useId } from 'react';

/** Soft watercolour clouds glowing behind a heading. */
export function WatercolorWash({ light = false }: { light?: boolean }) {
	const id = useId();
	const stops = light
		? [
				{ key: 'a', color: '#cbb289', opacity: 0.3 },
				{ key: 'b', color: '#8aa48f', opacity: 0.35 },
				{ key: 'c', color: '#faf7f2', opacity: 0.18 },
			]
		: [
				{ key: 'a', color: '#d9a5a0', opacity: 0.4 },
				{ key: 'b', color: '#8aa48f', opacity: 0.35 },
				{ key: 'c', color: '#cbb289', opacity: 0.4 },
			];

	return (
		<svg
			aria-hidden
			viewBox="0 0 340 200"
			className="pointer-events-none absolute left-1/2 top-1/2 h-auto w-[24rem] max-w-[90vw] -translate-x-1/2 -translate-y-1/2"
		>
			<defs>
				{stops.map(({ key, color, opacity }) => (
					<radialGradient key={key} id={`${id}-${key}`}>
						<stop offset="0%" stopColor={color} stopOpacity={opacity} />
						<stop offset="100%" stopColor={color} stopOpacity="0" />
					</radialGradient>
				))}
			</defs>
			<ellipse cx="120" cy="80" rx="110" ry="60" fill={`url(#${id}-a)`} />
			<ellipse cx="230" cy="70" rx="100" ry="55" fill={`url(#${id}-b)`} />
			<ellipse cx="180" cy="120" rx="90" ry="50" fill={`url(#${id}-c)`} />
		</svg>
	);
}

export function SectionHeading({ children, light = false }: { children: string; light?: boolean }) {
	return (
		<div className="relative mb-14 inline-block">
			<WatercolorWash light={light} />
			<h2
				className={`ornament relative font-display text-4xl font-medium tracking-wide sm:text-5xl ${light ? 'text-ivory' : 'text-forest'}`}
			>
				{children}
			</h2>
		</div>
	);
}
