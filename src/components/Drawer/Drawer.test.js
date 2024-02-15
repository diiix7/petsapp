import React from 'react';
import { render, screen } from '@testing-library/react';
import Drawer from './Drawer';
test('verify component', () => {
	render(<Drawer />);
	const linkElement = screen.getByText(/Drawer/i);
	expect(linkElement).toBeInTheDocument();
});
