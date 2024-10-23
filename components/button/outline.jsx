import Link from "next/link";

const OutlineButton = ({ children }) => {
  return (
    <Link href="#" className="border rounded-[3px] py-2 px-5 hover:">
      {children}
    </Link>
  );
};

export default OutlineButton;
