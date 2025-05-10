import facebookIcon from "../assets/images/icon-facebook.svg";
import twitterIcon from "../assets/images/icon-twitter.svg";
import pinterestIcon from "../assets/images/icon-pinterest.svg";
import shareButton from "../assets/images/icon-share.svg";

interface SetShareProps {
  setShare: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ShareToast({ setShare }: SetShareProps) {
  return (
    <div
      id="toast"
      className="bg-grey-900 flex w-full max-w-[327px] items-center justify-center rounded-b-[10px] py-[18px] md:hidden"
    >
      <div className="flex w-full max-w-[267px] items-center">
        <span className="text-grey-400 mr-[24px]">SHARE</span>
        <div
          id="icons"
          className="mr-[64px] flex w-full max-w-[92px] items-center justify-between"
        >
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.origin}`}
            target="_blank"
          >
            <img
              className="h-[20px] w-[20px]"
              src={facebookIcon}
              alt="facebook-icon"
            />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${window.location.origin}&text=Check%20this%20out!`}
            target="_blank"
          >
            <img
              className="h-[16px] w-[20px]"
              src={twitterIcon}
              alt="twitter-icon"
            />
          </a>
          <a
            href={`https://www.pinterest.com/pin/create/button/?url=${window.location.origin}&media=&description=Check%20this%20out!`}
            target="_blank"
          >
            <img
              className="h-[20px] w-[20px]"
              src={pinterestIcon}
              alt="pinterest-icon"
            />
          </a>
        </div>
        <div
          id="share-button"
          className="bg-grey-200 flex h-[32px] w-[32px] items-center justify-center rounded-full"
          onClick={() => setShare((sharing) => !sharing)}
        >
          <img src={shareButton} alt="share-button" />
        </div>
      </div>
    </div>
  );
}
