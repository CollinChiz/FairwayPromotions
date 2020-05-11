import React from "react"
import { Link, graphql } from "gatsby"
import Checkout from "../components/checkout"
import Layout from "../components/layout"
import { Carousel } from "react-bootstrap"
import Img from "gatsby-image"
import SEO from "../components/seo"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <h1 class="title">The Guppie Charger</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div style={{ marginRight: "20px" }}>
            <Carousel class="carousel">
              <Carousel.Item>
                <Img
                  fluid={props.data.Guppie1ql.childImageSharp.fluid}
                  alt="first image"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Img
                  fluid={props.data.Guppie2ql.childImageSharp.fluid}
                  alt="second image"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Img
                  fluid={props.data.Guppie3ql.childImageSharp.fluid}
                  alt="third image"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div class="col-md-6">
          <table style={{ color: "white", backgroundColor: "rebeccapurple"}}>
            <tr>
              <th style={{borderBottom: "1px solid black"}}>
                Quantity:
              </th>
              <td style={{borderBottom: "1px solid black"}}>0 - 1000</td>
            </tr> 
            <tr>
              <th>
                Price:
              </th>
              <td>$8.60</td>
            </tr>
            
          </table>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="checkout" id="card-element" style={{ float: "right" }}>
            <Checkout />
          </div>
        </div>
      </div>
      <div class="row" style={{ marginTop: "40px" }}>
        <div class="col-md-12">
          The Guppie Charger is a retractable USB cable that charges 95% of
          cellphones today. It contains micro-USB, lighting, USB-C and spans the
          length of 42 inches.
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    Guppie1ql: file(relativePath: { eq: "Guppie1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Guppie2ql: file(relativePath: { eq: "Guppie2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Guppie3ql: file(relativePath: { eq: "Guppie3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
