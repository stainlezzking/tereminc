import bg from "@/images/shop/file/page-title-blog.png";
const Background = ({ children }) => {
  return (
    <div className="py-10 text-center text-[22px] md:text-[32px] lg:text-[42px] lg:py-20 relative overflow-hidden ">
      <img src={bg.src} alt="" className="absolute object-cover object-center top-0 left-0 w-full h-full block " />
      {children}
    </div>
  );
};

export default Background;
