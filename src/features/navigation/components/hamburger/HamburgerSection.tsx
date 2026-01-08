import { useEffect, useState } from "react";
import MenuButton from "./MenuButton";
import Modal from "./Modal";

export default function HamburgerSection({ currentPath }: { currentPath: string }) {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);

  const handleOpenHamburger = () => {
    setIsHamburgerOpen(true);
  };

  const handleCloseHamburger = () => {
    setIsHamburgerOpen(false);
  };

  useEffect(() => {
    if (!isHamburgerOpen) return;

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCloseHamburger();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isHamburgerOpen]);

  return (
    <div className="lg:hidden">
      <MenuButton isOpen={isHamburgerOpen} handleOpenHamburger={handleOpenHamburger} />

      {isHamburgerOpen && (
        <Modal currentPath={currentPath} handleCloseHamburger={handleCloseHamburger} />
      )}
    </div>
  );
}
