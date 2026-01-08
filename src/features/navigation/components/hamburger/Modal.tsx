import { memo } from "react";
import NavigationList from "./NavigationList";

const Modal = ({
  currentPath,
  handleCloseHamburger,
}: {
  currentPath: string;
  handleCloseHamburger: () => void;
}) => {
  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm animate-in fade-in duration-300">
        <button
          onClick={handleCloseHamburger}
          className="absolute inset-0 w-full h-full cursor-default"
          aria-label="ハンバーガーメニューを閉じるボタン"
        />
      </div>

      <div className="fixed right-0 top-0 z-50 h-screen w-full max-w-sm bg-white dark:bg-slate-950 shadow-lg animate-in slide-in-from-right duration-300">
        <div className="border-b border-slate-200 dark:border-slate-800 px-6 py-4">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">Menu</h2>
        </div>

        <NavigationList currentPath={currentPath} />
      </div>
    </>
  );
};

export default memo(Modal);
