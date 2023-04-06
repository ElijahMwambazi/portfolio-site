import ProfilePicture from "../assets/profile.svg";

export type ProfileImageProps = {
  className?: string;
};

const ProfileImage = ({
  className,
}: ProfileImageProps) => {
  return (
    <img
      src={ProfilePicture}
      alt="Elijah Mwambazi Avatar Image"
      className={`filter saturate-200 w-full max-w-[400px] md:max-w-[600px] ${className}`}
    />
  );
};

export default ProfileImage;
