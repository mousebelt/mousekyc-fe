import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

import 'font-awesome/css/font-awesome.min.css';
import 'antd/dist/antd.css';
import 'assets/styles/index.less';

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
