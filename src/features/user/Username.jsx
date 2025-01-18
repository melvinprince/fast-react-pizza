import { useSelector } from "react-redux";

function Username() {
  const name = useSelector((store) => store.user.username);
  if (!name) return null;
  return <div className="text-sm font-semibold hidden md:block">{name}</div>;
}

export default Username;
