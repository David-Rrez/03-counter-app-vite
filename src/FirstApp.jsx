import PropTypes from 'prop-types'
// const getNewMessage = (nombre) =>{
//     return 'Hola '+ nombre;
// }

const newMessage = 123;
export const FirstApp = ({
  title,
  subtitle='El mar es azul',
  name}) => {
// console.log(props)
  return (
    <>
        <h1 data-testid="test-title">{title}</h1>
        <p>{subtitle}</p>
        <p>{name}</p>
    </>
  )
}

FirstApp.propTypes ={
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired 
}

FirstApp.defaultProps = {
  // title: 'Sin titulo',
  name:'David',
  subtitle:'Hola Soy un Subtitulo',
}