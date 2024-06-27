import { useContext } from 'react';
import { MyContext } from '../store/context';
import { Link, Outlet } from 'react-router-dom';

export default function Users() {
  const { users, inputValue, handleInput } = useContext(MyContext);
  console.log(users);

  const newUsers = users.filter((user) =>
    user.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div>
      <input
        type='text'
        placeholder='İsim Girin'
        value={inputValue}
        onChange={handleInput}
      />
      <div className='users'>
        {newUsers.map((user) => (
          <Link to={`/users/${user.username}`} key={user.id}>
            {user.username}
          </Link>
        ))}
      </div>
    </div>
  );
}
