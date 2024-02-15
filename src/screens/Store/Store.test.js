import React from 'react';
import { render, screen } from '@testing-library/react';
import Store from './Store';
test('verify component', () => {
	render(<Store />);
	const linkElement = screen.getByText(/Store/i);
	expect(linkElement).toBeInTheDocument();
});
