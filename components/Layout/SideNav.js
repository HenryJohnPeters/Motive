import { useState } from "react";
import { HiOutlineCalendar, HiOutlineHome } from "react-icons/hi";
// import { MdOutlineEvent } from "react-icons/md";

const SideBar = () => {
	const [isOpen, setIsOpen] = useState(true);
	const close = () => {};
	return (
		<div>
			{!isOpen ? (
				<div className="w-15 mt-2 h-full shadow-md bg-white px-1 absolute bg-gray-100">
					<div onClick={() => setIsOpen(true)} className=" m-2 p-1 rounded-md shadow-sm cursor-pointer bg-gray-200 hover:bg-gray-300">
						<HiOutlineHome size={50} />
					</div>
					<div onClick={() => setIsOpen(true)} className=" m-2 p-1 rounded-md  shadow-sm cursor-pointer bg-gray-200 hover:bg-gray-300">
						<HiOutlineCalendar size={50} />
					</div>
				</div>
			) : null}

			{isOpen ? (
				<div className="w-60 mt-2  h-full shadow-md bg-gray-100 px-1 absolute">
					<span onClick={() => setIsOpen(false)} className="flex cursor-pointer justify-end">
						X
					</span>
					<ul className="relative">
						<li className="relative">
							<a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
								Sidenav link 1
							</a>
						</li>
					</ul>
				</div>
			) : null}
		</div>
	);
};

export default SideBar;
