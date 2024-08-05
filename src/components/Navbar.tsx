import { useState } from "react";

interface NavItemProps {
  text: string;
  isActive: boolean;
  onClick: () => void;
}

const NavItem = ({ text, isActive, onClick }: NavItemProps) => (
  <li
    className={`px-4 py-2 hover:cursor-pointer relative group transition-colors duration-300 ${
      isActive
        ? "text-purple-600 dark:text-purple-400"
        : "text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
    }`}
    onClick={onClick}>
    <span className="relative font-medium">
      {text}
      <span
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 dark:bg-purple-400 transform origin-left transition-transform duration-300 ${
          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}></span>
    </span>
  </li>
);

interface NavbarProps {
  setActiveSection: (section: string) => void;
}

const Navbar = ({ setActiveSection }: NavbarProps) => {
  const [activeItem, setActiveItem] = useState("Home");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navItems: { text: string; href: string }[] = [
    { text: "Home", href: "home" },
    { text: "About me", href: "about" },
    { text: "Skills", href: "skills" },
    { text: "Projects", href: "projects" },
    { text: "Contact", href: "contact" },
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  // const scrollToSection = (href: string) => {
  //   const element = document.getElementById(href);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     const sections = navItems.map((item) =>
  //       document.getElementById(item.href)
  //     );

  //     sections.forEach((section, index) => {
  //       if (section) {
  //         const sectionTop = section.offsetTop;
  //         const sectionBottom = sectionTop + section.offsetHeight;

  //         if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
  //           setActiveItem(navItems[index].text);
  //         }
  //       }
  //     });
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <nav className="bg-white dark:bg-black shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Nyan Lin Htoo
            <span className="text-purple-600 dark:text-purple-400">.dev</span>
          </h2>
          <ul className="flex space-x-1 items-center">
            {navItems.map((item) => (
              <NavItem
                key={item.text}
                text={item.text}
                isActive={activeItem === item.text}
                onClick={() => {
                  setActiveItem(item.text);
                  setActiveSection(item.href);
                }}
              />
            ))}
            <li>
              <button
                onClick={toggleDarkMode}
                className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition-colors duration-300">
                {isDarkMode ? "🌞" : "🌙"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
