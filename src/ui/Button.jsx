import { Link } from "react-router-dom";

function Button({ children, isDisabled, to, type, onClick }) {
  const base =
    "bg-yellow-400 text-sm uppercase font-semibold text-slate-800 inline-block tracking-wide rounded-full  hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 disabled:cursor-not-allowed md:px-6 md:py-4";
  const styles = {
    primary: base + `px-4 py-3 md:px-6 md:py-4`,
    small: base + `py-2 px-4 md:px-5 md:py-2.5 test-xs`,
    secondary:
      "border-2 text-sm border-stone-300 uppercase font-semibold text-stone-400 py-3 px-4 inline-block tracking-wide rounded-full  hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800  transition-colors duration-300 focus:outline-none focus:ring focus:ring-stone-200 disabled:cursor-not-allowed sm:px-6 sm:py-4 px-4 py-2.5 md:px-6 md:py-3.5",
    round: base + `py-1 px-2.5 md:px-3 md:py-1.5 test-sm`,
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {" "}
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button
        onClick={onClick}
        to={to}
        disabled={isDisabled}
        className={styles[type]}
      >
        {children}
      </button>
    );

  return (
    <button to={to} disabled={isDisabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
