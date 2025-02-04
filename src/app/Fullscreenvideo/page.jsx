'use client'
import Link from"next/link";

import { useRef,useState } from "react";

export default function Home() {
  const videoRef=useRef(null);
  const [playing,setPlaying]=useState(false);
  const playOrPause=()=>{
  
  if(playing){
  videoRef.current.pause();
  }else{
   videoRef.current.play();
  }
  setPlaying(!playing);
  }
  
  return (
  <div >
  <video 
  ref={videoRef} 
   className=" w-full h-full"
   autoPlay
  muted
  loop
   >
  <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
  Your browser does not support HTML5 video.
  </video>
  
   <div>
   <h1>Heading</h1>
   <p>The bird is powered by its own life and by its motivation</p>
  <button onClick={playOrPause} 
   
     className="bg-blue-950">{playing ? "pause":"play"}
  
  </button>
   </div>
  </div>
  
    );
  }