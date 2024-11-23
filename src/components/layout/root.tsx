import { Link, Outlet } from "react-router-dom";

const navLinks = [
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
  return (
    <div className="flex flex-1 w-full h-full overflow-hidden fixed">
      <nav className="w-1/3 border-r bg-gray-50">
        <div className="border-b py-4 px-2 ">
          <h3 className="text-xl font-medium"> FTL </h3>
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
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
