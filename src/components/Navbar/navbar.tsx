import Logo from "../../assets/logo.svg";

function Navbar() {
  return (
    <div className="w-[83.3%] h-[96px] items-center content-center flex justify-between mx-auto">
      <div className="flex items-center content-center">
        <img src={Logo} className="w-[48px] h-[42.73px]" />
        <p className="text-[23px] font-[800]">OptimAL</p>
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
