import Image from "next/image"
import Link from "next/link"

export const HomeAbout = () => (
  <section className="relative bg-[#242a33] pb-[88px] pt-[240px] z-20">
    <div className="container mx-auto max-w-7xl px-[24px]">
      <div className="grid items-center auto-cols-[1fr] gap-x-[64px] gap-y-[28px] grid-cols-[1fr,1fr] grid-rows-[auto]">
        <div className="max-w-[540px]">
          <div className="mb-[24px] text-[20px] leading-[1.1em] text-white font-bold tracking-wider uppercase">
            <span className="text-[#075fe4]">/</span>
            About me
          </div>
          <h2 className="text-white text-[52px] leading-[1.231em] font-bold mt-0 mb-[16px]">I’ve been developing websites since 2010</h2>
          <p className="mb-[48px] mt-0">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat.
          </p>
          <Link href="/about">
            <div className="link-text heading-h3-size">More about me</div>
            <div className="line-square-icon link-icon-right _26px"></div>
            <div className="link-underline-wrapper">
              <div style={{ width: "0%" }} className="link-underline"></div>
            </div>
          </Link>
        </div>
        <div className="max-w-[540px]">
          <div className="imax-w-[492px]">
            <div className="mb-[12px]">
              <div className="grid items-center auto-cols-[1fr] gap-x-[28px] gap-y-[8px] grid-cols-[1fr,1fr] grid-rows-[auto] text-white">
                <div className="flex items-center">
                  <div className="mr-[12px] text-[76px] leading-[1.132em] font-bold">12</div>
                  <div className="font-bold text-[20px] leading-[1.1em]">Years of experience</div>
                </div>
                <div className="flex items-center">
                  <div className="mr-[12px] text-[76px] leading-[1.132em] font-bold">150</div>
                  <div className="font-bold text-[20px] leading-[1.1em]">Successful projects</div>
                </div>
              </div>
            </div>
          </div>
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation.
          </p>
        </div>
      </div>
      <div className="h-[1px] mt-[214px] mb-[88px] bg-[#2d343f]"></div>
      <div className="grid grid-cols-[0.5fr,1fr] gap-4">
        <div className="text-left">
          <div className="font-bold text-[20px] uppercase text-white leading-[1.1em] tracking-[0.06em]">Previously worked on</div>
        </div>
        <div className="grid grid-cols-4 gap-x-[28px]">
          <Image width={100} height={100}
            className="vertical-align inline-block max-w-full"
            src="https://assets.website-files.com/622fbc5a718ac3417fcd3d75/62310f13c564b06005e26d18_google-logo-developer-webflow-ecommerce-template.svg"
            alt="Google - Developer X Webflow Template" />
          <Image width={100} height={100}
            className="vertical-align inline-block max-w-full"
            src="https://assets.website-files.com/622fbc5a718ac3417fcd3d75/62310f14be32b85db2155c6b_facebook-logo-developer-webflow-ecommerce-template.svg"
            alt="Facebook - Developer X Webflow Template" />
          <Image width={100} height={100}
            className="vertical-align inline-block max-w-full"
            src="https://assets.website-files.com/622fbc5a718ac3417fcd3d75/62310f1460bfef3d469c402a_youtube-logo-developer-webflow-ecommerce-template.svg"
            alt="YouTube - Developer X Webflow Template" />
          <Image width={100} height={100}
            className="vertical-align inline-block max-w-full"
            src="https://assets.website-files.com/622fbc5a718ac3417fcd3d75/62310f149d77ae93834de6d9_pinterest-logo-developer-webflow-ecommerce-template.svg"
            alt="Pinterest - Developer X Webflow Template" />
        </div>
      </div>
    </div>
  </section>
)