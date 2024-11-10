import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div>Home</div>
      <Link to={'/detail'}>Detail로 이동 하기</Link>
    </>
  );
}

export default Home;
