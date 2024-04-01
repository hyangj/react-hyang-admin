import { useRouteError } from 'react-router-dom';

const NotFoundPage = () => {
  const error = useRouteError();
  error && console.log(error);

  return (
    <div className="error">
      <h1>페이지를 찾을 수 없습니다.</h1>
    </div>
  );
};

export default NotFoundPage;
