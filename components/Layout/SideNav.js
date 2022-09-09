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
            className=" m-2 p-1 rounded-md shadow-sm cursor-pointer text-black bg-gray-200 hover:bg-gray-300"
          >
            <HiOutlineHome size={40} />
          </div>
          <div
            onClick={() => setTab("My Events")}
            className=" m-2 p-1 rounded-md  shadow-sm cursor-pointer text-black bg-gray-200 hover:bg-gray-300"
          >
            <HiOutlineCalendar size={40} />
          </div>
          <div
            onClick={() => setTab("Find")}
            className=" m-2 p-1 rounded-md  shadow-sm cursor-pointer text-black bg-gray-200 hover:bg-gray-300"
          >
            <BsBinoculars size={40} />
          </div>
          <div
            onClick={() => setTab("Settings")}
            className=" m-2 p-1 rounded-md  shadow-sm cursor-pointer text-black bg-gray-200 hover:bg-gray-300"
          >
            <FiSettings size={40} />
          </div>
        </div>
      ) : null}

      {tab ? (
        <div className="w-70 h-[85%] rounded shadow-md text-black bg-gray-100 px-1 absolute">
          <span
            onClick={() => setTab(null)}
            className="flex cursor-pointer justify-end"
          >
            X
          </span>
          {tab == "Home" ? <Home /> : null}
          {tab == "My Events" ? <MyEvents /> : null}
          {tab == "Find" ? <Find /> : null}
          {tab == "Settings" ? <Settings /> : null}
        </div>
      ) : null}
    </div>
  );
};

const Home = () => {
  return <ul className="relative">Home</ul>;
};
const MyEvents = () => {
  return <div>MY EVENTS</div>;
};

const Find = () => {
  return <div>Find</div>;
};
const Settings = () => {
  return <div>Settings</div>;
};

export default SideBar;
