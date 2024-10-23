import Marquee from "react-fast-marquee";

const TextComp = ({ children }) => {
  return (
    <div className="flex gap-x-3 items-center mx-10">
      <svg className="" width="15" height="20" viewBox="0 0 15 20">
        <path d="M14.5833 8H8.61742L9.94318 0L0 12H5.96591L4.64015 20L14.5833 8"></path>
      </svg>
      <p className="text-black"> {children}</p>;
    </div>
  );
};

const SlidingText = () => {
  return (
    <div className="py-2 sm:py-4 md:py-6 bg-[#fcffb2] text-[18px] md:text-2xl">
      <Marquee pauseOnHover={true}>
        <TextComp>I can be a React component, multiple React components, or just some text.</TextComp>
        <TextComp>A I can be a React component, multiple React components, or just some text.</TextComp>
        <TextComp>B I can be a React component, multiple React components, or just some text.</TextComp>
      </Marquee>
    </div>
  );
};

export default SlidingText;
