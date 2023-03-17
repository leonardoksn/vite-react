import { Outlet } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <Outlet />
    </>
  );
}
