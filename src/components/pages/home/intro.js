import React from "react"
import ctl from "@netlify/classnames-template-literals"

const HomeIntro = () => {
  //Home Intro Style
  const style = ctl(`
    font-bold 
    md:text-6xl 
    text-3xl
    text-center 
    md:px-0
    px-8
    md:py-32
    py-16
    `)
  return <h1 className={style}>Headless WordPress Blog 🚀</h1>
}

export default HomeIntro
