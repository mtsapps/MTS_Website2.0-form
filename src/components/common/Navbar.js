import React, { useEffect, useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
//     <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-af5ea2d" data-id="af5ea2d" data-element_type="column">
//     <div className="elementor-widget-wrap elementor-element-populated">
//       <div className="elementor-element elementor-element-91f40c0 elementor-nav-menu__align-right elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu elementor-sticky elementor-sticky--effects animated fadeIn elementor-sticky--active elementor-section--handles-inside" data-id="91f40c0" data-element_type="widget" data-settings="{&quot;sticky&quot;:&quot;top&quot;,&quot;_animation&quot;:&quot;fadeIn&quot;,&quot;layout&quot;:&quot;horizontal&quot;,&quot;submenu_icon&quot;:{&quot;value&quot;:&quot;<i class=\&quot;fas fa-caret-down\&quot;><\/i>&quot;,&quot;library&quot;:&quot;fa-solid&quot;},&quot;toggle&quot;:&quot;burger&quot;,&quot;sticky_on&quot;:[&quot;desktop&quot;,&quot;tablet&quot;,&quot;mobile&quot;],&quot;sticky_offset&quot;:0,&quot;sticky_effects_offset&quot;:0}" data-widget_type="nav-menu.default" style={{position: 'fixed', width: '795.05px', marginTop: '0px', marginBottom: '0px', top: '0px'}}>
//         <div className="elementor-widget-container">
//            <nav migration_allowed={1} migrated={0} role="navigation" className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-underline e--animation-slide">
//             <ul id="menu-1-91f40c0" className="elementor-nav-menu" data-smartmenus-id={1700582782147475}><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-214"><a href="/" className="elementor-item">Home</a></li>
//               <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-217"><a href="/contactus" className="elementor-item">Manifesto</a></li>
//               <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-218"><a href="/aboutus" className="elementor-item">Services</a></li>
//  <div className="valuation-btn" style={{ borderRadius: '10px', borderColor:"white",marginTop:"20px", overflow: 'hidden', }}>
//         <button type="button" class="btn " onClick={(e)=>{window.location.href="/form"}}>Online Valuation</button>
//           </div>
//             </ul>			</nav>
//           <div className="elementor-menu-toggle" role="button" tabIndex={0} aria-label="Alternar menú" aria-expanded="false">
//             <i aria-hidden="true" role="presentation" className="elementor-menu-toggle__icon--open eicon-menu-bar" /><i aria-hidden="true" role="presentation" className="elementor-menu-toggle__icon--close eicon-close" />			<span className="elementor-screen-only">Menú</span>
//           </div>
//           <nav className="elementor-nav-menu--dropdown elementor-nav-menu__container" role="navigation" aria-hidden="true">
//             <ul id="menu-2-91f40c0" className="elementor-nav-menu" data-smartmenus-id={17005827821492178}><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-214"><a href="/" className="elementor-item" tabIndex={-1}>Home</a></li>
//               <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-217"><a href="/contactus" className="elementor-item" tabIndex={-1}>Manifesto</a></li>
//               <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-218"><a href="/aboutus" className="elementor-item" tabIndex={-1}>Services</a></li>
//                 <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-216"><a href="../case-studies/index.html" className="elementor-item" tabIndex={-1}>Case Studies</a></li>
//                 <div className="valuation-btn" style={{ borderRadius: '10px', borderColor:"white",marginTop:"20px", overflow: 'hidden', }}>
//         <button type="button" class="btn " onClick={(e)=>{window.location.href="/form"}}>Online Valuation</button>
//           </div>
//             </ul>			</nav>
//         </div>
//       </div><div className="elementor-element elementor-element-91f40c0 elementor-nav-menu__align-right elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-invisible elementor-widget elementor-widget-nav-menu elementor-sticky elementor-sticky__spacer" data-id="91f40c0" data-element_type="widget" data-settings="{&quot;sticky&quot;:&quot;top&quot;,&quot;_animation&quot;:&quot;fadeIn&quot;,&quot;layout&quot;:&quot;horizontal&quot;,&quot;submenu_icon&quot;:{&quot;value&quot;:&quot;<i class=\&quot;fas fa-caret-down\&quot;><\/i>&quot;,&quot;library&quot;:&quot;fa-solid&quot;},&quot;toggle&quot;:&quot;burger&quot;,&quot;sticky_on&quot;:[&quot;desktop&quot;,&quot;tablet&quot;,&quot;mobile&quot;],&quot;sticky_offset&quot;:0,&quot;sticky_effects_offset&quot;:0}" data-widget_type="nav-menu.default" style={{visibility: 'hidden', transition: 'none 0s ease 0s', animation: 'auto ease 0s 1 normal none running none'}}>
//         <div className="elementor-widget-container">
//            <nav migration_allowed={1} migrated={0} role="navigation" className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-underline e--animation-slide">
//             <ul id="menu-1-91f40c0" className="elementor-nav-menu"><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-214"><a href="/" className="elementor-item">Home</a></li>
//               <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-217"><a href="/contactus" className="elementor-item">Manifesto</a></li>
//                 <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-218"><a href="/aboutus" className="elementor-item">Services</a></li>
//                 <div className="valuation-btn" style={{ borderRadius: '10px', borderColor:"white",marginTop:"20px", overflow: 'hidden', }}>
//         <button type="button" class="btn " onClick={(e)=>{window.location.href="/form"}}>Online Valuation</button>
//           </div>
//               <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-215"><a href="../careers/index.html" className="elementor-item">Careers</a></li>
//             </ul>			</nav>
//           <div className="elementor-menu-toggle" role="button" tabIndex={0} aria-label="Alternar menú" aria-expanded="false">
//             <i aria-hidden="true" role="presentation" className="elementor-menu-toggle__icon--open eicon-menu-bar" /><i aria-hidden="true" role="presentation" className="elementor-menu-toggle__icon--close eicon-close" />			<span className="elementor-screen-only">Menú</span>
//           </div>
//           <nav className="elementor-nav-menu--dropdown elementor-nav-menu__container" role="navigation" aria-hidden="true">
//             <ul id="menu-2-91f40c0" className="elementor-nav-menu"><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-214"><a href="/" className="elementor-item" tabIndex={-1}>Home</a></li>
//               <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-217"><a href="/contactus" className="elementor-item" tabIndex={-1}>Manifesto</a></li>
//               <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-218"><a href="/aboutus" className="elementor-item" tabIndex={-1}>Services</a></li>
//               <div className="valuation-btn" style={{ borderRadius: '10px', borderColor:"white",marginTop:"20px", overflow: 'hidden', }}>
//         <button type="button" class="btn " onClick={(e)=>{window.location.href="/form"}}>Online Valuation</button>
//           </div>            </ul>			</nav>
//         </div>
//       </div>
//     </div>
    //   </div>
    <section className="elementor-section elementor-top-section elementor-element elementor-element-b813cb5 menu-weewoo elementor-hidden-mobile elementor-hidden-tablet elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-sticky elementor-sticky--effects elementor-sticky--active elementor-section--handles-inside" data-id="b813cb5" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;sticky&quot;:&quot;top&quot;,&quot;sticky_on&quot;:[&quot;desktop&quot;],&quot;sticky_offset&quot;:0,&quot;sticky_effects_offset&quot;:0}" style={{position: 'fixed', width: '1688px', marginTop: '0px', marginBottom: '0px', top: '0px' , backgroundColor: scrolled ? '#007CD0' : 'transparent',}}>
    <div className="elementor-container elementor-column-gap-no elementor-motion-effects-parent">
      <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-652fb5f elementor-motion-effects-element elementor-motion-effects-element-type-background" data-id="652fb5f" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;background_motion_fx_motion_fx_scrolling&quot;:&quot;yes&quot;,&quot;background_motion_fx_opacity_level&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:7,&quot;sizes&quot;:[]},&quot;background_motion_fx_opacity_range&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:0,&quot;end&quot;:10}},&quot;background_motion_fx_range&quot;:&quot;page&quot;,&quot;background_motion_fx_opacity_effect&quot;:&quot;yes&quot;,&quot;background_motion_fx_opacity_direction&quot;:&quot;out-in&quot;,&quot;background_motion_fx_devices&quot;:[&quot;desktop&quot;,&quot;tablet&quot;,&quot;mobile&quot;]}" style={{eTransformTransitionDuration: '100ms'}}>
        <div className="elementor-widget-wrap elementor-element-populated">
          <div className="elementor-motion-effects-container"><div className="elementor-motion-effects-layer" style={{width: '100%', height: '100%', opacity: '0.3', willChange: 'opacity'}} /></div>
          <section className="elementor-section elementor-inner-section elementor-element elementor-element-d97e73e elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="d97e73e" data-element_type="section">
            <div className="elementor-container elementor-column-gap-no">
              <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-b8d6405" data-id="b8d6405" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-2e63ef6 elementor-widget elementor-widget-image" data-id="2e63ef6" data-element_type="widget" data-widget_type="image.default">
                    <div className="elementor-widget-container">
                      <img width={200} height={30} src="https://weewoo.com/wp-content/uploads/2022/05/weewoo-neg.svg" className="attachment-full size-full wp-image-244 ls-is-cached lazyloaded" alt="" data-src="https://weewoo.com/wp-content/uploads/2022/05/weewoo-neg.svg" decoding="async" />
                      <noscript>&lt;img width="200" height="30" src="https://weewoo.com/wp-content/uploads/2022/05/weewoo-neg.svg" class="attachment-full size-full wp-image-244" alt="" data-eio="l" /&gt;</noscript>
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-af5ea2d" data-id="af5ea2d" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-91f40c0 elementor-nav-menu__align-right elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu elementor-sticky animated fadeIn" data-id="91f40c0" data-element_type="widget" data-settings="{&quot;sticky&quot;:&quot;top&quot;,&quot;_animation&quot;:&quot;fadeIn&quot;,&quot;layout&quot;:&quot;horizontal&quot;,&quot;submenu_icon&quot;:{&quot;value&quot;:&quot;<i class=\&quot;fas fa-caret-down\&quot;><\/i>&quot;,&quot;library&quot;:&quot;fa-solid&quot;},&quot;toggle&quot;:&quot;burger&quot;,&quot;sticky_on&quot;:[&quot;desktop&quot;,&quot;tablet&quot;,&quot;mobile&quot;],&quot;sticky_offset&quot;:0,&quot;sticky_effects_offset&quot;:0}" data-widget_type="nav-menu.default">
                    <div className="elementor-widget-container">
                      <link rel="stylesheet" href="https://weewoo.com/wp-content/plugins/elementor-pro/assets/css/widget-nav-menu.min.css" />
                      <nav migration_allowed={1} migrated={0} role="navigation" className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-underline e--animation-slide">
                        <ul id="menu-1-91f40c0" className="elementor-nav-menu" data-smartmenus-id={17012787438267463}>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-214"><a href="https://weewoo.com/" className="elementor-item">HOME</a></li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-39 current_page_item menu-item-217">
                            <a href="https://weewoo.com/manifesto/" aria-current="page" className="elementor-item elementor-item-active">ABOUT US</a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-218"><a href="https://weewoo.com/services/" className="elementor-item">CONTACT US</a></li>
                  
                        </ul>
                      </nav>
                      <div className="elementor-menu-toggle" role="button" tabIndex={0} aria-label="Alternar menú" aria-expanded="false">
                        <i aria-hidden="true" role="presentation" className="elementor-menu-toggle__icon--open eicon-menu-bar" />
                        <i aria-hidden="true" role="presentation" className="elementor-menu-toggle__icon--close eicon-close" /> <span className="elementor-screen-only">Menú</span>
                      </div>
                      <nav className="elementor-nav-menu--dropdown elementor-nav-menu__container" role="navigation" aria-hidden="true">
                        <ul id="menu-2-91f40c0" className="elementor-nav-menu" data-smartmenus-id={17012787438272595}>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-214"><a href="https://weewoo.com/" className="elementor-item" tabIndex={-1}>Home</a></li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-39 current_page_item menu-item-217">
                            <a href="https://weewoo.com/manifesto/" aria-current="page" className="elementor-item elementor-item-active" tabIndex={-1}>Manifesto</a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-218"><a href="https://weewoo.com/services/" className="elementor-item" tabIndex={-1}>Services</a></li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-216"><a href="https://weewoo.com/case-studies/" className="elementor-item" tabIndex={-1}>Case Studies</a></li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-215"><a href="https://weewoo.com/careers/" className="elementor-item" tabIndex={-1}>Careers</a></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-78bea43" data-id="78bea43" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-b66cabb boton-start elementor-widget elementor-widget-tme-button" data-id="b66cabb" data-element_type="widget" data-widget_type="tme-button.default">
                    <div className="elementor-widget-container">
                      <div className="tme-btn-wrapper">
                        <a id className="tme-btn-md tme-btn-2 " style={{whiteSpace:"nowrap" ,textAlign:"center" ,color :"black", backgroundColor:"white", fontFamily:"Gotham"}} href="https://www.weewoo.com/contact-us/">ONLINE APP VALUATION </a>
                      </div>
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
  )
}

export default Navbar