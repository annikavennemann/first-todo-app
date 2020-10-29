import styled from 'styled-components/macro'
import ToDo from './ToDo'
import Form from './Form';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'
import saveLocally from './lib/saveLocally'
import loadLocally from './lib/loadLocally';
// import getToDos from './services/getToDos'

function App() {
  const [toDos, setToDos] = useState(loadLocally('toDos') ?? []) //für useState laden wird local-gespeicherte Daten ein. Beim ersten öffnen wird ein leerer String genutzt.
  
  // useEffect(() => {
  //   getToDos() // function fetched data from server
  //   .then(toDos => setToDos(toDos)) // diese Daten (pink) sind Todos die vom Server kommen
  // }, []) // bei leerem Array wird dies nur 1x ausgeführt

  useEffect(() => {
    saveLocally('toDos', toDos)
  }, [toDos]) // gibt man hier kein Array an wird immer gespeichert, wenn irgend etwas im Dokument neu gerendert wird

  return (
    <Wrapper className="App">
      {toDos.map(({title, isDone, id}, index) => <ToDo onClick={() => toggleToDo(index)} title={title} isDone={isDone} key={id} id={id}/>)}
      <Form onCreateToDo={addToDo} />
    </Wrapper>
  );

  // --------checkbox toggeln-------- 

  function toggleToDo(index) {
    const toDo = toDos[index]
    
    // --------neues Array generieren, das alle zuvorigen PLUS den neuen Wert beinhaltet
    
    setToDos([ 
      ...toDos.slice(0, index), // Array, in dem alle Objekte vor dem Index drin sind
      {...toDo, isDone: !toDo.isDone}, // dieses Objekt soll alles beinhalten was vorher im Array stand und für isDone das Gegenteil was vorher drin war
      ...toDos.slice(index + 1) // + alles was hinter dem Index steht 
    ])
  }

  function addToDo(title) {
    setToDos([...toDos, {title, isDone: false, id: uuidv4() }])
  }
}

export default App;

const Wrapper = styled.div`
    margin: 2em;
`