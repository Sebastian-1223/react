import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

ReactDOM.render(
  <>
  <h1 className="titulo">Medio de transporte vehícular</h1>
  <h2 className="titulo">"Equipo 5"</h2>
  <table className="tabla">
    <tr className="no">
      <td >Nombres</td>
      <td></td>
      <td>Apellidos</td>
      <td></td>
      <td>Correo</td>
      <td></td>
      <td>celular</td>
    </tr>
    <tr>
      <td>Ely Saraay</td>
      <td></td>
      <td>Tobar Montalvo</td>
      <td></td>
      <td>elytobar@franciscomiranda.edu.co</td>
      <td></td>
      <td>3126667849</td>
    </tr>
    <tr>
    <td>Erika Johana</td>
      <td></td>
      <td>Muñoz Oquendo</td>
      <td></td>
      <td>erikamuños@franciscomiranda.edu.co</td>
      <td></td>
      <td>3172249332</td>
    </tr>
    <tr>
    <td>Sebastián</td>
      <td></td>
      <td>Moreno Castaño</td>
      <td></td>
      <td>sebastianmoreno@franciscomiranda.edu.co</td>
      <td></td>
      <td>3014817245</td>
    </tr>
  </table>
  </>,
  document.getElementById('root')
);

