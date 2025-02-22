import Link from "next/link";

const CurvedButton = ({ children }) => {
  return <button className="rounded-lg py-[19px] px-6 font-bold bg-white text-primary">{children}</button>;
};

export const Catbutton = ({ href, children, className }) => {
  return (
    <Link
      href={href}
      className={`bg-white font-bold text-black py-3 px-14 mx-auto transition-all ease-in duration-1000 hover:text-center origin-center hover:w-full ${className} `}
    >
      {children}
    </Link>
  );
};

export default CurvedButton;
