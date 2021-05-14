import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeIntro from "../components/pages/home/intro"
import BlogPostPreview from "../components/blog/preview"
import NewsletterForm from "../components/newsletter"
import { graphql, useStaticQuery } from "gatsby"

const IndexPage = () => {
  const posts_query = useStaticQuery(graphql`
    query HomePostsQuery {
      allWpPost {
        edges {
          node {
            title
            date(formatString: "MMMM DD, YYYY")
            categories {
              nodes {
                name
              }
            }
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData(formats: WEBP, placeholder: BLURRED)
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const showPosts = posts_query.allWpPost.edges.map((post, index) => (
    <BlogPostPreview
      title={post.node.title}
      date={post.node.date}
      category={post.node.categories.nodes[0].name}
      image={post.node.featuredImage.node.localFile.childImageSharp}
      key={index}
    />
  ))
  return (
    <Layout>
      <SEO title="Home" />
      <HomeIntro />

      <section className="grid md:grid-cols-4 grid-cols-2  md:gap-4 gap-2 md:px-0 px-3">
        {showPosts}
      </section>

      <NewsletterForm />
    </Layout>
  )
}

export default IndexPage
