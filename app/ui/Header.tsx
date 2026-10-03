import Link from "next/link"

const Header = () => {
  return (
    <div className='py-4 px-6 bg-surface w-full rounded-xl border border-border transition duration-200 hover:border-gray-400 hover:shadow-2xl hover:shadow-border'>
        <Link href="/" className='font-bold text-4xl'>RepoExplorer</Link>
    </div>
  )
}

export default Header