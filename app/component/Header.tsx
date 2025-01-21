import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-end space-x-6">
          <li><Link href="#about" className="text-gray-600 hover:text-gray-900">About</Link></li>
          <li><Link href="#skills" className="text-gray-600 hover:text-gray-900">Skills</Link></li>
          <li><Link href="#experience" className="text-gray-600 hover:text-gray-900">Experience</Link></li>
          <li><Link href="#projects" className="text-gray-600 hover:text-gray-900">Projects</Link></li>
          <li><Link href="#contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}
