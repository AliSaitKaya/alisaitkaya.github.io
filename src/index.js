import React from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import SideBar from './views/SideBar.js';
import MainContent from './views/MainContent.js';
import ViewOrders from './views/ViewOrders.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <SideBar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          {/* <Route path="/dashboard" element={<DashboardView />} /> */}
          {/* <Route path="/orders" element={<ViewOrders />} /> */}
          {/* <Route path="/products" element={<ProductsView />} />
            <Route path="/customers" element={<CustomersView />} /> */}
        </Routes>
    </HashRouter>
  </React.StrictMode>
);

