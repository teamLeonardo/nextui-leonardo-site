export const HomeContact = () => {

  return (
    <div className="section bg-neutral-700---40 wf-section">
      <div className="container-default w-container">
        <div className="grid-2-columns">
          <div id="w-node-e86966c7-6185-ed93-bbe9-e1d2851c9c1e-cecd3d78"
            data-w-id="e86966c7-6185-ed93-bbe9-e1d2851c9c1e"
            style={{ transform: "translate3d(0px, 10%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }}
            className="inner-container _460px">
            <div className="heading-top-line"></div>
            <h2 className="display-3">Interested in working together?<br></br>Lets talk <span
              className="line-square-icon color-accent-1"></span></h2>
          </div>
          <div id="w-node-_6ef3184c-5134-6c0c-38c1-86139a944282-cecd3d78"
            data-w-id="6ef3184c-5134-6c0c-38c1-86139a944282"
            style={{ transform: "translate3d(0px, 10%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }}
            className="inner-container _580px _100-mbl width-100">
            <div className="form min-h-470px w-form">
              <form id="wf-form-Home-Contact-Form" name="wf-form-Home-Contact-Form" data-name="Home Contact Form"
                method="get" className="width-100" aria-label="Home Contact Form">
                <div className="w-layout-grid grid-1-column form gap-row-54px">
                  <div><input type="text" className="input w-input" maxLength={256} name="Name" data-name="Name"
                    placeholder="Enter your name" id="Name-4" required /></div>
                  <div><input type="email" className="input w-input" maxLength={256} name="Email" data-name="Email"
                    placeholder="Your email address" id="Email-4" required /></div>
                  <div id="w-node-_30a6391a-5c0c-5e1c-e1a9-7931bda178b7-cecd3d78"><textarea id="Message-4"
                    name="Message" maxLength={5000} data-name="Message" placeholder="Describe your project"
                    required className="text-area w-input"></textarea></div>
                  <div id="w-node-_1b972250-f5a3-9590-8b45-07dd66466307-cecd3d78"
                    data-w-id="1b972250-f5a3-9590-8b45-07dd66466307" className="link-wrapper button">
                    <input type="submit"
                      value="Contact me" data-wait="Please wait..."
                      id="w-node-_30a6391a-5c0c-5e1c-e1a9-7931bda178bb-cecd3d78"
                      className="heading-h3-size button w-button" />
                    <div className="line-square-icon link-icon-right _26px"></div>
                    <div className="link-underline-wrapper">
                      <div style={{ width: "0%" }} className="link-underline"></div>
                    </div>
                  </div>
                </div>
              </form>
              <div className="success-message w-form-done" tabIndex={-1} role="region"
                aria-label="Home Contact Form success">
                <div className="success-message-inner-container">
                  <div className="line-square-icon succes-message-check large"></div>
                  <div className="display-3 mg-bottom-8px">Thank you</div>
                  <div>Thanks for reaching out. I will get back to you soon.</div>
                </div>
              </div>
              <div className="error-message w-form-fail" tabIndex={-1} role="region" aria-label="Home Contact Form failure">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}