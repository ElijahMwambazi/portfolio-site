import Border from "./border.component";

export type HeadingProps = {
  firstPartOfText: string;
  secondPartOfText: string;
};

const Heading = ({
  firstPartOfText,
  secondPartOfText,
}: HeadingProps) => {
  return (
    <div className="">
      <p className="font-bungee font-semibold text-2xl">
        {firstPartOfText}
        <span className="text-dark-gray">
          {secondPartOfText}
        </span>
      </p>
      {
        <Border className="-mt-1 h-2 bg-white rounded" />
      }
    </div>
  );
};

export default Heading;
