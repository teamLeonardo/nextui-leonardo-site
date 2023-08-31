import Image from "next/image"

export const HomeSkills = () => (
  <>
    <section className="relative  pt-[240px] z-20">
      <div className="container mx-auto max-w-7xl px-[24px]">
        <div className="mb-[64px]">
          <div className="mb-[24px] text-[20px] leading-[1.1em] text-white font-bold tracking-wider uppercase">
            <span className="text-[#075fe4] mr-1">/</span>
            My Skills
          </div>
          <h2 className="text-white text-[52px] leading-[1.231em] font-bold mt-0 mb-[16px]">
            My extensive list of skills
          </h2>
        </div>

      </div>
    </section>
    <div className="w-ful pb-[240px]">
      <div className="m-auto overflow-hidden relative w-auto">
        <div className="flex w-[calc(250px*14)] animate-scroll">
          {
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((v) => {
              return <>
                <div className="min-w-[460px] mr-8 relative inline-block align-top text-left whitespace-normal" >
                  <div className="pt-[124px] pr-[52px] pb-[100px] pl-[52px] rounded-3xl bg-[#2d343f]">
                    <Image
                      src="https://assets.website-files.com/622fbc5a718ac3417fcd3d75/62312042ef9809f0543e43a2_javascript-round-icon-developer-webflow-ecommerce-template.svg"
                      loading="lazy"
                      alt="Javascript - Developer X Webflow Template"
                      className="mb-[24px] inline-block max-w-full align-middle"
                      width={76}
                      height={76}
                    />
                    <h3 className="mb-[12px] text-white text-[38px] mt-0 leading-[1.211em] font-bold" aria-hidden="true">Javascript</h3>
                    <p className="text-[24px] leading-[1.583em] mb-[40px] mt-0">
                      Ut enim ad minim veniam, quis nostrud
                      exercitation.
                    </p>
                    <div className="w-full max-w-[56px] min-h-[6px] bg-white" aria-hidden="true"></div>
                  </div>
                </div>
              </>
            })
          }
        </div>
      </div>
    </div>
  </>

)