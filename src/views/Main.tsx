import Logo from '@/assets/images/logo-hyang.png';

const Main = () => {
  return (
    <div className="py-[10rem]">
      <div className="flex items-center flex-col justify-center">
        <img
          src={Logo}
          className="invert fadeInBottomText"
          alt="HYANG Big Logo"
          width={500}
          height={200}
        />
        <h1 className="block pt-5">Admin Template Site</h1>
        <span className="block pt-5">Created by HYANG J.</span>
      </div>

      <div className="buttonList" />
    </div>
  );
};

export default Main;
