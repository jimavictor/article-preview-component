import facebookIcon from "../assets/images/icon-facebook.svg";
import xIcon from "../assets/images/icon-twitter.svg";
import pinterestIcon from "../assets/images/icon-pinterest.svg";
import { useEffect } from "react";

interface openTooltipProps {
  tooltipRef: React.RefObject<HTMLDivElement | null>;
}

export function Tooltip({ tooltipRef }: openTooltipProps) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node | null;

      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(target) &&
        tooltipRef.current.style.display === "block"
      ) {
        tooltipRef.current.style.opacity = "0";
        setTimeout(() => {
          if (tooltipRef.current) tooltipRef.current.style.display = "none";
        }, 300);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      id="tooltip"
      ref={tooltipRef}
      className={`bg-grey-900 hidden w-full max-w-[248px] justify-center px-[32px] py-[16px]`}
    >
      <div className="flex items-center justify-between">
        <div className="flex space-x-[24px]">
          <span className="text-grey-400">SHARE</span>
          <div
            id="icons"
            className="flex items-center justify-center space-x-[16px]"
          >
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.origin}`}
              target="_blank"
            >
              <img
                className="social-icons h-[20px] w-[20px]"
                src={facebookIcon}
                alt="facebook-icon"
              />
            </a>
            <a
              href={`https://x.com/intent/tweet?url=${window.location.origin}&text=Check%20this%20out!`}
              target="_blank"
            >
              <img
                className="social-icons h-[16px] w-[20px]"
                src={xIcon}
                alt="x-icon"
              />
            </a>
            <a
              href={`https://www.pinterest.com/pin/create/button/?url=${window.location.origin}&media=&description=Check%20this%20out!`}
              target="_blank"
            >
              <img
                className="social-icons h-[20px] w-[20px]"
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
