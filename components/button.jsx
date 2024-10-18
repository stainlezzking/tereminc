import Link from "next/link";

const BtnLink = ({ href, children }) => {
  return (
    <Link href={href} className={`block w-fit h-[46px] px-8 bg-black text-white`}>
      {children}
    </Link>
  );
};

export default BtnLink;
