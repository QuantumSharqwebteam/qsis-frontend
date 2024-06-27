import {useEffect, useState} from "react";

import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

import { AiFillAlert } from "react-icons/ai";
import { GiTechnoHeart} from "react-icons/gi";
import { FaUserCheck } from "react-icons/fa6";
import { CgSmileMouthOpen } from "react-icons/cg";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { TbUserScan } from "react-icons/tb";
import { TbHelmet } from "react-icons/tb";
import { IoHardwareChipSharp } from "react-icons/io5";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Product = () => {
  const [produts, setProducts] = useState([])
  useEffect(() => {
    fetch(`http://62.72.57.58:4000/projects`)
    .then((res) => res.json())
    .then(data => {
        console.log(data);
        setProducts(data)})
    .catch((err) => console.error(err))
}, []);
  const icons = [
    AiFillAlert,
    GiTechnoHeart,
    FaUserCheck,
    CgSmileMouthOpen,
    VscWorkspaceTrusted,
    TbUserScan,
    TbHelmet,
    IoHardwareChipSharp,
  ];

    const data = produts;

    const colors = [
      "#11bdb7",
      "#117bbd",
      "#b50b46",
      "#db2777",
      "#0bb55d",
      "#bb38c7",
      "#27521f",
      "#6366f1",
      "#f59e0b",
      "#65a30d",
      "#f43f5e",
      "#d946ef"

          ]

  return (
    <div className="w-full bg-[#E8E7E7]">
    <VerticalTimeline className="">
      {data.map((item, index) => {
        const Icon = icons[index % icons.length];

        return (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work "
            contentStyle={{
              background: "#fff",
              color: "#000",
              boxShadow: "none",
              borderRadius : "22px",
            }}
            contentArrowStyle={{ borderRight: `7px solid ${colors[index]}` }}
            iconStyle={{ background: `${colors[index]} `, color: "#fff" }}
            icon={<Icon />}
          >
            <div className="">
            <h3 className="vertical-timeline-element-title text-xl font-medium">
              {item.projectName}
            </h3>
            <div className="text-slate-500">
              {item.projectOverview.length > 20
                ? item.projectOverview.slice(0, 70) + "..."
                : item.projectOverview}
            </div>
            </div>

            {/* dialog model*/}
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button className="text-green-400 underline my-3">
                  Read more
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className={`bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0 z-50 bg-[#1d1d1d] opacity-80`} />
                <Dialog.Content className="data-[state=open]:animate-contentShow bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 max-h-[80vh] w-full max-w-[450px] rounded-[6px]  py-[25px] px-[35px] shadow-lg focus:outline-none" style={{border :  `5px solid ${colors[index]} `, borderRadius: "22px" }}>
                  <Dialog.Title className="text-mauve12 m-0 text-xl font-semibold  "
                  style={{color :  ` ${colors[index]} ` }}>
                    {item.projectName}
                  </Dialog.Title>
                  <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal text-justify">
                    {item.projectOverview}
                  </Dialog.Description>

                  <div className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal ">
                    <ul>
                      <li className="font-semibold text-xl"
                       style={{color :  ` ${colors[index]} ` }}>Features</li>
                      {item.projectFeatures.map((feat, i) => (
                        <li key={i}>{feat}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal text-justify">
                    <h2 className="font-semibold text-xl"
                     style={{color :  ` ${colors[index]} ` }}>Benefits</h2>
                    <p>{item.projectImpact ? item.projectImpact : "No data found"}</p>
                  </div>

                  <Dialog.Close asChild>
                    <button
                      className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                      aria-label="Close"
                      style={{color :  ` ${colors[index]} ` }}
                    >
                      <Cross2Icon />
                    </button>
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
    </div>
  );
};

export default Product;
