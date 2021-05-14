import React from "react"
import BuyMeACoffeeLogo from "../images/logos/buy-me-a-coffee.png"

const MainFooter = () => {
  return (
    <footer className="text-center py-16 max-w-2xl mx-auto">
      <p>
        Built by your Awesome Friends at web boss for a series of live sessions
        on how to go Headless with WordPress using GatsbyJS. Click here to view
        the complete playlist on Youtube
      </p>
      <p>
        <a
          href="https://paystack.com/pay/web-boss-coffee"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={BuyMeACoffeeLogo}
            alt=""
            className="inline-block mt-6 w-48"
          />
        </a>
      </p>
    </footer>
  )
}

export default MainFooter
