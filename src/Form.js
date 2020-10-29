import styled from 'styled-components/macro'

export default function Form({onCreateToDo}) {

    function handleSubmit(event) {
        event.preventDefault()
        const formElement = event.target // Form-Element, das submit bekommen hat
        const inputElement = formElement.title // .todo kommt vom name aus input - so haben wir Zugriff auf HTML-Element. Alternativ: event.target.todo
        
        onCreateToDo(inputElement.value) // Verknüpfung, um form-input in App rauszureichen
        formElement.reset()
        inputElement.focus()
    }

    return <FormStyled onSubmit={handleSubmit}>
        <label>
            Add your To Do:
            <input name="title" type="text" placeholder = "add to do here"/>
        </label>
        <ButtonStyled>Create</ButtonStyled>
    </FormStyled>
}

const FormStyled = styled.form`
    text-transform: uppercase;
    display: grid;
    border: 1px solid #eee;
    margin-top: 3em;
    padding: 1em;
    border-radius: 5px;

    label {
        font-size: 1.2em;
        color: #aaa;
        font-weight: lighter;
        margin-right: 3em;
    }

    input {
        margin: 2em 1em 2em 0;
        font-size: 0.6em;
        font-style: italic;
    }
`

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