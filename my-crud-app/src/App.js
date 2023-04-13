
import Layout from './Interview/Layout/Layout';
import { Routes,Route } from 'react-router-dom';
import UserList from './Interview/User/UserList';
import UserForm from './Interview/User/UserForm';
import { useEffect } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
    <Layout>
<Routes>
  <Route path='/user' Component={UserList}/>
  <Route path='/form/:userId' Component={UserForm}/>
</Routes>
    </Layout>
    </div>
  );
}

export default App;
