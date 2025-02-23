import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const navLinks = [
  {
    name: "Store",
    path: "/dashboard",
  },
  {
    name: "Products",
    path: "products",
  },
  {
    name: "Orders",
    path: "orders",
  },
];

const Root = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-1 w-full h-full overflow-hidden fixed">
      <nav
        className={`absolute md:relative md:w-1/3 border-r bg-gray-50 h-full transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="border-b py-4 px-2 ">
          <h3 className="text-xl font-medium"> FTL </h3>
          <button
            className="md:hidden text-xl px-2"
            onClick={() => setIsOpen(false)}
          >
            ✖
          </button>
        </div>
        <ul className="flex-col gap-4 py-2 px-4">
          {navLinks.map((link) => (
            <li key={link.name} className="my-2 font-light text-sm">
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <main className="w-full overflow-scroll">
        <div className="w-full md:hidden justify-end bg-slate-400 px-5 py-2">
          <button
            className=" bg-gray-800 text-white px-3 py-1 rounded"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰ Menu
          </button>
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
