import facebookIcon from "../assets/images/icon-facebook.svg";
import twitterIcon from "../assets/images/icon-twitter.svg";
import pinterestIcon from "../assets/images/icon-pinterest.svg";
import { useRef, useEffect } from "react";

interface openTooltipProps {
  openTooltip: boolean;
  setOpenTooltip: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Tooltip({ openTooltip, setOpenTooltip }: openTooltipProps) {
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node | null;
      
      if (tooltipRef.current && !tooltipRef.current.contains(target)) {
        setOpenTooltip(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      id="tooltip"
      ref={tooltipRef}
      className={`bg-grey-900 hidden w-full max-w-[248px] justify-center px-[32px] py-[16px] ${openTooltip && "md:block"}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex space-x-[24px]">
          <span className="text-grey-400">SHARE</span>
          <div
            id="icons"
            className="flex items-center justify-center space-x-[16px]"
          >
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https://${window.location.origin}`}
              target="_blank"
            >
              <img
                className="h-[20px] w-[20px]"
                src={facebookIcon}
                alt="facebook-icon"
              />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=https://${window.location.origin}&text=Check%20this%20out!`}
              target="_blank"
            >
              <img
                className="h-[16px] w-[20px]"
                src={twitterIcon}
                alt="twitter-icon"
              />
            </a>
            <a
              href={`https://www.pinterest.com/pin/create/button/?url=https://${window.location.origin}&media=&description=Check%20this%20out!`}
              target="_blank"
            >
              <img
                className="h-[20px] w-[20px]"
                src={pinterestIcon}
                alt="pinterest-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
