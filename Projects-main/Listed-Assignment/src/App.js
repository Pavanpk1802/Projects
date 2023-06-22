import React from 'react';
import { SignIn } from './screens/signIn';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import { Dashboard } from './screens/dashboard';

function App() {
  return (
    <>
     <Router>
        <Routes>
          <Route path='/' element={<SignIn/>}>SignIn</Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Routes>
    </Router>
    </>
  );
}

export default App;
