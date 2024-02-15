import React from 'react';
import { render, screen } from '@testing-library/react';
import Menu from './Menu';
test('verify component', () => {
	render(<Menu />);
	const linkElement = screen.getByText(/Menu/i);
	expect(linkElement).toBeInTheDocument();
});
