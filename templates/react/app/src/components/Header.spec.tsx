import React from 'react';
import { render, waitForElement } from '@testing-library/react';

import { Header } from './Header';

describe('components/Header', () => {
    it('should contain header text', async () => {
        const { getByText } = render(<Header appTitle="This is a test" />);
        await waitForElement(() => getByText(/^This is a test/));
    });
});
