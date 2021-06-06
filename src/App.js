import { useState } from 'react';
import './App.css';

function App() {

  const [ToDos, setToDos] = useState("");
  const [InToDo, InsetToDos] = useState([]);

  const getInputValue = (e) => {
    setToDos(e.target.value);
  }

  const formHandler = (e) => {
    e.preventDefault();
    if(ToDos === "") {
      alert("BOŞ GİRİLDİ");
    } else {
      InsetToDos([...InToDo, { text: ToDos, id: Math.random() * 300 }]);
      setToDos("");
    }
  
  }

  const deleteToDo = (id) => {
    const newList = InToDo.filter((ToDo) => id !== ToDo.id);
    InsetToDos(newList);
  }

  function ToDoComp() {
    return (
      <>
        {(InToDo.length > 0) ? InToDo.map(ToDo => (
          <li key={ToDo.id}><b>{ToDo.text}</b>
            <button onClick={() => deleteToDo(ToDo.id)} className="decrease btn">-</button>
          </li>
        )) : "Yapılacaklar listeniz boş..."}
      </>
    );
  }

  return (
    <div className="App">
      <div className="container">
        <h1>YAPILACAKLAR LİSTESİ</h1>
        <div className="todo">

          <div className="add_input_div">
            <form>
              <input value={ToDos} type="text" onChange={getInputValue} placeholder="Yapılacak bir şey girin..." />
              <button onClick={formHandler} className="increase btn">+</button>
            </form>
          </div>

          <div className="todo_list">
            <ol>
              <ToDoComp />
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
