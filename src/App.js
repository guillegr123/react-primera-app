import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Lista from './Lista'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [
        {
          id: 1,
          nombre: "Lo que el viento se llevó",
          sinopsis: "En vísperas del inicio de la Guerra de Secesión en 1861, Scarlett O'Hara vive con sus padres y dos hermanas en 'Tara', la plantación de algodón de su familia en Georgia. Scarlett se entera de que Ashley Wilkes, del que está enamorada en secreto, se va a casar con su prima Melanie Hamilton y el compromiso será anunciado al día siguiente en una barbacoa que se va a celebrar en la casa de Ashley, la cercana plantación 'Los doce robles'.",
          urlImagen: "https://upload.wikimedia.org/wikipedia/commons/2/27/Poster_-_Gone_With_the_Wind_01.jpg"
        },
        {
          id: 2,
          nombre: "Desayuno en Tiffany's",
          sinopsis: "Holly Golightly (Audrey Hepburn) es una escort y aspirante a actriz con un comportamiento bastante extravagante. Prueba de ello es su costumbre de desayunar frente a la joyería Tiffany & Co. Paul Varjack (George Peppard) es un tímido escritor que es mantenido por una mujer casada. Cuando ambos se convierten en vecinos y se conocen, Holly se enamora de Paúl. Sin embargo ella lo rechaza después y se compromete, por su dinero, con José Pereira (José Luis de Vilallonga), un político brasileño millonario. Finalmente, luego de que su prometido rompa con ella, Holly acepta el amor de Paul.",
          urlImagen: "https://upload.wikimedia.org/wikipedia/commons/0/01/Fr%C3%BCst%C3%BCck_bei_Tiffany_Filmlogo.png"
        },
        {
          id: 3,
          nombre: "Nosotros los pobres",
          sinopsis: "El argumento de la película caracteriza la historia de un humilde carpintero de nombre Pepe 'El Toro' (Pedro Infante) que a pesar de su pobreza, jamás pierde la humildad, dignidad y amor profundo por su sobrina 'Chachita' (Evita Muñoz) y su novia Celia, apodada la 'Chorreada' (Blanca Estela Pavón). Al ir transcurriendo el filme se van entretejiendo historias diversas, pero todas enfocadas a la situación tan desesperante de ser pobre, lo cual parece ser un delito imperdonable por parte de la sociedad.",
          urlImagen: "https://upload.wikimedia.org/wikipedia/en/5/51/Nosotros_los_pobres.jpg"
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Mi lista de películas</h1>
        </header>
        <div>
          <Lista listaPeliculas={this.state.peliculas} />
        </div>
      </div>
    );
  }
}

export default App;
