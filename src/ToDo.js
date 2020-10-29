import PropTypes from 'prop-types'
import styled from 'styled-components/macro';

export default ToDo

// watch out for Lower- & Uppercase
ToDo.propTypes = {
    title: PropTypes.string.isRequired,
    isDone: PropTypes.bool
}

function ToDo({title, isDone, onClick}) {

    return <Wrapper>
        <label>
        <BigCheckbox type="checkbox" checked={isDone} onChange={onClick}/>
        {title}
        </label>
    </Wrapper>
}

const Wrapper = styled.div`
    margin: 0.5em 0;
    font-size: 1.2em;
    color: plum;
    font-weight: lighter;
`

const BigCheckbox = styled.input`
transform: scale (1.5)
`
