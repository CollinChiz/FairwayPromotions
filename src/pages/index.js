import React from "react"
import { Link } from "gatsby"
import Checkout from "../components/checkout"
import Layout from "../components/layout"
import Image from "../components/image"
// import Image2 from "../components/image2"
import SEO from "../components/seo"



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 class="title">The Guppie Chord</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div style={{ marginRight: "20px" }}>
            <Image />
          </div>
        </div>
        <div class="col-md-6">
          <div>
            <div class="row" style={{ border: "1px solid black" }}>
              <div class="col-md-6">Quantity:</div>
              <div class="col-md-6" style={{ borderLeft: "1px solid black" }}>
                0 - 1000
              </div>
            </div>
            <div
              class="row"
              style={{ border: "1px solid black", borderTop: "none" }}
            >
              <div class="col-md-6">Price:</div>
              <div class="col-md-6" style={{ borderLeft: "1px solid black" }}>
                $8.60
              </div>
            </div>
            <div style={{ position: "absolute", bottom: "0", left: "25%" }}>
              <div id="card-element">
                <Checkout />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row" style={{ marginTop: "40px" }}>
        <div class="col-md-12">
          The Guppie Chord is a retractable USB cable that charges 95% of
          cellphones today. It contains micro-USB, lighting, USB-C and spans the
          length of 42 inches.
        </div>
      </div>
      <br></br>
    </div>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
