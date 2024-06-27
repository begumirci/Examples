import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MyContext } from '../store/context';
import Notfound from './Notfound';

export default function UserDetail() {
  const { id } = useParams();
  console.log(id);
  const { users } = useContext(MyContext);
  const user = users.find((x) => x.username == id);
  if (!user) {
    return <Notfound />;
  }
  console.log(id);
  return (
    <div>
      <h2>{user.name}</h2>
      <h2>{user.username}</h2>
      <h2>{user.email}</h2>
    </div>
  );
}
