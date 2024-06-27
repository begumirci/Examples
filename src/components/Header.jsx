import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header-nav'>
      <Link to='/'>Anasayfa</Link>
      <Link to='/about'>Hakkımda</Link>
      <Link to='/contact'>İletişim</Link>
      <Link to='/users'>Kullanıcılar</Link>
      <Link to='/memo'>useMemo</Link>
      <Link to='/todo'>Todos</Link>
    </div>
  );
}
