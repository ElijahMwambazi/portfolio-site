export type BorderProps = {
  className?: string;
};

const Border = ({ className }: BorderProps) => {
  return <div className={`${className}`}></div>;
};

export default Border;
