import "./styles.css";

export const Navbar = () => {
  return (
    <nav className="bg-linear-to-r from-slate-800 via-slate-700 to-blue-900 flex justify-center items-center gap-10 p-2 rounded-md">
      <a href="#home" className="text-white">Home</a>
      <a href="#about" className="text-white">About</a>
      <a href="#services" className="text-white">Services</a>
      <a href="#contact" className="text-white">Contact</a>
    </nav>
  );
};
