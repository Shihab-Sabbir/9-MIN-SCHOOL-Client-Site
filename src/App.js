import React, { useContext } from 'react'
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { AuthContext } from './UserContext/UserContext';

function App() {
  const { dark } = useContext(AuthContext)
  return (
    <div data-theme={dark ? 'dark' : 'light'} className={dark && 'dark'} >
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App;