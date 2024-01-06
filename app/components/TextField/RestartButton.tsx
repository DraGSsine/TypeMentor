import { RestartIcon } from "@/public/icons/icons";
import { useRef } from "react";

const RestartButton = ({
  onRestart: handleRestart,
  className = "",
}: {
  onRestart: () => void;
  className?: string;
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    buttonRef.current?.blur();
    handleRestart();
  };

  return (
    <button
      tabIndex={-1} // to prevent focus
      ref={buttonRef}
      className={`block rounded px-8 py-2 hover:bg-slate-700/50  ${className}`}
      onClick={handleClick}
    >
      <RestartIcon className=" rotate-90" />
    </button>
  );
};

export default RestartButton;
