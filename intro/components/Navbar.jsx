import Link from "next/link";

const links = [
  { href: '/client', label: 'client' },
  { href: '/drinks', label: 'drinks' },
  { href: '/tasks', label: 'tasks' },
  { href: '/query', label: 'query' }
];

const Navbar = () => {
  return (
    <nav className="bg-base-300 py-4">
      <div className="navbar px-8 max-w-6xl max-auto flex-col sm:flex-row">
        <Link href='/' className="btn btn-primary">
          Next.js
        </Link>
      </div>
    </nav>
  )
}
export default Navbar;