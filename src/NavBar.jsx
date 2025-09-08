import {Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="absolute top-0 left-0 w-full">
      <ul className="flex justify-end space-x-10 p-5 text-neutral-500">
        <li className="text-2xl font-serif hover:bg-transparent">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="text-2xl font-serif hover:underline">
          <Link to={'/about'}>About</Link>
        </li>
        <li className="text-2xl font-serif hover:underline">
          <a href="#projects">Projects</a>
        </li>
        <li className="text-2xl font-serif hover:underline">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
