import React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"

const SharePost = () => {
  return (
    <div className="bg-wb-blue py-6 text-white md:block hidden text-center sticky top-0">
      <h4 className="uppercase text-[12px] tracking-widest">
        Share This Post ✌
      </h4>
      <div className="inline-flex mt-4 justify-between w-7/12">
        <button>
          <StaticImage
            src="../../../images/icons/twitter.svg"
            placeholder="tracedsvg "
            height={20}
          />
        </button>
        <button>
          <StaticImage
            src="../../../images/icons/linkedin.svg"
            placeholder="tracedsvg "
            height={20}
          />
        </button>
        <button>
          <StaticImage
            src="../../../images/icons/facebook.svg"
            placeholder="tracedsvg "
            height={20}
          />
        </button>
      </div>
    </div>
  )
}

SharePost.propTypes = {}

export default SharePost
