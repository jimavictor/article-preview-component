import { useRef } from "react";
import avatarMichelle from "../assets/images/avatar-michelle.jpg";
import shareButton from "../assets/images/icon-share.svg";
import { Tooltip } from "./Tooltip";

interface SetShareProps {
  setShare: React.Dispatch<React.SetStateAction<boolean>>;
}

function AuthorInfo({ setShare }: SetShareProps) {
  const tooltipRef = useRef<HTMLDivElement>(null);

  const showToast = () => {
    if (window.innerWidth < 768) {
      // Toggle ShareToast component
      setShare((sharing) => !sharing);
    } else {
      // Show Tooltip component
      if (tooltipRef.current && tooltipRef.current.style.display == "none") {
        tooltipRef.current.style.display = "block";
        tooltipRef.current.style.opacity = "0";
        setTimeout(() => {
          if (tooltipRef.current) tooltipRef.current.style.opacity = "1";
        }, 10);
      }
    }
  };

  return (
    <div className="z-10 mx-[30px] flex items-center pb-[18px] lg:mx-[40px]">
      <div className="mr-[16px]">
        <img
          height={40}
          width={40}
          className="rounded-full"
          src={avatarMichelle}
          alt="avatar"
        />
      </div>
      <div className="mr-[64px] md:mr-[104px] lg:mr-[160px]">
        <h2 className="font-manrope text-[13px] font-bold">
          Michelle Appleton
        </h2>
        <time className="text-grey-400 font-manrope" dateTime="2020-06-28">
          28 Jun 2020
        </time>
      </div>
      <div
        id="share-button"
        className="bg-grey-200 flex h-[32px] w-[32px] items-center justify-center rounded-full"
        onClick={showToast}
      >
        <img src={shareButton} alt="share-button" />
      </div>
      <div className="absolute">
        <Tooltip tooltipRef={tooltipRef} />
      </div>
    </div>
  );
}

export default AuthorInfo;
