import React from 'react';
import { render, screen } from '@testing-library/react';
import HeaderBox from './HeaderBox';
test('verify component', () => {
	render(<HeaderBox />);
	const linkElement = screen.getByText(/HeaderBox/i);
	expect(linkElement).toBeInTheDocument();
});
