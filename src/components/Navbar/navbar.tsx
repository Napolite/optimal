import Logo from "../../assets/Log0.png";

function Navbar() {
  return (
    <div className="w-[83.3%] h-[96px] items-center content-center flex justify-between">
      <div>
        <img src={Logo} className="w-[48px] h-[42.73px]" />
        <p className="text-[23px]">OptimAL</p>
      </div>
      <div>
        <nav className="flex text-[16px] w-[468px] gap-[41px] items-center content-center">
          <a href="">Service</a>
          <a href="">Pricing</a>
          <a href="">Research</a>
          <a href="">Safety</a>
          <a href="">Company</a>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
