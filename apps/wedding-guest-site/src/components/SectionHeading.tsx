export function SectionHeading({ children, light = false }: { children: string; light?: boolean }) {
	return (
		<h2 className={`ornament mb-14 font-display text-4xl font-medium tracking-wide sm:text-5xl ${light ? 'text-ivory' : 'text-forest'}`}>
			{children}
		</h2>
	);
}
