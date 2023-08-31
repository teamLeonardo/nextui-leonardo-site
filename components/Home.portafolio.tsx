import Image from "next/image"
import Link from "next/link"

export const HomePortafolio = () => (
  <section className="relative bg-[#242a33] pb-[240px] pt-[240px] z-20">
    <div className="container mx-auto max-w-7xl px-[24px]">
      <div className="grid items-center gap-x-[32px] gap-y-[32px] grid-cols-2 auto-cols-fr">
        <div >
          <div className="mb-[108px]">
            <div className="mb-[24px] text-[20px] leading-[1.1em] text-white font-bold tracking-wider uppercase">
              <span className="text-[#075fe4] mr-1">/</span>
              My portafolio
            </div>
            <h2 className="text-white text-[52px] leading-[1em] font-bold mt-0 mb-[48px]">
              Take a look at the latest projects I’ve done
            </h2>
            <Link href="/#"
              className="link-wrapper white w-inline-block">
              <div className="link-text heading-h3-size">Browse all projects</div>
              <div className="line-square-icon link-icon-right _26px"></div>
              <div className="link-underline-wrapper">
                <div style={{ width: "0%" }} className="link-underline"></div>
              </div>
            </Link>
          </div>
          <div >
            <div >
              <div >
                <Link
                  href="/portfolio/agency-website-development-for-dev-x"
                  className="relative overflow-hidden no-underline rounded-[28px] bg-[#2d343f] max-w-full inline-block"
                >
                  <div className="badges-top-wrapper">
                    <div className="badge-primary small">React JS</div>
                    <div className="badge-primary small">Web Development</div>
                  </div>
                  <div className="portfolio-project-card-text-container">
                    <div className="portfolio-project-logo-wrapper">
                      {/* <Image layout="fill"
                        src="https://assets.website-files.com/622fbc5a718ac357e4cd3da3/623227559d5ce413c3045d1e_dev-project-logo-developer-webflow-ecommerce-template.png"
                        alt="Agency Website Development for Dev X" /> */}
                    </div>
                    <h2 className="display-5 mg-bottom-0">Agency Website Development for Dev X</h2>
                  </div>
                  {/* <Image layout="fill"
                    src="https://assets.website-files.com/622fbc5a718ac357e4cd3da3/6232276ecb324b5c3d0c3276_dev-thumbnail-image-developer-webflow-ecommerce-template.png"
                    alt="Agency Website Development for Dev X" className="portfolio-thumbnail-image" /> */}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div >
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
                      {/* <Image layout="fill"
                        src="https://assets.website-files.com/622fbc5a718ac357e4cd3da3/6232279759ed2980aff418c9_defi-project-logo-developer-webflow-ecommerce-template.png"
                        alt="Crypto Website Development for DeFi X" /> */}
                    </div>
                    <h2 className="display-5 mg-bottom-0">Crypto Website Development for DeFi X</h2>
                  </div>
                  {/* <Image layout="fill"
                    src="https://assets.website-files.com/622fbc5a718ac357e4cd3da3/623227a7644f41349873cd60_defi-thumbnail-image-developer-webflow-ecommerce-template.png"
                    alt="Crypto Website Development for DeFi X" className="portfolio-thumbnail-image" /> */}
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
                      {/* <Image layout="fill"
                        src="https://assets.website-files.com/622fbc5a718ac357e4cd3da3/623226cfc08f430a864a33ca_dark-project-logo-developer-webflow-ecommerce-template.png"
                        alt="Trading Website Development for Dark X" /> */}
                    </div>
                    <h2 className="display-5 mg-bottom-0">Trading Website Development for Dark X</h2>
                  </div>
                  {/* <Image layout="fill"
                    src="https://assets.website-files.com/622fbc5a718ac357e4cd3da3/623226da502a8939ea536581_dark-thumbnail-image-developer-webflow-ecommerce-template.png"
                    alt="Trading Website Development for Dark X" className="portfolio-thumbnail-image" /> */}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)