import React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"

const SingleBlogPostHeader = () => {
  return (
    <header class="flex md:flex-row flex-col md:px-0 px-4 mt-[50px]">
      <div className="md:w-8/12 md:h-96 h-[200px] ">
        <StaticImage
          src="../../../images/blog/blog-post-single.jpg"
          placeholder="blurred"
          className="w-full h-full object-cover object-top"
          alt="Blog post preview image"
        />
      </div>
      <div className="bg-wb-blue text-white md:w-4/12 md:p-10 p-5 flex flex-col justify-between min-h-[200px] ">
        <div>
          <h1 className=" md:text-4xl text-2xl leading-normal font-medium">
            Board Meeting and Milestones 2021
          </h1>
          <p className="uppercase md:text-sm text-[10px] md:mt-4 mt-2 tracking-[2px]">
            Posted on{" "}
            <span className="text-wb-lime md:text-sm text-[10px] font-semibold">
              May 14, 2021
            </span>
          </p>
        </div>

        <div className="md:block hidden">
          <a href="#">
            <StaticImage
              src="../../../images/icons/down-arrow.svg"
              placeholder="tracedSVG"
              alt=""
            />
          </a>
        </div>
      </div>
    </header>
  )
}

SingleBlogPostHeader.propTypes = {}

export default SingleBlogPostHeader
