/* eslint-disable max-len */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { Link } from 'react-router-dom';
import image from './AlexanderSuarez.jpg';
import './Perfil.css';

function Perfil() {
  return (
    <div className="contenedor_perfil">
      <div className="header">
        <img src={image} alt="alexander suarez" />
        <h1>Alexander Suarez Rodriguez</h1>
      </div>
      <ul className="enlaces">
        <li>
          <Link to="https:github.com">Github</Link>
        </li>
      </ul>
      <div className="information">
        <h3>
          Estudiante de Ingeniería Mecatronica con conocimientos en
          Automatización y Robótica Industrial,programación , programación de
          PLC, mantenimiento de maquinaria industrial e instrumentación
          electrónica, conceptos de mecánica , manejo de diseños en 2D y 3D
          ,instalaciones eléctricas residenciales ,entre otros. enfocado al
          brindar plan demejora con base a los nuevos avancez tecnologicos por
          ello poseo conocimientos en lenguajes de programacion tales como
          c,c++,python,java, javascript,manejo de html y css y manejo de base de
          datos,desarrollador full-stack,desarrolador de aplicaciones moviles en
          android. Persona trabajadora, dinámica con capacidad de tomar
          decisiones, preparado para superar cualquier tipo de obstáculo,
          dispuesto a escuchar las recomendaciones. excelente puntualidad y
          liderazgo, con visión, impulso y compromiso para alcanzar
          objetivos,con el deseo de siempre aprender para lograr dar lo mejor y
          apoyar cuando lo sea necesario .
        </h3>
        <ul>
          {' '}
          <b>conceptos aprendidos</b>
          <li>
            el manejo de git y Github, manejar el controlador de versiones me ha
            permitido tener un orden en lso diferentes programas qeu creo, ya
            uqe haciendo uso de esta herramienta, evito tener que crear copias
            de documentos para editarlas y mejor aun saber que esa informacion
            la puedo alojar en un repositorio remoto
          </li>
          <li>
            react, aprender a emplear react en diferentes proyectos,al ser una
            libreria la cua lestan robusta que no tiene limites en el desarrollo
            de alicativos web
          </li>
          <li>
            como consumir un API, un tema el cual me siento muy grato con lo
            aprendido es consumir un API,suena sencillo pintar unAPI pero no
            siempre lo es asi, ha sido de bastante esfuero lograr hacer ese
            paso.
          </li>
          <li>
            entender como se conecta el back-end con el front-end, en esa curva
            de aprendizaje existe percanses en temas teoricos y practicos pero
            al final saber que el medio de comunicacion entre lo qeu se ve y lo
            que n ose ve se hace mediante peticiones(request and response)
          </li>
          <li>entender como funciona las bases de datos relacionales</li>
        </ul>
        <p> </p>
      </div>
    </div>
  );
}

export default Perfil;
