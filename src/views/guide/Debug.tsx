import '@/assets/scss/pages/example.scss';
import { Button, Divider } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Debug() {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="component__h1">Guide</h1>
      <h2 className="component__h2"> Debug </h2>
      <Divider />

      <div className="content">
        <h3 className="component__h3"> Local Storage &#62; AppStore</h3>
        <ul className="flex flex-col gap-3">
          <li>
            debug : 디버깅용 옵션 / true로 하면 숨겨진 옵션들이 보이고 사용 할 수 있다.
          </li>
          <li>isOpenSidebar : Sidebar 오픈 여부 </li>
          <li>color : Primary Color</li>

          <li className="mt-10 fw-600">{`AppStore : ${localStorage.getItem('appStore')}`}</li>
        </ul>

        <Button
          type="primary"
          size="large"
          onClick={() => navigate('/dev/store')}
          className="mt-10"
        >
          Go Test Page !
        </Button>
      </div>
    </>
  );
}
