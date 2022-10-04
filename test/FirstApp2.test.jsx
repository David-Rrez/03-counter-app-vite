const { render,screen } = require("@testing-library/react");
const { FirstApp } = require("../src/FirstApp");

describe('Pruebas en FirstApp2', () => { 
    const title ='Hola, soy Goku';
    const subtitle = 'Hola, soy un subtitulo';
    test('debe de hacer match con el snapshot', () => { 
        const {container,getByText,getByTestId} = render(<FirstApp title={title}/>);
        expect(container).toMatchSnapshot();
    })
    test('debe de mostrar el mensaje "Hola, Soy Goku"', () => { 
        render(<FirstApp title={title}/>);
        expect(screen.getByText(title)).toBeTruthy();
    })
    test('debe de mostrar el titulo en un h1"', () => { 
        render(<FirstApp title={title}/>);
        expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(title);
    })
    test('debe de mostrar el subtitulo en los props"', () => { 
        render(
        <FirstApp 
        title={title}
        subtitle={subtitle}
        />
        );
        expect(screen.getAllByText(subtitle).length).toBe(1);
    })
 })