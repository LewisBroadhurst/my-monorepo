/**
 * Stock placeholder photos, hot-linked from Unsplash (like the Lorem Ipsum
 * copy, these are stand-ins — swap for real photos before sharing the site).
 */

const unsplash = (id: string, width: number) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=75`;

export const PHOTOS = {
	/** Couple holding hands in soft green light — hero backdrop. */
	hero: unsplash('1520854221256-17451cc331bf', 1920),
	/** Hands with wedding rings — our story. */
	story: unsplash('1465495976277-4387d4b0b4c6', 900),
	/** Garden gazebo wrapped in greenery — venue backdrop. */
	venue: unsplash('1523438885200-e635ba2c371e', 1920),
	/** Gallery strip. */
	gallery: [
		unsplash('1519741497674-611481863552', 800),
		unsplash('1469371670807-013ccf25f16a', 800),
		unsplash('1583939003579-730e3918a45a', 800),
	],
};
