import React from 'react';
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion, scale } from "motion/react"


function Cards({ data, refernce }) {
  return (
    <motion.div drag  dragConstraints = {refernce} whileDrag={{scale : 1.1}}className="relative w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden">
      <FaFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>

      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-8 py-1 mb-5">
          <h5>{data.filesize}</h5>
          <span className="w-5 h-5 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? <IoClose /> : <LuDownload size=".7em" color="#fff" />}
          </span>
        </div>

        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className="download text-sm font-semibold">
              {data.tag.tagTitle}
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Cards;
