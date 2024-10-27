import { cn } from "@/lib/utils";

const Naira = ({ className }) => {
  return (
    <svg fill="#000000" viewBox="0 0 24 24" id="naira" xmlns="http://www.w3.org/2000/svg" className={cn("icon flat-line w-4", className)}>
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <polyline
          id="primary"
          points="7 21 7 3 17 21 17 3"
          className="fill-none stroke-black stroke-linecap-round stroke-linejoin-round stroke-2"
        ></polyline>
        <path id="primary-2" d="M4,10H20M4,14H20" className="fill-none stroke-black stroke-linecap-round stroke-linejoin-round stroke-2"></path>
      </g>
    </svg>
  );
};

export default Naira;
