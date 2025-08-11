const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-4 py-5 bg-black text-white">
      <h1 className="text-2xl shadow-2xl">
        <a href="/">Rick & Morty Info</a>
      </h1>
      <nav className="flex justify-around">
        <a href="https://www.linkedin.com/in/antonioamayastc/" target="_blank" rel="noopener noreferrer">
          <img src="" alt="Linkedin profile" />
        </a>
        <a href="https://github.com/StewieMayer?tab=repositories" target="_blank" rel="noopener noreferrer">
          <img src="" alt="Github repositories" />
        </a>
      </nav>
    </header>
  );
};

export default Header;
