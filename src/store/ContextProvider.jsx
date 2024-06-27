import { useEffect, useState } from 'react';
import { MyContext } from './context';
import axios from 'axios';

export default function ContextProvider({ children }) {
  const [inputValue, setInputValue] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((result) => setUsers(result.data));
  }, []);

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  return (
    <MyContext.Provider value={{ users, inputValue, handleInput }}>
      {children}
    </MyContext.Provider>
  );
}
