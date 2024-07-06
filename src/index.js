import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.output.css'; // Corrected from tailwind.css to tailwind.output.css
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
