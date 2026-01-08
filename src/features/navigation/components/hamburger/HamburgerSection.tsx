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
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isHamburgerOpen) {
        handleCloseHamburger();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [handleCloseHamburger]);

  return (
    <div className="lg:hidden">
      <MenuButton isOpen={isHamburgerOpen} handleOpenHamburger={handleOpenHamburger} />

      {isHamburgerOpen && (
        <Modal currentPath={currentPath} handleCloseHamburger={handleCloseHamburger} />
      )}
    </div>
  );
}
