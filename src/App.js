import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import Loader from "./components/Loader/Loader.js";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";

const Home = lazy(() => import("./pages/Home/Home.jsx"));
const ToDoListPage = lazy(() =>
  import("./pages/ToDoListPage/ToDoListPage.jsx")
);
const About = lazy(() => import("./pages/About/About.jsx"));
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage/NotFoundPage.jsx")
);
const Navigation = lazy(() => import("./components/Navigation/Navigation.jsx"));
const ToDoEditPage = lazy(() =>
  import("./pages/ToDoEditPage/ToDoEditPage.jsx")
);
const ErrorPage = lazy(() => import("./pages/ErrorPage/ErrorPage.jsx"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage.jsx"));

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem("isAuthenticated") === "true"
  );

  const handleLogIn = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  return (
    <BrowserRouter basename="/ToDo">
      <Suspense fallback={<Loader />}>
        <Navigation
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/todo-list"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <ToDoListPage />
              </PrivateRoute>
            }
          />
          <Route
            path="todo-list/:id"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <ToDoEditPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/about"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <About />
              </PrivateRoute>
            }
          />
          <Route path="/error-page" element={<ErrorPage />} />
          <Route path="login" element={<LoginPage login={handleLogIn} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default App;

// import { memo, useState } from "react";

// const animalsList = ["cat", "parrot", "dog"];

// const StaticComponent = memo(() => {
//   console.log("don't update page");

//   return <p>А этот компонент не обновился</p>;
// });

// const AnimalItem = ({ name, onDelete }) => {
//   return (
//     <li>
//       {name}
//       <button type="button" onClick={() => onDelete(name)}>
//         Delete
//       </button>
//     </li>
//   );
// };

// function App() {
//   const [animals, setAnimals] = useState(animalsList);

//   const deleteAnimal = (nameToDelete) => {
//     setAnimals((prev) => prev.filter((name) => name !== nameToDelete));
//   };

//   console.log("App rendered");

//   return (
//     <div>
//       <StaticComponent />
//       <p>Список животных</p>
//       <ul>
//         {animals.map((animal, index) => (
//           <AnimalItem key={index} name={animal} onDelete={deleteAnimal} />
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default App;

// import { useMemo, useState } from "react";

// function App() {
//   const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
//   const [input, setInput] = useState("");

//   const sum = useMemo(() => {
//     console.log("calculated");
//     return numbers.reduce((acc, num) => acc + num, 0);
//   }, [numbers]);

//   const addNumber = () => {
//     const numberAdd = parseInt(input, 10);
//     if (!isNaN(numberAdd)) {
//       setNumbers([...numbers, numberAdd]);
//       setInput("");
//     }
//   };

//   return (
//     <div>
//       <p>Add {numbers.join(", ")}</p>
//       <p>Total summa: {sum}</p>
//       <input
//         type="number"
//         placeholder="Enter number"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       ></input>
//       <button type="button" onClick={addNumber}>
//         Add Number
//       </button>
//     </div>
//   );
// }

// export default App;

// import { useRef } from "react";

// function App() {
//   const inputRef = useRef(null);

//   const blur = () => {
//     inputRef.current?.blur();
//     console.log(inputRef);
//   };
//   const focus = () => {
//     inputRef.current?.focus();
//     console.log(inputRef);
//   };

//   return (
//     <div>
//       <input type="text" ref={inputRef} placeholder="Type some text"></input>
//       <button type="button" onClick={focus}>
//         Focus
//       </button>
//       <button type="button" onClick={blur}>
//         Blur
//       </button>
//     </div>
//   );
// }

// export default App;

// import { useReducer, useState } from "react";

// const initialState = { name: "", lastName: "", birthYear: "" };

// function reducer(state, action) {
//   switch (action.type) {
//     case "SET_NAME":
//       return { ...state, name: action.payload };
//     case "SET_LASTNAME":
//       return { ...state, lastName: action.payload };
//     case "SET_BIRTHYEAR":
//       return { ...state, birthYear: action.payload };
//     default:
//       return state;
//   }
// }

// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const [name, setName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [birthYear, setBirthYear] = useState("");

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       ></input>
//       <button
//         type="button"
//         onClick={() => dispatch({ type: "SET_NAME", payload: name })}
//       >
//         NAME
//       </button>
//       <input
//         type="text"
//         placeholder="Last Name"
//         value={lastName}
//         onChange={(e) => setLastName(e.target.value)}
//       ></input>
//       <button
//         type="button"
//         onClick={() => dispatch({ type: "SET_LASTNAME", payload: lastName })}
//       >
//         LAST NAME
//       </button>
//       <input
//         type="text"
//         placeholder="Birth Year"
//         value={birthYear}
//         onChange={(e) => setBirthYear(e.target.value)}
//       ></input>
//       <button
//         type="button"
//         onClick={() => dispatch({ type: "SET_BIRTHYEAR", payload: birthYear })}
//       >
//         BIRTH YEAR
//       </button>
//       <div>
//         <p>
//           Name {state.name}, Last Name {state.lastName}, Birth Year{" "}
//           {state.birthYear}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default App;

//  ----------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------
// import { nanoid } from "nanoid";
// import { Component } from "react";
// import baseArray from "./functions/baseArray";
// import ToDoList from "./components/ToDoList";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { item: [], input: "" };
//   }

//   onClickHandler = () => {
//     const { item, input } = this.state;

//     if (input.trim() === "") return;
//     const updateElement = [...item, { id: nanoid(), name: input }];
//     this.setState({ item: updateElement, input: "" });
//   };

//   onChangeHandler = (e) => {
//     this.setState({ input: e.target.value });
//   };

//   onKeyDown = (e) => {
//     if (e.key === "Enter") this.onClickHandler();
//   };

//   onDeleteToDo = (id) => {
//     const { item } = this.state;

//     const filteredItems = item.filter((item) => id !== item.id);
//     this.setState({ item: filteredItems });
//   };

//   onRemoveLocalStorage = () => {
//     localStorage.removeItem("todo-list");
//     this.setState({ item: [] });
//   };

//   componentDidMount() {
//     const savedToDo = JSON.parse(localStorage.getItem("todo-list"));
//     const checkSavedToDo =
//       savedToDo && Array.isArray(savedToDo) && savedToDo.length > 0;
//     const toDoList = checkSavedToDo ? savedToDo : baseArray;

//     if (toDoList) {
//       this.setState({ item: toDoList });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.item !== this.state.item) {
//       localStorage.setItem("todo-list", JSON.stringify(this.state.item));
//     }
//   }

//   render() {
//     return (
//       <>
//         <input
//           placeholder="New task"
//           value={this.state.input}
//           onChange={this.onChangeHandler}
//           onKeyDown={this.onKeyDown}
//         />
//         <p>Total ToDo's: {this.state.item.length}</p>
//         <ToDoList item={this.state.item} onDeleteToDo={this.onDeleteToDo} />
//         <button onClick={this.onClickHandler}>Add To Do</button>
//         <button onClick={this.onRemoveLocalStorage}>Remove To Do</button>
//       </>
//     );
//   }
// }

// export default App;
