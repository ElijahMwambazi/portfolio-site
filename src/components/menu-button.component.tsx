import { ReactNode, createElement } from "react";

export type MenuButtonProps = {
  svg: ReactNode;
  isMenuToggled: boolean;
  setIsMenuToggled: (toggle: boolean) => void;
};

const MenuButton = ({
  svg,
  isMenuToggled,
  setIsMenuToggled,
}: MenuButtonProps) => {
  return (
    <button
      className="rounded-full bg-green p-2"
      onClick={() =>
        setIsMenuToggled(!isMenuToggled)
      }
    >
      {svg}
    </button>
  );
};

export default MenuButton;
