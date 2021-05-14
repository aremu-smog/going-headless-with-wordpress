import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

const BlogPostPreview = ({ category, title, date, image, url }) => {
  return (
    <article className="text-white text-zero ">
      <GatsbyImage image={getImage(image)} alt="title" />
      <div className=" md:p-7 p-3 bg-wb-blue md:min-h-post-preview min-h-[120px]">
        <p className=" md:text-xs text-[7px] ">
          Posted in <span className="text-wb-lime ">{category}</span> on {date}
        </p>

        <h3 className="font-medium md:text-2xl text-sm  md:mt-4 mt-2">
          {title}
        </h3>
      </div>
    </article>
  )
}

export default BlogPostPreview
