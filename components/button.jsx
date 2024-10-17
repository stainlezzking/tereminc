import Link from "next/link";

const Button = ({ bg }) => {
  return (
    <Link href={href} className={`block w-fit h-[46px] px-8`}>
      {children}
    </Link>
  );
};

export default Button;
