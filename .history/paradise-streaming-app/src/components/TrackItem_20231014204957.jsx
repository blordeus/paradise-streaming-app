import React from 'react'
import { MdPlayArrow, MdPause } from "react-icons/md";

export const TrackItem = ({title, trackNumberLabel, selected, onClick}) => {
  return (
    <li
    onClick={onClick}
    className={cn(
      "flex items-center py-3 px-3 w-full space-evenly rounded cursor-pointer mb-1",
      { "bg-cyan-600 text-white": selected },
      { "hover:bg-cyan-600 hover:text-white": !selected },
    )}
  >
    <span className="text-sm inline-block">{trackNumberLabel}</span>
    <h2 className="flex-1 text-base text-center">{title}</h2>
    <span>
      {selected ? <MdPause size={20} /> : <MdPlayArrow size={20} />}
    </span>
  </li>
  )
}
