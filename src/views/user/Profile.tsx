import useUserStore from '@/store/userStore';
import { UserOutlined } from '@ant-design/icons';

const Profile = () => {
  const { user } = useUserStore();
  return (
    <>
      <h1 className="component__h1"> My Profile </h1>

      <div className="flex items-center mt-[5rem] gap-[2rem]">
        <div className="header__right-user !w-[8rem] !h-[8rem]">
          <UserOutlined className="d-block text-[5rem] text-white" />
        </div>

        <h2 className="component__h2"> {user.user_name} </h2>
      </div>
    </>
  );
};

export default Profile;
