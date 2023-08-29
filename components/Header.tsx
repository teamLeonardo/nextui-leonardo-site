import Image from "next/image"
import Link from "next/link"

export const HeaderWraper = () => (
  <div data-animation="over-left" data-collapse="all" data-duration="400" data-easing="ease" data-easing2="ease"
    role="banner" className="header-wrapper w-nav">
    <div data-w-id="c5231f79-d17d-961c-a3fe-cabb2bfa14ce" className="container-default w-container" style={{
      opacity: "1"
    }}>
      <div className="header-content-wrapper">
        <Link href="/">
          <a aria-current="page" className="header-logo-link w-nav-brand w--current" aria-label="home">
            <Image layout="fill"
              src="https://assets.website-files.com/622fbc5a718ac3417fcd3d75/6230b271b897e76d2705ed6e_logo-developer-webflow-ecommerce-template.svg"
              alt="Developer X Webflow Template - Logo" className="header-logo" />
          </a>
        </Link>
        <div className="header-right-side">
          <ul role="list" className="header-nav-menu-list hidden-on-tablet">
            <li data-w-id="c5231f79-d17d-961c-a3fe-cabb2bfa14d4" className="header-nav-list-item">
              <Link href="/">
                <a aria-current="page" className="header-nav-link w-nav-link w--current">Home</a>
              </Link>
            </li>
            <li data-w-id="c5231f79-d17d-961c-a3fe-cabb2bfa14d7" className="header-nav-list-item">
              <Link href="/about">
                <a className="header-nav-link w-nav-link">About</a>
              </Link>
            </li>
            <li data-w-id="c5231f79-d17d-961c-a3fe-cabb2bfa14da" className="header-nav-list-item">
              <Link href="/blog">
                <a className="header-nav-link w-nav-link">Blog</a>
              </Link>
            </li>
            <li data-w-id="c5231f79-d17d-961c-a3fe-cabb2bfa14dd" className="header-nav-list-item">
              <Link href="/portfolio"><a className="header-nav-link w-nav-link">Portfolio</a></Link>
            </li>
            <li data-w-id="c5231f79-d17d-961c-a3fe-cabb2bfa14e0" className="header-nav-list-item">
              <div data-hover="true" data-delay="0" data-w-id="c5231f79-d17d-961c-a3fe-cabb2bfa14e1"
                className="dropdown-wrapper w-dropdown">
                <div className="dropdown-toggle w-dropdown-toggle" id="w-dropdown-toggle-0"
                  aria-controls="w-dropdown-list-0" aria-haspopup="menu" aria-expanded="false" role="button" tabIndex={0}>
                  <div className="dropdown-text">Pages</div>
                  <div className="line-square-icon dropdown-arrow" style={{
                    transform: " translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
                    , transformStyle: "preserve-3d"
                  }}>
                    
                  </div>
                </div>
                <nav className="dropdown-column-wrapper w-dropdown-list" style={{
                  display: "none", height: "0px",
                  opacity: 0,
                  transform: "translate3d(-50%, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
                  , transformStyle: "preserve-3d"
                }} id="w-dropdown-list-0" aria-labelledby="w-dropdown-toggle-0">
                  <div className="dropdown-pd pd-48px">
                    <div className="w-layout-grid grid-2-columns gap-column-56px">
                      <div>
                        <div className="text-200 bold color-neutral-800 mg-bottom-24px">Pages</div>
                        <div className="w-layout-grid grid-1-column dropdown-link-column">
                          <Link href="/"><a data-w-id="c5231f79-d17d-961c-a3fe-cabb2bfa14ee" aria-current="page"
                            className="dropdown-link w-dropdown-link w--current" tabIndex={0}>Home</a></Link>
                          <Link href="/about"><a data-w-id="c5231f79-d17d-961c-a3fe-cabb2bfa14f0"
                            className="dropdown-link w-dropdown-link" tabIndex={0}>About</a></Link>
                          <Link href="/blog"><a data-w-id="c5231f79-d17d-961c-a3fe-cabb2bfa14f2"
                            className="dropdown-link w-dropdown-link" tabIndex={0}>Blog</a></Link>
                          <Link href="/blog"><a data-w-id="c5231f79-d17d-961c-a3fe-cabb2bfa14f4"
                            className="dropdown-link w-dropdown-link" tabIndex={0}>Blog&nbsp;Post</a></Link>
                          <Link href="/contact"><a data-w-id="c5231f79-d17d-961c-a3fe-cabb2bfa14f6"
                            className="dropdown-link w-dropdown-link" tabIndex={0}>Contact</a></Link>
                          <Link href="/portfolio"><a data-w-id="c5231f79-d17d-961c-a3fe-cabb2bfa14f8"
                            className="dropdown-link w-dropdown-link" tabIndex={0}>Portfolio</a></Link>
                          <Link href="/portfolio"><a data-w-id="c5231f79-d17d-961c-a3fe-cabb2bfa14fa"
                            className="dropdown-link w-dropdown-link" tabIndex={0}>Portfolio Single</a></Link>
                          <Link href="/hire-me"><a data-w-id="c5231f79-d17d-961c-a3fe-cabb2bfa14fc"
                            className="dropdown-link w-dropdown-link" tabIndex={0}>Hire Me</a></Link>
                          <Link href="/"><a data-w-id="c5231f79-d17d-961c-a3fe-cabb2bfa14fe"
                            className="dropdown-link w-dropdown-link" tabIndex={0}>Product&nbsp;Single</a></Link>
                        </div>
                      </div>
                      <div id="w-node-c5231f79-d17d-961c-a3fe-cabb2bfa1500-2bfa14cd">
                        <div className="text-200 bold color-neutral-800 mg-bottom-24px">Utility Pages</div>
                        <div className="w-layout-grid grid-1-column dropdown-link-column">
                          <Link href="/template-pages/start-here"><a data-w-id="c5231f79-d17d-961c-a3fe-cabb2bfa1504"
                            className="dropdown-link w-dropdown-link" tabIndex={0}>Start Here</a></Link>
                          <Link href="/template-pages/style-guide"><a data-w-id="c5231f79-d17d-961c-a3fe-cabb2bfa1506"
                            className="dropdown-link w-dropdown-link" tabIndex={0}>Styleguide</a></Link>
                          <Link href="https://developertemplate.webflow.io/401"><a
                            data-w-id="c5231f79-d17d-961c-a3fe-cabb2bfa1508" className="dropdown-link w-dropdown-link"
                            tabIndex={0}>Password Protected</a></Link>
                          <Link href="https://developertemplate.webflow.io/404"><a
                            data-w-id="c5231f79-d17d-961c-a3fe-cabb2bfa150a" className="dropdown-link w-dropdown-link"
                            tabIndex={0}>404 Not Found</a></Link>
                          <Link href="/template-pages/licenses"><a data-w-id="c5231f79-d17d-961c-a3fe-cabb2bfa150c"
                            className="dropdown-link w-dropdown-link" tabIndex={0}>Licenses</a></Link>
                          <Link href="/template-pages/changelog"><a data-w-id="c5231f79-d17d-961c-a3fe-cabb2bfa150e"
                            className="dropdown-link w-dropdown-link" tabIndex={0}>Changelog</a></Link>
                          <Link href="https://brixtemplates.com/more-webflow-templates"><a
                            data-w-id="da69b7ff-c816-e854-3cfb-4d42d33f4571"
                            className="dropdown-link special w-dropdown-link" tabIndex={0}>Browse More Templates</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </li>
          </ul>
          <div data-node-type="commerce-cart-wrapper" data-w-id="925af30f-911d-76c2-a7c7-ddbf6f9ebe62"
            data-open-product="" data-wf-cart-type="modal" data-wf-page-link-href-prefix=""
            className="w-commerce-commercecartwrapper cart-wrapper header-nav-list-item">
            <Link href="/#"><a data-node-type="commerce-cart-open-link"
              className="w-commerce-commercecartopenlink cart-button w-inline-block">
              <div className="w-inline-block">Cart (</div>
              <div
                data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D"
                className="w-commerce-commercecartopenlinkcount cart-quantity">0</div>
              <div className="w-inline-block">)</div>
            </a></Link>
            <div data-node-type="commerce-cart-container-wrapper" style={{ display: "none" }}
              className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal">
              <div data-node-type="commerce-cart-container" className="w-commerce-commercecartcontainer cart-container">
                <div className="w-commerce-commercecartheader cart-header">
                  <h4 className="w-commerce-commercecartheading">Your Cart</h4>
                  <Link href="/#"><a data-node-type="commerce-cart-close-link"
                    className="w-commerce-commercecartcloselink w-inline-block"><svg width="16px" height="16px"
                      viewBox="0 0 16 16">
                      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g fillRule="nonzero" fill="#333333">
                          <polygon
                            points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8">
                          </polygon>
                        </g>
                      </g>
                    </svg></a></Link>
                </div>

              </div>
            </div>
          </div>
          <div data-w-id="c5231f79-d17d-961c-a3fe-cabb2bfa1510" className="hamburger-menu-wrapper w-nav-button"
            style={{ "WebkitUserSelect": "text" }} aria-label="menu" role="button" tabIndex={0}
            aria-controls="w-nav-overlay-0" aria-haspopup="menu" aria-expanded="false">
            <div className="hamburger-menu-bar top" style={{
              transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
              , transformStyle: "preserve-3d"
            }}>
            </div>
            <div className="hamburger-menu-bar bottom" style={{
              transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
              , transformStyle: "preserve-3d"
            }}>
            </div>
          </div>
        </div>
      </div>
      <div className="header-nav-menu-wrapper hamburger-desktop" style={{ display: "none" }}>
        <div className="header-nav-menu-bg" style={{ width: "0vw", height: "0vw" }}></div>
        <ul role="list" className="header-nav-menu-list hamburger-desktop" style={{
          transform: "translate3d(0px, 0px, 0px) scale3d(0.9, 0.9, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
          , transformStyle: "preserve-3d", opacity: 0
        }}>
          <li data-w-id="c5231f79-d17d-961c-a3fe-cabb2bfa1516" className="header-nav-list-item hamburger-desktop">
            <Link href="/"><a aria-current="page"
              className="header-nav-link hamburger-desktop-nav-link w-nav-link w--current">Home</a></Link>
          </li>
          <li data-w-id="c5231f79-d17d-961c-a3fe-cabb2bfa1519" className="header-nav-list-item hamburger-desktop">
            <Link href="/about"><a className="header-nav-link hamburger-desktop-nav-link w-nav-link">About</a></Link>
          </li>
          <li data-w-id="c5231f79-d17d-961c-a3fe-cabb2bfa151c" className="header-nav-list-item hamburger-desktop">
            <Link href="/blog"><a className="header-nav-link hamburger-desktop-nav-link w-nav-link">Blog</a></Link>
          </li>
          <li data-w-id="c5231f79-d17d-961c-a3fe-cabb2bfa151f" className="header-nav-list-item hamburger-desktop">
            <Link href="/portfolio"><a className="header-nav-link hamburger-desktop-nav-link w-nav-link">Portfolio</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
  </div>
)