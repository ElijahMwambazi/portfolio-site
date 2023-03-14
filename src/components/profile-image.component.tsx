import ProfilePicture from "../assets/profile.svg";

const ProfileImage = () => {
  return (
    <img
      src={ProfilePicture}
      alt="Elijah Mwambazi Profile Image"
      className="filter saturate-200 w-full max-w-[400px] md:max-w-[600px]"
    />
  );
};

export default ProfileImage;
