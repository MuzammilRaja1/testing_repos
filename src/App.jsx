import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes';
import AdminLayout from './components/Layout/AdminLayout';
import PublicLayout from './components/Layout/PublicLayout';

const App = () => {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, component: Component, layout }, index) => {
          const Layout = layout === 'admin' ? AdminLayout : PublicLayout;

          return (
            <Route
              key={index}
              path={path}
              element={
                <Layout>
                  <Component />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
};

export default App;
