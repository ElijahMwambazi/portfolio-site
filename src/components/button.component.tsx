import AnchorLink from "react-anchor-link-smooth-scroll";
import RandomizedText from "./randomized-text.componenet";
import { ReactNode } from "react";

export type ButtonProps = {
  action?: () => void;
  href: string;
  toDisplay: string | ReactNode;
  styles?: string;
  animated: boolean;
  isWordSingle: boolean;
};

const Button = ({
  action,
  href,
  toDisplay,
  styles,
  animated,
  isWordSingle,
}: ButtonProps) => {
  const display = () => {
    if (typeof toDisplay === "string") {
      return (
        <RandomizedText
          textToRandomize={toDisplay}
          singleWord={isWordSingle}
        />
      );
    } else {
      return toDisplay;
    }
  };

  return animated ? (
    <AnchorLink
      className={`relative text-center text-yellow py-3 px-7 font-semibold hover:bg-yellow hover:text-black transition duration-500 overflow-hidden shadow-lg shadow-black ${styles}`}
      onClick={action}
      href={href}
    >
      <span className="absolute top-0 right-0 w-full h-0.5 bg-yellow animate-slide-right" />
      <span className="absolute top-0 right-0 h-full w-0.5 bg-yellow animate-slide-down  animation-delay-1s" />
      <span className="absolute bottom-0 right-0 w-full h-0.5 bg-yellow animate-slide-left" />
      <span className="absolute top-0 left-0 h-full w-0.5 bg-yellow  animate-slide-up  animation-delay-1s" />
      {display()}
    </AnchorLink>
  ) : (
    <a
      href={href}
      className={`flex items-center rounded text-center py-3 px-7 bg-dark-gray font-semibold hover:bg-yellow hover:text-black transition duration-500 shadow-lg shadow-black ${styles}`}
      target="_blank"
      rel="noreferrer"
    >
      {display()}
    </a>
  );
};

export default Button;
