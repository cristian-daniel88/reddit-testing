import {render, screen, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Aside from '../Aside/Aside';



test('should render Aside', () => { 
    render(<Aside/>);
    const todoElement = screen.getByTestId('aside');
    expect(todoElement).toBeInTheDocument();    
});


