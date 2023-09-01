import Image from "next/image"
import Link from "next/link"

export const HomeAbout = () => (
  <section id="about" className="relative bg-[#242a33] pb-[40px] lg:pb-[88px] pt-[40px] lg:pt-[240px] z-20">
    <div className="container mx-auto max-w-7xl px-[24px]">
      <div
        className="flex flex-wrap items-start gap-x-[64px] gap-y-[28px]"
      >
        <div className="max-w-[540px]">
          <div className="mb-[24px] text-[20px] leading-[1.1em] text-white font-bold tracking-wider uppercase">
            <span className="text-[#075fe4]">/ </span>
            Sobre mi
          </div>
          <h2 className="text-white text-[45px] leading-[1.231em] font-bold mt-0 mb-[16px]">
            He estado desarrollando sitios web desde 2019
          </h2>
          <p className="mb-[48px] mt-0">
            Durante mi trayectoria, he contribuido significativamente como desarrollador y analista Front-End en diversos proyectos web, donde he perfeccionado mis habilidades en la creación de interfaces de usuario atractivas y funcionales. Además, he adquirido experiencia valiosa como desarrollador Back-End gracias a proyectos personales donde he trabajado en la arquitectura y lógica detrás de las aplicaciones web, mejorando mi comprensión integral del desarrollo web en su conjunto. Estas experiencias han enriquecido mi conjunto de habilidades y mi capacidad para abordar desafíos técnicos con confianza y eficacia.
          </p>
          <Link href="/about"
            className="text-white mt-auto relative inline-block whitespace-nowrap duration-0 ease-linear delay-0 transition-none max-w-full bg-transparent no-underline">
            <div
              className="text-[16px] leading-[1.125em] tracking-wider uppercase inline-block duration-300 ease-in delay-0 transition-colors"
            >
              Mas Sobre mi
            </div>
            <div className="inline-block ml-[6px]">
              {/* <ArrowRightIcon className="h-4 w-4" /> */}
            </div>
            <div className="min-h-[1.5px] w-full mt-[6px] bg-[#5d6c83]">
              <div className="min-h-[1.5px]" style={{ width: "0%", height: "1.5px" }}></div>
            </div>
          </Link>
        </div>
        <div className="max-w-[540px]">
          <div className="imax-w-[492px]">
            <div className="mb-[12px]">
              <div className="flex flex-nowrap items-center gap-x-[28px] gap-y-[8px] text-white">
                <div className="flex flex-col items-start">
                  <div className="mr-[12px] text-[76px] leading-[1.132em] font-bold">4</div>
                  <div className="font-bold text-[20px] leading-[1.1em]">Años de experiencia</div>
                </div>
                <div className="flex flex-col items-start">
                  <div className="mr-[12px] text-[76px] leading-[1.132em] font-bold">15</div>
                  <div className="font-bold text-[20px] leading-[1.1em]">Proyectos exitosos</div>
                </div>
              </div>
            </div>
          </div>
          <p className="mb-0">
            A lo largo de estos años, he perfeccionado mis habilidades técnicas como desarrollador web a través de numerosos proyectos personales exitosos.
          </p>
        </div>
      </div>
      <div className="h-[1px] mt-[114px] mb-[88px] bg-[#2d343f]"></div>
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div className="text-left">
          <div
            className="font-bold text-[20px] uppercase text-white leading-[1.1em] tracking-[0.06em]">
            TRABAJÉ PREVIAMENTE EN
          </div>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-between gap-[35px]">
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