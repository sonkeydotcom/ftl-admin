import { Outlet } from "react-router-dom";

const Wrapper = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 md:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Wrapper;
