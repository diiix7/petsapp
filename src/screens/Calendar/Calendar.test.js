import React from 'react';
import { render, screen } from '@testing-library/react';
import Calendar from './Calendar';
test('verify component', () => {
	render(<Calendar />);
	const linkElement = screen.getByText(/Calendar/i);
	expect(linkElement).toBeInTheDocument();
});
