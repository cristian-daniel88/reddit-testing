import {render, screen, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Main from '../Main/Main';


test('should render Main', () => { 

    render(<Main/>);
    const todoElement = screen.getByTestId('main');
    expect(todoElement).toBeInTheDocument();

    
});
