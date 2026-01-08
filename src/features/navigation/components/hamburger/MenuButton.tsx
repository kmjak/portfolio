import { memo } from "react";

type Props = {
  isOpen: boolean;
  handleOpenHamburger: () => void;
};

const MenuButton = ({ isOpen, handleOpenHamburger }: Props) => {
  return (
    <button
      onClick={handleOpenHamburger}
      className="relative flex h-10 w-10 flex-col items-center justify-center gap-1"
      aria-label="ハンバーガーメニューボタン"
      aria-expanded={isOpen}
    >
      <span
        className={`h-0.5 w-6 bg-current transition-transform duration-300
          ${isOpen && "translate-y-1.5 rotate-45"}
        `}
      />
      <span
        className={`h-0.5 w-6 bg-current transition-opacity duration-300
          ${isOpen && "opacity-0"}
        `}
      />
      <span
        className={`h-0.5 w-6 bg-current transition-transform duration-300
          ${isOpen && "-translate-y-1.5 -rotate-45"}
        `}
      />
    </button>
  );
};

export default memo(MenuButton);
