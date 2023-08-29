import Image from "next/image"
import Link from "next/link"

export const HomePortafolio = () => (
  <div className="section bg-neutral-700---40 wf-section">
    <div className="container-default w-container">
      <div className="grid-2-columns title-and-cards">
        <div id="w-node-d986b1c4-810f-08ae-61d9-bcbd56045c2e-cecd3d78" data-w-id="d986b1c4-810f-08ae-61d9-bcbd56045c2e"
          style={{
            transform: "translate3d(0px, 10%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
            , transformStyle: "preserve-3d"
          }}>
          <div id="w-node-_9bd4dc5c-7803-8711-52a1-98d018e5c766-cecd3d78" className="mg-bottom-108px">
            <div className="subtitle"><span className="color-accent-1">/</span> My portfolio</div>
            <h2 className="display-3 mg-bottom-48px">Take a look at the latest projects I’ve done</h2>
            <Link href="/#"
              className="link-wrapper white w-inline-block">
              <div className="link-text heading-h3-size">Browse all projects</div>
              <div className="line-square-icon link-icon-right _26px"></div>
              <div className="link-underline-wrapper">
                <div style={{ width: "0%" }} className="link-underline"></div>
              </div>
            </Link>
          </div>
          <div className="w-dyn-list">
            <div role="list" className="w-dyn-items">
              <div role="listitem" className="w-dyn-item">
                <Link href="/portfolio/agency-website-development-for-dev-x" className="card portfolio-project w-inline-block">
                  <div className="badges-top-wrapper">
                    <div className="badge-primary small">React JS</div>
                    <div className="badge-primary small">Web Development</div>
                  </div>
                  <div className="portfolio-project-card-text-container">
                    <div className="portfolio-project-logo-wrapper">
                      <Image layout="fill"
                        src="https://assets.website-files.com/622fbc5a718ac357e4cd3da3/623227559d5ce413c3045d1e_dev-project-logo-developer-webflow-ecommerce-template.png"
                        alt="Agency Website Development for Dev X" />
                    </div>
                    <h2 className="display-5 mg-bottom-0">Agency Website Development for Dev X</h2>
                  </div>
                  <Image layout="fill"
                    src="https://assets.website-files.com/622fbc5a718ac357e4cd3da3/6232276ecb324b5c3d0c3276_dev-thumbnail-image-developer-webflow-ecommerce-template.png"
                    alt="Agency Website Development for Dev X" className="portfolio-thumbnail-image" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div id="w-node-_6f34c543-cafb-5831-e05b-ad69d32267ce-cecd3d78" data-w-id="6f34c543-cafb-5831-e05b-ad69d32267ce"
          style={{
            transform: "translate3d(0px, 10%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
            , transformStyle: "preserve-3d"
          }}>
          <div className="mg-bottom-40px w-dyn-list">
            <div role="list" className="w-dyn-items">
              <div role="listitem" className="w-dyn-item">
                <Link href="/portfolio/crypto-website-development-for-defi-x" className="card portfolio-project w-inline-block">
                  <div className="badges-top-wrapper">
                    <div className="badge-primary small">React JS</div>
                    <div className="badge-primary small">Web Development</div>
                  </div>
                  <div className="portfolio-project-card-text-container">
                    <div className="portfolio-project-logo-wrapper">
                      <Image layout="fill"
                        src="https://assets.website-files.com/622fbc5a718ac357e4cd3da3/6232279759ed2980aff418c9_defi-project-logo-developer-webflow-ecommerce-template.png"
                        alt="Crypto Website Development for DeFi X" />
                    </div>
                    <h2 className="display-5 mg-bottom-0">Crypto Website Development for DeFi X</h2>
                  </div>
                  <Image layout="fill"
                    src="https://assets.website-files.com/622fbc5a718ac357e4cd3da3/623227a7644f41349873cd60_defi-thumbnail-image-developer-webflow-ecommerce-template.png"
                    alt="Crypto Website Development for DeFi X" className="portfolio-thumbnail-image" />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-dyn-list">
            <div role="list" className="w-dyn-items">
              <div role="listitem" className="w-dyn-item">
                <Link href="/portfolio/trading-website-development-for-dark-x" className="card portfolio-project w-inline-block">
                  <div className="badges-top-wrapper">
                    <div className="badge-primary small">Webflow</div>
                    <div className="badge-primary small">Web Development</div>
                  </div>
                  <div className="portfolio-project-card-text-container">
                    <div className="portfolio-project-logo-wrapper">
                      <Image layout="fill"
                        src="https://assets.website-files.com/622fbc5a718ac357e4cd3da3/623226cfc08f430a864a33ca_dark-project-logo-developer-webflow-ecommerce-template.png"
                        alt="Trading Website Development for Dark X" />
                    </div>
                    <h2 className="display-5 mg-bottom-0">Trading Website Development for Dark X</h2>
                  </div>
                  <Image layout="fill"
                    src="https://assets.website-files.com/622fbc5a718ac357e4cd3da3/623226da502a8939ea536581_dark-thumbnail-image-developer-webflow-ecommerce-template.png"
                    alt="Trading Website Development for Dark X" className="portfolio-thumbnail-image" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)