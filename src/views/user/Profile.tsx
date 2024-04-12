import useUserStore from '@/store/userStore';
import { UserOutlined } from '@ant-design/icons';

const Profile = () => {
  const { user } = useUserStore();
  return (
    <>
      <h2 className="component__h2"> My Profile </h2>

      <div className="flex items-center mt-[5rem] gap-[2rem]">
        <div className="header__right-user !w-[8rem] !h-[8rem]">
          <UserOutlined className="d-block text-[5rem] text-white" />
        </div>

        <span className="text-[2.4rem]"> {user.user_name} </span>
      </div>
    </>
  );
};

export default Profile;
