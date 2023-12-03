import React from 'react'

function Landing() {
  return (
    <section style={{marginTop:"-100px" }}
    class="elementor-section elementor-top-section elementor-element elementor-element-d31cb46 elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
    data-id="d31cb46"
    data-element_type="section"
    data-settings='{"background_background":"video","background_video_link":"\/wp-content\/uploads\/2022\/08\/0S1-V2.mp4","background_play_on_mobile":"yes"}'
     >
        
    <div class="elementor-background-video-container">
       <video
       className="elementor-background-video-hosted elementor-html5-video"
       autoPlay
       muted
       playsInline
       loop
       src="./0S1-V2.mp4"
       style={{ width: '1519.2px', height: '854.55px' }}
       ></video>
    </div>
    <div class="elementor-background-overlay"></div>
    <div class="elementor-container elementor-column-gap-no">
       <div
          class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-877994c"
          data-id="877994c"
          data-element_type="column"
          >
          <div class="elementor-widget-wrap elementor-element-populated">
             <section
                class="elementor-section elementor-inner-section elementor-element elementor-element-969221c elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="969221c"
                data-element_type="section"
                >
                <div class="elementor-container elementor-column-gap-no">
                   <div
                      class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-59409f6"
                      data-id="59409f6"
                      data-element_type="column"
                      >
                      <div class="elementor-widget-wrap elementor-element-populated">
                         <div
                            class="elementor-element elementor-element-3a33cb0 elementor-widget elementor-widget-heading animated fadeIn"
                            data-id="3a33cb0"
                            data-element_type="widget"
                            data-settings='{"_animation":"fadeIn","_animation_tablet":"fadeIn","_animation_mobile":"fadeIn"}'
                            data-widget_type="heading.default"
                            >
                            <div class="elementor-widget-container" style={{paddingTop:"50px"}}>
                               <h2 class="elementor-heading-title elementor-size-default">
                                  Bringing Mobile Visions to life
                               </h2>
                            </div>
                         </div>
                      </div>
                   </div>
                   <div
                      class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-fc33d06"
                      data-id="fc33d06"
                      data-element_type="column"
                      >
                      <div class="elementor-widget-wrap elementor-element-populated">
                         <div
                            class="elementor-element elementor-element-4d17784 elementor-widget elementor-widget-text-editor animated fadeInUp"
                            data-id="4d17784"
                            data-element_type="widget"
                            data-settings='{"_animation":"fadeInUp","_animation_tablet":"fadeIn","_animation_mobile":"fadeIn"}'
                            data-widget_type="text-editor.default"
                            >
                            <div class="elementor-widget-container">
                               <p>
                                  Our extensive experience in enhancing
                                  mobile apps and games has delighted millions 
                                  worldwide. Our unique global footprint and
                                  vast user engagement are what set us
                                  apart.
                               </p>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </section>
             <div
                class="elementor-element elementor-element-95e97a6 boton-start elementor-widget elementor-widget-tme-button animated fadeIn"
                data-id="95e97a6"
                data-element_type="widget"
                data-settings='{"_animation":"fadeIn","_animation_tablet":"fadeIn","_animation_mobile":"fadeIn"}'
                data-widget_type="tme-button.default"
                >
                <div class="elementor-widget-container">
                   <div class="tme-btn-wrapper">
                      <a
                         id=""
                         class="tme-btn-md tme-btn-2"
                         href="/form"
                         rel="nofollow"
                         >
                      Online Valuation{" "}
                      </a>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
 </section>
  )
}

export default Landing