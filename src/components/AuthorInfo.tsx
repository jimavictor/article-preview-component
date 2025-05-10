import { useState } from "react";
import avatarMichelle from "../assets/images/avatar-michelle.jpg";
import shareButton from "../assets/images/icon-share.svg";
import { Tooltip } from "./Tooltip";

interface SetShareProps {
  setShare: React.Dispatch<React.SetStateAction<boolean>>;
}

function AuthorInfo({ setShare }: SetShareProps) {
  const [openTooltip, setOpenTooltip] = useState<boolean>(false);

  const showToast = () => {
    if (window.innerWidth < 768) {
      setShare((sharing) => !sharing);
    } else {
      setOpenTooltip((openTooltip) => !openTooltip);
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
        <Tooltip openTooltip={openTooltip}  setOpenTooltip={setOpenTooltip}/>
      </div>
    </div>
  );
}

export default AuthorInfo;
