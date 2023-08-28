import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";

function LogoHeader() {
  return (
    <div className="w-full bg-[var(--bg-white)] h-[122px] flex py-4 px-12">
      <div className="basis-4/12 px-2">
        <Link to={ROUTES.HOME} className="mr-4">
          <h1 className="h-full text-[56px] font-[700] text-[var(--primary)]">
            BIZ<span className="font-[400] text-[var(--text-secondary)] ">NEWS</span>
          </h1>
        </Link>
      </div>
      <div className="basis-8/12 px-2"></div>
    </div>
  );
}

export default LogoHeader;
