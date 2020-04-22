import React from 'react';
import ReactDOM from 'react-dom';

import invoiceItems from './data/invoiceItems';

import TableInvoice from './components/TableInvoice';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'; // Import precompiled Bootstrap css
import '@fortawesome/fontawesome-free/css/all.css';

const App = () => 
  <React.Fragment>
    <h2>Invoice</h2>
    <TableInvoice items={invoiceItems} />
  </React.Fragment>


ReactDOM.render(
  <App/>,
  document.querySelector('#app')
)