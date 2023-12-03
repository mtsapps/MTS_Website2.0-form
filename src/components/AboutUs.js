import React from "react";
import LandingBanner from "./aboutusComponent/LandingBanner";
import TeamMember from "./aboutusComponent/TeamMember";
import WhatWeAre from "./aboutusComponent/WhatWeAre";
import Footer from "./common/CommonFooter";
import Navbar from "./common/Navbar";
import "./common/style.css"
function AboutUs() {
  return (
    <>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width={0} height={0} focusable="false" role="none" style={{visibility: 'hidden', position: 'absolute', left: '-9999px', overflow: 'hidden'}}>
      <defs>
        <filter id="wp-duotone-dark-grayscale">
          <feColorMatrix colorInterpolationFilters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " />
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width={0} height={0} focusable="false" role="none" style={{visibility: 'hidden', position: 'absolute', left: '-9999px', overflow: 'hidden'}}>
      <defs>
        <filter id="wp-duotone-grayscale">
          <feColorMatrix colorInterpolationFilters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " />
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width={0} height={0} focusable="false" role="none" style={{visibility: 'hidden', position: 'absolute', left: '-9999px', overflow: 'hidden'}}>
      <defs>
        <filter id="wp-duotone-purple-yellow">
          <feColorMatrix colorInterpolationFilters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " />
          <feComponentTransfer colorInterpolationFilters="sRGB">
            <feFuncR type="table" tableValues="0.54901960784314 0.98823529411765" />
            <feFuncG type="table" tableValues="0 1" />
            <feFuncB type="table" tableValues="0.71764705882353 0.25490196078431" />
            <feFuncA type="table" tableValues="1 1" />
          </feComponentTransfer>
          <feComposite in2="SourceGraphic" operator="in" />
        </filter>
      </defs>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width={0} height={0} focusable="false" role="none" style={{visibility: 'hidden', position: 'absolute', left: '-9999px', overflow: 'hidden'}}>
      <defs>
        <filter id="wp-duotone-blue-red">
          <feColorMatrix colorInterpolationFilters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " />
          <feComponentTransfer colorInterpolationFilters="sRGB">
            <feFuncR type="table" tableValues="0 1" />
            <feFuncG type="table" tableValues="0 0.27843137254902" />
            <feFuncB type="table" tableValues="0.5921568627451 0.27843137254902" />
            <feFuncA type="table" tableValues="1 1" />
          </feComponentTransfer>
          <feComposite in2="SourceGraphic" operator="in" />
        </filter>
      </defs>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width={0} height={0} focusable="false" role="none" style={{visibility: 'hidden', position: 'absolute', left: '-9999px', overflow: 'hidden'}}>
      <defs>
        <filter id="wp-duotone-midnight">
          <feColorMatrix colorInterpolationFilters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " />
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width={0} height={0} focusable="false" role="none" style={{visibility: 'hidden', position: 'absolute', left: '-9999px', overflow: 'hidden'}}>
      <defs>
        <filter id="wp-duotone-magenta-yellow">
          <feColorMatrix colorInterpolationFilters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " />
          <feComponentTransfer colorInterpolationFilters="sRGB">
            <feFuncR type="table" tableValues="0.78039215686275 1" />
            <feFuncG type="table" tableValues="0 0.94901960784314" />
            <feFuncB type="table" tableValues="0.35294117647059 0.47058823529412" />
            <feFuncA type="table" tableValues="1 1" />
          </feComponentTransfer>
          <feComposite in2="SourceGraphic" operator="in" />
        </filter>
      </defs>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width={0} height={0} focusable="false" role="none" style={{visibility: 'hidden', position: 'absolute', left: '-9999px', overflow: 'hidden'}}>
      <defs>
        <filter id="wp-duotone-purple-green">
          <feColorMatrix colorInterpolationFilters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " />
          <feComponentTransfer colorInterpolationFilters="sRGB">
            <feFuncR type="table" tableValues="0.65098039215686 0.40392156862745" />
            <feFuncG type="table" tableValues="0 1" />
            <feFuncB type="table" tableValues="0.44705882352941 0.4" />
            <feFuncA type="table" tableValues="1 1" />
          </feComponentTransfer>
          <feComposite in2="SourceGraphic" operator="in" />
        </filter>
      </defs>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width={0} height={0} focusable="false" role="none" style={{visibility: 'hidden', position: 'absolute', left: '-9999px', overflow: 'hidden'}}>
      <defs>
        <filter id="wp-duotone-blue-orange">
          <feColorMatrix colorInterpolationFilters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " />
          <feComponentTransfer colorInterpolationFilters="sRGB">
            <feFuncR type="table" tableValues="0.098039215686275 1" />
            <feFuncG type="table" tableValues="0 0.66274509803922" />
            <feFuncB type="table" tableValues="0.84705882352941 0.41960784313725" />
            <feFuncA type="table" tableValues="1 1" />
          </feComponentTransfer>
          <feComposite in2="SourceGraphic" operator="in" />
        </filter>
      </defs>
    </svg>
    <div data-elementor-type="header" data-elementor-id={219} className="elementor elementor-219 elementor-location-header">
      <section className="elementor-section elementor-top-section elementor-element elementor-element-b813cb5 menu-weewoo elementor-hidden-mobile elementor-hidden-tablet elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-sticky elementor-sticky--effects elementor-sticky--active elementor-section--handles-inside" data-id="b813cb5" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;sticky&quot;:&quot;top&quot;,&quot;sticky_on&quot;:[&quot;desktop&quot;],&quot;sticky_offset&quot;:0,&quot;sticky_effects_offset&quot;:0}" style={{position: 'fixed', width: '1688px', marginTop: '0px', marginBottom: '0px', top: '0px'}}>
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
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-214"><a href="https://weewoo.com/" className="elementor-item">Home</a></li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-39 current_page_item menu-item-217">
                                <a href="https://weewoo.com/manifesto/" aria-current="page" className="elementor-item elementor-item-active">Manifesto</a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-218"><a href="https://weewoo.com/services/" className="elementor-item">Services</a></li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-216"><a href="https://weewoo.com/case-studies/" className="elementor-item">Case Studies</a></li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-215"><a href="https://weewoo.com/careers/" className="elementor-item">Careers</a></li>
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
                            <a id className="tme-btn-md tme-btn-2" href="https://www.weewoo.com/contact-us/"> Contact Us </a>
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
      <section className="elementor-section elementor-top-section elementor-element elementor-element-b813cb5 menu-weewoo elementor-hidden-mobile elementor-hidden-tablet elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-sticky elementor-sticky__spacer" data-id="b813cb5" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;sticky&quot;:&quot;top&quot;,&quot;sticky_on&quot;:[&quot;desktop&quot;],&quot;sticky_offset&quot;:0,&quot;sticky_effects_offset&quot;:0}" style={{visibility: 'hidden', transition: 'none 0s ease 0s', animation: 'auto ease 0s 1 normal none running none'}}>
        <div className="elementor-container elementor-column-gap-no">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-652fb5f" data-id="652fb5f" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;background_motion_fx_motion_fx_scrolling&quot;:&quot;yes&quot;,&quot;background_motion_fx_opacity_level&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:7,&quot;sizes&quot;:[]},&quot;background_motion_fx_opacity_range&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:0,&quot;end&quot;:10}},&quot;background_motion_fx_range&quot;:&quot;page&quot;,&quot;background_motion_fx_opacity_effect&quot;:&quot;yes&quot;,&quot;background_motion_fx_opacity_direction&quot;:&quot;out-in&quot;,&quot;background_motion_fx_devices&quot;:[&quot;desktop&quot;,&quot;tablet&quot;,&quot;mobile&quot;]}">
            <div className="elementor-widget-wrap elementor-element-populated">
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
                      <div className="elementor-element elementor-element-91f40c0 elementor-nav-menu__align-right elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-invisible elementor-widget elementor-widget-nav-menu" data-id="91f40c0" data-element_type="widget" data-settings="{&quot;sticky&quot;:&quot;top&quot;,&quot;_animation&quot;:&quot;fadeIn&quot;,&quot;layout&quot;:&quot;horizontal&quot;,&quot;submenu_icon&quot;:{&quot;value&quot;:&quot;<i class=\&quot;fas fa-caret-down\&quot;><\/i>&quot;,&quot;library&quot;:&quot;fa-solid&quot;},&quot;toggle&quot;:&quot;burger&quot;,&quot;sticky_on&quot;:[&quot;desktop&quot;,&quot;tablet&quot;,&quot;mobile&quot;],&quot;sticky_offset&quot;:0,&quot;sticky_effects_offset&quot;:0}" data-widget_type="nav-menu.default">
                        <div className="elementor-widget-container">
                          <link rel="stylesheet" href="https://weewoo.com/wp-content/plugins/elementor-pro/assets/css/widget-nav-menu.min.css" />
                          <nav migration_allowed={1} migrated={0} role="navigation" className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-underline e--animation-slide">
                            <ul id="menu-1-91f40c0" className="elementor-nav-menu">
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-214"><a href="https://weewoo.com/" className="elementor-item">Home</a></li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-39 current_page_item menu-item-217">
                                <a href="https://weewoo.com/manifesto/" aria-current="page" className="elementor-item elementor-item-active">Manifesto</a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-218"><a href="https://weewoo.com/services/" className="elementor-item">Services</a></li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-216"><a href="https://weewoo.com/case-studies/" className="elementor-item">Case Studies</a></li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-215"><a href="https://weewoo.com/careers/" className="elementor-item">Careers</a></li>
                            </ul>
                          </nav>
                          <div className="elementor-menu-toggle" role="button" tabIndex={0} aria-label="Alternar menú" aria-expanded="false">
                            <i aria-hidden="true" role="presentation" className="elementor-menu-toggle__icon--open eicon-menu-bar" />
                            <i aria-hidden="true" role="presentation" className="elementor-menu-toggle__icon--close eicon-close" /> <span className="elementor-screen-only">Menú</span>
                          </div>
                          <nav className="elementor-nav-menu--dropdown elementor-nav-menu__container" role="navigation" aria-hidden="true">
                            <ul id="menu-2-91f40c0" className="elementor-nav-menu">
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
                            <a id className="tme-btn-md tme-btn-2" href="https://www.weewoo.com/contact-us/"> Contact Us </a>
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
      <section className="elementor-section elementor-top-section elementor-element elementor-element-dbe2dfe elementor-section-height-min-height elementor-hidden-desktop elementor-section-boxed elementor-section-height-default elementor-section-items-middle" data-id="dbe2dfe" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;sticky&quot;:&quot;top&quot;,&quot;sticky_on&quot;:[&quot;tablet&quot;,&quot;mobile&quot;],&quot;sticky_effects_offset_mobile&quot;:0,&quot;sticky_offset&quot;:0,&quot;sticky_effects_offset&quot;:0}">
        <div className="elementor-container elementor-column-gap-no">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-fcf874c" data-id="fcf874c" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;background_motion_fx_motion_fx_scrolling&quot;:&quot;yes&quot;,&quot;background_motion_fx_opacity_effect&quot;:&quot;yes&quot;,&quot;background_motion_fx_opacity_level&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:7,&quot;sizes&quot;:[]},&quot;background_motion_fx_opacity_range&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:0,&quot;end&quot;:10}},&quot;background_motion_fx_devices&quot;:[&quot;mobile&quot;],&quot;background_motion_fx_range&quot;:&quot;page&quot;,&quot;background_motion_fx_opacity_direction&quot;:&quot;out-in&quot;}">
            <div className="elementor-widget-wrap elementor-element-populated">
              <section className="elementor-section elementor-inner-section elementor-element elementor-element-d4455de elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="d4455de" data-element_type="section">
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-b0d5a73" data-id="b0d5a73" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-880fafd elementor-widget elementor-widget-image" data-id="880fafd" data-element_type="widget" data-widget_type="image.default">
                        <div className="elementor-widget-container">
                          <img width={200} height={30} src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="attachment-full size-full wp-image-244 lazyload" alt="" data-src="https://weewoo.com/wp-content/uploads/2022/05/weewoo-neg.svg" decoding="async" />
                          <noscript>&lt;img width="200" height="30" src="https://weewoo.com/wp-content/uploads/2022/05/weewoo-neg.svg" class="attachment-full size-full wp-image-244" alt="" data-eio="l" /&gt;</noscript>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-c78bb5f" data-id="c78bb5f" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-6fcdb84 elementor-nav-menu__align-right elementor-nav-menu--stretch elementor-widget-mobile__width-inherit elementor-nav-menu__text-align-center elementor-nav-menu--dropdown-tablet elementor-nav-menu--toggle elementor-nav-menu--burger elementor-invisible elementor-widget elementor-widget-nav-menu elementor-sticky elementor-sticky--effects elementor-sticky--active elementor-section--handles-inside" data-id="6fcdb84" data-element_type="widget" data-settings="{&quot;sticky&quot;:&quot;top&quot;,&quot;_animation&quot;:&quot;fadeIn&quot;,&quot;full_width&quot;:&quot;stretch&quot;,&quot;layout&quot;:&quot;horizontal&quot;,&quot;submenu_icon&quot;:{&quot;value&quot;:&quot;<i class=\&quot;fas fa-caret-down\&quot;><\/i>&quot;,&quot;library&quot;:&quot;fa-solid&quot;},&quot;toggle&quot;:&quot;burger&quot;,&quot;sticky_on&quot;:[&quot;desktop&quot;,&quot;tablet&quot;,&quot;mobile&quot;],&quot;sticky_offset&quot;:0,&quot;sticky_effects_offset&quot;:0}" data-widget_type="nav-menu.default" style={{position: 'fixed', width: '100px', marginTop: '0px', marginBottom: '0px', top: '0px'}}>
                        <div className="elementor-widget-container">
                          <nav migration_allowed={1} migrated={0} role="navigation" className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none">
                            <ul id="menu-1-6fcdb84" className="elementor-nav-menu" data-smartmenus-id={17012787438283225}>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-759"><a href="https://weewoo.com/" className="elementor-item">Home</a></li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-39 current_page_item menu-item-763">
                                <a href="https://weewoo.com/manifesto/" aria-current="page" className="elementor-item elementor-item-active">Manifesto</a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-764"><a href="https://weewoo.com/services/" className="elementor-item">Services</a></li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-761"><a href="https://weewoo.com/case-studies/" className="elementor-item">Case Studies</a></li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-760"><a href="https://weewoo.com/careers/" className="elementor-item">Careers</a></li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-762"><a href="https://weewoo.com/contact-us/" className="elementor-item">Contact Us</a></li>
                            </ul>
                          </nav>
                          <div className="elementor-menu-toggle" role="button" tabIndex={0} aria-label="Alternar menú" aria-expanded="false" style={{}}>
                            <span className="elementor-menu-toggle__icon--open">
                              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={12} viewBox="0 0 20 12">
                                <g id="ico-menu-mobile" transform="translate(0 1)">
                                  <line id="Línea_35" data-name="Línea 35" x1={20} fill="none" stroke="#fff" strokeWidth={2} />
                                  <line id="Línea_36" data-name="Línea 36" x1={20} transform="translate(0 10)" fill="none" stroke="#fff" strokeWidth={2} />
                                </g>
                              </svg>
                            </span>
                            <i aria-hidden="true" role="presentation" className="elementor-menu-toggle__icon--close eicon-close" /> <span className="elementor-screen-only">Menú</span>
                          </div>
                          <nav className="elementor-nav-menu--dropdown elementor-nav-menu__container" role="navigation" aria-hidden="true" style={{top: '0px', width: '1688px', left: '0px'}}>
                            <ul id="menu-2-6fcdb84" className="elementor-nav-menu" data-smartmenus-id={1701278743828359}>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-759"><a href="https://weewoo.com/" className="elementor-item" tabIndex={-1}>Home</a></li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-39 current_page_item menu-item-763">
                                <a href="https://weewoo.com/manifesto/" aria-current="page" className="elementor-item elementor-item-active" tabIndex={-1}>Manifesto</a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-764"><a href="https://weewoo.com/services/" className="elementor-item" tabIndex={-1}>Services</a></li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-761"><a href="https://weewoo.com/case-studies/" className="elementor-item" tabIndex={-1}>Case Studies</a></li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-760"><a href="https://weewoo.com/careers/" className="elementor-item" tabIndex={-1}>Careers</a></li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-762"><a href="https://weewoo.com/contact-us/" className="elementor-item" tabIndex={-1}>Contact Us</a></li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-6fcdb84 elementor-nav-menu__align-right elementor-nav-menu--stretch elementor-widget-mobile__width-inherit elementor-nav-menu__text-align-center elementor-nav-menu--dropdown-tablet elementor-nav-menu--toggle elementor-nav-menu--burger elementor-invisible elementor-widget elementor-widget-nav-menu elementor-sticky elementor-sticky__spacer" data-id="6fcdb84" data-element_type="widget" data-settings="{&quot;sticky&quot;:&quot;top&quot;,&quot;_animation&quot;:&quot;fadeIn&quot;,&quot;full_width&quot;:&quot;stretch&quot;,&quot;layout&quot;:&quot;horizontal&quot;,&quot;submenu_icon&quot;:{&quot;value&quot;:&quot;<i class=\&quot;fas fa-caret-down\&quot;><\/i>&quot;,&quot;library&quot;:&quot;fa-solid&quot;},&quot;toggle&quot;:&quot;burger&quot;,&quot;sticky_on&quot;:[&quot;desktop&quot;,&quot;tablet&quot;,&quot;mobile&quot;],&quot;sticky_offset&quot;:0,&quot;sticky_effects_offset&quot;:0}" data-widget_type="nav-menu.default" style={{visibility: 'hidden', transition: 'none 0s ease 0s', animation: 'auto ease 0s 1 normal none running none'}}>
                        <div className="elementor-widget-container">
                          <nav migration_allowed={1} migrated={0} role="navigation" className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none">
                            <ul id="menu-1-6fcdb84" className="elementor-nav-menu">
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-759"><a href="https://weewoo.com/" className="elementor-item">Home</a></li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-39 current_page_item menu-item-763">
                                <a href="https://weewoo.com/manifesto/" aria-current="page" className="elementor-item elementor-item-active">Manifesto</a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-764"><a href="https://weewoo.com/services/" className="elementor-item">Services</a></li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-761"><a href="https://weewoo.com/case-studies/" className="elementor-item">Case Studies</a></li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-760"><a href="https://weewoo.com/careers/" className="elementor-item">Careers</a></li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-762"><a href="https://weewoo.com/contact-us/" className="elementor-item">Contact Us</a></li>
                            </ul>
                          </nav>
                          <div className="elementor-menu-toggle" role="button" tabIndex={0} aria-label="Alternar menú" aria-expanded="false">
                            <span className="elementor-menu-toggle__icon--open">
                              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={12} viewBox="0 0 20 12">
                                <g id="ico-menu-mobile" transform="translate(0 1)">
                                  <line id="Línea_35" data-name="Línea 35" x1={20} fill="none" stroke="#fff" strokeWidth={2} />
                                  <line id="Línea_36" data-name="Línea 36" x1={20} transform="translate(0 10)" fill="none" stroke="#fff" strokeWidth={2} />
                                </g>
                              </svg>
                            </span>
                            <i aria-hidden="true" role="presentation" className="elementor-menu-toggle__icon--close eicon-close" /> <span className="elementor-screen-only">Menú</span>
                          </div>
                          <nav className="elementor-nav-menu--dropdown elementor-nav-menu__container" role="navigation" aria-hidden="true">
                            <ul id="menu-2-6fcdb84" className="elementor-nav-menu">
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-759"><a href="https://weewoo.com/" className="elementor-item" tabIndex={-1}>Home</a></li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-39 current_page_item menu-item-763">
                                <a href="https://weewoo.com/manifesto/" aria-current="page" className="elementor-item elementor-item-active" tabIndex={-1}>Manifesto</a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-764"><a href="https://weewoo.com/services/" className="elementor-item" tabIndex={-1}>Services</a></li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-761"><a href="https://weewoo.com/case-studies/" className="elementor-item" tabIndex={-1}>Case Studies</a></li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-760"><a href="https://weewoo.com/careers/" className="elementor-item" tabIndex={-1}>Careers</a></li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-762"><a href="https://weewoo.com/contact-us/" className="elementor-item" tabIndex={-1}>Contact Us</a></li>
                            </ul>
                          </nav>
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
    <div data-elementor-type="wp-page" data-elementor-id={39} className="elementor elementor-39">
      <section className="elementor-section elementor-top-section elementor-element elementor-element-6cf4c64 elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle" data-id="6cf4c64" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;video&quot;,&quot;background_video_link&quot;:&quot;https:\/\/weewoo.com\/wp-content\/uploads\/2022\/08\/0S2-V3.mp4&quot;,&quot;background_play_on_mobile&quot;:&quot;yes&quot;}">
        <div className="elementor-background-video-container">
          <video className="elementor-background-video-hosted elementor-html5-video" autoPlay muted playsInline loop src="https://weewoo.com/wp-content/uploads/2022/08/0S2-V3.mp4" style={{width: '1688px', height: '949.5px'}} />
        </div>
        <div className="elementor-background-overlay" />
        <div className="elementor-container elementor-column-gap-no">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-8b47429" data-id="8b47429" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <section className="elementor-section elementor-inner-section elementor-element elementor-element-7e55953 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="7e55953" data-element_type="section">
                <div className="elementor-container elementor-column-gap-no">
                  <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-97da72c" data-id="97da72c" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-30b4e5b elementor-widget elementor-widget-heading animated fadeInUp" data-id="30b4e5b" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                          <style dangerouslySetInnerHTML={{__html: "\n                                                    /*! elementor - v3.17.0 - 08-11-2023 */\n                                                    .elementor-heading-title {\n                                                        padding: 0;\n                                                        margin: 0;\n                                                        line-height: 1;\n                                                    }\n                                                    .elementor-widget-heading .elementor-heading-title[class*=\"elementor-size-\"] > a {\n                                                        color: inherit;\n                                                        font-size: inherit;\n                                                        line-height: inherit;\n                                                    }\n                                                    .elementor-widget-heading .elementor-heading-title.elementor-size-small {\n                                                        font-size: 15px;\n                                                    }\n                                                    .elementor-widget-heading .elementor-heading-title.elementor-size-medium {\n                                                        font-size: 19px;\n                                                    }\n                                                    .elementor-widget-heading .elementor-heading-title.elementor-size-large {\n                                                        font-size: 29px;\n                                                    }\n                                                    .elementor-widget-heading .elementor-heading-title.elementor-size-xl {\n                                                        font-size: 39px;\n                                                    }\n                                                    .elementor-widget-heading .elementor-heading-title.elementor-size-xxl {\n                                                        font-size: 59px;\n                                                    }\n                                                " }} />
                          <h2 className="elementor-heading-title elementor-size-default">
                            Guided <br />
                            by our Principles
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-a700020" data-id="a700020" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-85bf4c2 elementor-widget elementor-widget-text-editor animated fadeIn" data-id="85bf4c2" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeIn&quot;}" data-widget_type="text-editor.default">
                        <div className="elementor-widget-container">
                          <p>Our team is deeply encouraged by a strong mindset that keeps focused on pushing the envelope of our current products and vision, which is the backbone of our identity as a company.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="elementor-element elementor-element-5812c6f boton-start elementor-widget elementor-widget-tme-button animated fadeIn" data-id="5812c6f" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeIn&quot;}" data-widget_type="tme-button.default">
                <div className="elementor-widget-container">
                  <div className="tme-btn-wrapper">
                    <a id className="tme-btn-md tme-btn-2" href="#start" target="_blank" rel="nofollow"> Start Now </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          </section>
      
      <section className="elementor-section elementor-top-section elementor-element elementor-element-8c19aa4 mod-lineas elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="8c19aa4" data-element_type="section" id="start" data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
        <div className="elementor-background-overlay" />
        <div className="elementor-container elementor-column-gap-no">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-49a7f92" data-id="49a7f92" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated elementor-motion-effects-parent">
              <div className="elementor-element elementor-element-4985a7e elementor-widget elementor-widget-heading animated fadeInUp" data-id="4985a7e" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default"><b>Data</b> is our Language</h2>
                </div>
              </div>
          <section className="elementor-section elementor-inner-section elementor-element elementor-element-3ecf4e9 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-motion-effects-element elementor-motion-effects-element-type-background" data-id="3ecf4e9" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;background_motion_fx_motion_fx_scrolling&quot;:&quot;yes&quot;,&quot;background_motion_fx_translateY_effect&quot;:&quot;yes&quot;,&quot;background_motion_fx_translateY_speed&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:4,&quot;sizes&quot;:[]},&quot;background_motion_fx_translateY_affectedRange&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:0,&quot;end&quot;:100}},&quot;background_motion_fx_devices&quot;:[&quot;desktop&quot;,&quot;tablet&quot;,&quot;mobile&quot;]}" style={{eTransformTransitionDuration: '100ms'}}>
            <div className="elementor-motion-effects-container"><div className="elementor-motion-effects-layer" style={{width: '100%', height: '140%', translatey: '0px', transform: 'translateY(var(--translateY))'}} /></div>
              <div className="elementor-background-overlay" />
                <div className="elementor-container elementor-column-gap-no">
                  <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-69d886d" data-id="69d886d" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-1cd5b02 elementor-widget elementor-widget-text-editor animated fadeInUp" data-id="1cd5b02" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="text-editor.default">
                        <div className="elementor-widget-container">
                          <p>
                            Our philosophy <strong>WEEWOO</strong> is based on objectivity and the use of reason. In fact, data is our preferred language, and we do not understand when someone speaks to us based on
                            unproven beliefs.
                          </p>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-0edbe7e elementor-widget elementor-widget-text-editor animated fadeInUp" data-id="0edbe7e" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="text-editor.default">
                        <div className="elementor-widget-container">
                          <p>We enhance personal skills and turn them into team learning, which allows us to grow quickly together.</p>
                        </div>
                      </div>
                    </div>
                    </div>
                    </div>
              </section>
                    </div>
              </div>
              
                </div>
              <section className="elementor-section elementor-inner-section elementor-element elementor-element-2d0a095 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="2d0a095" data-element_type="section">
                <div className="elementor-container elementor-column-gap-no">
                  <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-bc2b6a4" data-id="bc2b6a4" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-63eddd3 elementor-widget elementor-widget-heading animated fadeInUp" data-id="63eddd3" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                          <h2 className="elementor-heading-title elementor-size-default"><b>Transparency</b> is Essential</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-1d8f10d" data-id="1d8f10d" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-e1f5506 elementor-widget elementor-widget-text-editor animated fadeIn" data-id="e1f5506" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeIn&quot;,&quot;_animation_delay&quot;:200}" data-widget_type="text-editor.default">
                        <div className="elementor-widget-container">
                          <p>We believe knowledge is key to achieving any goal you have, so you’ll have access to complete information from day one. You will be part of major decisions.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="elementor-element elementor-element-01b8a06 elementor-widget elementor-widget-spacer" data-id="01b8a06" data-element_type="widget" data-widget_type="spacer.default">
                <div className="elementor-widget-container">
                  <div className="elementor-spacer">
                    <div className="elementor-spacer-inner" />
                  </div>
                </div>
              </div>
              <section className="elementor-section elementor-inner-section elementor-element elementor-element-e732c1f elementor-section-height-min-height elementor-reverse-tablet elementor-reverse-mobile elementor-section-boxed elementor-section-height-default" data-id="e732c1f" data-element_type="section">
                <div className="elementor-container elementor-column-gap-no elementor-motion-effects-parent">
                  <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-f8056c0 img-wide-txt elementor-motion-effects-element elementor-motion-effects-element-type-background" data-id="f8056c0" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;background_motion_fx_motion_fx_scrolling&quot;:&quot;yes&quot;,&quot;background_motion_fx_translateY_effect&quot;:&quot;yes&quot;,&quot;background_motion_fx_translateY_speed&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:3,&quot;sizes&quot;:[]},&quot;background_motion_fx_translateY_affectedRange&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:0,&quot;end&quot;:100}},&quot;background_motion_fx_devices&quot;:[&quot;desktop&quot;,&quot;tablet&quot;,&quot;mobile&quot;]}" style={{eTransformTransitionDuration: '100ms'}}>
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-motion-effects-container"><div className="elementor-motion-effects-layer" style={{width: '100%', height: '130%', translatey: '0px', transform: 'translateY(var(--translateY))'}} /></div>
                      <div className="elementor-background-overlay" />
                      <div className="elementor-element elementor-element-07efff2 elementor-widget elementor-widget-text-editor animated fadeIn" data-id="07efff2" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeIn&quot;}" data-widget_type="text-editor.default">
                        <div className="elementor-widget-container">
                          <p>We’ll build an honest, transparent and trustworthy relationship within the team, even if the feedback is tough, because that’s how we’ll learn and improve.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-90b969d" data-id="90b969d" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-b32c0a2 elementor-absolute elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget elementor-widget-image animated fadeIn" data-id="b32c0a2" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;,&quot;_animation&quot;:&quot;fadeIn&quot;}" data-widget_type="image.default">
                        <div className="elementor-widget-container">
                          <img width={240} height={240} className="attachment-full size-full wp-image-973 lazyautosizes lazyloaded" alt="" srcSet="https://weewoo.com/wp-content/uploads/2022/05/avatar01-manifesto.png 240w, https://weewoo.com/wp-content/uploads/2022/05/avatar01-manifesto-150x150.png 150w" data-src="https://weewoo.com/wp-content/uploads/2022/05/avatar01-manifesto.png" decoding="async" data-srcset="https://weewoo.com/wp-content/uploads/2022/05/avatar01-manifesto.png 240w, https://weewoo.com/wp-content/uploads/2022/05/avatar01-manifesto-150x150.png 150w" data-sizes="auto" sizes="230px" src="https://weewoo.com/wp-content/uploads/2022/05/avatar01-manifesto.png" />
                          <noscript>
                            &lt;img
                            width="240"
                            height="240"
                            src="https://weewoo.com/wp-content/uploads/2022/05/avatar01-manifesto.png"
                            class="attachment-full size-full wp-image-973"
                            alt=""
                            srcset="https://weewoo.com/wp-content/uploads/2022/05/avatar01-manifesto.png 240w, https://weewoo.com/wp-content/uploads/2022/05/avatar01-manifesto-150x150.png 150w"
                            sizes="(max-width: 240px) 100vw, 240px"
                            data-eio="l"
                            /&gt;
                          </noscript>
                        </div>
                      </div>
                    </div>
                  </div>
              </section>
        </section>
        </div>
      </div>
      
    
      
        
       <section className="elementor-section elementor-top-section elementor-element elementor-element-e0ce629 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="e0ce629" data-element_type="section">
        <div className="elementor-container elementor-column-gap-no">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-eafc6d6" data-id="eafc6d6" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div className="elementor-widget-wrap elementor-element-populated">
              <section className="elementor-section elementor-inner-section elementor-element elementor-element-3e9070c elementor-section-full_width elementor-section-height-min-height elementor-section-height-default" data-id="3e9070c" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="elementor-container elementor-column-gap-no elementor-motion-effects-parent">
                  <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-6614200 img-wide-txt elementor-motion-effects-element elementor-motion-effects-element-type-background" data-id={6614200} data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;background_motion_fx_motion_fx_mouse&quot;:&quot;yes&quot;,&quot;background_motion_fx_mouseTrack_effect&quot;:&quot;yes&quot;,&quot;background_motion_fx_mouseTrack_direction&quot;:&quot;negative&quot;,&quot;background_motion_fx_mouseTrack_speed&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1,&quot;sizes&quot;:[]}}">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-motion-effects-container">
                        <div className="elementor-motion-effects-layer" style={{width: '110%', height: '110%', translatex: '-95.40611599297017px', translatey: '4.288499025341127px', transform: 'translateX(var(--translateX)) translateY(var(--translateY))'}} />
                      </div>
                      <div className="elementor-element elementor-element-b79dfca titular-deg elementor-widget__width-auto elementor-widget-tablet__width-initial elementor-widget elementor-widget-heading elementor-motion-effects-parent elementor-motion-effects-perspective" data-id="b79dfca" data-element_type="widget" data-settings="{&quot;motion_fx_motion_fx_mouse&quot;:&quot;yes&quot;,&quot;motion_fx_mouseTrack_effect&quot;:&quot;yes&quot;,&quot;motion_fx_tilt_effect&quot;:&quot;yes&quot;,&quot;motion_fx_mouseTrack_speed&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1,&quot;sizes&quot;:[]},&quot;motion_fx_tilt_speed&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:4,&quot;sizes&quot;:[]}}" data-widget_type="heading.default">
                        <div className="elementor-widget-container elementor-motion-effects-element" style={{translatex: '12.800234329232573px', translatey: '-57.797270955165686px', rotatex: '-23.118908382066277deg', rotatey: '-5.1200937316930295deg', transform: 'translateX(var(--translateX)) translateY(var(--translateY)) rotateX(var(--rotateX)) rotateY(var(--rotateY))'}}>
                          <h2 className="elementor-heading-title elementor-size-default">We're the future</h2>
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
       
      <section className="elementor-section elementor-top-section elementor-element elementor-element-88cd063 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="88cd063" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
        <div className="elementor-container elementor-column-gap-no">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-0687cff" data-id="0687cff" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <section className="elementor-section elementor-inner-section elementor-element elementor-element-4120a99 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="4120a99" data-element_type="section">
                <div className="elementor-container elementor-column-gap-custom">
                  <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-653fb5c animated fadeInUp" data-id="653fb5c" data-element_type="column" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:200}">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-651e669 elementor-widget__width-auto elementor-widget-tablet__width-inherit elementor-widget elementor-widget-image" data-id="651e669" data-element_type="widget" data-widget_type="image.default">
                        <div className="elementor-widget-container">
                          <img width={840} height={480} className="attachment-full size-full wp-image-3645 lazyautosizes lazyloaded" alt="" srcSet="
                                                    https://weewoo.com/wp-content/uploads/2022/06/img-we-disrupt.jpg         840w,
                                                    https://weewoo.com/wp-content/uploads/2022/06/img-we-disrupt-300x171.jpg 300w,
                                                    https://weewoo.com/wp-content/uploads/2022/06/img-we-disrupt-768x439.jpg 768w
                                                " data-src="https://weewoo.com/wp-content/uploads/2022/06/img-we-disrupt.jpg" decoding="async" data-srcset="https://weewoo.com/wp-content/uploads/2022/06/img-we-disrupt.jpg 840w, https://weewoo.com/wp-content/uploads/2022/06/img-we-disrupt-300x171.jpg 300w, https://weewoo.com/wp-content/uploads/2022/06/img-we-disrupt-768x439.jpg 768w" data-sizes="auto" sizes="420px" src="https://weewoo.com/wp-content/uploads/2022/06/img-we-disrupt.jpg" />
                          <noscript>
                            &lt;img
                            width="840"
                            height="480"
                            src="https://weewoo.com/wp-content/uploads/2022/06/img-we-disrupt.jpg"
                            class="attachment-full size-full wp-image-3645"
                            alt=""
                            srcset="
                            https://weewoo.com/wp-content/uploads/2022/06/img-we-disrupt.jpg         840w,
                            https://weewoo.com/wp-content/uploads/2022/06/img-we-disrupt-300x171.jpg 300w,
                            https://weewoo.com/wp-content/uploads/2022/06/img-we-disrupt-768x439.jpg 768w
                            "
                            sizes="(max-width: 840px) 100vw, 840px"
                            data-eio="l"
                            /&gt;
                          </noscript>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-1520d3c elementor-widget elementor-widget-heading" data-id="1520d3c" data-element_type="widget" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                          <h2 className="elementor-heading-title elementor-size-default">Optimistic Warriors</h2>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-e432ebc elementor-widget elementor-widget-text-editor" data-id="e432ebc" data-element_type="widget" data-widget_type="text-editor.default">
                        <div className="elementor-widget-container">
                          <p>Wartime CEO mindset permeates the mental model of our company. High energy leaders that take responsability head on regardless of any setbacks.&nbsp;</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-54b3dd5 animated fadeInUp" data-id="54b3dd5" data-element_type="column" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;}">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-4a124be elementor-widget__width-auto elementor-widget-tablet__width-inherit elementor-widget elementor-widget-image" data-id="4a124be" data-element_type="widget" data-widget_type="image.default">
                        <div className="elementor-widget-container">
                          <img width={840} height={480} className="attachment-full size-full wp-image-3649 lazyautosizes lazyloaded" alt="" srcSet="
                                                    https://weewoo.com/wp-content/uploads/2022/06/img-we-are-climbers.jpg         840w,
                                                    https://weewoo.com/wp-content/uploads/2022/06/img-we-are-climbers-300x171.jpg 300w,
                                                    https://weewoo.com/wp-content/uploads/2022/06/img-we-are-climbers-768x439.jpg 768w
                                                " data-src="https://weewoo.com/wp-content/uploads/2022/06/img-we-are-climbers.jpg" decoding="async" data-srcset="https://weewoo.com/wp-content/uploads/2022/06/img-we-are-climbers.jpg 840w, https://weewoo.com/wp-content/uploads/2022/06/img-we-are-climbers-300x171.jpg 300w, https://weewoo.com/wp-content/uploads/2022/06/img-we-are-climbers-768x439.jpg 768w" data-sizes="auto" sizes="420px" src="https://weewoo.com/wp-content/uploads/2022/06/img-we-are-climbers.jpg" />
                          <noscript>
                            &lt;img
                            width="840"
                            height="480"
                            src="https://weewoo.com/wp-content/uploads/2022/06/img-we-are-climbers.jpg"
                            class="attachment-full size-full wp-image-3649"
                            alt=""
                            srcset="
                            https://weewoo.com/wp-content/uploads/2022/06/img-we-are-climbers.jpg         840w,
                            https://weewoo.com/wp-content/uploads/2022/06/img-we-are-climbers-300x171.jpg 300w,
                            https://weewoo.com/wp-content/uploads/2022/06/img-we-are-climbers-768x439.jpg 768w
                            "
                            sizes="(max-width: 840px) 100vw, 840px"
                            data-eio="l"
                            /&gt;
                          </noscript>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-d61fb79 elementor-widget elementor-widget-heading" data-id="d61fb79" data-element_type="widget" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                          <h2 className="elementor-heading-title elementor-size-default">Comfort Zone Breakers</h2>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-feebf4c elementor-widget elementor-widget-text-editor" data-id="feebf4c" data-element_type="widget" data-widget_type="text-editor.default">
                        <div className="elementor-widget-container">
                          <p>
                            Onsetting ardous and ambitious goals call for consistent pursuit of efficient decision making with resilience and authenticity. The ambition for achieving the best result is what we aim
                            for. We challenge each other to think outside the box.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-bf5107f animated fadeInUp" data-id="bf5107f" data-element_type="column" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:400}">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-999b053 elementor-widget__width-auto elementor-widget-tablet__width-inherit elementor-widget elementor-widget-image" data-id="999b053" data-element_type="widget" data-widget_type="image.default">
                        <div className="elementor-widget-container">
                          <img width={840} height={480} className="attachment-full size-full wp-image-3650 lazyautosizes lazyloaded" alt="" srcSet="
                                                    https://weewoo.com/wp-content/uploads/2022/06/img-we-are-partnerts.jpg         840w,
                                                    https://weewoo.com/wp-content/uploads/2022/06/img-we-are-partnerts-300x171.jpg 300w,
                                                    https://weewoo.com/wp-content/uploads/2022/06/img-we-are-partnerts-768x439.jpg 768w
                                                " data-src="https://weewoo.com/wp-content/uploads/2022/06/img-we-are-partnerts.jpg" decoding="async" data-srcset="https://weewoo.com/wp-content/uploads/2022/06/img-we-are-partnerts.jpg 840w, https://weewoo.com/wp-content/uploads/2022/06/img-we-are-partnerts-300x171.jpg 300w, https://weewoo.com/wp-content/uploads/2022/06/img-we-are-partnerts-768x439.jpg 768w" data-sizes="auto" sizes="420px" src="https://weewoo.com/wp-content/uploads/2022/06/img-we-are-partnerts.jpg" />
                          <noscript>
                            &lt;img
                            width="840"
                            height="480"
                            src="https://weewoo.com/wp-content/uploads/2022/06/img-we-are-partnerts.jpg"
                            class="attachment-full size-full wp-image-3650"
                            alt=""
                            srcset="
                            https://weewoo.com/wp-content/uploads/2022/06/img-we-are-partnerts.jpg         840w,
                            https://weewoo.com/wp-content/uploads/2022/06/img-we-are-partnerts-300x171.jpg 300w,
                            https://weewoo.com/wp-content/uploads/2022/06/img-we-are-partnerts-768x439.jpg 768w
                            "
                            sizes="(max-width: 840px) 100vw, 840px"
                            data-eio="l"
                            /&gt;
                          </noscript>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-93e6436 elementor-widget elementor-widget-heading" data-id="93e6436" data-element_type="widget" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                          <h2 className="elementor-heading-title elementor-size-default">Default Alive</h2>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-6f44cec elementor-widget elementor-widget-text-editor" data-id="6f44cec" data-element_type="widget" data-widget_type="text-editor.default">
                        <div className="elementor-widget-container">
                          <p>
                            Paul Graham defined being Default Alive as;&nbsp; «If the company is default alive we can talk about ambitious new things they could do. If it’s default dead, we probably need to talk
                            about how to save it.»
                          </p>
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
      <section className="elementor-section elementor-top-section elementor-element elementor-element-69d0fcc elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="69d0fcc" data-element_type="section">
        <div className="elementor-container elementor-column-gap-no">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3d9f5a2" data-id="3d9f5a2" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div className="elementor-widget-wrap elementor-element-populated">
              <section className="elementor-section elementor-inner-section elementor-element elementor-element-801aa7a elementor-section-full_width elementor-section-height-min-height elementor-section-height-default" data-id="801aa7a" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="elementor-container elementor-column-gap-no elementor-motion-effects-parent">
                  <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-13e4015 elementor-motion-effects-element elementor-motion-effects-element-type-background" data-id="13e4015" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;background_motion_fx_motion_fx_scrolling&quot;:&quot;yes&quot;,&quot;background_motion_fx_translateY_effect&quot;:&quot;yes&quot;,&quot;background_motion_fx_devices&quot;:[&quot;desktop&quot;,&quot;tablet&quot;],&quot;background_motion_fx_translateY_speed&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:4,&quot;sizes&quot;:[]},&quot;background_motion_fx_translateY_affectedRange&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:0,&quot;end&quot;:100}}}" style={{eTransformTransitionDuration: '100ms'}}>
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-motion-effects-container"><div className="elementor-motion-effects-layer" style={{width: '100%', height: '140%', translatey: '0px', transform: 'translateY(var(--translateY))'}} /></div>
                      <div className="elementor-background-overlay" />
                      <div className="elementor-element elementor-element-46465ee elementor-widget__width-auto elementor-widget elementor-widget-image animated fadeIn" data-id="46465ee" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeIn&quot;}" data-widget_type="image.default">
                        <div className="elementor-widget-container">
                          <img width={880} height={167} src="https://weewoo.com/wp-content/uploads/2022/05/logo-we-are-weewoo.svg" className="attachment-full size-full wp-image-1096 lazyloaded" alt="" data-src="https://weewoo.com/wp-content/uploads/2022/05/logo-we-are-weewoo.svg" decoding="async" />
                        
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
      <section className="elementor-section elementor-top-section elementor-element elementor-element-2ae8b05 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="2ae8b05" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
        <div className="elementor-container elementor-column-gap-no">
          <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-e12dae9" data-id="e12dae9" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <section className="elementor-section elementor-inner-section elementor-element elementor-element-f378567 elementor-section-full_width elementor-section-height-min-height elementor-section-height-default" data-id="f378567" data-element_type="section">
                <div className="elementor-container elementor-column-gap-no">
                  <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-005b862 img-vert-txt" data-id="005b862" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-background-overlay" />
                      <div className="elementor-element elementor-element-ce547ae elementor-widget elementor-widget-heading" data-id="ce547ae" data-element_type="widget" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                          <h2 className="elementor-heading-title elementor-size-default">We’re Independent</h2>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-d064394 elementor-widget elementor-widget-text-editor" data-id="d064394" data-element_type="widget" data-widget_type="text-editor.default">
                        <div className="elementor-widget-container">
                          <p>
                            We have grown in a culture of independence and ownership. We like to feel every project we participate in as our own, bringing our own ideas and giving them the proper shape that would
                            help the company move forward. Here at WeeWoo, we’ll be listening to your ideas and expecting you to contribute to make the difference we’re all looking for.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-d383541" data-id="d383541" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <section className="elementor-section elementor-inner-section elementor-element elementor-element-27b21f4 elementor-section-full_width elementor-section-height-min-height elementor-section-height-default" data-id="27b21f4" data-element_type="section">
                <div className="elementor-container elementor-column-gap-no">
                  <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-0ecbf7f img-vert-txt" data-id="0ecbf7f" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-background-overlay" />
                      <div className="elementor-element elementor-element-dace03e elementor-widget elementor-widget-heading" data-id="dace03e" data-element_type="widget" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                          <h2 className="elementor-heading-title elementor-size-default">We're A Community</h2>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-8f072eb elementor-widget elementor-widget-text-editor" data-id="8f072eb" data-element_type="widget" data-widget_type="text-editor.default">
                        <div className="elementor-widget-container">
                          <p>
                            We are a team of young people with a lot of energy and will to work together and bring everyone closer. We try to spend quality time outside the workplace where we can bond and create
                            lifelong relationship based on all the joy and pain we share on a daily basis. There is a lot we can learn from each other and we want to encourage this growth together.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-51aa33a" data-id="51aa33a" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <section className="elementor-section elementor-inner-section elementor-element elementor-element-03cd06b elementor-section-full_width elementor-section-height-min-height elementor-section-height-default" data-id="03cd06b" data-element_type="section">
                <div className="elementor-container elementor-column-gap-no">
                  <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-d7b7b10 img-vert-txt" data-id="d7b7b10" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-background-overlay" />
                      <div className="elementor-element elementor-element-c3a87a2 elementor-widget elementor-widget-heading" data-id="c3a87a2" data-element_type="widget" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                          <h2 className="elementor-heading-title elementor-size-default">We stay Hungry</h2>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-01ed422 elementor-widget elementor-widget-text-editor" data-id="01ed422" data-element_type="widget" data-widget_type="text-editor.default">
                        <div className="elementor-widget-container">
                          <p>
                            As other worldwide leading companies have stated, staying hungry is essential specially for young people like us to achieve growth and succes. We like to believe that our warm and kind
                            vibe is contagious and will get to the core of every new member to join our team.
                          </p>
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
      <section className="elementor-section elementor-top-section elementor-element elementor-element-149bb41 elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle" data-id="149bb41" data-element_type="section">
        <div className="elementor-container elementor-column-gap-no">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-bd20c50" data-id="bd20c50" data-element_type="column">
            <div className="elementor-widget-wrap" />
          </div>
        </div>
      </section>
  

  
{/* <div style={{width:"100%"}}>
<Footer />
</div> */}

  
  </>
  );
}
export default AboutUs;
