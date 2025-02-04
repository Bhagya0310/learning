import React from 'react'
import Link from 'next/link'

export default function page() {
  return (

<div className=" flex flex-col justify-center justify-items-center items-center" >
<h1 class="text-center text-3xl font-bold mb-4">Tasks</h1><br></br>
<Link legacyBehavior href="/Fullscreenvideo"><a>Fullscreenvideo</a></Link><br></br>
<Link legacyBehavior href="/Email"><a>Email</a></Link><br></br>
<Link legacyBehavior href="/Starrating"><a>Starrating</a></Link><br></br>
<Link legacyBehavior href="/scroollindicator"><a>scroollindicator</a></Link><br></br>
 <Link legacyBehavior href="/Modalbox"><a>Modalbox</a></Link><br></br>
<Link legacyBehavior href="/DeleteModal"><a>DeleteModal</a></Link><br></br>
<Link legacyBehavior href="/Timeline"><a>Timeline</a></Link><br></br>
<Link legacyBehavior href="/Rangesliders"><a>Rangesliders</a></Link><br></br>
<Link legacyBehavior href="/Userrating"><a>Userrating</a></Link><br></br>
<Link legacyBehavior href="/calender"><a>calender</a></Link><br></br>
<Link legacyBehavior href="/Progressbar"><a>Progressbar</a></Link><br></br>
<Link legacyBehavior href="/Random-user"><a>Random-user</a></Link><br></br>

</div>
 
)
}
