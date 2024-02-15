import React from 'react';
import { render, screen } from '@testing-library/react';
import AdoptDetails from './AdoptDetails';
test('verify component', () => {
	render(<AdoptDetails />);
	const linkElement = screen.getByText(/AdoptDetails/i);
	expect(linkElement).toBeInTheDocument();
});
