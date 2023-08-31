import { HomeAbout } from "@/components/Home.about";
import { HomeFooter } from "@/components/Home.footer";
import { HomePortafolio } from "@/components/Home.portafolio";
import { HomeSkills } from "@/components/Home.skills";
import { BsArrowDown } from "react-icons/bs"
import Link from "next/link";

export default function Home() {
	return (
		<>

			<section className="relative pt-[48px] lg:pt-[146px] pb-0 lg:pb-[112px]">

				<div className="relative z-10 max-w-[1268px] px-[20px] lg:px-[24px] mx-auto">
					<div
						className="grid items-center auto-cols-[1fr] grid-cols-[1fr] lg:grid-cols-[1fr,1fr] grid-rows-[auto] gap-x-[28px] gap-y-[64px] lg:gap-y-[80px]">
						<div className="block self-start max-w-full lg:max-w-[546px] mt-0 lg:mt-[60px]">

							<div className="max-w-[100px] lg:max-w-[148px] min-h-[4px] lg:min-h-[8px] mb-[24px] lg:mb-[49px] w-full bg-white">
							</div>
							<h1 className="mb-[10px] lg:mb-[12px] text-white text-[34px] lg:text-[76px] leading-[1.132em] font-bold">
								I’m Leo, a
								Web Developer
							</h1>
							<div className="max-w-full lg:max-w-[504px]">
								<p className="my-0">
									Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis ullamcorper quis id
									elementum convallis lacus gravida.

								</p>
							</div>

							<Link
								href="#about"
								className="flex 
								overflow-hidden 
								w-[64px] lg:w-[120px] 
								h-[64px] lg:h-[120px] 
								min-h-[64px] lg:min-h-[120px] 
								min-w-[64px] lg:min-w-[120px] 
								mt-[24px]  lg:mt-[74px] 
								justify-center 
								items-center 
								rounded-full 
								bg-[#075fe4] 
								transition-transform 
								text-white 
								text-[28px] lg:text-[50px] 
								leading-[1em] 
								p-[22px] lg:p-0
								no-underline"
							>
								<BsArrowDown size={40}></BsArrowDown>
							</Link>
						</div>
						<div className="max-w-full lg:max-w-[342px] justify-self-start lg:justify-self-end col-start-[span 1]">


							<div className="">
								<div className="flex items-start flex-col">
									<div className="mb-[16px] font-normal">
										<div className="text-white font-bold uppercase tracking-widest leading-[1.111em]">
											About me
										</div>
									</div>
									<p className="mb-[24px] lg:mb-[32px]">
										Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis ullamcorper quis
										id elementum convallis lacus gravida.
									</p>
									<a href="/about"
										className="text-white mt-auto relative inline-block whitespace-nowrap duration-0 ease-linear delay-0 transition-none max-w-full bg-transparent no-underline">
										<div
											className="text-[16px] leading-[1.125em] tracking-wider uppercase inline-block duration-300 ease-in delay-0 transition-colors">
											Learn more</div>
										<div className="inline-block ml-[6px]">
											{/* <ArrowRightIcon className="h-4 w-4" /> */}
										</div>
										<div className="min-h-[1.5px] w-full mt-[6px] bg-[#5d6c83]">
											<div className="min-h-[1.5px]"
												style={{ width: "0%", height: "1.5px" }}></div>
										</div>
									</a>
								</div>
								<div>
									<div className="h-[1px]  my-[40px] lg:my-[50px] bg-[#2d343f]"></div>
								</div>
								<div className="flex items-start flex-col">
									<div className="mb-[16px] font-normal">
										<div className="text-white font-bold uppercase tracking-widest leading-[1.111em]">
											My work
										</div>
									</div>
									<p className="mb-[32px]">
										Purus ut faucibus pulvinar elementum integer enim neque fermentum iaculis eu non
										diam phasellus dolor consectur.
									</p>
									<a href="/about"
										className="text-white mt-auto relative inline-block whitespace-nowrap duration-0 ease-linear delay-0 transition-none max-w-full bg-transparent no-underline">
										<div
											className="text-[16px] leading-[1.125em] tracking-wider uppercase inline-block duration-300 ease-in delay-0 transition-colors">
											Browse portfolio</div>
										<div className="inline-block ml-[6px]">
											{/* <ArrowRightIcon className="h-4 w-4" /> */}
										</div>
										<div className="min-h-[1.5px] w-full mt-[6px] bg-[#5d6c83]">
											<div className="min-h-[1.5px]" style={{ width: "0%", height: "1.5px" }}></div>
										</div>
									</a>
								</div>

							</div>
							<div>
								<div className="h-[1px] my-[50px] bg-[#2d343f]"></div>
							</div>
							<div className="mb-[24px]">
								<div className="font-bold tracking-widest text-white uppercase leading-[1.111em]">
									Follow me
								</div>
							</div>
							<div
								className="grid justify-start justify-items-start flex-[1] gap-x-[26px] gap-y-[16px] grid-cols-6 grid-rows-none ">

								<a data-w-id="d0235440-dcd9-912e-e256-a37c2833d211" href="https://facebook.com/" target="_blank"
									className="social-icon w-inline-block">
									<div className="social-icon-font"></div>
								</a><a data-w-id="d0235440-dcd9-912e-e256-a37c2833d214" href="https://twitter.com/" target="_blank"
									className="social-icon w-inline-block">
									<div className="social-icon-font"></div>
								</a><a data-w-id="d0235440-dcd9-912e-e256-a37c2833d217" href="https://www.instagram.com/" target="_blank"
									className="social-icon w-inline-block">
									<div className="social-icon-font"></div>
								</a><a data-w-id="d0235440-dcd9-912e-e256-a37c2833d21a" href="https://www.linkedin.com/" target="_blank"
									className="social-icon w-inline-block">
									<div className="social-icon-font"></div>
								</a><a data-w-id="d0235440-dcd9-912e-e256-a37c2833d21d" href="https://youtube.com/" target="_blank"
									className="social-icon w-inline-block">
									<div className="social-icon-font"></div>
								</a><a data-w-id="2b2f33df-3a72-4bef-81c4-877448a0b977" href="https://github.com/" target="_blank"
									className="social-icon w-inline-block">
									<div className="social-icon-font"></div>
								</a>
							</div>
						</div>
					</div>

				</div >
				<div className="relative lg:absolute pointer-events-none z-0 left-0 right-0 bottom-[-25px] flex w-full justify-center"
					style={{
						transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
						transformStyle: "preserve-3d",
						opacity: "1"
					}}>

					<img src="yo.png" loading="eager" sizes="(max-width: 479px) 90vw, (max-width: 1439px) 70vw, 1000px"
						alt="Web Developer - Developer X Webflow Template"
						className="w-[70%] max-w-[1000px] ml-[18px] inline-block align-middle border-0 scale-x-[-1]" />
				</div>
			</section >
			<HomeAbout></HomeAbout>
			<HomeSkills></HomeSkills>
			<HomePortafolio></HomePortafolio>
		</>

	);
}
