import { fireEvent, render, screen } from '@testing-library/react';

import App from './app';

describe('App', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<App />);
		expect(baseElement).toBeTruthy();
	});

	it('shows the couple’s names in the hero', () => {
		render(<App />);
		expect(screen.getByRole('heading', { level: 1 }).textContent).toContain('Ania & Jan');
	});

	it('defaults to English and switches to Polish', () => {
		render(<App />);
		expect(screen.getByText('12 June 2027')).toBeTruthy();

		fireEvent.click(screen.getByRole('button', { name: 'PL' }));
		expect(screen.getByText('12 czerwca 2027')).toBeTruthy();
		expect(screen.queryByText('12 June 2027')).toBeNull();
	});
});
