import ReactDOM from 'react-dom';
import {App} from './App';
import {Provider} from "react-redux";
import {setupStore} from "./store";
import './styles/_normalize.scss'

const store = setupStore();

ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
  document.getElementById('root')
);
