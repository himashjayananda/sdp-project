import { Outlet } from "react-router";
import Header from "@/features/header";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
