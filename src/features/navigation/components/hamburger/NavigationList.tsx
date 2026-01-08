import { memo } from "react";
import { navigationRoutes } from "../../constants/navigationRoute";
import NavigationItem from "./NavigationItem";

const NavigationList = ({ currentPath }: { currentPath: string }) => {
  return (
    <nav>
      <ul className="flex flex-col gap-2 px-6 py-4">
        {Object.values(navigationRoutes).map((route, index) => {
          const isActive =
            route.path === "/" ? currentPath === "/" : currentPath.startsWith(route.path);

          return (
            <NavigationItem key={index} path={route.path} title={route.title} isActive={isActive} />
          );
        })}
      </ul>
    </nav>
  );
};

export default memo(NavigationList);
