import { ReactComponent as GitHubIcon } from "../assets/socials/github.svg";
import { ReactComponent as LinkedInIcon } from "../assets/socials/linkedin.svg";
import { ReactComponent as TwitterIcon } from "../assets/socials/twitter.svg";
import { ReactComponent as TwitchIcon } from "../assets/socials/twitch.svg";
import { ReactComponent as SpotifyIcon } from "../assets/socials/spotify.svg";

const SocialMediaLinks = () => {
  const styles =
    "w-5 h-5 fill-dark-gray hover:fill-yellow hover:scale-150 transition durations-100";

  return (
    <div className="flex justify-center md:justify-start gap-10">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/ElijahMwambazi"
        target="_blank"
        rel="noreferrer"
      >
        <GitHubIcon className={`${styles}`} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/elijah-mwambazi-6b7042191/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon className={`${styles}`} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com/ElijahMwambazi2"
        target="_blank"
        rel="noreferrer"
      >
        <TwitterIcon className={`${styles}`} />
      </a>
      {/* TODO: Add twitter link */}
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitch.tv/commitdye"
        target="_blank"
        rel="noreferrer"
      >
        <TwitchIcon className={`${styles}`} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://open.spotify.com/user/31fb6b4rwyxo3ykvlzq7wvu3tafu?si=bfa3c141da234faf"
        target="_blank"
        rel="noreferrer"
      >
        <SpotifyIcon className={`${styles}`} />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
