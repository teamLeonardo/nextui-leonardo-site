"use client"
import Image from "next/image"
import Link from "next/link"
import { Chip } from "@nextui-org/react"
import { FaReact, FaJs } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import { DiHtml5 } from "react-icons/di"
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
                  className="relative overflow-hidden no-underline rounded-[28px] bg-[#2d343f] max-w-full inline-block w-full"
                >
                  <div
                    className="absolute top-[32px] right-[32px] z-[1] grid auto-cols-fr gap-x-[16px] gap-y-[16px] grid-cols-[auto,auto] grid-rows-[auto]"
                  >
                    <Chip
                      variant="bordered"
                      color="primary"
                      startContent={<FaReact size={18} />}
                    >
                      React
                    </Chip>
                    <Chip
                      variant="bordered"
                      color="warning"
                      startContent={<BiLogoPostgresql size={18} />}
                    >
                      PostgreSQL
                    </Chip>
                  </div>
                  <div
                    className="relative z-[1] max-w-[430px] mt-[90px] mr-[34px] mb-[-24px] ml-[34px]"
                  >
                    <div className="text-[#e62e04] text-[34px] leading-[1.441em] font-bold mb-0">
                      AliNext
                    </div>
                    <h2 className="text-white text-[34px] leading-[1.441em] font-bold mb-0">
                      Tienda clone de AliexPress
                    </h2>
                  </div>
                  <Image
                    className="inline-block max-w-full align-middle"
                    width={600}
                    height={600}
                    src="/shot.png"
                    alt="Agency Website Development for Dev X"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div className="mb-10">
            <div>
              <div>
                <Link
                  href="/portfolio/agency-website-development-for-dev-x"
                  className="relative overflow-hidden no-underline rounded-[28px] bg-[#2d343f] max-w-full inline-block w-full"
                >
                  <div
                    className="absolute top-[32px] right-[32px] z-[1] grid auto-cols-fr gap-x-[16px] gap-y-[16px] grid-cols-[auto,auto] grid-rows-[auto]"
                  >
                    <Chip
                      variant="bordered"
                      color="warning"
                      startContent={<FaJs size={18} />}
                    >
                      JavaScript
                    </Chip>
                    <Chip
                      variant="bordered"
                      color="danger"
                      startContent={<DiHtml5 size={18} />}
                    >
                      HTML
                    </Chip>
                  </div>
                  <div
                    className="relative z-[1] max-w-[430px] mt-[90px] mr-[34px] mb-[-24px] ml-[34px]"
                  >
                    <div className="text-white text-[34px] leading-[1.441em] font-bold mb-0">
                      JuegoMemoria
                    </div>
                    <h2 className="text-white text-[34px] leading-[1.441em] font-bold mb-0">
                      juego de memoria
                    </h2>
                  </div>
                  <Image
                    className="inline-block max-w-full align-middle"
                    width={600}
                    height={600}
                    src="/shot.png"
                    alt="Agency Website Development for Dev X"
                  />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
)