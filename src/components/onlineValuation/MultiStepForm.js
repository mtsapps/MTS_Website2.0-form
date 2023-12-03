import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../common/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const MultiStepForm = ({selectForm}) => {
  const [formData, setFormData] = useState({
    appLink: "",
    appPlatform: "",
    traffic: "",
    downloads: 0,
    netRevenue: 0,
    spending: 0,
    revenueSource: 0,
    otherSourceRevenue: 0,
    retentionPercentage: 0,
    subscribedUserPercentage: 0,
    firstName: "",
    surname: "",
    emailAddress: "",
    linkedIn: "",
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [Calc, setCalc] = useState(1);
  const [Vara, setVara] = useState(0);
  const [caller, setCaller] = useState(false);
  const [unCall, setUnCall] = useState(false);
  
  // let Calc=0;
  const placeHolderValue = (down) => {
    if (down <= 100000) {
      return 100;
    } else if (down <= 500000 && down > 100000) {
      return 150;
    } else if (down <= 1000000 && down > 500000) {
      return 200;
    } else if (down <= 5000000 && down > 1000000) {
      return 500;
    }
    else if (down > 5000000) {
      return 700;
    }
  };
  const appValue = () => {
    if (formData.netRevenue <= 0 || formData.spending <= 0) {
      return 0;
    } else {
      let grossProfit = parseInt((formData.netRevenue - formData.spending)/3) * 10;
      if(grossProfit<=0){
        return 0;
      }
      else{
        return grossProfit;
      }
    }
  };
  const unpublishedCalc = (e) => {  
    console.log("hellow")
    if (formData.firstName && formData.surname && formData.emailAddress && formData.linkedIn) {
      handleNext1(e)
    } else {
      alert("invalid fields")
  }

  
     
      setUnCall(false);
    
  }
  const publishedCalc = (e) => {  
    console.log("hellow")
    if (formData.firstName && formData.surname && formData.emailAddress && formData.linkedIn) {
      handleNext(e)
    } else {
      alert("invalid fields")
  }

  
     
      setUnCall(false);
    
  }
  const revenecalccc = (e) => {
    if (formData.netRevenue && formData.spending) {
      handleNext(e);
      
    } else {
      alert("invalid fields")
    }
    
  }
const radioController=(e)=>{
  handleChange(e);
  
  // handleNext(e);
  // setTimeout(()=>{
    
  //  },5000)
  var beta=e.target.name;
  if(formData[beta]){
    handleNext(e);
    
  }
  setCaller(!caller);
}
  const finalAppValue = () => {
    let value = parseInt(appValue() + placeHolderValue(formData.downloads));
    return setCalc(value);
  };
  const handler = (e) => {
    finalAppValue();
    handleNext(e);
   
  };
  useEffect(() => {
    finalAppValue();
    console.log(
      "calsjdkdbs ",
      formData,
      Vara,
    );
  }, [formData, Vara, caller, unCall]);
  const handleNext1= (e) => {
  
      setCurrentStep((prevStep) => prevStep + 1);
      console.log(currentStep);
      setVara(0);
      setUnCall(true);
    setTimeout(() => {
     window.location.href="https://maida.co/thankyou"
   },5000)
   
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (Vara == "" && Vara==0) {
      alert("Please enter value");
      setUnCall(false);
    } else {
      setCurrentStep((prevStep) => prevStep + 1);
      console.log(currentStep);
      setVara(0);
      setUnCall(true);
    }
   
  };
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVara(value);

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return selectForm ==="B" ? 
  (
    <>

      {currentStep === 1 && (
        <div className="w-container">
          <div className="steps-outer">
          <div className="steps-header">
                  {/* <h2 className="logo logo-text logo-blk">MAIDA.CO</h2> */}
                  <h2 style={{ color: "#007cd0" ,fontWeight: "bold"}}>MAIDA.CO</h2>
                  <h1
                    className="valuation-heading"
                    style={{ color: "white", backgroundColor: "#007cd0" }}
                  >
                    {/* <div > */}
                    <span>Free</span> App Valuation Calculator
                    {/* </div> */}
                  </h1>
                  <div style={{ display: "flex", justifyContent: "center" }}>
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
                  redirect="https://maida.co/thankyou"
                  data-redirect="https://maida.co/thankyou"
                  method="get"
                  aria-label="Contact Forms"
                >
                  <div
                    id="step1"
                    data-steps={1}
                    className="steps step-1 eval-steps"
                    
                  >
                    <h3 className="heading-h2 text-center mb-20 text-capitalize mb-10" style={{fontWeight: "bold"}}>
                      Tell Us How Much You Can
                      <br />
                      Earn For Your App
                    </h3>
                    <label htmlFor="field" className="field-label mb-1">
                    Can you provide a link to your application's 
                    listing on the relevant app store?
                    </label>
                    <input
                      type="text"
                      className="step-input w-input"
                      maxLength={256}
                      name="appLink"
                      data-name="appLink"
                      placeholder="Paste Link"
                      id="appLink"
                      required
                      onChange={handleChange}
                    />
                      {!formData.appLink &&(
                      <div className="error-msg error-msg-1">
                      <div>This Field is required</div>
                    </div>
                    ) }
                   
                    <a
                      data-steps={1}
                      href="#"
                      className="btn btn-std steps-btn btn-full next-step w-button"
                      style={{ color: "white", backgroundColor: "#007cd0" }}
                      onClick={handleNext}
                    >
                      NEXT
                    </a>

                    {/* Add the additional HTML elements for Step 1 here */}
                    <div className="w-embed">
                      <input type="hidden" name="utm_id" id="utm-id" />
                    </div>
                    <div className="w-embed">
                      <input type="hidden" name="utm_source" id="utm-source" />
                    </div>
                    <div className="w-embed">
                      <input type="hidden" name="utm_medium" id="utm-medium" />
                    </div>
                    <div className="w-embed">
                      <input
                        type="hidden"
                        name="utm_campaign"
                        id="utm-campaign"
                      />
                    </div>
                    <div className="w-embed">
                      <input type="hidden" name="utm_term" id="utm-term" />
                    </div>
                    <div className="w-embed">
                      <input
                        type="hidden"
                        name="utm_content"
                        id="utm-content"
                      />
                    </div>
                  </div>
                  {/* ... (Add code for other steps) */}

                  <div
                    className="w-form-done"
                    tabIndex={-1}
                    role="region"
                    aria-label="Contact Forms success"
                  >
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div
                    className="w-form-fail"
                    tabIndex={-1}
                    role="region"
                    aria-label="Contact Forms failure"
                  >
                    <div>
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className="section-std multistep-wrapper wf-section">
          <div className="w-container">
            <div className="steps-outer">
            <div className="steps-header">
                  {/* <h2 className="logo logo-text logo-blk">MAIDA.CO</h2> */}
                  <h2 style={{ color: "#007cd0", fontWeight: "bold" }}>MAIDA.CO</h2>
                  <h1
                    className="valuation-heading"
                    style={{ color: "white", backgroundColor: "#007cd0" }}
                  >
                    {/* <div > */}
                    <span>Free</span> App Valuation Calculator
                    {/* </div> */}
                  </h1>
                  <div style={{ display: "flex", justifyContent: "center" }}>
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
                    redirect="https://maida.co/thankyou"
                    data-redirect="https://maida.co/thankyou"
                    method="get"
                    aria-label="Contact Forms"
                  >
                    <div
                      id="step2"
                      data-steps={2}
                      className="steps step-2 eval-steps"
                      style={{ display: "block" }}
                    >
                      <h3 className="heading-h2 text-center mb-20 text-capitalize" style={{ fontWeight: "bold" }}>
                        my app is
                      </h3>
                      <label className="steps-radio w-radio hover-effect"  >
                        <input
                          type="radio"
                          id="appPlatform"
                          name="appPlatform"
                          defaultValue="IOS"
                          data-name="appPlatform"
                          data-steps={2}
                          className="w-form-formradioinput steps-radio-btn next-step w-radio-input"
                          
                          // onClick={handleNext}
                          onClick={radioController}
                        />
                        <span
                          className="selected-input w-form-label"
                          htmlFor="IOS"
                        >
                          IOS
                        </span>
                      </label>
                      <label className="steps-radio w-radio hover-effect"  >
                        <input
                          type="radio"
                          id="appPlatform"
                          name="appPlatform"
                          defaultValue="Android"
                          data-name="appPlatform"
                          data-steps={2}
                          className="w-form-formradioinput steps-radio-btn next-step w-radio-input"
                          // onClick={handleNext}
                          onClick={radioController}
                        />
                        <span
                          className="selected-input w-form-label"
                          htmlFor="Android"
                        >
                          Android
                        </span>
                      </label>
                      <label className="steps-radio w-radio hover-effect"  >
                        <input
                          type="radio"
                          id="appPlatform"
                          name="appPlatform"
                          defaultValue="IOS & Android"
                          data-name="appPlatform"
                          data-steps={2}
                          className="w-form-formradioinput steps-radio-btn next-step w-radio-input"
                          // onClick={handleNext}
                          onClick={radioController}
                        />
                        <span
                          className="selected-input w-form-label"
                          htmlFor="IOS-Android"
                        >
                          IOS &amp; Android
                        </span>
                      </label>
                      {!formData.appPlatform &&(
                      <div className="error-msg error-msg-1">
                      <div>This Field is required</div>
                    </div>
                    ) }
                      <a
                      data-steps={1}
                      href="#"
                      className="btn btn-std steps-btn btn-full next-step w-button"
                      style={{ color: "white", backgroundColor: "#007cd0" }}
                      onClick={handleNext}
                    >
                      NEXT
                    </a>
                    </div>
                  </form>
                  <div
                    className="w-form-done"
                    tabIndex={-1}
                    role="region"
                    aria-label="Contact Forms success"
                  >
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div
                    className="w-form-fail"
                    tabIndex={-1}
                    role="region"
                    aria-label="Contact Forms failure"
                  >
                    <div>
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {currentStep === 3 && (
        <div className="w-container">
          <div className="steps-outer">
          <div className="steps-header">
                  {/* <h2 className="logo logo-text logo-blk">MAIDA.CO</h2> */}
                  <h2 style={{ color: "#007cd0" ,fontWeight: "bold"}}>MAIDA.CO</h2>
                  <h1
                    className="valuation-heading"
                    style={{ color: "white", backgroundColor: "#007cd0" }}
                  >
                    {/* <div > */}
                    <span>Free</span> App Valuation Calculator
                    {/* </div> */}
                  </h1>
                  <div style={{ display: "flex", justifyContent: "center" }}>
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
                  redirect="https://maida.co/thankyou"
                  data-redirect="https://maida.co/thankyou"
                  method="get"
                  aria-label="Contact Forms"
                >
                  <div
                    id="step3"
                    data-steps={3}
                    className="steps step-3 eval-steps"
                    style={{ display: "block" }}
                  >
                    <h3 className="heading-h2 text-center mb-20 text-capitalize" style={{ fontWeight: "bold"}}>
                      My traffic is
                    </h3>
                    <label className="steps-radio w-radio hover-effect"  >
                      <input
                        type="radio"
                        id="traffic"
                        name="traffic"
                        defaultValue="Organic"
                        data-name="traffic"
                        data-steps={3}
                        className="w-form-formradioinput steps-radio-btn d-none next-step w-radio-input"
                        // onClick={handleNext}
                        onClick={radioController}
                      />
                      <span
                        className="selected-input w-form-label"
                        htmlFor="Organic"
                      >
                        Organic
                      </span>
                    </label>
                    <label className="steps-radio w-radio hover-effect"  >
                      <input
                        type="radio"
                        id="traffic"
                        name="traffic"
                        defaultValue="Paid"
                        data-name="traffic"
                        data-steps={3}
                        className="w-form-formradioinput steps-radio-btn d-none next-step w-radio-input"
                        // onClick={handleNext}
                        onClick={radioController}
                      />
                      <span
                        className="selected-input w-form-label"
                        htmlFor="Paid"
                      >
                        Paid
                      </span>
                    </label>
                    <label className="steps-radio w-radio hover-effect"  >
                      <input
                        type="radio"
                        id="traffic"
                        name="traffic"
                        defaultValue="Both"
                        data-name="traffic"
                        data-steps={3}
                        className="w-form-formradioinput steps-radio-btn d-none next-step w-radio-input"
                        // onClick={handleNext}
                        onClick={radioController}
                      />
                      <span
                        className="selected-input w-form-label"
                        htmlFor="Both"
                      >
                        Both
                      </span>
                      </label>
                      {!formData.traffic &&(
                      <div className="error-msg error-msg-1">
                      <div>This Field is required</div>
                    </div>
                    ) }
                    <a
                      data-steps={1}
                      href="#"
                      className="btn btn-std steps-btn btn-full next-step w-button"
                      style={{ color: "white", backgroundColor: "#007cd0" }}
                      onClick={handleNext}
                    >
                      NEXT
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {currentStep === 4 && (
        <div className="w-container">
          <div className="steps-outer">
          <div className="steps-header">
                  {/* <h2 className="logo logo-text logo-blk">MAIDA.CO</h2> */}
                  <h2 style={{ color: "#007cd0", fontWeight:"bold" }}>MAIDA.CO</h2>
                  <h1
                    className="valuation-heading"
                    style={{ color: "white", backgroundColor: "#007cd0" }}
                  >
                    {/* <div > */}
                    <span>Free</span> App Valuation Calculator
                    {/* </div> */}
                  </h1>
                  <div style={{ display: "flex", justifyContent: "center" }}>
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
                  redirect="https://maida.co/thankyou"
                  data-redirect="https://maida.co/thankyou"
                  method="get"
                  aria-label="Contact Forms"
                >
                  <div
                    id="step4"
                    data-steps={4}
                    className="steps step-4 eval-steps"
                    style={{ display: "block"}}
                  >
                    <h3 className="heading-h2 text-center mb-20 text-capitalize" style={{fontWeight:"bold"}}>
                    TOTAL APP DOWNLOADS
                    </h3>
                    <input
                      type="text"
                      className="step-input w-input"
                      maxLength={256}
                      name="downloads"
                      data-name="downloads"
                      placeholder={0}
                      id="downloads"
                      required
                      onChange={handleChange}
                    />
                    {!formData.downloads &&(
                      <div className="error-msg error-msg-1">
                      <div>This Field is required</div>
                    </div>
                    ) }
                    <a
                      data-steps={4}
                      href="#"
                      className="btn btn-std steps-btn btn-full next-step w-button"
                      style={{ color: "white", backgroundColor: "#007cd0" }}
                      onClick={handleNext}
                    >
                      NEXT
                    </a>
                  </div>
                </form>
                <div
                  className="w-form-done"
                  tabIndex={-1}
                  role="region"
                  aria-label="Contact Forms success"
                >
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div
                  className="w-form-fail"
                  tabIndex={-1}
                  role="region"
                  aria-label="Contact Forms failure"
                >
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {currentStep === 5 && (
        <div className="w-container">
          <div className="steps-outer">
          <div className="steps-header">
                  {/* <h2 className="logo logo-text logo-blk">MAIDA.CO</h2> */}
                  <h2 style={{ color: "#007cd0", fontWeight:"bold"}}>MAIDA.CO</h2>
                  <h1
                    className="valuation-heading"
                    style={{ color: "white", backgroundColor: "#007cd0" }}
                  >
                    {/* <div > */}
                    <span>Free</span> App Valuation Calculator
                    {/* </div> */}
                  </h1>
                  <div style={{ display: "flex", justifyContent: "center" }}>
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
                  redirect="https://maida.co/thankyou"
                  data-redirect="https://maida.co/thankyou"
                  method="get"
                  aria-label="Contact Forms"
                >
             
                  <div
                    id="step5"
                    data-steps={5}
                    className="steps step-5 eval-steps"
                    style={{ display: "block" }}
                  >
                    <h3 className="heading-h2 text-center mb-20 text-capitalize" style={{fontWeight:"bold"}}>
                    My App's Net Revenue for the Last 90 Days
                    </h3>
                    <div className="currency-field">
                      <input
                        type="text"
                        className="step-input curreny-spacer w-input"
                        maxLength={256}
                        name="netRevenue"
                        data-name="netRevenue"
                        placeholder ="USD$"
                        id="netRevenue"
                        required
                        onChange={handleChange}
                      />
                    </div>
                    {!formData.netRevenue &&(
                      <div className="error-msg error-msg-1">
                      <div>This Field is required</div>
                    </div>
                    ) }
                    <h3 className="heading-h2 text-center mb-20 text-capitalize" style={{fontWeight:"bold"}}>
                    My App's spending on 
                    marketing compaigns for the Last 90 Days
                      
                    </h3>
             
                    <div className="currency-field">
                      <input
                        type="text"
                        className="step-input curreny-spacer w-input"
                        maxLength={256}
                        name="spending"
                        data-name="spending"
                        placeholder="USD$"
                        id="spending"
                        required
                        onChange={handleChange}
                      />
                    </div>
                    {!formData.spending &&(
                      <div className="error-msg error-msg-1">
                      <div>This Field is required</div>
                    </div>
                    ) }
                    <a
                      id="btn-calculate"
                      data-steps={5}
                      href="#"
                      className="btn btn-std steps-btn btn-full next-step w-button"
                      style={{ color: "white", backgroundColor: "#007cd0" }}
                      onClick={revenecalccc}
                    >
                      Next
                    </a>
                  </div>
                </form>
                <div
                  className="w-form-done"
                  tabIndex={-1}
                  role="region"
                  aria-label="Contact Forms success"
                >
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div
                  className="w-form-fail"
                  tabIndex={-1}
                  role="region"
                  aria-label="Contact Forms failure"
                >
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {currentStep === 6 && (
        <div className="w-container">
          <div className="steps-outer">
          <div className="steps-header">
                  {/* <h2 className="logo logo-text logo-blk">MAIDA.CO</h2> */}
                  <h2 style={{ color: "#007cd0" ,fontWeight:"bold"}}>MAIDA.CO</h2>
                  <h1
                    className="valuation-heading"
                    style={{ color: "white", backgroundColor: "#007cd0" }}
                  >
                    {/* <div > */}
                    <span>Free</span> App Valuation Calculator
                    {/* </div> */}
                  </h1>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div
                      className="progress-bar"
                      style={{ width: "40%" }}
                    ></div>
                    <div className="filled-progress" />
                  </div>
                </div>            <div className="steps-blocks">
              <div className="w-form">
                <form
                  id="wf-form-Contact-Forms"
                  name="wf-form-Contact-Forms"
                  data-name="Contact Forms"
                  redirect="https://maida.co/thankyou"
                  data-redirect="https://maida.co/thankyou"
                  method="get"
                  aria-label="Contact Forms"
                >
                  <div
                    id="step6"
                    data-steps={6}
                    className="steps step-6 eval-steps"
                    style={{ display: "block" }}
                  >
                    <h3 className="heading-h2 text-center mb-20 text-capitalize" style={{fontWeight:"bold"}}>
                      Primary Source Of Revenue
                    </h3>
                    <label className="steps-radio w-radio hover-effect"  >
                      <input
                        type="radio"
                        id="revenueSource"
                        name="revenueSource"
                        defaultValue="Advertising revenue"
                        data-name="revenueSource"
                        className="w-form-formradioinput steps-radio-btn src-rvn-radion-btn w-radio-input"
                        onChange={handleChange}
                      />
                      <span
                        className="selected-input w-form-label"
                        htmlFor="Advertising-revenue"
                      >
                        Advertising revenue
                      </span>
                    </label>
                   
                    <label className="steps-radio w-radio hover-effect"  >
                      <input
                        type="radio"
                        id="revenueSource"
                        name="revenueSource"
                        defaultValue="In-App Purchase revenue"
                        data-name="revenueSource"
                        className="w-form-formradioinput steps-radio-btn src-rvn-radion-btn w-radio-input"
                        onChange={handleChange}
                      />
                      <span
                        className="selected-input w-form-label"
                        htmlFor="In-App-Purchase-revenue"
                      >
                        In-App Purchase revenue
                      </span>
                    </label>
                    <label className="steps-radio w-radio hover-effect"  >
                      <input
                        type="radio"
                        id="revenueSource"
                        name="revenueSource"
                        defaultValue="Transaction revenue"
                        data-name="revenueSource"
                        className="w-form-formradioinput steps-radio-btn src-rvn-radion-btn w-radio-input"
                        onChange={handleChange}
                      />
                      <span
                        className="selected-input w-form-label"
                        htmlFor="Transaction-revenue"
                      >
                        Transaction revenue
                      </span>
                    </label>
                    <label className="steps-radio w-radio hover-effect"  >
                      <input
                        type="radio"
                        id="revenueSource"
                        name="revenueSource"
                        defaultValue="Other revenue"
                        data-name="revenueSource"
                        className="w-form-formradioinput steps-radio-btn src-rvn-radion-btn w-radio-input"
                        onChange={handleChange}
                      />
                      <span
                        className="selected-input w-form-label"
                        htmlFor="Other-revenue"
                      >
                        Other
                      </span>
                    </label>
                    <input
                      type="text"
                      className="step-input revenue-source-text-field w-input"
                      maxLength={256}
                      name="revenueSource"
                      data-name="otherSourceRevenue"
                      placeholder="Other"
                      id="otherSourceRevenue"
                      required
                      onChange={handleChange}
                    />
                    {!formData.revenueSource &&(
                      <div className="error-msg error-msg-1">
                      <div>This Field is required</div>
                    </div>
                    ) }
                    <a
                      data-steps={6}
                      href="#"
                      className="btn btn-std steps-btn btn-full next-step w-button"
                      style={{ color: "white", backgroundColor: "#007cd0" }}
                      onClick={handleNext}
                    >
                      Calculate Now
                    </a>
                  </div>
                </form>
                <div
                  className="w-form-done"
                  tabIndex={-1}
                  role="region"
                  aria-label="Contact Forms success"
                >
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div
                  className="w-form-fail"
                  tabIndex={-1}
                  role="region"
                  aria-label="Contact Forms failure"
                >
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {currentStep === 7 && (
        <>
          <div className="w-container">
            <div className="steps-outer">
            <div className="steps-header">
                  {/* <h2 className="logo logo-text logo-blk">MAIDA.CO</h2> */}
                  <h2 style={{ color: "#007cd0" ,fontWeight:"bold"}}>MAIDA.CO</h2>
                  <h1
                    className="valuation-heading"
                    style={{ color: "white", backgroundColor: "#007cd0" }}
                  >
                    {/* <div > */}
                    <span>Free</span> App Valuation Calculator
                    {/* </div> */}
                  </h1>
                  <div style={{ display: "flex", justifyContent: "center" }}>
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
                    redirect="https://maida.co/thankyou"
                    data-redirect="https://maida.co/thankyou"
                    method="get"
                    aria-label="Contact Forms"
                  >
                    <div
                      id="step1"
                      data-steps={1}
                      className="steps step-1 eval-steps"
                      style={{ display: "none" }}
                    >
                      <h3 className="heading-h2 text-center mb-20 text-capitalize mb-10">
                        Tell Us How Much You Can
                        <br />
                        Earn For Your App
                      </h3>
                      <label htmlFor="field" className="field-label mb-1">
                        Could you please provide me with a link to your
                        application on the app store?
                      </label>
                      <input
                        type="text"
                        className="step-input w-input"
                        maxLength={256}
                        name="appLink"
                        data-name="appLink"
                        placeholder="Paste Link"
                        id="appLink"
                        required
                        onChange={handleChange}
                      />
                      {!formData.appLink &&(
                      <div className="error-msg error-msg-1">
                      <div>This Field is required</div>
                    </div>
                    ) }
                      <a
                        data-steps={1}
                        href="#"
                        className="btn btn-std steps-btn btn-full next-step w-button"
                      >
                        NEXT
                      </a>
                    </div>
                    <div
                      id="step2"
                      data-steps={2}
                      className="steps step-2 eval-steps"
                      style={{ display: "none" }}
                    >
                      <h3 className="heading-h2 text-center mb-20 text-capitalize">
                        my app is
                      </h3>
                      <label className="steps-radio w-radio hover-effect"  >
                        <input
                          type="radio"
                          id="IOS"
                          name="App-Platform"
                          defaultValue="IOS"
                          data-name="App Platform"
                          data-steps={2}
                          className="w-form-formradioinput steps-radio-btn next-step w-radio-input"
                        />
                        <span
                          className="selected-input w-form-label"
                          htmlFor="IOS"
                        >
                          IOS
                        </span>
                      </label>
                      <label className="steps-radio w-radio hover-effect"  >
                        <input
                          type="radio"
                          id="Android"
                          name="App-Platform"
                          defaultValue="Android"
                          data-name="App Platform"
                          data-steps={2}
                          className="w-form-formradioinput steps-radio-btn next-step w-radio-input"
                        />
                        <span
                          className="selected-input w-form-label"
                          htmlFor="Android"
                        >
                          Android
                        </span>
                      </label>
                      <label className="steps-radio w-radio hover-effect"  >
                        <input
                          type="radio"
                          id="IOS-Android"
                          name="App-Platform"
                          defaultValue="IOS & Android"
                          data-name="App Platform"
                          data-steps={2}
                          className="w-form-formradioinput steps-radio-btn next-step w-radio-input"
                        />
                        <span
                          className="selected-input w-form-label"
                          htmlFor="IOS-Android"
                        >
                          IOS &amp; Android
                        </span>
                      </label>
                      
                    </div>
                    <div
                      id="step3"
                      data-steps={3}
                      className="steps step-3 eval-steps"
                      style={{ display: "none" }}
                    >
                      <h3 className="heading-h2 text-center mb-20 text-capitalize">
                        My traffic is
                      </h3>
                      <label className="steps-radio w-radio hover-effect"  >
                        <input
                          type="radio"
                          id="Organic"
                          name="Traffic"
                          defaultValue="Organic"
                          data-name="Traffic"
                          data-steps={3}
                          className="w-form-formradioinput steps-radio-btn d-none next-step w-radio-input"
                        />
                        <span
                          className="selected-input w-form-label"
                          htmlFor="Organic"
                        >
                          Organic
                        </span>
                      </label>
                      <label className="steps-radio w-radio hover-effect"  >
                        <input
                          type="radio"
                          id="Paid"
                          name="Traffic"
                          defaultValue="Paid"
                          data-name="Traffic"
                          data-steps={3}
                          className="w-form-formradioinput steps-radio-btn d-none next-step w-radio-input"
                        />
                        <span
                          className="selected-input w-form-label"
                          htmlFor="Paid"
                        >
                          Paid
                        </span>
                      </label>
                      <label className="steps-radio w-radio hover-effect"  >
                        <input
                          type="radio"
                          id="Both"
                          name="Traffic"
                          defaultValue="Both"
                          data-name="Traffic"
                          data-steps={3}
                          className="w-form-formradioinput steps-radio-btn d-none next-step w-radio-input"
                        />
                        <span
                          className="selected-input w-form-label"
                          htmlFor="Both"
                        >
                          Both
                        </span>
                      </label>
                    </div>
                    <div
                      id="step4"
                      data-steps={4}
                      className="steps step-4 eval-steps"
                      style={{ display: "none" }}
                    >
                      <h3 className="heading-h2 text-center mb-20 text-capitalize">
                        My app's last 3 months downloads
                      </h3>
                      <input
                        type="text"
                        className="step-input w-input"
                        maxLength={256}
                        name="downloads"
                        data-name="downloads"
                        placeholder={0}
                        id="downloads"
                        required
                        onChange={handleChange}
                      />
                      {!formData.downloads &&(
                      <div className="error-msg error-msg-1">
                      <div>This Field is required</div>
                    </div>
                    ) }
                      <a
                        data-steps={4}
                        href="#"
                        className="btn btn-std steps-btn btn-full next-step w-button"
                      >
                        NEXT
                      </a>
                    </div>
                    <div
                      id="step5"
                      data-steps={5}
                      className="steps step-5 eval-steps"
                      style={{ display: "none" }}
                    >
                      <h3 className="heading-h2 text-center mb-20 text-capitalize">
                        MY App's last 3 months <br />
                        net revenue
                      </h3>
                      <div className="currency-field">
                        <input
                          type="text"
                          className="step-input curreny-spacer w-input"
                          maxLength={256}
                          name="netRevenue"
                          data-name="netRevenue"
                          placeholder
                          id="netRevenue"
                          required
                          onChange={handleChange}
                        />
                      </div>
                      {!formData.downloads &&(
                      <div className="error-msg error-msg-1">
                      <div>This Field is required</div>
                    </div>
                    ) }
                      <a
                        id="btn-calculate"
                        data-steps={5}
                        href="#"
                        className="btn btn-std steps-btn btn-full next-step w-button"
                      >
                        Next
                      </a>
                    </div>
                    <div
                      id="step6"
                      data-steps={6}
                      className="steps step-6 eval-steps"
                      style={{ display: "none" }}
                    >
                      <h3 className="heading-h2 text-center mb-20 text-capitalize">
                        Primary Source Of Revenue
                      </h3>
                      <label className="steps-radio w-radio hover-effect"  >
                        <input
                          type="radio"
                          id="Advertising-revenue"
                          name="Revenue-Source"
                          defaultValue="Advertising revenue"
                          data-name="Revenue Source"
                          className="w-form-formradioinput steps-radio-btn src-rvn-radion-btn w-radio-input"
                        />
                        <span
                          className="selected-input w-form-label"
                          htmlFor="Advertising-revenue"
                        >
                          Advertising revenue
                        </span>
                      </label>
                    
                      <label className="steps-radio w-radio hover-effect"  >
                        <input
                          type="radio"
                          id="In-App-Purchase-revenue"
                          name="Revenue-Source"
                          defaultValue="In-App Purchase revenue"
                          data-name="Revenue Source"
                          className="w-form-formradioinput steps-radio-btn src-rvn-radion-btn w-radio-input"
                        />
                        <span
                          className="selected-input w-form-label"
                          htmlFor="In-App-Purchase-revenue"
                        >
                          In-App Purchase revenue
                        </span>
                      </label>
                      <label className="steps-radio w-radio hover-effect"  >
                        <input
                          type="radio"
                          id="Transaction-revenue"
                          name="Revenue-Source"
                          defaultValue="Transaction revenue"
                          data-name="Revenue Source"
                          className="w-form-formradioinput steps-radio-btn src-rvn-radion-btn w-radio-input"
                        />
                        <span
                          className="selected-input w-form-label"
                          htmlFor="Transaction-revenue"
                        >
                          Transaction revenue
                        </span>
                      </label>
                      <label className="steps-radio w-radio hover-effect"  >
                        <input
                          type="radio"
                          id="Other-revenue"
                          name="Revenue-Source"
                          defaultValue="Other revenue"
                          data-name="Revenue Source"
                          className="w-form-formradioinput steps-radio-btn src-rvn-radion-btn w-radio-input"
                        />
                        <span
                          className="selected-input w-form-label"
                          htmlFor="Other-revenue"
                        >
                          Other
                        </span>
                      </label>
                      <input
                        type="text"
                        className="step-input revenue-source-text-field w-input"
                        maxLength={256}
                        name="otherSourceRevenue"
                        data-name="otherSourceRevenue"
                        placeholder="Other"
                        id="otherSourceRevenue"
                        required
                        onChange={handleChange}
                      />
                      {!formData.otherSourceRevenue &&(
                      <div className="error-msg error-msg-1">
                      <div>This Field is required</div>
                    </div>
                    ) }
                      <a
                        data-steps={6}
                        href="#"
                        className="btn btn-std steps-btn btn-full next-step w-button"
                      >
                        Calculate Now
                      </a>
                    </div>
                    <div
                      id="step7"
                      data-steps={7}
                      className="steps step-7 eval-steps"
                      style={{ display: "none" }}
                    >
                      <h3 className="heading-h2 text-center mb-20 text-capitalize mb-10">
                        12-Month subscription retention %
                      </h3>
                      <div className="field-label mb-1">
                        The percentage of 12-month subscriptions that were
                        renewed after 12 months.
                      </div>
                      <input
                        type="text"
                        className="step-input w-input"
                        maxLength={256}
                        name="retentionPercentage"
                        data-name="retentionPercentage"
                        placeholder={0}
                        id="retentionPercentage"
                        required
                        onChange={handleChange}
                      />
                      <div className="error-msg error-msg-5b">
                        <div>This Field is required</div>
                      </div>
                      <a
                        data-steps={7}
                        href="#"
                        className="btn btn-std steps-btn btn-full next-step w-button"
                      >
                        NEXT
                      </a>
                    </div>
                    <div
                      id="step8"
                      data-steps={8}
                      className="steps step-8 eval-steps"
                      style={{ display: "none" }}
                    >
                      <h3 className="heading-h2 text-center mb-20 text-capitalize mb-10">
                        Install To Subscribed User %<br />
                      </h3>
                      <div className="field-label mb-1">
                        The percentage of users that installed the app on a
                        given day and bought a subscription.
                      </div>
                      <input
                        type="text"
                        className="step-input w-input"
                        maxLength={256}
                        name="Subscribed-User"
                        data-name="Subscribed User"
                        placeholder={0}
                        id="Subscribed-User"
                        required
                      />
                      <div className="error-msg error-msg-5c">
                        <div>This Field is required</div>
                      </div>
                      <a
                        data-steps={8}
                        href="#"
                        className="btn btn-std steps-btn btn-full next-step w-button"
                      >
                        Calculate Now
                      </a>
                    </div>
                    <div
                      id="waiting-step"
                      className="steps step-loader"
                      style={{ display: "none" }}
                    >
                      <div id="app-val-loader" className="loader-wrapper">
                        <img
                          loading="lazy"
                          src="https://uploads-ssl.webflow.com/62de56f587060ef8475d1055/630dc0a2cd22fadf75de6f57_progess-bar2.gif"
                          alt="progress bar"
                          className="loader-gif"
                        />
                      </div>
                    </div>
                    <div
                      id="step9"
                      data-steps={9}
                      className="steps step-9 eval-steps"
                      style={{ display: "block" }}
                    >
                      <h3 className="heading-h2 text-center mb-20 text-capitalize mb-0" style={{fontWeight:"bold"}}>
                        We've calculated your valuation..
                      </h3>
                      <div className="field-label calculate-descp">
                        To access your valuation please fill in your contact
                        details
                      </div>
                      <label htmlFor="First-Name" className="field-label">
                        First Name*
                      </label>

                      <input
                        type="text"
                        className="step-input w-input"
                        maxLength={256}
                        name="firstName"
                        data-name="firstName"
                        placeholder="First Name"
                        id="firstName"
                        required
                        onChange={handleChange}
                      />
                    {!formData.firstName &&(
                      <div className="error-msg error-msg-1">
                      <div>This Field is required</div>
                    </div>
                    ) }
                      <label htmlFor="Surname" className="field-label">
                        Surname*
                      </label>
                      <input
                        type="text"
                        className="step-input w-input"
                        maxLength={256}
                        name="surname"
                        data-name="surname"
                        placeholder="SurName"
                        id="surname"
                        required
                        onChange={handleChange}
                      />
                      {!formData.surname &&(
                      <div className="error-msg error-msg-1">
                      <div>This Field is required</div>
                    </div>
                    ) }
                      <label htmlFor="Email-Address" className="field-label">
                        Email address*
                      </label>
                      <input
                        type="email"
                        className="step-input w-input"
                        maxLength={256}
                        name="emailAddress"
                        data-name="emailAddress"
                        placeholder="Email address"
                        id="emailAddress"
                        required
                        onChange={handleChange}
                      />
                      {!formData.emailAddress &&(
                      <div className="error-msg error-msg-1">
                      <div>This Field is required</div>
                    </div>
                    ) }
                      <label htmlFor="Linked-In" className="field-label">
                        LinkedIn*
                      </label>
                      <input
                        type="text"
                        className="step-input w-input"
                        maxLength={256}
                        name="linkedIn"
                        data-name="linkedIn"
                        placeholder="Linkedin"
                        id="linkedIn"
                        required
                        onChange={handleChange}
                      />
                      {!formData.linkedIn &&(
                      <div className="error-msg error-msg-1">
                      <div>This Field is required</div>
                    </div>
                    ) }
                      <a
                        data-steps={9}
                        href="#"
                        className="btn btn-std steps-btn btn-full next-step w-button"
                        style={{ color: "white", backgroundColor: "#007cd0" }}
                        onClick={publishedCalc}
                      >
                        calculate now
                      </a>
                    </div>
                    <div
                      id="step10"
                      data-steps={10}
                      className="steps valuation-result step-10 eval-steps"
                      style={{ display: "none" }}
                    >
                      <div className="section-heading text-center counter-section">
                        <h1 id="counter-mid" className="counter-heading-2">
                          $0
                        </h1>
                        <div className="result-bar">
                          <div id="counter-low" className="counter-low counter">
                            $0
                          </div>
                          <div
                            id="counter-high"
                            className="counter-high counter"
                          >
                            $0
                          </div>
                          <div className="result-bar-shape-2">
                          </div>
                        </div>
                        <img
                          loading="lazy"
                          src="https://uploads-ssl.webflow.com/62de56f587060ef8475d1055/630dacadcd22fa76b8dd7913_CSS%20infinite%20loading%20animation%20example.gif"
                          alt="loading bar"
                          className="loader-img"
                        />
                      </div>
                      <div className="aggree-input">
                        I authorize MAIDA.CO to reach out to me to discuss valuation matters
                      </div>
                      <input
                        type="submit"
                        defaultValue="Next"
                        data-wait="Please wait..."
                        className="btn btn-std steps-btn btn-full result-btn next-step w-button"
                          onClick={(e) => {
                          
                            window.location.href="https://maida.co/thankyou"

                        }}
                      />
                      <a
                        data-steps={10}
                        className="btn btn-std steps-btn btn-full result-btn next-step d-none w-button"
                        onClick={handleNext}
                      >
                        NEXT
                      </a>
                    </div>
                    <div>
                      <div className="w-embed">
                        <input type="hidden" name="utm_id" id="utm-id" />
                      </div>
                      <div className="w-embed">
                        <input
                          type="hidden"
                          name="utm_source"
                          id="utm-source"
                        />
                      </div>
                      <div className="w-embed">
                        <input
                          type="hidden"
                          name="utm_medium"
                          id="utm-medium"
                        />
                      </div>
                      <div className="w-embed">
                        <input
                          type="hidden"
                          name="utm_campaign"
                          id="utm-campaign"
                        />
                      </div>
                      <div className="w-embed">
                        <input type="hidden" name="utm_term" id="utm-term" />
                      </div>
                      <div className="w-embed">
                        <input
                          type="hidden"
                          name="utm_content"
                          id="utm-content"
                        />
                      </div>
                    </div>
                  </form>
                  <div
                    className="w-form-done"
                    tabIndex={-1}
                    role="region"
                    aria-label="Contact Forms success"
                  >
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div
                    className="w-form-fail"
                    tabIndex={-1}
                    role="region"
                    aria-label="Contact Forms failure"
                  >
                    <div>
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {currentStep === 8 && (
        <div className="w-container">
          <div className="steps-outer">
          <div className="steps-header">
                  {/* <h2 className="logo logo-text logo-blk">MAIDA.CO</h2> */}
                  <h2 style={{ color: "#007cd0", fontWeight:"bold"}}>MAIDA.CO</h2>
                  <h1
                    className="valuation-heading"
                    style={{ color: "white", backgroundColor: "#007cd0" }}
                  >
                    {/* <div > */}
                    <span>Free</span> App Valuation Calculator
                    {/* </div> */}
                  </h1>
                  <div style={{ display: "flex", justifyContent: "center" }}>
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
                  redirect="https://maida.co/thankyou"
                  data-redirect="https://maida.co/thankyou"
                  method="get"
                  aria-label="Contact Forms"
                >
                  <div
                    id="step1"
                    data-steps={1}
                    className="steps step-1 eval-steps"
                    style={{ display: "none" }}
                  >
                    <h3 className="heading-h2 text-center mb-20 text-capitalize mb-10">
                      Tell Us How Much You Can
                      <br />
                      Earn For Your App
                    </h3>
                    <label htmlFor="field" className="field-label mb-1">
                      Could you please provide me with a link to your
                      application on the app store?
                    </label>
                    <input
                      type="text"
                      className="step-input w-input"
                      maxLength={256}
                      name="App-link"
                      data-name="App  link"
                      placeholder="Paste Link"
                      id="field"
                      required
                    />
                    <div className="error-msg error-msg-1">
                      <div>This Field is required</div>
                    </div>
                    <a
                      data-steps={1}
                      href="#"
                      className="btn btn-std steps-btn btn-full next-step w-button"
                    >
                      NEXT
                    </a>
                  </div>
                  <div
                    id="step2"
                    data-steps={2}
                    className="steps step-2 eval-steps"
                    style={{ display: "none" }}
                  >
                    <h3 className="heading-h2 text-center mb-20 text-capitalize">
                      my app is
                    </h3>
                    <label className="steps-radio w-radio hover-effect"  >
                      <input
                        type="radio"
                        id="IOS"
                        name="App-Platform"
                        defaultValue="IOS"
                        data-name="App Platform"
                        data-steps={2}
                        className="w-form-formradioinput steps-radio-btn next-step w-radio-input"
                      />
                      <span
                        className="selected-input w-form-label"
                        htmlFor="IOS"
                      >
                        IOS
                      </span>
                    </label>
                    <label className="steps-radio w-radio hover-effect"  >
                      <input
                        type="radio"
                        id="Android"
                        name="App-Platform"
                        defaultValue="Android"
                        data-name="App Platform"
                        data-steps={2}
                        className="w-form-formradioinput steps-radio-btn next-step w-radio-input"
                      />
                      <span
                        className="selected-input w-form-label"
                        htmlFor="Android"
                      >
                        Android
                      </span>
                    </label>
                    <label className="steps-radio w-radio hover-effect"  >
                      <input
                        type="radio"
                        id="IOS-Android"
                        name="App-Platform"
                        defaultValue="IOS & Android"
                        data-name="App Platform"
                        data-steps={2}
                        className="w-form-formradioinput steps-radio-btn next-step w-radio-input"
                      />
                      <span
                        className="selected-input w-form-label"
                        htmlFor="IOS-Android"
                      >
                        IOS &amp; Android
                      </span>
                    </label>
                 
                  </div>
                  <div
                    id="step3"
                    data-steps={3}
                    className="steps step-3 eval-steps"
                    style={{ display: "none" }}
                  >
                    <h3 className="heading-h2 text-center mb-20 text-capitalize">
                      My traffic is
                    </h3>
                    <label className="steps-radio w-radio hover-effect"  >
                      <input
                        type="radio"
                        id="Organic"
                        name="Traffic"
                        defaultValue="Organic"
                        data-name="Traffic"
                        data-steps={3}
                        className="w-form-formradioinput steps-radio-btn d-none next-step w-radio-input"
                      />
                      <span
                        className="selected-input w-form-label"
                        htmlFor="Organic"
                      >
                        Organic
                      </span>
                    </label>
                    <label className="steps-radio w-radio hover-effect"  >
                      <input
                        type="radio"
                        id="Paid"
                        name="Traffic"
                        defaultValue="Paid"
                        data-name="Traffic"
                        data-steps={3}
                        className="w-form-formradioinput steps-radio-btn d-none next-step w-radio-input"
                      />
                      <span
                        className="selected-input w-form-label"
                        htmlFor="Paid"
                      >
                        Paid
                      </span>
                    </label>
                    <label className="steps-radio w-radio hover-effect"  >
                      <input
                        type="radio"
                        id="Both"
                        name="Traffic"
                        defaultValue="Both"
                        data-name="Traffic"
                        data-steps={3}
                        className="w-form-formradioinput steps-radio-btn d-none next-step w-radio-input"
                      />
                      <span
                        className="selected-input w-form-label"
                        htmlFor="Both"
                      >
                        Both
                      </span>
                    </label>
                  </div>
                  <div
                    id="step4"
                    data-steps={4}
                    className="steps step-4 eval-steps"
                    style={{ display: "none" }}
                  >
                    <h3 className="heading-h2 text-center mb-20 text-capitalize">
                      My app's last 3 months downloads
                    </h3>
                    <input
                      type="text"
                      className="step-input w-input"
                      maxLength={256}
                      name="Downloads"
                      data-name="Downloads"
                      placeholder={0}
                      id="Downloads"
                    />
                    <div className="error-msg error-msg-4">
                      <div>This Field is required</div>
                    </div>
                    <a
                      data-steps={4}
                      href="#"
                      className="btn btn-std steps-btn btn-full next-step w-button"
                    >
                      NEXT
                    </a>
                  </div>
                  <div
                    id="step5"
                    data-steps={5}
                    className="steps step-5 eval-steps"
                    style={{ display: "none" }}
                  >
                    <h3 className="heading-h2 text-center mb-20 text-capitalize">
                      MY App's last 3 months <br />
                      net revenue
                    </h3>
                    <div className="currency-field">
                    <input
                          type="text"
                          className="step-input curreny-spacer w-input"
                          maxLength={256}
                          name="netRevenue"
                          data-name="netRevenue"
                          placeholder
                          id="netRevenue"
                          required
                          onChange={handleChange}
                        />
                    </div>
                    <div className="error-msg error-msg-5">
                      <div>This Field is required</div>
                    </div>
                    <a
                      id="btn-calculate"
                      data-steps={5}
                      href="#"
                      className="btn btn-std steps-btn btn-full next-step w-button"
                    >
                      Next
                    </a>
                  </div>
                  <div
                    id="step6"
                    data-steps={6}
                    className="steps step-6 eval-steps"
                    style={{ display: "none" }}
                  >
                    <h3 className="heading-h2 text-center mb-20 text-capitalize">
                      Primary Source Of Revenue
                    </h3>
                    <label className="steps-radio w-radio hover-effect"  >
                      <input
                        type="radio"
                        id="Advertising-revenue"
                        name="Revenue-Source"
                        defaultValue="Advertising revenue"
                        data-name="Revenue Source"
                        className="w-form-formradioinput steps-radio-btn src-rvn-radion-btn w-radio-input"
                      />
                      <span
                        className="selected-input w-form-label"
                        htmlFor="Advertising-revenue"
                      >
                        Advertising revenue
                      </span>
                    </label>
                   
                    <label className="steps-radio w-radio hover-effect"  >
                      <input
                        type="radio"
                        id="In-App-Purchase-revenue"
                        name="Revenue-Source"
                        defaultValue="In-App Purchase revenue"
                        data-name="Revenue Source"
                        className="w-form-formradioinput steps-radio-btn src-rvn-radion-btn w-radio-input"
                      />
                      <span
                        className="selected-input w-form-label"
                        htmlFor="In-App-Purchase-revenue"
                      >
                        In-App Purchase revenue
                      </span>
                    </label>
                    <label className="steps-radio w-radio hover-effect"  >
                      <input
                        type="radio"
                        id="Transaction-revenue"
                        name="Revenue-Source"
                        defaultValue="Transaction revenue"
                        data-name="Revenue Source"
                        className="w-form-formradioinput steps-radio-btn src-rvn-radion-btn w-radio-input"
                      />
                      <span
                        className="selected-input w-form-label"
                        htmlFor="Transaction-revenue"
                      >
                        Transaction revenue
                      </span>
                    </label>
                    <label className="steps-radio w-radio hover-effect"  >
                      <input
                        type="radio"
                        id="Other-revenue"
                        name="Revenue-Source"
                        defaultValue="Other revenue"
                        data-name="Revenue Source"
                        className="w-form-formradioinput steps-radio-btn src-rvn-radion-btn w-radio-input"
                      />
                      <span
                        className="selected-input w-form-label"
                        htmlFor="Other-revenue"
                      >
                        Other
                      </span>
                    </label>
                    <input
                      type="text"
                      className="step-input revenue-source-text-field w-input"
                      maxLength={256}
                      name="other-source-revenue"
                      data-name="other-source-revenue"
                      placeholder="Other"
                      id="other-source-revenue"
                    />
                    <div className="error-msg error-msg-5-a">
                      <div>This Field is required</div>
                    </div>
                    <a
                      data-steps={6}
                      href="#"
                      className="btn btn-std steps-btn btn-full next-step w-button"
                    >
                      Calculate Now
                    </a>
                  </div>
                  <div
                    id="step7"
                    data-steps={7}
                    className="steps step-7 eval-steps"
                    style={{ display: "none" }}
                  >
                    <h3 className="heading-h2 text-center mb-20 text-capitalize mb-10">
                      12-Month subscription retention %
                    </h3>
                    <div className="field-label mb-1">
                      The percentage of 12-month subscriptions that were renewed
                      after 12 months.
                    </div>
                    <input
                      type="text"
                      className="step-input w-input"
                      maxLength={256}
                      name="Revenue-Retention"
                      data-name="Revenue Retention"
                      placeholder={0}
                      id="Revenue-Retention"
                    />
                    <div className="error-msg error-msg-5b">
                      <div>This Field is required</div>
                    </div>
                    <a
                      data-steps={7}
                      href="#"
                      className="btn btn-std steps-btn btn-full next-step w-button"
                    >
                      NEXT
                    </a>
                  </div>
                  <div
                    id="step8"
                    data-steps={8}
                    className="steps step-8 eval-steps"
                    style={{ display: "none" }}
                  >
                    <h3 className="heading-h2 text-center mb-20 text-capitalize mb-10">
                      Install To Subscribed User %<br />
                    </h3>
                    <div className="field-label mb-1">
                      The percentage of users that installed the app on a given
                      day and bought a subscription.
                    </div>
                    <input
                      type="text"
                      className="step-input w-input"
                      maxLength={256}
                      name="Subscribed-User"
                      data-name="Subscribed User"
                      placeholder={0}
                      id="Subscribed-User"
                    />
                    <div className="error-msg error-msg-5c">
                      <div>This Field is required</div>
                    </div>
                    <a
                      data-steps={8}
                      href="#"
                      className="btn btn-std steps-btn btn-full next-step w-button"
                    >
                      Calculate Now
                    </a>
                  </div>
                  <div
                    id="waiting-step"
                    className="steps step-loader"
                    style={{ display: "none" }}
                  >
                    <div id="app-val-loader" className="loader-wrapper">
                      <img
                        loading="lazy"
                        src="https://uploads-ssl.webflow.com/62de56f587060ef8475d1055/630dc0a2cd22fadf75de6f57_progess-bar2.gif"
                        alt="progress bar"
                        className="loader-gif"
                      />
                    </div>
                  </div>
                  <div
                    id="step9"
                    data-steps={9}
                    className="steps step-9 eval-steps"
                    style={{ display: "none" }}
                  >
                    <h3 className="heading-h2 text-center mb-20 text-capitalize mb-0">
                      We've calculated your valuation..
                    </h3>
                    <div className="field-label calculate-descp">
                      To access your valuation please fll in your contact
                      details
                    </div>
                     <label htmlFor="First-Name" className="field-label">
                        First Name*
                      </label>

                      <input
                        type="text"
                        className="step-input w-input"
                        maxLength={256}
                        name="firstName"
                        data-name="firstName"
                        placeholder="First Name"
                        id="firstName"
                        required
                        onChange={handleChange}
                      />
                      <div className="error-msg error-msg-6-linkedin">
                        <div>This Field is required</div>
                      </div>
                      <label htmlFor="Surname" className="field-label">
                        Surname*
                      </label>
                      <input
                        type="text"
                        className="step-input w-input"
                        maxLength={256}
                        name="surname"
                        data-name="surname"
                        placeholder="SurName"
                        id="surname"
                        required
                        onChange={handleChange}
                      />
                      <div className="error-msg error-msg-6-linkedin">
                        <div>This Field is required</div>
                      </div>
                      <label htmlFor="Email-Address" className="field-label">
                        Email address*
                      </label>
                      <input
                        type="email"
                        className="step-input w-input"
                        maxLength={256}
                        name="emailAddress"
                        data-name="emailAddress"
                        placeholder="Email address"
                        id="emailAddress"
                        required
                        onChange={handleChange}
                      />
                    <div
                      className="error-msg error-msg-6-linkedin"
                      style={{ display: "none" }}
                    >
                      <div>This Field is required</div>
                    </div>
                    <label htmlFor="Linked-In" className="field-label">
                      LinkedIn*
                    </label>
                    <input
                      type="text"
                      className="step-input w-input"
                      maxLength={256}
                      name="Linked-In"
                      data-name="Linked In"
                      placeholder="Linkedin"
                      id="Linked-In"
                      required
                    />
                    <div
                      className="error-msg error-msg-6-linkedin"
                      style={{ display: "none" }}
                    >
                      <div>This Field is required</div>
                    </div>
                    <a
                      data-steps={9}
                      href="/"
                      className="btn btn-std steps-btn btn-full next-step w-button"
                      onclick={handleNext}
                    >
                      calculate now
                    </a>
                  </div>
                  <div
                    id="step10"
                    data-steps={10}
                    className="steps valuation-result step-10 eval-steps"
                    style={{ display: "block", color: "white", backgroundColor: "#007cd0" }}
                  >
                    <div className="section-heading text-center counter-section">
                      <h1 id="counter-mid" className="counter-heading-2" style={{color:"white"}}>
                        $ {Calc} 
                      </h1>
                      <div className="result-bar">
                        <div id="counter-low" className="counter-low counter" style={{color:"white"}}>
                          $ {Calc -(Calc/2)}
                        </div>
                        <div id="counter-high" className="counter-high counter" style={{color:"white"}}>
                          $ {Calc +(Calc/2)}
                        </div>
                        <div className="result-bar-shape-2">
                        </div>
                      </div>
                      <img
                        loading="lazy"
                        src="https://uploads-ssl.webflow.com/62de56f587060ef8475d1055/630dacadcd22fa76b8dd7913_CSS%20infinite%20loading%20animation%20example.gif"
                        alt="loading bar"
                        className="loader-img"
                      />
                    </div>
                    <div className="aggree-input">
                    I am open to MAIDA.CO contacting me to discuss my valuation!
                    </div>
                    <input
                      type="submit"
                      onclick={handleNext1}
                      defaultValue="Next"
                      data-wait="Please wait..."
                      className="btn btn-std steps-btn btn-full result-btn next-step w-button"
                      style={{ color: "#007cd0", backgroundColor: "white" }}
                      onClick={handleNext1}
                    />
                    <a
                      data-steps={10}
                      href="/"
                      className="btn btn-std steps-btn  btn-full result-btn next-step d-none w-button"
                      onClick={handleNext1}
                    >
                      NEXT
                    </a>
                  </div>
                  <div>
                    <div className="w-embed">
                      <input type="hidden" name="utm_id" id="utm-id" />
                    </div>
                    <div className="w-embed">
                      <input type="hidden" name="utm_source" id="utm-source" />
                    </div>
                    <div className="w-embed">
                      <input type="hidden" name="utm_medium" id="utm-medium" />
                    </div>
                    <div className="w-embed">
                      <input
                        type="hidden"
                        name="utm_campaign"
                        id="utm-campaign"
                      />
                    </div>
                    <div className="w-embed">
                      <input type="hidden" name="utm_term" id="utm-term" />
                    </div>
                    <div className="w-embed">
                      <input
                        type="hidden"
                        name="utm_content"
                        id="utm-content"
                      />
                    </div>
                  </div>
                </form>
                <div
                  className="w-form-done"
                  tabIndex={-1}
                  role="region"
                  aria-label="Contact Forms success"
                >
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div
                  className="w-form-fail"
                  tabIndex={-1}
                  role="region"
                  aria-label="Contact Forms failure"
                >
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {currentStep === 9 && (
   <div className="w-container">
   <div className="steps-outer">
     <div className="steps-header">
       <h2 style={{ color: "#007cd0", fontWeight: "bold" }}>MAIDA.CO</h2>
       <h1
         className="valuation-heading"
         style={{ color: "white", backgroundColor: "#007cd0" }}
       >
         <span>Free</span> App Valuation Calculator
       </h1>
     </div>

     <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
       <div className="spinner-border spinner-border-lg" role="status">
         <span className="visually-hidden">Loading...</span>
       </div>
     </div>
   </div>
 </div>
      )}
      {/* {currentStep === 10 && (
       
      )} */}
    </>
  ) : 
  selectForm==="C" && (
   <>
     {currentStep === 1 && (
        <div className="w-container">
        <div className="steps-outer">
        <div className="steps-header">
                {/* <h2 className="logo logo-text logo-blk">MAIDA.CO</h2> */}
                <h2 style={{ color: "#007cd0" ,fontWeight: "bold"}}>MAIDA.CO</h2>
                <h1
                  className="valuation-heading"
                  style={{ color: "white", backgroundColor: "#007cd0" }}
                >
                  {/* <div > */}
                  <span>Free</span> App Valuation Calculator
                  {/* </div> */}
                </h1>
                <div style={{ display: "flex", justifyContent: "center" }}>
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
                redirect="https://maida.co/thankyou"
                data-redirect="https://maida.co/thankyou"
                method="get"
                aria-label="Contact Forms"
              >
                <div
                  id="step1"
                  data-steps={1}
                  className="steps step-1 eval-steps"
                  
                >
                  <h3 className="heading-h2 text-center mb-20 text-capitalize mb-10" style={{fontWeight: "bold"}}>
                    Tell Us How Much You Can
                    <br />
                    Earn For Your App
                  </h3>
                  <label htmlFor="field" className="field-label mb-1">
                  Can you provide a link to your application's 
                  listing on the relevant app store?
                  </label>
                  <input
                    type="text"
                    className="step-input w-input"
                    maxLength={256}
                    name="appLink"
                    data-name="appLink"
                    placeholder="Paste Link"
                    id="appLink"
                    required
                    onChange={handleChange}
                  />
                    {!formData.appLink &&(
                    <div className="error-msg error-msg-1">
                    <div>This Field is required</div>
                  </div>
                  ) }
                 
                  <a
                    data-steps={1}
                    href="#"
                    className="btn btn-std steps-btn btn-full next-step w-button"
                    style={{ color: "white", backgroundColor: "#007cd0" }}
                    onClick={handleNext}
                  >
                    NEXT
                  </a>

                  {/* Add the additional HTML elements for Step 1 here */}
                  <div className="w-embed">
                    <input type="hidden" name="utm_id" id="utm-id" />
                  </div>
                  <div className="w-embed">
                    <input type="hidden" name="utm_source" id="utm-source" />
                  </div>
                  <div className="w-embed">
                    <input type="hidden" name="utm_medium" id="utm-medium" />
                  </div>
                  <div className="w-embed">
                    <input
                      type="hidden"
                      name="utm_campaign"
                      id="utm-campaign"
                    />
                  </div>
                  <div className="w-embed">
                    <input type="hidden" name="utm_term" id="utm-term" />
                  </div>
                  <div className="w-embed">
                    <input
                      type="hidden"
                      name="utm_content"
                      id="utm-content"
                    />
                  </div>
                </div>
                {/* ... (Add code for other steps) */}

                <div
                  className="w-form-done"
                  tabIndex={-1}
                  role="region"
                  aria-label="Contact Forms success"
                >
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div
                  className="w-form-fail"
                  tabIndex={-1}
                  role="region"
                  aria-label="Contact Forms failure"
                >
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      )}
        {currentStep === 2 && (
        <>
           <div className="w-container">
            <div className="steps-outer">
            <div className="steps-header">
                  {/* <h2 className="logo logo-text logo-blk">MAIDA.CO</h2> */}
                  <h2 style={{ color: "#007cd0" ,fontWeight:"bold"}}>MAIDA.CO</h2>
                  <h1
                    className="valuation-heading"
                    style={{ color: "white", backgroundColor: "#007cd0" }}
                  >
                    {/* <div > */}
                    <span>Free</span> App Valuation Calculator
                    {/* </div> */}
                  </h1>
                  <div style={{ display: "flex", justifyContent: "center" }}>
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
                    redirect="https://maida.co/thankyou"
                    data-redirect="https://maida.co/thankyou"
                    method="get"
                    aria-label="Contact Forms"
                  >
                    <div
                      id="step1"
                      data-steps={1}
                      className="steps step-1 eval-steps"
                      style={{ display: "none" }}
                    >
                      <h3 className="heading-h2 text-center mb-20 text-capitalize mb-10">
                        Tell Us How Much You Can
                        <br />
                        Earn For Your App
                      </h3>
                      <label htmlFor="field" className="field-label mb-1">
                        Could you please provide me with a link to your
                        application on the app store?
                      </label>
                      <input
                        type="text"
                        className="step-input w-input"
                        maxLength={256}
                        name="appLink"
                        data-name="appLink"
                        placeholder="Paste Link"
                        id="appLink"
                        required
                        onChange={handleChange}
                      />
                      {!formData.appLink &&(
                      <div className="error-msg error-msg-1">
                      <div>This Field is required</div>
                    </div>
                    ) }
                      <a
                        data-steps={1}
                        href="#"
                        className="btn btn-std steps-btn btn-full next-step w-button"
                      >
                        NEXT
                      </a>
                    </div>
                    <div
                      id="step2"
                      data-steps={2}
                      className="steps step-2 eval-steps"
                      style={{ display: "none" }}
                    >
                      <h3 className="heading-h2 text-center mb-20 text-capitalize">
                        my app is
                      </h3>
                      <label className="steps-radio w-radio hover-effect"  >
                        <input
                          type="radio"
                          id="IOS"
                          name="App-Platform"
                          defaultValue="IOS"
                          data-name="App Platform"
                          data-steps={2}
                          className="w-form-formradioinput steps-radio-btn next-step w-radio-input"
                        />
                        <span
                          className="selected-input w-form-label"
                          htmlFor="IOS"
                        >
                          IOS
                        </span>
                      </label>
                      <label className="steps-radio w-radio hover-effect"  >
                        <input
                          type="radio"
                          id="Android"
                          name="App-Platform"
                          defaultValue="Android"
                          data-name="App Platform"
                          data-steps={2}
                          className="w-form-formradioinput steps-radio-btn next-step w-radio-input"
                        />
                        <span
                          className="selected-input w-form-label"
                          htmlFor="Android"
                        >
                          Android
                        </span>
                      </label>
                      <label className="steps-radio w-radio hover-effect"  >
                        <input
                          type="radio"
                          id="IOS-Android"
                          name="App-Platform"
                          defaultValue="IOS & Android"
                          data-name="App Platform"
                          data-steps={2}
                          className="w-form-formradioinput steps-radio-btn next-step w-radio-input"
                        />
                        <span
                          className="selected-input w-form-label"
                          htmlFor="IOS-Android"
                        >
                          IOS &amp; Android
                        </span>
                      </label>
                      
                    </div>
                    <div
                      id="step3"
                      data-steps={3}
                      className="steps step-3 eval-steps"
                      style={{ display: "none" }}
                    >
                      <h3 className="heading-h2 text-center mb-20 text-capitalize">
                        My traffic is
                      </h3>
                      <label className="steps-radio w-radio hover-effect"  >
                        <input
                          type="radio"
                          id="Organic"
                          name="Traffic"
                          defaultValue="Organic"
                          data-name="Traffic"
                          data-steps={3}
                          className="w-form-formradioinput steps-radio-btn d-none next-step w-radio-input"
                        />
                        <span
                          className="selected-input w-form-label"
                          htmlFor="Organic"
                        >
                          Organic
                        </span>
                      </label>
                      <label className="steps-radio w-radio hover-effect"  >
                        <input
                          type="radio"
                          id="Paid"
                          name="Traffic"
                          defaultValue="Paid"
                          data-name="Traffic"
                          data-steps={3}
                          className="w-form-formradioinput steps-radio-btn d-none next-step w-radio-input"
                        />
                        <span
                          className="selected-input w-form-label"
                          htmlFor="Paid"
                        >
                          Paid
                        </span>
                      </label>
                      <label className="steps-radio w-radio hover-effect"  >
                        <input
                          type="radio"
                          id="Both"
                          name="Traffic"
                          defaultValue="Both"
                          data-name="Traffic"
                          data-steps={3}
                          className="w-form-formradioinput steps-radio-btn d-none next-step w-radio-input"
                        />
                        <span
                          className="selected-input w-form-label"
                          htmlFor="Both"
                        >
                          Both
                        </span>
                      </label>
                    </div>
                    <div
                      id="step4"
                      data-steps={4}
                      className="steps step-4 eval-steps"
                      style={{ display: "none" }}
                    >
                      <h3 className="heading-h2 text-center mb-20 text-capitalize">
                        My app's last 3 months downloads
                      </h3>
                      <input
                        type="text"
                        className="step-input w-input"
                        maxLength={256}
                        name="downloads"
                        data-name="downloads"
                        placeholder={0}
                        id="downloads"
                        required
                        onChange={handleChange}
                      />
                      {!formData.downloads &&(
                      <div className="error-msg error-msg-1">
                      <div>This Field is required</div>
                    </div>
                    ) }
                      <a
                        data-steps={4}
                        href="#"
                        className="btn btn-std steps-btn btn-full next-step w-button"
                      >
                        NEXT
                      </a>
                    </div>
                    <div
                      id="step5"
                      data-steps={5}
                      className="steps step-5 eval-steps"
                      style={{ display: "none" }}
                    >
                      <h3 className="heading-h2 text-center mb-20 text-capitalize">
                        MY App's last 3 months <br />
                        net revenue
                      </h3>
                      <div className="currency-field">
                        <input
                          type="text"
                          className="step-input curreny-spacer w-input"
                          maxLength={256}
                          name="netRevenue"
                          data-name="netRevenue"
                          placeholder
                          id="netRevenue"
                          required
                          onChange={handleChange}
                        />
                      </div>
                      {!formData.downloads &&(
                      <div className="error-msg error-msg-1">
                      <div>This Field is required</div>
                    </div>
                    ) }
                      <a
                        id="btn-calculate"
                        data-steps={5}
                        href="#"
                        className="btn btn-std steps-btn btn-full next-step w-button"
                      >
                        Next
                      </a>
                    </div>
                    <div
                      id="step6"
                      data-steps={6}
                      className="steps step-6 eval-steps"
                      style={{ display: "none" }}
                    >
                      <h3 className="heading-h2 text-center mb-20 text-capitalize">
                        Primary Source Of Revenue
                      </h3>
                      <label className="steps-radio w-radio hover-effect"  >
                        <input
                          type="radio"
                          id="Advertising-revenue"
                          name="Revenue-Source"
                          defaultValue="Advertising revenue"
                          data-name="Revenue Source"
                          className="w-form-formradioinput steps-radio-btn src-rvn-radion-btn w-radio-input"
                        />
                        <span
                          className="selected-input w-form-label"
                          htmlFor="Advertising-revenue"
                        >
                          Advertising revenue
                        </span>
                      </label>
                    
                      <label className="steps-radio w-radio hover-effect"  >
                        <input
                          type="radio"
                          id="In-App-Purchase-revenue"
                          name="Revenue-Source"
                          defaultValue="In-App Purchase revenue"
                          data-name="Revenue Source"
                          className="w-form-formradioinput steps-radio-btn src-rvn-radion-btn w-radio-input"
                        />
                        <span
                          className="selected-input w-form-label"
                          htmlFor="In-App-Purchase-revenue"
                        >
                          In-App Purchase revenue
                        </span>
                      </label>
                      <label className="steps-radio w-radio hover-effect"  >
                        <input
                          type="radio"
                          id="Transaction-revenue"
                          name="Revenue-Source"
                          defaultValue="Transaction revenue"
                          data-name="Revenue Source"
                          className="w-form-formradioinput steps-radio-btn src-rvn-radion-btn w-radio-input"
                        />
                        <span
                          className="selected-input w-form-label"
                          htmlFor="Transaction-revenue"
                        >
                          Transaction revenue
                        </span>
                      </label>
                      <label className="steps-radio w-radio hover-effect"  >
                        <input
                          type="radio"
                          id="Other-revenue"
                          name="Revenue-Source"
                          defaultValue="Other revenue"
                          data-name="Revenue Source"
                          className="w-form-formradioinput steps-radio-btn src-rvn-radion-btn w-radio-input"
                        />
                        <span
                          className="selected-input w-form-label"
                          htmlFor="Other-revenue"
                        >
                          Other
                        </span>
                      </label>
                      <input
                        type="text"
                        className="step-input revenue-source-text-field w-input"
                        maxLength={256}
                        name="otherSourceRevenue"
                        data-name="otherSourceRevenue"
                        placeholder="Other"
                        id="otherSourceRevenue"
                        required
                        onChange={handleChange}
                      />
                      {!formData.otherSourceRevenue &&(
                      <div className="error-msg error-msg-1">
                      <div>This Field is required</div>
                    </div>
                    ) }
                      <a
                        data-steps={6}
                        href="#"
                        className="btn btn-std steps-btn btn-full next-step w-button"
                      >
                        Calculate Now
                      </a>
                    </div>
                    <div
                      id="step7"
                      data-steps={7}
                      className="steps step-7 eval-steps"
                      style={{ display: "none" }}
                    >
                      <h3 className="heading-h2 text-center mb-20 text-capitalize mb-10">
                        12-Month subscription retention %
                      </h3>
                      <div className="field-label mb-1">
                        The percentage of 12-month subscriptions that were
                        renewed after 12 months.
                      </div>
                      <input
                        type="text"
                        className="step-input w-input"
                        maxLength={256}
                        name="retentionPercentage"
                        data-name="retentionPercentage"
                        placeholder={0}
                        id="retentionPercentage"
                        required
                        onChange={handleChange}
                      />
                      <div className="error-msg error-msg-5b">
                        <div>This Field is required</div>
                      </div>
                      <a
                        data-steps={7}
                        href="#"
                        className="btn btn-std steps-btn btn-full next-step w-button"
                      >
                        NEXT
                      </a>
                    </div>
                    <div
                      id="step8"
                      data-steps={8}
                      className="steps step-8 eval-steps"
                      style={{ display: "none" }}
                    >
                      <h3 className="heading-h2 text-center mb-20 text-capitalize mb-10">
                        Install To Subscribed User %<br />
                      </h3>
                      <div className="field-label mb-1">
                        The percentage of users that installed the app on a
                        given day and bought a subscription.
                      </div>
                      <input
                        type="text"
                        className="step-input w-input"
                        maxLength={256}
                        name="Subscribed-User"
                        data-name="Subscribed User"
                        placeholder={0}
                        id="Subscribed-User"
                        required
                      />
                      <div className="error-msg error-msg-5c">
                        <div>This Field is required</div>
                      </div>
                      <a
                        data-steps={8}
                        href="#"
                        className="btn btn-std steps-btn btn-full next-step w-button"
                      >
                        Calculate Now
                      </a>
                    </div>
                    <div
                      id="waiting-step"
                      className="steps step-loader"
                      style={{ display: "none" }}
                    >
                      <div id="app-val-loader" className="loader-wrapper">
                        <img
                          loading="lazy"
                          src="https://uploads-ssl.webflow.com/62de56f587060ef8475d1055/630dc0a2cd22fadf75de6f57_progess-bar2.gif"
                          alt="progress bar"
                          className="loader-gif"
                        />
                      </div>
                    </div>
                    <div
                      id="step9"
                      data-steps={9}
                      className="steps step-9 eval-steps"
                      style={{ display: "block" }}
                    >
                      <h3 className="heading-h2 text-center mb-20 text-capitalize mb-0" style={{fontWeight:"bold"}}>
                        We've calculated your valuation..
                      </h3>
                      <div className="field-label calculate-descp">
                        To access your valuation please fill in your contact
                        details
                      </div>
                      <label htmlFor="First-Name" className="field-label">
                        First Name*
                      </label>

                      <input
                        type="text"
                        className="step-input w-input"
                        maxLength={256}
                        name="firstName"
                        data-name="firstName"
                        placeholder="First Name"
                        id="firstName"
                        required
                        onChange={handleChange}
                      />
                    {!formData.firstName &&(
                      <div className="error-msg error-msg-1">
                      <div>This Field is required</div>
                    </div>
                    ) }
                      <label htmlFor="Surname" className="field-label">
                        Surname*
                      </label>
                      <input
                        type="text"
                        className="step-input w-input"
                        maxLength={256}
                        name="surname"
                        data-name="surname"
                        placeholder="SurName"
                        id="surname"
                        required
                        onChange={handleChange}
                      />
                      {!formData.surname &&(
                      <div className="error-msg error-msg-1">
                      <div>This Field is required</div>
                    </div>
                    ) }
                      <label htmlFor="Email-Address" className="field-label">
                        Email address*
                      </label>
                      <input
                        type="email"
                        className="step-input w-input"
                        maxLength={256}
                        name="emailAddress"
                        data-name="emailAddress"
                        placeholder="Email address"
                        id="emailAddress"
                        required
                        onChange={handleChange}
                      />
                      {!formData.emailAddress &&(
                      <div className="error-msg error-msg-1">
                      <div>This Field is required</div>
                    </div>
                    ) }
                      <label htmlFor="Linked-In" className="field-label">
                        LinkedIn*
                      </label>
                      <input
                        type="text"
                        className="step-input w-input"
                        maxLength={256}
                        name="linkedIn"
                        data-name="linkedIn"
                        placeholder="Linkedin"
                        id="linkedIn"
                        required
                        onChange={handleChange}
                      />
                      {!formData.linkedIn &&(
                      <div className="error-msg error-msg-1">
                      <div>This Field is required</div>
                    </div>
                    ) }
                      <a
                        data-steps={9}
                        href="#"
                        className="btn btn-std steps-btn btn-full next-step w-button"
                        style={{ color: "white", backgroundColor: "#007cd0" }}
                        onClick={unpublishedCalc}
                      >
                        calculate now
                      </a>
                    </div>
                    <div
                      id="step10"
                      data-steps={10}
                      className="steps valuation-result step-10 eval-steps"
                      style={{ display: "none" }}
                    >
                      <div className="section-heading text-center counter-section">
                        <h1 id="counter-mid" className="counter-heading-2">
                          $0
                        </h1>
                        <div className="result-bar">
                          <div id="counter-low" className="counter-low counter">
                            $0
                          </div>
                          <div
                            id="counter-high"
                            className="counter-high counter"
                          >
                            $0
                          </div>
                          <div className="result-bar-shape-2">
                          </div>
                        </div>
                        <img
                          loading="lazy"
                          src="https://uploads-ssl.webflow.com/62de56f587060ef8475d1055/630dacadcd22fa76b8dd7913_CSS%20infinite%20loading%20animation%20example.gif"
                          alt="loading bar"
                          className="loader-img"
                        />
                      </div>
                      <div className="aggree-input">
                        I authorize MAIDA.CO to reach out to me to discuss valuation matters
                      </div>
                      <input
                        type="submit"
                        defaultValue="Next"
                        data-wait="Please wait..."
                        className="btn btn-std steps-btn btn-full result-btn next-step "
                          onClick={(e) => {
                          
                            window.location.href="https://maida.co/thankyou"

                        }}
                      />
                      <a
                        data-steps={10}
                        className="btn btn-std steps-btn btn-full result-btn next-step d-none w-button"
                        onClick={handleNext1}
                      >
                        NEXT
                      </a>
                    </div>
                    <div>
                      <div className="w-embed">
                        <input type="hidden" name="utm_id" id="utm-id" />
                      </div>
                      <div className="w-embed">
                        <input
                          type="hidden"
                          name="utm_source"
                          id="utm-source"
                        />
                      </div>
                      <div className="w-embed">
                        <input
                          type="hidden"
                          name="utm_medium"
                          id="utm-medium"
                        />
                      </div>
                      <div className="w-embed">
                        <input
                          type="hidden"
                          name="utm_campaign"
                          id="utm-campaign"
                        />
                      </div>
                      <div className="w-embed">
                        <input type="hidden" name="utm_term" id="utm-term" />
                      </div>
                      <div className="w-embed">
                        <input
                          type="hidden"
                          name="utm_content"
                          id="utm-content"
                        />
                      </div>
                    </div>
                  </form>
                  <div
                    className="w-form-done"
                    tabIndex={-1}
                    role="region"
                    aria-label="Contact Forms success"
                  >
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div
                    className="w-form-fail"
                    tabIndex={-1}
                    role="region"
                    aria-label="Contact Forms failure"
                  >
                    <div>
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
        )}
         {currentStep === 3 && (
   <div className="w-container">
   <div className="steps-outer">
     <div className="steps-header">
       <h2 style={{ color: "#007cd0", fontWeight: "bold" }}>MAIDA.CO</h2>
       <h1
         className="valuation-heading"
         style={{ color: "white", backgroundColor: "#007cd0" }}
       >
         <span>Free</span> App Valuation Calculator
       </h1>
     </div>

     <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
       <div className="spinner-border spinner-border-lg" role="status">
         <span className="visually-hidden">Loading...</span>
       </div>
     </div>
   </div>
 </div>
      )}
   </>
    )
};

export default MultiStepForm;
