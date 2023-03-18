export type BorderProps = {
  className?: string;
  width: string;
};

const Border = ({
  className,
  width = "w-full",
}: BorderProps) => {
  return (
    <div
      className={`${width} ${className}`}
    ></div>
  );
};

export default Border;
