import React, { useRef } from 'react'
import Cards from './Cards'
function frground() {
  const ref = useRef(null);
  const data = [
    {desc: "Leetcode Solutions", 
      filesize: ".9mb", 
      close: false, 
      tag: {isOpen:true, tagTitle: "Download Now", tagColor: "green"}
    },
    {desc: "Gym Split.", 
      filesize: ".2mb", 
      close: false, 
      tag: {isOpen:true, tagTitle: "Download Now", tagColor: "green"}
    },
    {desc: "Compiler Design Notes", 
      filesize: "5mb", 
      close: false, 
      tag: {isOpen:true, tagTitle: "Download Now", tagColor: "green"}
    },
    {desc: "College Time Table", 
      filesize: ".5mb", 
      close: false, 
      tag: {isOpen:true, tagTitle: "Download Now", tagColor: "green"}
    },
    {desc: "Resume", 
      filesize: "2mb", 
      close: false, 
      tag: {isOpen:true, tagTitle: "Download Now", tagColor: "green"}
    },
  ]
  return (
       <div ref = {ref} className = 'fixed  top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
       {data.map((item, index) => (
        <Cards data={item} refernce = {ref}/>
        ))}

    </div>
  )
}

export default frground
