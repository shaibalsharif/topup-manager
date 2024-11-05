<<<<<<< Updated upstream
import AppRouter from './components/Router.js';

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
=======
import React from 'react';
import { DialogProvider } from './components/Dialog';
import { AuthContextProvider } from './context/AuthContext';
import RouterComponent from "./router/router";

const App = () => {
  return (
    <AuthContextProvider>
      <DialogProvider>
        <RouterComponent />
      </DialogProvider>
    </AuthContextProvider>
>>>>>>> Stashed changes
  );
}

export default App;
