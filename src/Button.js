import PropTypes from 'prop-types'
import styled from 'styled-components/macro';

export default Button

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string
}

function Button({text, color}) {
    return <div>
        <ButtonStyled color={color}>{text}</ButtonStyled>
    </div>
}

const ButtonStyled = styled.button`
    background: ${(props) => props.color ?? '#C9DDFF'};
    margin: 10px 5px;
    padding: 0.5em 1em;
    border-radius: 5px;
    border: none;
    text-transform: uppercase;
    font-size: 1.1em;
    font-weight: lighter;
    opacity: 0.6;
    cursor: pointer;
    
    &:hover {opacity: 1}
`