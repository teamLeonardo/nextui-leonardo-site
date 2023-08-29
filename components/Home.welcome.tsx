import Image from "next/image"
import Link from "next/link"

export const HomeWelcome = () => (
  <div className="section top-bg-image wf-section">
    <div className="container-default z-index-1 w-container">
      <div className="grid-2-columns hero-bg-image-grid">
        <div id="w-node-_741f8d2e-f606-0dfc-d9e8-a0d65a88bf22-cecd3d78" data-w-id="741f8d2e-f606-0dfc-d9e8-a0d65a88bf22"
          style={{
            transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
            , opacity: 1, transformStyle: "preserve-3d"
          }} className="hero-bg-image-left-container">
          <div className="heading-top-line large"></div>
          <h1 className="display-2 mg-bottom-12px">I’m John, a Web Developer</h1>
          <div className="inner-container _504px _100-tablet">
            <p className="mg-bottom-0">Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis ullamcorper quis id
              elementum convallis lacus gravida.</p>
          </div>
          <Link href="/#about"><a data-w-id="e50eb01d-a05e-56d0-eef9-5bffba48de3b"
            className="scroll-down-wrapper w-inline-block">
            <div className="line-square-icon" style={{
              transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
              , transformStyle: "preserve-3d"
            }}>
              </div>
          </a></Link>
        </div>
        <div id="w-node-_42c0e0e1-9a9b-a741-6e24-7571d921d897-cecd3d78" data-w-id="42c0e0e1-9a9b-a741-6e24-7571d921d897"
          className="hero-bg-image-right-container" style={{
            transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
            , transformStyle: "preserve-3d", opacity: 1
          }}>
          <div className="grid-2-columns-mbl _1-col-mbp gap-0-mbp">
            <div className="flex-vertical start">
              <div className="mg-bottom-16px">
                <div className="text-200 bold text-uppercase">About me</div>
              </div>
              <p className="mg-bottom-32px">Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis ullamcorper
                quis id elementum convallis lacus gravida.</p>
              <Link href="/about"><a data-w-id="5290a49c-3bfe-e9aa-e6a4-10df4261ed35"
                className="link-wrapper white mg-top-auto w-inline-block">
                <div className="link-text uppercase">Learn more</div>
                <div className="line-square-icon link-icon-right" style={{
                  transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
                  , transformStyle: "preserve-3d"
                }}>
                  </div>
                <div className="link-underline-wrapper small">
                  <div className="link-underline small" style={{ width: "0%", height: "1.5px" }}></div>
                </div>
              </a></Link>
            </div>
            <div className="hidden-on-mbl show-on-mbp">
              <div className="divider _50px bg-neutral-700"></div>
            </div>
            <div className="flex-vertical start">
              <div className="mg-bottom-16px">
                <div className="text-200 bold text-uppercase">My work</div>
              </div>
              <p className="mg-bottom-32px">Purus ut faucibus pulvinar elementum integer enim neque fermentum iaculis eu
                non diam phasellus dolor consectur.</p>
              <Link href="/portfolio"><a data-w-id="99d0b1f9-f4b2-3af5-7371-adead29c5e28"
                className="link-wrapper white mg-top-auto w-inline-block">
                <div className="link-text uppercase">Browse portfolio</div>
                <div className="line-square-icon link-icon-right" style={{
                  transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
                  , transformStyle: "preserve-3d"
                }}>
                  </div>
                <div className="link-underline-wrapper small">
                  <div className="link-underline small" style={{ width: "0%", height: "1.5px" }}></div>
                </div>
              </a></Link>
            </div>
          </div>
          <div className="divider _50px bg-neutral-700"></div>
          <div className="mg-bottom-24px">
            <div className="text-200 bold text-uppercase">Follow me</div>
          </div>
          <div className="w-layout-grid social-media-grid-top">
            <Link href="https://facebook.com/" target="_blank"><a data-w-id="d0235440-dcd9-912e-e256-a37c2833d211"
              className="social-icon w-inline-block">
              <div className="social-icon-font"></div>
            </a></Link>
            <Link href="https://twitter.com/" target="_blank"><a data-w-id="d0235440-dcd9-912e-e256-a37c2833d214"
              className="social-icon w-inline-block">
              <div className="social-icon-font"></div>
            </a></Link>
            <Link href="https://www.instagram.com/" target="_blank"><a data-w-id="d0235440-dcd9-912e-e256-a37c2833d217"
              className="social-icon w-inline-block">
              <div className="social-icon-font"></div>
            </a></Link>
            <Link href="https://www.linkedin.com/" target="_blank"><a data-w-id="d0235440-dcd9-912e-e256-a37c2833d21a"
              className="social-icon w-inline-block">
              <div className="social-icon-font"></div>
            </a></Link>
            <Link href="https://youtube.com/" target="_blank"><a data-w-id="d0235440-dcd9-912e-e256-a37c2833d21d"
              className="social-icon w-inline-block">
              <div className="social-icon-font"></div>
            </a></Link>
            <Link href="https://github.com/" target="_blank"><a data-w-id="2b2f33df-3a72-4bef-81c4-877448a0b977"
              className="social-icon w-inline-block">
              <div className="social-icon-font"></div>
            </a></Link>
          </div>
        </div>
      </div>
    </div>
    <div data-w-id="b515073d-6832-50b9-25f3-8506a19ef2d2" className="hero-bg-image-wrapper" style={{
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
      transformStyle: "preserve-3d", opacity: 1
    }}>
      <Image layout="fill"
        src="https://assets.website-files.com/622fbc5a718ac3417fcd3d75/6230e4ff69a8f142114d0d12_home-hero-bg-image-developer-webflow-ecommerce-template.png"
        loading="eager" sizes="(max-width: 479px) 90vw, (max-width: 767px) 60vw, (max-width: 1439px) 70vw, 1000px"
        alt="Web Developer - Developer X Webflow Template" className="hero-bg-image" />
    </div>
  </div>
)