import { Logo } from "../assets"

const Navbar = () => {
  
  
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={Logo} alt="Logo"  className="w-[120px] h-[120px]"/>
        <ul className="list-none flex justify-end items-center flex-1">
          <li
              className={`font-poppins font-normal cursor-pointer text-[22px] text-pinkShell mr-10 mt-20`}
            >
              <a href={`#`}>Home</a>

          </li>
          <li
              className={`font-poppins font-normal cursor-pointer text-[22px] text-pinkShell mr-10 mt-20`}
            >
              <a href={`#`}>About</a>

          </li>
          <li
              className={`font-poppins font-normal cursor-pointer text-[22px] text-pinkShell mr-0 mt-20`}
            >
              <a href={`#`}>Contacts</a>

          </li>
        </ul>
      
    </nav>
  )
}

export default Navbar