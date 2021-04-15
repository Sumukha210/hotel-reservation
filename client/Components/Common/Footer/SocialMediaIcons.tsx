import { FaFacebookF, FaGlobe } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineTwitter } from "react-icons/ai";
import { ReactNode } from "react";

const SocialMediaIcons = () => {
  return (
    <>
      <div className="d-flex align-items-center pt-3">
        {socialMediaLinks.map(({ Icon, link }: ISocialMediaLink, index) => (
          <div key={index} className="socialMediaLInk">
            <a href={link} target="_blank">
              {Icon}
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export interface ISocialMediaLink {
  Icon: ReactNode;
  link: string;
}

const socialMediaLinks: ISocialMediaLink[] = [
  {
    Icon: <FaFacebookF />,
    link: "https://www.facebook.com/sumukhakandika.balakrishna/",
  },
  {
    Icon: <FiInstagram />,
    link: "https://www.instagram.com/sumukhakb/",
  },
  {
    Icon: <AiOutlineTwitter />,
    link: "https://twitter.com/sumukha210",
  },
  {
    Icon: <FaGlobe />,
    link: "https://sumukhakb210.com",
  },
];

export default SocialMediaIcons;
