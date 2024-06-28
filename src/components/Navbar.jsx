import Nav from "./Nav";

const Navbar = () => {
  return (
    <header
      className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm 
    py-4 bg-secondary-500"
    >
      <Nav />
    </header>
  );
};

export default Navbar;
