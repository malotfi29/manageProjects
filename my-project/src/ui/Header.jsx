import useUser from "../features/authenticateion/useUser";

import UserAvatar from "../features/authenticateion/UserAvatar";
import HeaderMenu from "./HeaderMenu";

function Header() {
  const { user, isLoading } = useUser();
  return (
    <div className="bg-secondary-0 py-4 border-b border-secondary-200">
      <div
        className={`container xl:max-w-screen-lg flex items-center justify-end gap-x-8
        ${isLoading ? "blur-sm opacity-50" : ""}`}
      >
        <UserAvatar />
        <HeaderMenu />
      </div>
    </div>
  );
}

export default Header;
