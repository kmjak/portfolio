import { memo } from "react";

const NavigationItem = ({
  path,
  title,
  isActive,
}: {
  path: string;
  title: string;
  isActive: boolean;
}) => {
  return (
    <li className="w-full">
      <a
        href={path}
        className={`block w-full px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
          isActive
            ? "bg-blue-500 text-white"
            : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
        }`}
      >
        {title}
      </a>
    </li>
  );
};

export default memo(NavigationItem);
