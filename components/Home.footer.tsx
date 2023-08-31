import Image from "next/image"
import Link from "next/link"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

export const HomeFooter = () => {

  return (
    <footer className="block border-t border-[#5d6c83]">
      <div className="container mx-auto max-w-7xl px-[24px]">
        <div className="py-[120px]">
          <div className="grid items-center auto-cols-fr gap-x-[28px] gap-y-[64px] grid-cols-2 grid-rows-[auto]">
            <div>
              <div className="flex items-center mb-[40px]">
                <Image
                  width={130}
                  height={130}
                  src="/yo.png"
                  loading="lazy"
                  alt="John Carter - Developer X Webflow Template"
                  className="overflow-hidden rounded-full mr-7 inline-block 
                  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 "
                />
                <div>
                  <div className="text-white text-[34px] leading-[1.441em] font-bold mb-2">John Carter</div>
                  <div className="text-[#8895aa] text-[24px] leading-[1.083em] font-medium">Head of Engineering at Google</div>
                </div>
              </div>
              <div className="flex justify-start items-center flex-wrap gap-8">
                <Link href="https://facebook.com/" target="_blank">
                  <FaFacebookF className="text-white" size={30}></FaFacebookF>
                </Link>
                <Link href="https://twitter.com/" target="_blank">
                  <FaInstagram className="text-white" size={30}></FaInstagram>
                </Link>
                <Link href="https://www.instagram.com/" target="_blank">
                  <FaLinkedinIn className="text-white" size={30}></FaLinkedinIn>
                </Link>
                <Link href="https://www.linkedin.com/" target="_blank">
                  <FaGithub className="text-white" size={30}></FaGithub>
                </Link>
              </div>
            </div>
            <div className="justify-self-end" >
              <Link
                href="/contact"
                className="no-underline text-white text-[52px] 
                leading-[1.2em] font-bold inline-block max-w-full mb-[40px]"
              >
                <div className="inline-block">Get in touch</div>
                <div className="text-[#075fe4] inline-block align-middle ml-2">
                  <BsArrowRight></BsArrowRight>
                </div>
              </Link>
              <div className="grid grid-cols-2 gap-6 items-center">
                <div>
                  <div className="text-[16px] font-bold uppercase tracking-[0.06em] leading-[1.125em]">
                    <span className="text-[#c3cad5]">Email me:</span>
                  </div>
                  <Link href="mailto:contact@john.com"
                    className="text-white relative 
                    inline-block whitespace-nowrap mt-4 max-w-full">
                    <div className="inline-block text-white text-[22px] leading-5 font-bold">contact@john.com</div>
                    <div className="inline-block align-top ml-2 text-white">
                      <BsArrowRight size={20}></BsArrowRight>
                    </div>
                  </Link>
                </div>
                <div>
                  <div className="text-[16px] font-bold uppercase tracking-[0.06em] leading-[1.125em]">
                    <span className="text-[#c3cad5]">Call me:</span>
                  </div>
                  <Link href="tel:(414)977-048" className="text-white relative 
                    inline-block whitespace-nowrap mt-4 max-w-full">
                    <div className="inline-block text-white text-[22px] leading-5 font-bold">(414) 977 - 048</div>
                    <div className="inline-block align-top ml-2 text-white">
                      <BsArrowRight size={20}></BsArrowRight>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-8 border-t-1 text-white border-[#5d6c83]">
          <div className="flex items-center justify-center ">
            <div>
              <p className="color-neutral-100 mg-bottom-0">
                Copyright © Developer X | Designed by
                <Link href="https://brixtemplates.com/" target="_blank">
                  BRIX Templates
                </Link> - Powered by
                <Link href="https://webflow.com/" target="_blank">
                  Webflow
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}