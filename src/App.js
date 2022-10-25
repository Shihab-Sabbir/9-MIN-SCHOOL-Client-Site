import React, { useContext, useEffect } from 'react'
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { AuthContext } from './UserContext/UserContext';

function App() {
  const { user, setDark, dark } = useContext(AuthContext);

  useEffect(() => {
    if (localStorage.getItem(`9minschool-theme`) !== null) {
      setDark(JSON.parse(sessionStorage.getItem(`9minschool-theme`)));
    }
  }, [])

  return (
    <div data-theme={dark ? 'dark' : 'light'} className={dark ? 'dark' : 'light'} >
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App;