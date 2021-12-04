import {render, screen, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Header from '../Header/Header';

afterEach(() => {
    cleanup();
});

test('should render Header', () => { 

    render(<Header/>);
    const todoElement = screen.getByTestId('header');
    expect(todoElement).toBeInTheDocument();

    
});










