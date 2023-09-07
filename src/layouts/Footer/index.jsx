import { getTopView } from "../../service/topViewService";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FaLocationDot, FaPhoneFlip, FaRegEnvelope } from "react-icons/fa6";

import { ICONS } from "../../constants";
import { SOCIAL_LINKS } from "../../constants";
import Button from "../../components/Button";
import Card from "../../components/Card";

const followUs = [
  { icon: ICONS.TWITTER, link: SOCIAL_LINKS.TWITTER },
  { icon: ICONS.FACEBOOK, link: SOCIAL_LINKS.FACEBOOK },
  { icon: ICONS.LINKEDIN, link: SOCIAL_LINKS.LINKEDIN },
  { icon: ICONS.INSTAGRAM, link: SOCIAL_LINKS.INSTAGRAM },
  { icon: ICONS.YOUTUBE, link: SOCIAL_LINKS.YOUTUBE },
];

const plikrPhotos = [
  { src: "https://picsum.photos/110/110", link: "#" },
  { src: "https://picsum.photos/110/110", link: "#" },
  { src: "https://picsum.photos/110/110", link: "#" },
  { src: "https://picsum.photos/110/110", link: "#" },
  { src: "https://picsum.photos/110/110", link: "#" },
  { src: "https://picsum.photos/110/110", link: "#" },
];

const contact = [
  {
    icon: <FaLocationDot className="h-full"></FaLocationDot>,
    text: "123 Street, New York, USA",
  },
  {
    icon: <FaPhoneFlip className="h-full"></FaPhoneFlip>,
    text: "+0964 638 645",
  },
  {
    icon: <FaRegEnvelope className="h-full"></FaRegEnvelope>,
    text: "info@example.com",
  },
];

function Footer({ category }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopView());
  }, []);

  const topView = useSelector((state) => state.topview);

  return (
    <div className="w-full mt-12 pt-12 bg-[var(--bg-dark)]">
      <div className="h-[416px] w-full py-6 mx-[-8px] flex text-[#FFF] px-12">
        {/* GET IN TOUCH */}
        <div className="basis-3/12 px-2 mb-12">
          <h5 className="mb-6 text-xl font-bold">GET IN TOUCH</h5>
          {contact.map((item, index) => (
            <div className="flex mb-4 font-medium text-[#9A9DA2]">
              <span className="mr-2">{item.icon}</span>
              <p>{item.text}</p>
            </div>
          ))}
          <h6 className="mb-4 mt-6 font-bold">FOLLOW US</h6>
          <div className="flex">
            {followUs.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="w-[46px] h-[46px] text-xl bg-[var(--btn-secondary)] border-[var(--btn-secondary)] py-2 flex items-center justify-center mr-2 hover:bg-[#222c34]"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        {/* POPULAR NEWS */}
        <div className="basis-3/12 px-2 mb-12">
          <h5 className="mb-6 text-xl font-bold">POPULAR NEWS</h5>
          {topView &&
            topView.topView.map((item, index) => (
              <div className="mb-4">
                <Card
                  key={index}
                  category={item.category}
                  excerpt={item.excerpt}
                ></Card>
              </div>
            ))}
        </div>
        {/* CATEGORIES */}
        <div className="basis-3/12 px-2 mb-12">
          <h5 className="mb-6 text-xl font-bold">CATEGORIES</h5>
          <div className="flex flex-wrap gap-2">
            {category &&
              category.map((item, index) => (
                <Button type="category" key={index}>
                  {item}
                </Button>
              ))}
          </div>
        </div>
        {/* PLIKR PHOTOS */}
        <div className="basis-3/12 px-2 mb-12">
          <h5 className="mb-6 text-xl font-bold">PLIKR PHOTOS</h5>
          <div className="flex flex-wrap">
            {plikrPhotos.map((item, index) => (
              <div className="basis-4/12 px-2 mb-4">
                <a href={item.link}>
                  <img src={item.src}></img>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* DESIGN BY */}
      <div className="h-[72px] bg-[#111111] flex items-center justify-center">
        <p>
          &copy;
          <a
            href="#"
            className="text-[var(--primary)] hover:underline primary-hover"
          >
            quan@2023
          </a>
          . &nbsp;All Rights Reserved. Design by&nbsp;
          <a
            href="#"
            className="text-[var(--primary)] hover:underline primary-hover"
          >
            HTML Codex
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
