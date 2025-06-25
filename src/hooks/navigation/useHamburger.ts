import { hamburgerActionAtom } from "@/store/hamburger/hamburgerActionAtom";
import { useSetAtom } from "jotai";

export default function useHamburger() {
  const setIsOpen = useSetAtom(hamburgerActionAtom);

  const handleCloseHamburger = () => {
    setIsOpen(false);
  };

  const handleToggleHamburger = () => {
    setIsOpen((prev) => !prev);
  };

  return {
    handleCloseHamburger,
    handleToggleHamburger,
  };
}
