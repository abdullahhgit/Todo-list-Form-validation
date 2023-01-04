import './App.css';
import Person from './components/Person';
import { useEffect, useState } from 'react';
import Task from './components/Task';
import Text from './components/Text';
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import { createContext } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Forms from './components/Forms';
import useToggle from './useToggle';

export const AppContext = createContext();

function App() {
  const [todolist, setTodolist] = useState([]);
  const [newinput, setInput] = useState("");
  const [text, setText] = useState(false);
  const [cat, setCat] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [user, setUser] = useState("PedroTech");

  // Using Custom Hooks
  const { isVisible, toggle } = useToggle();

  // Using React Query
  const client = new QueryClient();

  /*  fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })  */
  useEffect(() => {
    catFact();
  }, []);

  const guessName = () => {
    Axios.get(`https://api.agify.io/?name=${name}`)
      .then((res) => {
        console.log(res.data);
        setAge(res.data);
      })
  }

  const [excuse, setExcuse] = useState("");
  const excuses = (excuse_1) => {
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse_1}`)
      .then((res) => {
        console.log(res.data);
        setExcuse(res.data.excuse);
      })
  }

  function getInput(event) {
    setInput(event.target.value);
  }

  const newTodolist = () => {
    const list = {
      id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
      listName: newinput,
      completed: false,
    }
    setTodolist([...todolist, list]);
  }

  const onComplete = (id) => {
    setTodolist(
      todolist.map((list) => {
        if (list.id === id) {
          return { ...list, completed: true }
        }

        else {
          return {
            ...list
          }
        }
      })
    )
  }

  const deletelist = (deleted) => {
    const arr = todolist.filter((list) => {
      return deleted !== list.id;
    });
    setTodolist(arr);
  }

  const showText = () => {
    setText(!text);
  }

  const catFact = () => {
    Axios.get("https://catfact.ninja/fact")
      .then((res) => {
        // console.log(res.data);
        setCat(res.data.fact);
      })
  }

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <AppContext.Provider value={{ user, setUser }}>
          <Router>

            <div>
              <Person
                name="Pedro"
                email="abdul@gmail.com"
                age={21}
                isMarried={true}
                friends={["sami", "saad", "sufi"]}
              />
            </div>

            <Link to="/home">Home</Link>
            <Link to="/profile">Profile</Link>
            <Routes>
              <Route path='/home' element={<Home />} />
              <Route path='/profile' element={<Profile />} />
            </Routes>

            <div className="input-list">
              <input onChange={getInput} />
              <button onClick={newTodolist}>Add Task</button>
            </div>
            <div className="todo-list">
              {newinput}
            </div>
            <div className="all-list">
              {todolist.map((list) => {
                return (
                  <Task listName={list.listName} id={list.id} completed={list.completed} deletelist={deletelist} onComplete={onComplete} />
                )
              })}
            </div>

            <div className="tet-field">
              <button onClick={showText}>Show Text Input</button>
              <div>
                {
                  text && <Text />
                }
              </div>
            </div>

            <div>
              <button onClick={catFact}>Generate Cat Fact</button>
              <p>{cat}</p>
            </div>

            <div>
              <input onChange={(event) => setName(event.target.value)} />
              <button onClick={guessName}>Guess Age</button>
              <h2>Guess Name is: {age?.name}</h2>
              <h2>Guess Age is: {age?.age}</h2>
              <h2>Guess counter is: {age?.count}</h2>
            </div>

            <div>
              <h2>Check Excuses</h2>
              <button onClick={() => excuses("party")}>Party</button>
              <button onClick={() => excuses("family")}>Family</button>
              <button onClick={() => excuses("office")}>Office</button>
              <p>{excuse}</p>
            </div>

            <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
            {isVisible && <h1>Iam a Text</h1>}

            <Forms />

          </Router>
        </AppContext.Provider>
      </QueryClientProvider>
    </div>
  );
}


export default App;
