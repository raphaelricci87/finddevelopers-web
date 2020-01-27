import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Componente: um bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação.
// Propriedade: informações que um componente pai passa para o componente filho.
// Estado: Informações mantidas pelo componente (imutabilidade)
 

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
