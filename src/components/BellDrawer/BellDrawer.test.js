import React from 'react';
import { render, screen } from '@testing-library/react';
import BellDrawer from './BellDrawer';
test('verify component', () => {
	render(<BellDrawer />);
	const linkElement = screen.getByText(/BellDrawer/i);
	expect(linkElement).toBeInTheDocument();
});
