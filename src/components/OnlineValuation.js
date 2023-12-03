import React, { useState, useEffect } from "react";

import MultiStepForm from "./onlineValuation/MultiStepForm";

import { useMediaQuery } from 'react-responsive';

function OnlineValuation() {
  const [selectForm, setSelectForm] = useState("A");
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 700px)' });
  useEffect(() => {
    console.log("selectForm  sjhfdf ", selectForm);
  }, []);
  return (
    <div
      data-cmplz="1"
      class="page-template page-template-elementor_header_footer page page-id-543 elementor-default elementor-template-full-width elementor-kit-5 elementor-page elementor-page-543 e--ua-blink e--ua-chrome e--ua-webkit"
      data-elementor-device-mode="widescreen"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width={0}
        height={0}
        focusable="false"
        role="none"
        style={{
          visibility: "hidden",
          position: "absolute",
          left: "-9999px",
          overflow: "hidden",
        }}
      >
        <defs>
          <filter id="wp-duotone-dark-grayscale">
            <feColorMatrix
              colorInterpolationFilters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            />
            <feComponentTransfer colorInterpolationFilters="sRGB">
              <feFuncR type="table" tableValues="0 0.49803921568627" />
              <feFuncG type="table" tableValues="0 0.49803921568627" />
              <feFuncB type="table" tableValues="0 0.49803921568627" />
              <feFuncA type="table" tableValues="1 1" />
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width={0}
        height={0}
        focusable="false"
        role="none"
        style={{
          visibility: "hidden",
          position: "absolute",
          left: "-9999px",
          overflow: "hidden",
        }}
      >
        <defs>
          <filter id="wp-duotone-grayscale">
            <feColorMatrix
              colorInterpolationFilters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            />
            <feComponentTransfer colorInterpolationFilters="sRGB">
              <feFuncR type="table" tableValues="0 1" />
              <feFuncG type="table" tableValues="0 1" />
              <feFuncB type="table" tableValues="0 1" />
              <feFuncA type="table" tableValues="1 1" />
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width={0}
        height={0}
        focusable="false"
        role="none"
        style={{
          visibility: "hidden",
          position: "absolute",
          left: "-9999px",
          overflow: "hidden",
        }}
      >
        <defs>
          <filter id="wp-duotone-purple-yellow">
            <feColorMatrix
              colorInterpolationFilters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            />
            <feComponentTransfer colorInterpolationFilters="sRGB">
              <feFuncR
                type="table"
                tableValues="0.54901960784314 0.98823529411765"
              />
              <feFuncG type="table" tableValues="0 1" />
              <feFuncB
                type="table"
                tableValues="0.71764705882353 0.25490196078431"
              />
              <feFuncA type="table" tableValues="1 1" />
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width={0}
        height={0}
        focusable="false"
        role="none"
        style={{
          visibility: "hidden",
          position: "absolute",
          left: "-9999px",
          overflow: "hidden",
        }}
      >
        <defs>
          <filter id="wp-duotone-blue-red">
            <feColorMatrix
              colorInterpolationFilters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            />
            <feComponentTransfer colorInterpolationFilters="sRGB">
              <feFuncR type="table" tableValues="0 1" />
              <feFuncG type="table" tableValues="0 0.27843137254902" />
              <feFuncB
                type="table"
                tableValues="0.5921568627451 0.27843137254902"
              />
              <feFuncA type="table" tableValues="1 1" />
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width={0}
        height={0}
        focusable="false"
        role="none"
        style={{
          visibility: "hidden",
          position: "absolute",
          left: "-9999px",
          overflow: "hidden",
        }}
      >
        <defs>
          <filter id="wp-duotone-midnight">
            <feColorMatrix
              colorInterpolationFilters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            />
            <feComponentTransfer colorInterpolationFilters="sRGB">
              <feFuncR type="table" tableValues="0 0" />
              <feFuncG type="table" tableValues="0 0.64705882352941" />
              <feFuncB type="table" tableValues="0 1" />
              <feFuncA type="table" tableValues="1 1" />
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width={0}
        height={0}
        focusable="false"
        role="none"
        style={{
          visibility: "hidden",
          position: "absolute",
          left: "-9999px",
          overflow: "hidden",
        }}
      >
        <defs>
          <filter id="wp-duotone-magenta-yellow">
            <feColorMatrix
              colorInterpolationFilters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            />
            <feComponentTransfer colorInterpolationFilters="sRGB">
              <feFuncR type="table" tableValues="0.78039215686275 1" />
              <feFuncG type="table" tableValues="0 0.94901960784314" />
              <feFuncB
                type="table"
                tableValues="0.35294117647059 0.47058823529412"
              />
              <feFuncA type="table" tableValues="1 1" />
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width={0}
        height={0}
        focusable="false"
        role="none"
        style={{
          visibility: "hidden",
          position: "absolute",
          left: "-9999px",
          overflow: "hidden",
        }}
      >
        <defs>
          <filter id="wp-duotone-purple-green">
            <feColorMatrix
              colorInterpolationFilters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            />
            <feComponentTransfer colorInterpolationFilters="sRGB">
              <feFuncR
                type="table"
                tableValues="0.65098039215686 0.40392156862745"
              />
              <feFuncG type="table" tableValues="0 1" />
              <feFuncB type="table" tableValues="0.44705882352941 0.4" />
              <feFuncA type="table" tableValues="1 1" />
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width={0}
        height={0}
        focusable="false"
        role="none"
        style={{
          visibility: "hidden",
          position: "absolute",
          left: "-9999px",
          overflow: "hidden",
        }}
      >
        <defs>
          <filter id="wp-duotone-blue-orange">
            <feColorMatrix
              colorInterpolationFilters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            />
            <feComponentTransfer colorInterpolationFilters="sRGB">
              <feFuncR type="table" tableValues="0.098039215686275 1" />
              <feFuncG type="table" tableValues="0 0.66274509803922" />
              <feFuncB
                type="table"
                tableValues="0.84705882352941 0.41960784313725"
              />
              <feFuncA type="table" tableValues="1 1" />
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>
      {/* <div
        data-elementor-type="header"
        data-elementor-id={219}
        className="elementor elementor-219 elementor-location-header"
      > */}
        {/* <FormNavbar /> */}
        <div
  data-animation="default"
  data-collapse="medium"
  data-duration={400}
  data-easing="ease"
  data-easing2="ease"
  role="banner"
  className="header-black w-nav"
>
  <div className="container mw-lg w-container">
    <div className=" align-center justify-between d-flex" style={{display:"flex",justifyContent:"space-between"}}>
      <span  onClick={(e)=>window.location.href="https://www.maida.co"} className="w-nav-brand" aria-label="home">
        <span className="logo logo-text" style={{ color: "#007cd0", fontWeight: "bold" }}>MAIDA.CO</span>
      </span>
      <nav role="navigation" className="main-menu w-nav-menu w--nav-menu-open">
        <a
          href="https://maida.co"
          className="nav-link text-white w-nav-link"
          style={{ maxWidth: "1140px" }}
        >
        Home
        </a>
        <a
          href="https://maida.co/services"
          className="nav-link text-white w-nav-link"
          style={{ maxWidth: "1140px" }}
        >
          Services
        </a>
        <a
          href="https://maida.co/about-us/"
          className="nav-link text-white w-nav-link"
          style={{ maxWidth: "1140px" }}
        >
          About Us
        </a>
        <a
          href="https://maida.co/contact-us"
          className="nav-link text-white w-nav-link"
          style={{ maxWidth: "1140px" }}
        >
          Contact Us
        </a>
        <a
          href="#"
          aria-current="page"
          className="btn btn-std bg-white nav-link w-nav-link w--current"
          style={{ maxWidth: "1140px" }}
        >
          ONLINE APP VALUATION
        </a>
      </nav>
      {/* <div
        className="menu-toggle-button w-nav-button"
        style={{ WebkitUserSelect: "text" }}
        aria-label="menu"
        role="button"
        tabIndex={0}
        aria-controls="w-nav-overlay-0"
        aria-haspopup="menu"
        aria-expanded="false"
      >
        <div className="menu-toggle-icon w-icon-nav-menu" />
      </div> */}
    </div>
  </div>
  <div className="w-nav-overlay" data-wf-ignore id="w-nav-overlay-0" />
</div>


      {/* </div> */}
      <div
        data-elementor-type="wp-page"
        data-elementor-id={543}
        className="elementor elementor-543"
      >
        <div
          data-elementor-type="wp-page"
          data-elementor-id={543}
          className="elementor elementor-543"
        >
          <div
            className="section-std multistep-wrapper wf-section"
            style={{ marginTop: "50px" }}
          >
            {selectForm === "A" && (
              <div>
                <div className="steps-header">
                  {/* <h2 className="logo logo-text logo-blk">Appic</h2> */}
                  <h2 style={{ color: "#007cd0", fontWeight: "bold" }}>
                    MAIDA.CO
                  </h2>
                  <h1
                    className="valuation-heading"
                    style={{
                      color: "white",
                      backgroundColor: "#007cd0",
                      height: "40px",
                    }}
                  >
                    {/* <div > */}
                    <span>Free</span> App Valuation Calculator
                    {/* </div> */}
                  </h1>
                  <div style={{ display: "flex", justifyContent: "center", }}>
                    <div
                      className="progress-bar"
                      style={{ width: "40%" }}
                    ></div>
                    <div className="filled-progress" />
                  </div>
                </div>
                <div className="steps-blocks">
                  <div className="w-form">
                    <form
                      id="wf-form-Contact-Forms"
                      name="wf-form-Contact-Forms"
                      data-name="Contact Forms"
                      redirect="/thankyou"
                      data-redirect="/thankyou"
                      method="get"
                      aria-label="Contact Forms"
                    >
                      <div
                        id="step1"
                        data-steps={1}
                        className="steps step-1 eval-steps"
                      >
                        <h3
                          className="heading-h2 text-center mb-20 text-capitalize mb-10"
                          style={{ fontWeight: "bold" }}
                        >
                          PROVIDE ADDITONAL DETAILS
                          <br />
                          ABOUT YOUR APP
                        </h3>
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <label
                            htmlFor="field"
                            className="field-label mb-1"
                            style={{ textAlign: "center", width: "50%" }}
                          >
                            Is Your Application Currently Available on App
                            Stores, or is it Still in the Development and
                            Unpublished Phase?
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                
                <div className="buuuuuuuuutooon"
                  style={isTabletOrMobile?{
                    marginTop: "-25px",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems:"center"
                   
                  }:{
                    marginTop: "-25px",
                    display: "flex",
                    justifyContent: "center",
                    gap: "25px",
                  
                   
                  }}
                >
                  <div>
                    <a
                      data-steps={4}
                      href="#"
                      className="btn btn-std steps-btn btn-full next-step w-button"
                      style={{
                        color: "white",
                        backgroundColor: "#007cd0",
                        width: "250px",
                      }}
                      onClick={(e) => {
                        setSelectForm("C");
                      }}
                    >
                      UnPublished app
                    </a>
                  </div>
                  <div>
                    <a
                      data-steps={4}
                      href="#"
                      className="btn btn-std steps-btn btn-full next-step w-button"
                      style={{
                        color: "white",
                        backgroundColor: "#007cd0",
                        width: "250px",
                      }}
                      onClick={(e) => {
                        setSelectForm("B");
                      }}
                    >
                      Published App
                    </a>
                  </div>
                </div>
              </div>
            )}

            <MultiStepForm selectForm={selectForm} />
          </div>
        </div>
      </div>
      <div
        className="section-std app-valuation-content"
        style={{ marginTop: "-25px" }}
      >
        <div className="container mw-800 w-container">
          <div className="section-contents">
            <h2 className="heading-std color-grey mb-40">
              Free App Valuation Calculator
            </h2>
            <p className="sub-text text-justify">
              Understanding the value of your app is crucial, whether you're an
              app owner or a publisher. Utilizing tools like an app valuation
              calculator can provide a quick and precise estimate of your app's
              worth. It's beneficial to know this value, irrespective of whether
              you plan to sell your app or not. Being informed about its market
              value is advantageous, especially if circumstances change.
            </p>
            <p className="sub-text text-justify">
              <br />
              Even if selling your app isn't your immediate goal, being aware of
              its market value is essential. This knowledge is particularly
              useful in attracting potential investors who might be interested
              in further developing your app.&nbsp;
            </p>
            <p className="sub-text text-justify">
              <br />
              While it may not be a part of your current development strategy,
              understanding your app's value could become important in the
              future. A precise valuation is key when you start conversations
              with prospective buyers or investors. They will be keen to
              understand the app's performance and its value proposition.&nbsp;
            </p>
            <p className="sub-text text-justify">
              <br />
              So, what are the ways to determine your app's worth? Beyond using
              tools like Appic's app worth calculator, there are various
              methods. The approach you select should align with your app's
              scale, framework, and duration in the market.
            </p>
          </div>
          <div className="section-contents">
            <h3>How to calculate the value of your app</h3>
            <p className="sub-text text-justify">
              If your <strong>end users are paying customers</strong>, you can
              use the formula below to calculate your app’s value. This formula
              will calculate the{" "}
              <strong>total value of your existing user base.</strong>&nbsp;
            </p>
            <p className="sub-text text-justify">
              <strong>
                Value = Number of Users x Net Profit Per User (User Lifetime
                Value - Customer Acquisition Cost)
              </strong>
            </p>
            <h4>What is User Lifetime Value (LTV)?</h4>
            <p className="sub-text text-justify">
              The lifetime value (LTV) of a user is the average amount of money
              a user will spend over time using your app’s products and
              services.&nbsp;
            </p>
            <h4>What is Customer Acquisition Cost (CAC)?</h4>
            <p className="sub-text text-justify">
              Customer Acquisition Cost (CAC) is the average cost of acquiring a
              new user through your marketing or sales efforts.
            </p>
            <p className="sub-text text-justify">
              By subtracting the cost of acquiring a new user from the average
              lifetime value, you can calculate your net profit generated per
              user. Multiply this figure (net profit per user) by the total
              number of users your app has. The figure you get will give you an
              idea of the total value of your current user base.&nbsp;
            </p>
            <p className="sub-text text-justify">
              Another way to calculate your app’s value is to{" "}
              <strong>
                multiply its average monthly revenue by a specific number of
                months.
              </strong>{" "}
              This method will calculate your app’s value{" "}
              <strong>
                based on the monthly revenue it generates over time.
              </strong>
              &nbsp;
            </p>
            <p className="sub-text text-justify">
              The total number of months that your app has been published on the
              App Store can help you determine its estimated revenue over
              time.&nbsp;
            </p>
            <p className="sub-text text-justify">
              For example, if your app’s monthly revenue is approximately $600
              and has been on the App Store for less than 6 months, you may want
              to sell it for the price of its value at 6 months.&nbsp;
            </p>
            <p className="sub-text text-justify">
              <strong>Value = $600 x 6 which equals $3600</strong>
            </p>
            <p className="sub-text text-justify">
              If your app has been on the App Store for longer than 6 months,
              then you might want to value its worth at a year and sell it at
              this cost.
            </p>
            <p className="sub-text text-justify">
              <strong>Value = $600 x 12 which equals $7200</strong>
            </p>
            <h4>What else affects app value?</h4>
            <p className="sub-text text-justify">
              It’s important to remember that these are just two ways to
              calculate your app value. There are other metrics that impact the
              value of your app that buyers and investors will look at when
              assessing it. Keep in mind that an app value checker will assess
              all these metrics in one go, producing a faster, more accurate
              estimate&nbsp;
            </p>
            <h5>Growth rate</h5>
            <p className="sub-text text-justify">
              The formula for calculating your user base value shows your app
              value at a fixed point in time but doesn’t take into account{" "}
              <strong>your speed of growth</strong> or your growth rate. The
              faster your app grows, the more valuable it will appear to buyers
              and investors.&nbsp;
            </p>
            <p className="sub-text text-justify">
              However, your growth rate’s importance in determining your app
              value will increase and decrease depending on the app’s age and
              development stage.&nbsp;
            </p>
            <h5>Churn rate</h5>
            <p className="sub-text text-justify">
              User churn refers to users who disengage from your app by either
              logging out permanently or deleting the app. Your churn rate is
              the number of users who churn from your app over time and is
              usually measured monthly or annually.
            </p>
            <p className="sub-text text-justify">
              Your churn rate matters because it directly works against your
              growth rate. You may show impressive growth but if your churn rate
              is also increasing, it’s going to reduce the net revenue your app
              brings in, which will lower its value. It’s also important to look
              at how quickly your users churn. If they’re churning after a few
              days or several weeks, it will have a bigger impact on your app’s
              value compared to users who churn after a year or longer.
            </p>
            <h5>User engagement</h5>
            <p className="sub-text text-justify">
              How frequently your users engage with your app also plays a role
              in its value. The more users engage with your app, the more likely
              they are to eventually become paid users (if they aren’t already)
              and the less likely they are to churn.&nbsp;
            </p>
            <p className="sub-text text-justify">
              Your user engagement is measured by metrics like your daily active
              users (DAU) and monthly active users (MAU). If you can demonstrate
              that your engagement is improving over time, it can contribute to
              a higher app value, as engagement is the strongest predictor of
              users becoming paid users over time.&nbsp;
            </p>
            <h4>Ready to Calculate Your App’s Value?</h4>
            <p className="sub-text text-justify">
              Ensuring you have an accurate valuation of your app’s worth is
              vital for future investment and sales opportunities, as well as
              understanding how your app is performing now.&nbsp;
            </p>
            <p className="sub-text text-justify">
              It’s something you can’t afford to miscalculate as it could impact
              your earnings or cost you an investment opportunity. But with so
              many factors playing a role in its valuation, getting an accurate
              valuation can quickly become overwhelming.
            </p>
            <p className="sub-text text-justify">
              Instead of taking the risk, Appic’s free app valuation calculator
              can determine your app’s value at the click of a button. Find out
              how much your app is really worth below.
            </p>
          </div>
          {/* <div className="cta-wrapper text-center mt-30">
            <a
              href="#"
              aria-current="page"
              className="btn btn-std primary-color align-end w--current"
              style={{ color: "white", backgroundColor: "#007cd0" }}
            >
              Calculate App Value
            </a>
          </div> */}
        </div>
      </div>
      <div data-elementor-type="footer" style={{width:"100%", marginTop:"-300px" , backgroundColor:"white !important", visibility:"hidden !important" }} data-elementor-id={616} className="elementor elementor-616 elementor-location-footer" >
      <section className="elementor-section elementor-top-section elementor-element elementor-element-af4cf90 elementor-section-full_width elementor-section-height-min-height elementor-section-items-stretch elementor-section-content-middle elementor-section-height-default" data-id="af4cf90" data-element_type="section">
        <div className="elementor-container elementor-column-gap-no">
          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-da3a00e" data-id="da3a00e" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div className="elementor-widget-wrap elementor-element-populated">
              {/* <div className="elementor-background-overlay" /> */}
              <div className="elementor-element elementor-element-e403b32 elementor-widget elementor-widget-heading" data-id="e403b32" data-element_type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h5 className="elementor-heading-title elementor-size-default">Bringing Mobile Visions to life</h5>
                </div>
              </div>
            </div>
          </div>
          


          
          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-7532029" data-id={7532029} data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}" style={isTabletOrMobile?{display:"none"}:{visibility:"hidden"}}>
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-13aa2b0 elementor-widget__width-auto elementor-widget elementor-widget-image" data-id="13aa2b0" data-element_type="widget" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <img width={200} height={30} src="https://weewoo.com/wp-content/uploads/2022/05/weewoo-neg.svg" className="attachment-full size-full wp-image-244 ls-is-cached lazyloaded" alt="" data-src="https://weewoo.com/wp-content/uploads/2022/05/weewoo-neg.svg" decoding="async" />
                  <noscript>&lt;img width="200" height="30" src="https://weewoo.com/wp-content/uploads/2022/05/weewoo-neg.svg" class="attachment-full size-full wp-image-244" alt="" data-eio="l" /&gt;</noscript>
                </div>
              </div>
              <section className="elementor-section elementor-inner-section elementor-element elementor-element-e3dcd50 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="e3dcd50" data-element_type="section">
                <div className="elementor-container elementor-column-gap-no">
                  <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-d500424" data-id="d500424" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-b856891 elementor-widget elementor-widget-heading" data-id="b856891" data-element_type="widget" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                          <h6 className="elementor-heading-title elementor-size-default">Menu</h6>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-e7df191 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="e7df191" data-element_type="widget" data-widget_type="icon-list.default">
                        <div className="elementor-widget-container">
                          <link rel="stylesheet" href="https://weewoo.com/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css" />
                          <ul className="elementor-icon-list-items">
                            <li className="elementor-icon-list-item">
                              <a href="https://www.weewoo.com/">
                                <span className="elementor-icon-list-text">Home</span>
                              </a>
                            </li>
                            <li className="elementor-icon-list-item">
                              <a href="https://www.weewoo.com/manifesto/">
                                <span className="elementor-icon-list-text">Manifesto</span>
                              </a>
                            </li>
                            <li className="elementor-icon-list-item">
                              <a href="https://www.weewoo.com/services/">
                                <span className="elementor-icon-list-text">Services</span>
                              </a>
                            </li>
                            <li className="elementor-icon-list-item">
                              <a href="https://www.weewoo.com/case-studies/">
                                <span className="elementor-icon-list-text">Case Studies</span>
                              </a>
                            </li>
                            <li className="elementor-icon-list-item">
                              <a href="https://www.weewoo.com/careers/">
                                <span className="elementor-icon-list-text">Careers</span>
                              </a>
                            </li>
                            <li className="elementor-icon-list-item">
                              <a href="https://www.weewoo.com/contact-us/">
                                <span className="elementor-icon-list-text">Contact Us</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-714b005" data-id="714b005" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-f6006ec elementor-widget elementor-widget-heading" data-id="f6006ec" data-element_type="widget" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                          <h6 className="elementor-heading-title elementor-size-default">Legal</h6>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-c5c0628 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="c5c0628" data-element_type="widget" data-widget_type="icon-list.default">
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items">
                            <li className="elementor-icon-list-item">
                              <a href="https://www.weewoo.com/privacy-policy/" target="_blank">
                                <span className="elementor-icon-list-text">Privacy Policy</span>
                              </a>
                            </li>
                            <li className="elementor-icon-list-item">
                              <a href="https://www.weewoo.com/terms-of-use/" target="_blank">
                                <span className="elementor-icon-list-text">Terms of use</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="elementor-section elementor-inner-section elementor-element elementor-element-d681cfc elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="d681cfc" data-element_type="section">
                <div className="elementor-container elementor-column-gap-no">
                  <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-3149fe4" data-id="3149fe4" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-8c68e4d elementor-widget elementor-widget-text-editor" data-id="8c68e4d" data-element_type="widget" data-widget_type="text-editor.default">
                        <div className="elementor-widget-container">
                          <p>Follow Us</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-eab0eca" data-id="eab0eca" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-ff79c0e elementor-icon-list--layout-inline elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="ff79c0e" data-element_type="widget" data-widget_type="icon-list.default">
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items elementor-inline-items">
                            <li className="elementor-icon-list-item elementor-inline-item">
                              <a href="https://www.linkedin.com/company/maida-technology-solutions-mts/" target="_blank">
                                <span className="elementor-icon-list-icon">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                                    <path id="Icon_awesome-linkedin" data-name="Icon awesome-linkedin" d="M18.571,2.25H1.424A1.435,1.435,0,0,0,0,3.692V20.808A1.435,1.435,0,0,0,1.424,22.25H18.571A1.439,1.439,0,0,0,20,20.808V3.692A1.439,1.439,0,0,0,18.571,2.25ZM6.045,19.393H3.08V9.848H6.049v9.545ZM4.563,8.545A1.719,1.719,0,1,1,6.281,6.826,1.719,1.719,0,0,1,4.563,8.545ZM17.156,19.393H14.192V14.75c0-1.107-.022-2.531-1.54-2.531-1.545,0-1.781,1.205-1.781,2.451v4.723H7.906V9.848H10.75v1.3h.04A3.122,3.122,0,0,1,13.6,9.612c3,0,3.558,1.978,3.558,4.549Z" transform="translate(0 -2.25)" fill="#fff" />
                                  </svg>
                                </span>
                                <span className="elementor-icon-list-text" />
                              </a>
                            </li>
                            <li className="elementor-icon-list-item elementor-inline-item">
                              <a href="https://www.facebook.com/maidatechnologies" target="_blank">
                                <span className="elementor-icon-list-icon">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                                    <path id="Icon_ionic-logo-facebook" data-name="Icon ionic-logo-facebook" d="M23.4,4.5H5.6A1.1,1.1,0,0,0,4.5,5.6V23.4a1.1,1.1,0,0,0,1.1,1.1h8.9V16.583H12.109V13.667H14.5V11.51a3.8,3.8,0,0,1,4.1-3.99c1.1,0,2.292.083,2.568.12v2.7H19.328c-1.255,0-1.495.594-1.495,1.469v1.859h2.99l-.391,2.917h-2.6V24.5H23.4a1.1,1.1,0,0,0,1.1-1.1V5.6A1.1,1.1,0,0,0,23.4,4.5Z" transform="translate(-4.5 -4.5)" fill="#fff" />
                                  </svg>
                                </span>
                                <span className="elementor-icon-list-text" />
                              </a>
                            </li>
                            <li className="elementor-icon-list-item elementor-inline-item">
                              <a href="https://instagram.com/maida.co" target="__blank">
                                <span className="elementor-icon-list-icon">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="21.5" height="21.5" viewBox="0 0 21.5 21.5">
                                    <g id="Icon_feather-instagram" data-name="Icon feather-instagram" transform="translate(-2.25 -2.25)">
                                      <path id="Trazado_3947" data-name="Trazado 3947" d="M8,3H18a5,5,0,0,1,5,5V18a5,5,0,0,1-5,5H8a5,5,0,0,1-5-5V8A5,5,0,0,1,8,3Z" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                      <path id="Trazado_3948" data-name="Trazado 3948" d="M20.022,15.348a4,4,0,1,1-3.37-3.37,4,4,0,0,1,3.37,3.37Z" transform="translate(-3.022 -2.978)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                      <path id="Trazado_3949" data-name="Trazado 3949" d="M26.25,9.75h0" transform="translate(-7.75 -2.25)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                    </g>
                                  </svg>
                                </span>
                                <span className="elementor-icon-list-text" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-7cebf73" data-id="7cebf73" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-739269e elementor-widget elementor-widget-text-editor" data-id="739269e" data-element_type="widget" data-widget_type="text-editor.default">
                        <div className="elementor-widget-container">
                          <p>Copyright © 2023 MAIDA.CO All Rights Reserved</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
     
    </div>
  );
}

export default OnlineValuation;
