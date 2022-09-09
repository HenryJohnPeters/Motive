import { useState } from "react";
import { HiOutlineCalendar, HiOutlineHome } from "react-icons/hi";
import { BsBinoculars } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
// import { MdOutlineEvent } from "react-icons/md";

const SideBar = () => {
  const [tab, setTab] = useState(null);
  const close = () => {};
  return (
    <div>
      {!tab ? (
        <div className="w-15 mt-1 rounded-lg shadow shadow-md bg-white px-1 absolute bg-gray-100">
          <div
            onClick={() => setTab("Home")}
            className=" m-2 p-1 rounded-md shadow-sm cursor-pointer bg-gray-200 hover:bg-gray-300"
          >
            <HiOutlineHome size={40} />
          </div>
          <div
            onClick={() => setTab("My Events")}
            className=" m-2 p-1 rounded-md  shadow-sm cursor-pointer bg-gray-200 hover:bg-gray-300"
          >
            <HiOutlineCalendar size={40} />
          </div>
          <div
            onClick={() => setTab("Find")}
            className=" m-2 p-1 rounded-md  shadow-sm cursor-pointer bg-gray-200 hover:bg-gray-300"
          >
            <BsBinoculars size={40} />
          </div>
          <div
            onClick={() => setTab(true)}
            className=" m-2 p-1 rounded-md  shadow-sm cursor-pointer bg-gray-200 hover:bg-gray-300"
          >
            <FiSettings size={40} />
          </div>
          <div
            onClick={() => setTab(true)}
            className=" m-2 p-1 rounded-md  shadow-sm cursor-pointer bg-gray-200 hover:bg-gray-300"
          >
            <HiOutlineCalendar size={40} />
          </div>
        </div>
      ) : null}

      {tab ? (
        <div className="w-60 h-[85%] rounded shadow-md bg-gray-100 px-1 absolute">
          <span
            onClick={() => setTab(null)}
            className="flex cursor-pointer justify-end"
          >
            X
          </span>
          {tab == "Home" ? <Home /> : null}
          {tab == "My Events" ? <MyEvents /> : null}
          {tab == "Find" ? null : null}
          {tab == "Settings" ? null : null}
        </div>
      ) : null}
    </div>
  );
};

const Home = () => {
  return (
    <ul className="relative">
      <li className="relative">
        <a
          className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
          href="#!"
          data-mdb-ripple="true"
          data-mdb-ripple-color="dark"
        >
          Sidenav link 1
        </a>
      </li>
    </ul>
  );
};
const MyEvents = () => {
  return <div>MY EVENTS</div>;
};

const Find = () => {
  return <div>Find</div>;
};
const Settings = () => {
  return <div>Find</div>;
};

export default SideBar;
