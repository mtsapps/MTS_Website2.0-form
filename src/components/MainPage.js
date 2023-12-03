import React from 'react'
import Footer from './mainPageComponent/Footer'
import Services from './mainPageComponent/Services'
import Landing from './mainPageComponent/Landing'
import AnnualDownload from './mainPageComponent/AnnualDownload'
import CommonFooter from "./common/CommonFooter"
import ActtiveUser from './mainPageComponent/ActtiveUser'
import Rating from './mainPageComponent/Rating'
import Navbar from './common/Navbar'
function MainPage() {
return (
<div style={{ height: 'auto', important: 'true', }}
data-cmplz="1"
class="home page-template page-template-elementor_header_footer page page-id-26 elementor-default elementor-template-full-width elementor-kit-5 elementor-page elementor-page-26 e--ua-blink e--ua-chrome e--ua-webkit elementor elementor-219 elementor-location-header"
data-elementor-device-mode="widescreen"
   >
        <Navbar/>
<div
   data-elementor-type="wp-page"
   data-elementor-id="26"
   class="elementor elementor-26"
      >
         
  <Landing/>
{/* <AnnualDownload/> */}
<div style={{marginBottom:"250px"}}></div>
<ActtiveUser/>
<Rating/>

<Services/>
<section
   class="elementor-section elementor-top-section elementor-element elementor-element-09241d3 elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
   data-id="09241d3"
   data-element_type="section"
   >
   <div class="elementor-container elementor-column-gap-no">
      <div
         class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c7252fe"
         data-id="c7252fe"
         data-element_type="column"
         >
         <div class="elementor-widget-wrap"></div>
      </div>
   </div>
</section>
</div>
<CommonFooter/>
</div>
)
}
export default MainPage