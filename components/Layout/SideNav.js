import { useState } from "react";
import { HiOutlineCalendar } from "react-icons/hi";
import { FiFilter, FiToggleRight, FiSettings } from "react-icons/fi";
import { BsBinoculars } from "react-icons/bs";
import { IoTicketOutline } from "react-icons/io5";

import { CgFilters } from "react-icons/cg";
// import { MdOutlineEvent } from "react-icons/md";

const SideBar = () => {
	const [tab, setTab] = useState(null);
	const close = () => {};
	return (
		<div>
			{!tab ? (
				<div className="w-15 mt-1 rounded-lg shadow shadow-md bg-white px-1 absolute bg-gray-100">
					{/* <div onClick={() => setTab("Filters")} className=" m-2 p-1 rounded-md shadow-sm cursor-pointer text-black bg-gray-200 hover:bg-gray-300">
						<FiToggleRight size={40} />
					</div> */}
					<div onClick={() => setTab("Find")} className=" m-2 p-1 rounded-md  shadow-sm cursor-pointer text-black bg-gray-200 hover:bg-gray-300">
						<BsBinoculars size={40} />
					</div>
					<div onClick={() => setTab("My Events")} className=" m-2 p-1 rounded-md  shadow-sm cursor-pointer text-black bg-gray-200 hover:bg-gray-300">
						<HiOutlineCalendar size={40} />
					</div>

					<div onClick={() => setTab("Find")} className=" m-2 p-1 rounded-md  shadow-sm cursor-pointer text-black bg-gray-200 hover:bg-gray-300">
						<IoTicketOutline size={40} />
					</div>
					<div onClick={() => setTab("Settings")} className=" m-2 p-1 rounded-md  shadow-sm cursor-pointer text-black bg-gray-200 hover:bg-gray-300">
						<FiSettings size={40} />
					</div>
				</div>
			) : null}

			{tab ? (
				<div className="w-[75%] h-[85%] rounded shadow-md text-black bg-gray-100 px-1 absolute">
					<span onClick={() => setTab(null)} className="flex cursor-pointer justify-end">
						X
					</span>
					{tab == "Filters" ? <Filters /> : null}
					{tab == "My Events" ? <MyEvents /> : null}
					{tab == "Find" ? <Find /> : null}
					{tab == "Settings" ? <Settings /> : null}
				</div>
			) : null}
		</div>
	);
};

const Filters = () => {
	return <ul className="relative">Filters</ul>;
};
const MyEvents = () => {
	return (
		<div>
			<div className="min-w-32 bg-white min-h-48 p-3 mb-4 font-medium">
				<div className="w-32 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center shadow-lg ">
					<div className="block rounded-t overflow-hidden  text-center ">
						<div className="bg-blue text-white py-1">March</div>
						<div className="pt-1 border-l border-r border-white bg-white">
							<span className="text-5xl font-bold leading-tight">17</span>
						</div>
						<div className="border-l border-r border-b rounded-b-lg text-center border-white bg-white -pt-2 -mb-1">
							<span className="text-sm">Sunday</span>
						</div>
						<div className="pb-2 border-l border-r border-b rounded-b-lg text-center border-white bg-white">
							<span className="text-xs leading-normal">8:00 am to 5:00 pm</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const Find = () => {
	return (
		<div>
			<div className="flex items-center justify-center min-h-screen from-red-100 via-red-300 to-red-500 bg-gradient-to-br">
				<div className="w-full max-w-lg p-6 mx-auto bg-white rounded-2xl shadow-xl flex flex-col">
					<div className="flex justify-between pb-4">
						<div className="-rotate-90 cursor-pointer">
							<svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M11.001 6L6.00098 1L1.00098 6" stroke="black" strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</div>
						<span className="uppercase text-sm font-semibold text-gray-600">january - 2022</span>
						<div className="rotate-90 cursor-pointer">
							<svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M11.001 6L6.00098 1L1.00098 6" stroke="black" strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</div>
					</div>
					<div className="flex justify-between font-medium uppercase text-xs pt-4 pb-2 border-t">
						<div className="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-red-500 text-red-500 shadow-md">sun</div>

						<span className="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">mon</span>

						<span className="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">tue</span>

						<span className="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">wed</span>

						<span className="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">thu</span>

						<span className="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">fri</span>

						<span className="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">sat</span>
					</div>

					<div className="flex justify-between font-medium text-sm pb-2">
						<span className="px-1 text-gray-400 w-14 flex justify-center items-center">30</span>

						<span className="px-1 text-gray-400 w-14 flex justify-center items-center">31</span>

						<span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">01</span>

						<span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">02</span>

						<span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">03</span>

						<span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">04</span>

						<span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">05</span>
					</div>
					<div className="flex justify-between font-medium text-sm pb-2">
						<span className="px-1 w-14 flex justify-center items-center border border-red-500 text-red-500 cursor-pointer">06</span>

						<span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">07</span>

						<span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">08</span>

						<span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">09</span>

						<span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">10</span>

						<span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">11</span>

						<span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">12</span>
					</div>

					<div className="flex justify-between font-medium text-sm pb-2">
						<span className="px-1 w-14 flex justify-center items-center border border-red-500 text-red-500 cursor-pointer">13</span>

						<span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">14</span>

						<span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">15</span>

						<span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">16</span>

						<span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">17</span>

						<span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">18</span>

						<span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">19</span>
					</div>

					<div className="flex justify-between font-medium text-sm pb-2">
						<span className="px-1 w-14 flex justify-center items-center border border-red-500 text-red-500 cursor-pointer">20</span>

						<span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">21</span>

						<span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">22</span>

						<span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">23</span>

						<span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">24</span>

						<span className="px-1 w-14 flex justify-center items-center border border-green-500 text-white bg-green-500 rounded-2xl cursor-pointer shadow-md">25</span>

						<span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">26</span>
					</div>

					<div className="flex justify-between font-medium text-sm pb-2">
						<span className="px-1 w-14 flex justify-center items-center border border-red-500 text-red-500 cursor-pointer">27</span>

						<span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">28</span>

						<span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">29</span>

						<span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">30</span>

						<span className="px-1 text-gray-400 w-14 flex justify-center items-center">01</span>

						<span className="px-1 text-gray-400 w-14 flex justify-center items-center">02</span>

						<span className="px-1 text-gray-400 w-14 flex justify-center items-center">03</span>
					</div>
				</div>
			</div>
		</div>
	);
};
const Settings = () => {
	return <div>Settings</div>;
};

export default SideBar;
