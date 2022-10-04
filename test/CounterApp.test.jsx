import { fireEvent, render,screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en <CounterApp/>', () => { 
    const counterValue = 100;
    test('debe de hace match con el snapshot', () => { 
        const {container} = render(<CounterApp value={counterValue}/>);
        expect(container).toMatchSnapshot();
     })
     test('debe de mostrar el valor de 100', () => { 
        render(<CounterApp value={counterValue}/>);
        expect(screen.getByText(counterValue)).toBeTruthy();
        expect(screen.getByRole('heading',{level:2}).innerHTML).toContain('100');
     })
     test('debe incrementare con el boton +1', () => { 
        render(<CounterApp value={counterValue}/>);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('101')).toBeTruthy();
      })
      test('debe decrementar con el boton -1', () => { 
        render(<CounterApp value={counterValue}/>);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('99')).toBeTruthy();
      })
      test('debe de funcionar el boton reset', () => { 
        render(<CounterApp value={355}/>);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        // fireEvent.click(screen.getByText('Reset'));
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
        expect(screen.getByText(355)).toBeTruthy();
      })
 })