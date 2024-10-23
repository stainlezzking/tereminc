import Title from "./title";

const Subtitle = ({ title, children }) => {
  return (
    <div className="text-center space-y-[18px]">
      <Title>{title}</Title>
      <p>{children}</p>
    </div>
  );
};

export default Subtitle;
