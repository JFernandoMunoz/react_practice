import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Nav from "./components/Navbar/Nav";
import About from "./components/About/About";
import Form from "./components/Form/Form";
import Detail from "./components/Detail/Detail";
import axios from "axios";
import style from "./App.module.css";


function App() {
  function onSearch(dato) {
    // agrega personajes a characters
    axios(`https://rickandmortyapi.com/api/character/${dato}`)
      .then((respuesta) => {
        if (respuesta.data.name) {
          // antes de agregar busco si "ya existe". Como lo harias?
          // tu codigo aquí:
          // if("yaExiste") return
          setCharacters((oldChars) => [...oldChars, respuesta.data]);
        } else {
        }
      })
      .catch((err) => window.alert("¡No hay personajes con este ID!"));
  }

  function onClose(id) {
    // elimina personajes de characters
    // window.alert("onClose :)")
    setCharacters(
      characters.filter((pj) => {
        return pj.id !== Number(id);
      })
    );
  }

  const [characters, setCharacters] = useState([]); // [{}]

  return (
    <div className={style.App}>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route
          path="/home"
          element={<Home characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;

// lo que tenemos con axios pero con fetch

// fetch(`https://rickandmortyapi.com/api/character/${dato}`)
// .then(respuesta => respuesta.json())
// .then((respuestaJson) => {
//   if (respuestaJson.name) {
//     setCharacters((oldChars) => [...oldChars, respuestaJson]);
//   } else {
//   }
// })
// .catch((err) => window.alert("¡No hay personajes con este ID!"));
{
  /*
   */
}
