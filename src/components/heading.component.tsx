import Border from "./border.component";
import RandomizedText from "./randomized-text.componenet";

export type HeadingProps = {
  firstPartOfText: string;
  secondPartOfText: string;
};

const Heading = ({
  firstPartOfText,
  secondPartOfText,
}: HeadingProps) => {
  return (
    <div className="mb-7">
      <RandomizedText
        className="font-bungee font-semibold text-2xl inline"
        textToRandomize={firstPartOfText}
        singleWord={true}
      />
      <RandomizedText
        className="font-bungee font-semibold text-2xl inline text-dark-gray"
        textToRandomize={secondPartOfText}
        singleWord={true}
      />
      {
        <Border className="-mt-1 h-2 bg-white rounded" />
      }
    </div>
  );
};

export default Heading;
