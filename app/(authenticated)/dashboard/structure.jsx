import Background from "@/components/background";
import Wrapper from "@/components/contentwrapper";
import DashboardNavbar from "@/components/navbar/dashboard";
const Structure = ({ title, children }) => {
  return (
    <>
      <Background>
        <p className="relative z-10">{title}</p>
      </Background>
      <Wrapper className="flex container mx-auto gap-x-[30px] py-[35px] md:py-[65px] xl:py-[80px] ">
        <DashboardNavbar />
        {children}
      </Wrapper>
    </>
  );
};

export default Structure;
