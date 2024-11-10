import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();

  console.log('id', id);
  return (
    <>
      <div>Detail</div>
    </>
  );
}

export default Detail;
