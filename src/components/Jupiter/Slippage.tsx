import { useState } from "react";
import { ButtonModal, ButtonBorderGradient } from "../Buttons";
import { AdjustmentsIcon } from "@heroicons/react/solid";
import clsx from "clsx";

const OPTIONS = [1, 5, 10];

export const Slippage = ({
  slippage,
  setSlippage,
}: {
  slippage: number;
  setSlippage: (arg: number) => void;
}) => {
  const [input, setInput] = useState<number | null>(null);

  const custom = !OPTIONS.includes(input || -1);

  const handleSave = () => {};

  return (
    <ButtonModal
      buttonClass="bg-gray-200 bg-opacity-20 hover:bg-gray-200 hover:bg-opacity-20"
      buttonText={
        <div className="flex flex-row items-center">
          <AdjustmentsIcon className="rotate-90 w-3 mr-2" />
          <span className="text-xs"> {slippage} %</span>
        </div>
      }
    >
      <div>
        <h2 className="font-bold text-lg text-white mb-2">Slippage settings</h2>
        <div className="flex flex-row justify-between mt-5">
          {OPTIONS.map((e) => {
            return (
              <ButtonBorderGradient
                key={`slippage-option-${e}`}
                onClick={() => setInput(e)}
                buttonClass="bg-black p-2 uppercase font-bold h-[50px] w-full"
                fromColor={input === e ? "green-400" : "none"}
                toColor="blue-500"
                containerClass="w-1/3 mx-2"
              >
                {e / 10}%
              </ButtonBorderGradient>
            );
          })}
        </div>
        <div className="mt-5">
          <div
            className={clsx(
              custom && "bg-gradient-to-r from-green-400 to-blue-500",
              "p-[1.5px] rounded-lg h-[50px]"
            )}
          >
            <input
              onChange={(e) => setInput(10 * parseFloat(e.target.value.trim()))}
              placeholder="0.00 %"
              type="number"
              max={100}
              min={0}
              className="w-full h-full rounded-md bg-neutral focus:outline-none text-right pr-2 text-lg font-bold"
            />
          </div>
        </div>
      </div>
      <button onClick={handleSave} type="button" className="btn w-full mt-5">
        Save settings
      </button>
    </ButtonModal>
  );
};