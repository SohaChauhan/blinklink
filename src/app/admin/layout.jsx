import NavBar from "../ui/NavBar";

export default function LinksLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
