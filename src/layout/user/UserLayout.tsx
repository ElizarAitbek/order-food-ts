import { Outlet } from "react-router-dom";
import { UserHeader } from "./UserHeader";

export const UserLayout = () => {
  const toggleBasketHandler = () => {
    return null;
  };
  return (
    <>
      <UserHeader onToggle={toggleBasketHandler} />
      <main style={{ marginTop: "8.5rem" }}>
        <h1>Hello from User Layout</h1>
        <Outlet />
      </main>
    </>
  );
};
