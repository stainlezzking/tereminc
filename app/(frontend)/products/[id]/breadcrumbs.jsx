import { ChevronRight } from "lucide-react";
import Link from "next/link";

const BreadCrumbs = ({ crumbs }) => {
  return (
    <div className="py-6 md:py-[26px] lg:py-[30px] flex items-center gap-[6px]">
      {crumbs.map((crumb, i) => {
        return (
          <div key={i} className="text-[14px] contents">
            <Link href={crumb.url}>{crumb.name}</Link>
            {i !== crumbs.length - 1 && <ChevronRight className="w-5" />}
          </div>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
