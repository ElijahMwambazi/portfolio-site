import AnchorLink from "react-anchor-link-smooth-scroll";
import RandomizedText from "./randomized-text.componenet";

export type ButtonProps = {
  action?: () => void;
  href: string;
  text: string;
  styles?: string;
  animated: boolean;
  isWordSingle: boolean;
};

const Button = ({
  action,
  href,
  text,
  styles,
  animated,
  isWordSingle,
}: ButtonProps) => {
  return animated ? (
    <AnchorLink
      className={`relative text-yellow py-3 px-7 font-semibold hover:bg-yellow hover:text-black transition duration-500 overflow-hidden shadow-lg shadow-black ${styles}`}
      onClick={action}
      href={href}
    >
      <span className="absolute top-0 right-0 w-full h-0.5 bg-yellow animate-slide-right" />
      <span className="absolute top-0 right-0 h-full w-0.5 bg-yellow animate-slide-down  animation-delay-1s" />
      <span className="absolute bottom-0 right-0 w-full h-0.5 bg-yellow animate-slide-left" />
      <span className="absolute top-0 left-0 h-full w-0.5 bg-yellow  animate-slide-up  animation-delay-1s" />
      <RandomizedText
        textToRandomize={text}
        singleWord={isWordSingle}
      />
    </AnchorLink>
  ) : (
    <a
      href={href}
      className={`py-3 px-7 bg-dark-gray font-semibold hover:bg-yellow hover:text-black transition duration-500 shadow-lg shadow-black ${styles}`}
    >
      <RandomizedText
        textToRandomize={text}
        singleWord={isWordSingle}
      />
    </a>
  );
};

export default Button;
