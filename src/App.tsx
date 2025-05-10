import drawers from "./assets/images/drawers.jpg";
import AuthorInfo from "./components/AuthorInfo";
import { ShareToast } from "./components/ShareToast";
import { useState } from "react";

function App() {
  const [share, setShare] = useState(false);

  return (
    <main className="w-full max-w-[327px] rounded-b-[10px] bg-white md:flex md:max-w-[608px] lg:max-w-[730px]">
      <div>
        <img
          className="h-[200px] w-full md:h-full md:min-w-[229px] lg:min-w-[285px]"
          src={drawers}
          alt="drawers"
        />
      </div>
      <div>
        <div className="px-[30px] lg:px-[40px]">
          <h1 className="text-grey-900 font-manrope mt-[32px] mb-[24px] text-[20px] leading-[130%] font-bold tracking-[0.25px]">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>
          <p className="text-grey-500 font-manrope mb-[30px] text-[13px] leading-[140%] tracking-[0.12%]">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
        </div>
        <div>
          {!share ? (
            <AuthorInfo setShare={setShare} />
          ) : (
            <ShareToast setShare={setShare} />
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
