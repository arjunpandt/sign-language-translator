import Link from "next/link";
const Nav = () => {
    return (
        <>
        <nav className="w-full h-14 dark:bg-gray-800 flex justify-between items-center px-4 md:px-4">
            <div className="text-2xl dark:text-red-700 font-bold cursor-pointer">Let's Connect</div>
            {/* <div className="md:flex hidden font-semibold text-white">
                Let's Connect
            </div> */}
            <div className=" md:block px-2 py-1 font-bold dark:bg-gray-600 rounded text-white">Logout</div>
            {/* <div className="md:hidden text-white">
                <a  className="text-4xl" href="#">
                &#8801;
                </a>
            </div> */}
        </nav>
        </>
    )
}

export default Nav;