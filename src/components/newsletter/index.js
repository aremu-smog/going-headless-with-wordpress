import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

const NewsletterForm = () => {
  const [firstName, setFirstname] = useState("")
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const inputStyle = `
    text-wb-blue
    p-3  
    md:w-5/12
    rounded-none
    bg-white
    md:mr-2
    md:mb-0
    mb-3
    `

  const joinNewsletter = e => {
    e.preventDefault()
    setLoading(true)

    addToMailchimp(email, {
      FNAME: firstName,
    }).then(resp => {
      if (resp.result !== "error") {
        alert(`Welcome home ${firstName} 🤗`)
        setEmail("")
        setFirstname("")
      } else {
        alert(`Something went wrong 😞 Kindly try again`)
      }
      setLoading(false)
    })
  }
  return (
    <div className="md:px-0 px-3">
      <section className="bg-wb-lime md:py-16 py-12  my-12 md:w-8/12 mx-auto md:px-9 px-5 ">
        <h3 className="font-bold md:text-3xl text-[21px]  text-center">
          Subscribe to my Newsletter {email} ✌
        </h3>
        <form
          className="flex md:flex-row flex-col  mt-9  justify-between"
          onSubmit={joinNewsletter}
        >
          <input
            type="text"
            className={inputStyle}
            placeholder="Your Firstname"
            required="required"
            onChange={e => {
              setFirstname(e.target.value)
            }}
            value={firstName}
          />
          <input
            className={inputStyle}
            type="email"
            placeholder="Your Email Address"
            required="required"
            onChange={e => {
              setEmail(e.target.value)
            }}
            value={email}
          />
          <input
            className="uppercase cursor-pointer rounded-none bg-wb-blue md:py-0 py-3  text-white md:w-2/12"
            type="submit"
            value={loading ? "Loading..." : "Subscribe"}
            disabled={loading}
          />
        </form>
      </section>
    </div>
  )
}

NewsletterForm.propTypes = {}

export default NewsletterForm
