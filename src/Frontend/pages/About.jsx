import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import phs1 from '../assets/img/shapes/page-header-shape-1.png'
import phs2 from '../assets/img/shapes/page-header-shape-2.png'
import phs3 from '../assets/img/shapes/page-header-shape-3.png'
import abtsh1 from '../assets/img/shapes/about-shape-1.png'
import abtsh2 from '../assets/img/shapes/about-shape-2.png'
import abticon1 from '../assets/img/icon/about-1.png'
import abticon2 from '../assets/img/icon/about-2.png'
import bgimg from '../assets/img/bg-img/page-header-bg.jpg'
import aboutvideo from '../assets/video/IBC-PROFILE_1.webm'
/* import about_bg from '../assets/img/images/aboutus_bg.png' */
import img1 from '../assets/img/images/working_stills/img1.webp'
import img2 from '../assets/img/images/working_stills/img2.webp'
import img3 from '../assets/img/images/working_stills/img3.webp'
import img4 from '../assets/img/images/working_stills/img4.webp'
import img5 from '../assets/img/images/working_stills/img5.webp'
import img6 from '../assets/img/images/working_stills/img6.webp'
import img7 from '../assets/img/images/working_stills/img7.webp'
import img8 from '../assets/img/images/working_stills/img8.webp'
import img9 from '../assets/img/images/working_stills/img9.webp'
import img10 from '../assets/img/images/working_stills/img10.webp'
import img11 from '../assets/img/images/working_stills/img11.webp'
import img12 from '../assets/img/images/working_stills/img12.webp'
import img13 from '../assets/img/images/working_stills/img13.webp'
import img14 from '../assets/img/images/working_stills/img14.webp'
import img15 from '../assets/img/images/working_stills/img15.webp'
import img16 from '../assets/img/images/working_stills/img16.webp'
import img17 from '../assets/img/images/working_stills/img17.webp'
import img18 from '../assets/img/images/working_stills/img18.webp'
import img19 from '../assets/img/images/working_stills/img19.webp'
import img20 from '../assets/img/images/working_stills/img20.webp'
import img21 from '../assets/img/images/working_stills/img21.webp'
import img22 from '../assets/img/images/working_stills/img22.webp'
import img23 from '../assets/img/images/working_stills/img23.webp'
import img24 from '../assets/img/images/working_stills/img24.webp'
import img25 from '../assets/img/images/working_stills/img25.webp'
import img26 from '../assets/img/images/working_stills/img26.webp'
import img27 from '../assets/img/images/working_stills/img27.webp'
import img28 from '../assets/img/images/working_stills/img28.webp'
import img29 from '../assets/img/images/working_stills/img29.webp' 
import img30 from '../assets/img/images/working_stills/img30.webp' 
 
import Slider from 'react-infinite-logo-slider'
import { Seo } from '../Components/Seo';

export default function About() {
  return (
    <>
         <Header/>
         <Seo
        title="Voice Recording Studio in Dubai | Professional &amp; Video Production Studio"
        description="IBC Studio, (Innovative Business Communication) is an Audio-Video Production house as well as designing &amp; multi-media solutions provider, based in Dubai, UAE, IBC Studio, specialized in Video Production, Audio Recording, Web-Design, Corporate Video Presentation, Training Video, Time Lapse Video, Digital still photography and Digital Prints of poster banners and window graphics etc"
        type="article"
        name="@IBCStudioUAE"
        kwords="ivr recording, ivr recording uae, top media production houses in dubai, professional photography, professional photographer, voice over recording, voice Recording, voice over dubai, voice record studio, wedding photography, voice recording, video studio dubai, video production company uae, recording studio, videographer dubai, audio recording, audio recording studio, video production company dubai, digital printing, product photography, video shoot, audio recording studio, Audio recording studios, Audio &amp; video production companies, web developing, web designing, post production dubai, corporate video production dubai, event photographer , event photography, event photography in dubai, nearby recording studios, dubai recording studio, Professional photography, good recording studio, sound record studio, designing, industrial photography, photography studio , products photography, photo studio in dubai, photo studio near me, photograph, dubai photography, uae photography, lifestyle photography, modeling photography, video shooting , timelapse, photography company in dubai, commercial, cheap website design dubai, 4k video, video services, post production, ibcdubai , corpprate video , commercial video production, studios in dubai, , studios in uae, dubbing, ivr recording dubai, telephone hold, telephone hold message, sound record studio"
      />

         
        {/*page-header */} 

        <section className="page-header" data-background={bgimg}>
            <div className="overlay"></div>
            <div className="shapes">
                <div className="shape shape-1"><img src={phs1} alt="shape"/></div>
                <div className="shape shape-2"><img src={phs2} alt="shape"/></div>
                <div className="shape shape-3"><img src={phs3} alt="shape"/></div>
                
            </div>
            <div className="container">
                <div className="page-header-content text-center">
                    <h1 className="title">About Our Company</h1>
                    <h4 className="sub-title"><a className="home" href="/home">Home </a><span></span><a className="inner-page" href="about.html"> About Us</a></h4>
                </div>
            </div>
        </section>
       {/*page-header */} 


       <section className="about-section-2 pt-20 pb-0">
            <div className="container">
                <div className="row about-wrap-2 gy-lg-0 gy-4 align-items-center">
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <div className="about-img-box">
                            <div className="shapes">
                                
                                <video className="videoTag" autoPlay loop controls    style={{zIndex:999,marginTop:90,maxWidth:'100%'}} controlsList='nodownload' oncontextmenu='return false;'>
            <source src={aboutvideo} type='video/mp4'  />
            </video>
            <img className="shape shape-1" src={abtsh1} alt="about"/>
             <img className="shape shape-2" src={abtsh2} alt="about" style={{zIndex:-1}}/>
            
                            </div>
                           
                            
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12">
                        <div className="about-content-2">
                            <div className="section-heading">
 
                                <h2  data-text-animation="fade-in" data-duration="1.5">From The Founder’s Desk</h2>
                                <p  >Dear our valued clients, I am K Banerjee, the founder of IBC studio take the immense pleasure to thank you for your trust and reliance on our capability. When I started my career 30 years ago in Mumbai, India, as director & Cinematographer of several short films, TV Serials, TV Commercials and I had a dream to establish a media
                                     production company to operate on a global level and here I am for the last 15 years have been working for client across the U.A.E & Middle East.</p>
                            </div>
                            <div className="about-items">
                                <div className="about-item">
                                    <div className="icon"><img src={abticon1} alt="icon"/></div>
                                    <div className="content"><h4 className="title">Professional Creative <br/>Team Members</h4></div>
                                </div>
                                <div className="about-item">
                                    <div className="icon"><img src={abticon2} alt="icon"/></div>
                                    <div className="content"><h4 className="title">Provide Market Standard <br/>/Service to Client's</h4></div>
                                </div>
                            </div>
                            <a href="/home" className="rr-primary-btn">Get Started Now <i className="fa-sharp fa-regular fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* about-section */}

        <section className="process-section-2 fade-wrapper pt-30 pb-50">
            <div className="container">
                <div className="section-heading text-center">
                     
                    <h2  data-text-animation="fade-in" data-duration="1.5">About IBC Studio</h2>
                   
                </div>
                <div>

               
                <div className="row gy-lg-0 gy-4"  data-text-animation="fade-in" data-duration="1.5">
                    <p>Are you looking for an Organization, Production House or Studio that can offer you a comprehensive solution?</p>

<p>Well, then IBC studio should be the first choice because we can literally do everything for you as far as your brand communication is concerned under one roof.
IBC studio is the reputed media production company in UAE serving thousands of clients for the last 15 years. We offer a wide range of services that include video 
production, both pre and post production for Corporate Video, TVC to Time Lapse Video; audio recording for radio spot, IVR & Telephone Hold Message, voice over
 recording service in multiple languages; info-graphics and Multi-Media Presentation, a host of other visual art services to improve our clients' brand communication strategy.</p>

<p>Apart from that, we do Commercial Photography for Product, Models, Industrial and Event & Exhibition coverage.
Our Designing & Developing division serving Website & Software development for various eminent clients & Driving Schools for their on-line tutorial etc. We have mastered the art of telling compelling brand stories. The best bet? All these services are the cost-friendly solution because we believe there should be a distinct line between the service quality and the cost.
And it takes a professional approach.</p>

<p>So, call us today to find out our services and increase your brand equity through superlative brand communication presentations.</p>
                </div> 
                </div>
            </div>
        </section>

        {/* <div className="about-text">
                    <img src={about_bg} alt="about"/>
                </div> */}

                <Slider
            width="450px"
            duration={80}
            pauseOnHover={true}
            blurBorders={false}
            blurBoderColor={'#fff'}
        >
            <Slider.Slide>
                <img src={img1} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={img2} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={img3} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={img4} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={img5} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={img6} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={img7} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={img8} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={img9} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={img10} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={img11} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={img12} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={img13} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={img14} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={img15} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={img16} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={img17} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={img18} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={img19} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={img20} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={img21} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={img22} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={img23} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={img24} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={img25} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={img26} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={img27} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={img28} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={img29} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={img30} alt="Client" className='w-36' />
            </Slider.Slide>
            
        </Slider>



        <section className="process-section-2 fade-wrapper pt-50 pb-20">
            <div className="container">
                <div className="section-heading text-center">
                     
                    <h2  data-text-animation="fade-in" data-duration="1.5">Who We Are?</h2>
                   
                </div>
                <div className="row gy-lg-0 gy-4"  data-text-animation="fade-in" data-duration="2">
                    <p>When you think to improve your brand communication efforts, think IBC studio, we are one of the trusted name in the business community known for our creativity that is beyond abstraction, exceptional technical ability and immense understanding of visual art.</p>

<p> Be it a corporate house, a broadcaster like TV channels, teleshopping network, government bodies, SMEs, Entrepreneurs or a global brand, we understand everyone's motivation, inspirations, and objective.</p>

<p> We clearly understand that only ideas will not go too far without the adequate technical support and infrastructure. Hence, our studio finds itself decorated with latest cameras like 4K and HD video to shoot high-resolution videos.</p>

<p> The editing room is equipped with FCP, Smoke and AVID, our state of the art acoustic control digital recording studio is designed to record flawless audio. Be it for the radio Spots or telephone Message, IVR Recording, as well as Voice Over, Audio Book & Narration Recording for every business purpose.
</p>

<p> In short, We are a company that promotes creativity, deploys the latest technology and houses exceptional talent. Truly, a hub spot for all your brand communication and audio-visual needs and requirements. Yes, both internal and external brand communication.</p>
              
<p> We are providing solutions as per Client's requirements and budget. A complete In-House set up for Video Production, Professional Audio Recording, Photography & Designing Suite. The quality will be always matchless because our business is our passion.
</p>         
              
                </div>
            </div>
        </section>
       {/*  <section className="counter-section counter-2">
            <div className="container">
                <div className="row gy-lg-0 gy-4">
                    <div className="col-lg-3 col-md-6">
                        <div className="counter-item">
                            <h3 className="title"><span className="odometer" data-count="30">0</span></h3>
                            <p>Years of <br/>Experience</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="counter-item">
                            <h3 className="title"><span className="odometer" data-count="300">0</span><sup>+</sup></h3>
                            <p>Video <br/> Projects</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="counter-item">
                            <h3 className="title"><span className="odometer" data-count="3">0</span>K<sup>+</sup></h3>
                            <p>Audio <br/> Projects</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="counter-item">
                            <h3 className="title"><span className="odometer" data-count="3">0</span>k<sub>...</sub></h3>
                            <p>Satisfied<br/>Clients Globally</p>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
        <section className="grow-section pb-130 fade-wrapper">
       <div className='container'>
        <div className="grow-top heading-space">
                    <div className="section-heading mb-0">
                        <h4 className="sub-heading after-none" data-text-animation="fade-in" data-duration="1.5">Company Growth</h4>
                          </div>
                    <a href="/contact" className="rr-primary-btn">Get a Quote</a>
                </div>    
     
        <div className="row gy-lg-0 gy-4 justify-content-center">
                    <div className="col-lg-3 col-md-6">
                        <div className="grow-item fade-top">
                            <div className="grow-icon">
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M32.4029 29.5498L25.3866 33.6363C25.1183 33.7926 24.8463 33.9129 24.5659 33.9981C24.6522 33.8252 24.7229 33.638 24.7767 33.4375C25.1495 32.0458 24.324 30.5933 22.8974 30.1309C22.8663 30.1208 22.8346 30.1128 22.8024 30.107C20.7947 29.7449 18.8092 29.0271 17.2137 28.4504C16.6571 28.2492 16.1314 28.0591 15.6835 27.9139C13.8485 27.3186 12.1996 28.0499 10.8281 28.8438L5.69848 31.8136L5.25773 31.0349C4.77996 30.1909 3.70458 29.8929 2.86074 30.3705L0.89225 31.4846C0.0482226 31.9622 -0.249904 33.0374 0.227861 33.8815L6.01538 44.1076C6.24628 44.5154 6.62307 44.8093 7.07661 44.935C7.23348 44.9785 7.39261 45 7.55093 45C7.85023 45 8.14564 44.923 8.41237 44.772L10.381 43.6578C11.225 43.1801 11.523 42.1048 11.0453 41.261L10.499 40.2958L11.5632 39.6814L20.5082 42.078C21.0131 42.2134 21.5154 42.2805 22.0095 42.2805C23.0091 42.2805 23.9748 42.0053 24.8576 41.4618L37.5903 33.6217C38.7965 32.879 39.1811 31.0109 38.3973 29.7022C38.0177 29.0685 36.4635 27.185 32.4029 29.5498ZM9.66594 42.3946L7.69736 43.5088C7.55265 43.5907 7.36076 43.5377 7.27866 43.3927L1.49122 33.1667C1.40921 33.0217 1.46228 32.83 1.60717 32.748L3.57575 31.6339C3.62211 31.6077 3.67319 31.5953 3.724 31.5953C3.83205 31.5953 3.93866 31.6514 3.99445 31.75L9.78198 41.9761C9.86399 42.1208 9.81092 42.3126 9.66594 42.3946ZM36.8292 32.3857L24.0966 40.2258C23.1119 40.8319 22.0308 40.9834 20.884 40.6759L11.6486 38.2013C11.4627 38.1515 11.2645 38.1775 11.0979 38.2738L9.78406 39.0322L6.41367 33.077L11.5558 30.0999C12.7053 29.4344 13.947 28.8764 15.2358 29.2945C15.661 29.4323 16.1519 29.6099 16.7204 29.8153C18.3533 30.4057 20.3824 31.1392 22.4916 31.5258C23.1685 31.7661 23.5469 32.419 23.3746 33.0617C23.1477 33.9084 22.4358 34.0134 21.8679 33.949C20.8406 33.7375 19.8624 33.4583 18.8274 33.1628C18.3341 33.0219 17.8241 32.8763 17.2996 32.7357C16.9124 32.6321 16.5144 32.8618 16.4106 33.2489C16.3068 33.636 16.5367 34.034 16.9239 34.1378C17.4369 34.2753 17.9412 34.4193 18.4287 34.5585C19.5016 34.8649 20.5149 35.1543 21.608 35.3778C21.6127 35.3788 21.6173 35.379 21.622 35.3799C21.627 35.3808 21.6318 35.3823 21.6368 35.3831L22.5095 35.5249C23.8394 35.7376 25.0192 35.5301 26.1173 34.8906L33.1335 30.8041C35.098 29.66 36.6002 29.5268 37.1519 30.448C37.5288 31.0774 37.366 32.0552 36.8292 32.3857ZM4.09607 33.519C4.15223 33.9031 3.8864 34.2599 3.50226 34.3161C3.11822 34.3723 2.7613 34.1064 2.70514 33.7223C2.64898 33.3383 2.91481 32.9814 3.29895 32.9252C3.68308 32.869 4.03991 33.135 4.09607 33.519ZM20.084 9.78582C19.3824 9.78582 18.7656 10.2338 18.5488 10.9013C18.3315 11.5698 18.5682 12.2959 19.1377 12.7081L21.901 14.7076C21.9639 14.7532 21.9845 14.8163 21.9603 14.8902L20.8999 18.1322C20.6815 18.8004 20.9169 19.5269 21.4855 19.9399C21.7695 20.1462 22.102 20.2493 22.4344 20.2493C22.7679 20.2493 23.1014 20.1455 23.3858 19.9381L26.1415 17.9279C26.2043 17.8821 26.2707 17.8823 26.3333 17.9279L29.0889 19.9381C29.6569 20.3524 30.4207 20.353 30.9893 19.9398C31.5579 19.5266 31.7931 18.8001 31.5747 18.132L30.5144 14.8902C30.4903 14.8163 30.5108 14.7533 30.5736 14.7077L33.337 12.7081C33.9066 12.2961 34.1433 11.5699 33.926 10.9014C33.709 10.2338 33.0924 9.78591 32.3907 9.78591C32.3896 9.78591 32.3886 9.78591 32.3875 9.78591L28.9765 9.79244C28.9765 9.79244 28.9762 9.79244 28.976 9.79244C28.8986 9.79244 28.8452 9.75352 28.8214 9.67967L27.7735 6.43373C27.5575 5.76473 26.9401 5.31528 26.237 5.31528C25.5342 5.31537 24.9168 5.76482 24.7007 6.43373L23.653 9.67967C23.6291 9.75343 23.5756 9.79244 23.4982 9.79244C23.498 9.79244 23.4977 9.79244 23.4977 9.79244L20.0868 9.78591C20.0862 9.78582 20.0851 9.78582 20.084 9.78582ZM23.4985 11.244C24.2016 11.244 24.8187 10.7949 25.0349 10.1257L26.0827 6.87973C26.1065 6.80597 26.1602 6.76687 26.2376 6.76687C26.315 6.76687 26.3686 6.80579 26.3924 6.87955L27.4403 10.1255C27.6562 10.7949 28.2734 11.2441 28.9766 11.2441H28.9798L32.3908 11.2376H32.3912C32.4685 11.2376 32.5219 11.2765 32.5458 11.3501C32.5698 11.4238 32.5493 11.4867 32.4865 11.5322L29.7233 13.5317C29.1524 13.9446 28.9162 14.6719 29.1352 15.3415L30.1954 18.5832C30.2196 18.657 30.1991 18.72 30.1365 18.7656C30.0739 18.8112 30.0075 18.8109 29.9449 18.7654L27.1893 16.7553C26.6203 16.3402 25.8556 16.3402 25.2864 16.7553L22.5307 18.7655C22.4681 18.8112 22.4017 18.8111 22.339 18.7656C22.2764 18.72 22.2559 18.657 22.2801 18.5834L23.3404 15.3415C23.5593 14.6722 23.3232 13.9449 22.7525 13.5318L19.9891 11.5322C19.9264 11.4868 19.9058 11.4238 19.9298 11.3499C19.9538 11.2763 20.0072 11.2375 20.0844 11.2375H20.0849L23.4958 11.244H23.4985ZM25.5117 3.3833V0.725796C25.5117 0.324975 25.8366 0 26.2375 0C26.6383 0 26.9633 0.324975 26.9633 0.725796V3.3833C26.9633 3.78412 26.6383 4.1091 26.2375 4.1091C25.8366 4.1091 25.5117 3.78421 25.5117 3.3833ZM32.3711 6.64965C32.0877 6.36623 32.0877 5.90671 32.3711 5.62329L34.2503 3.74411C34.534 3.46069 34.9935 3.46078 35.2768 3.74411C35.5602 4.02753 35.5602 4.48705 35.2768 4.77048L33.3976 6.64965C33.2559 6.79137 33.0701 6.86222 32.8843 6.86222C32.6985 6.86231 32.5128 6.79137 32.3711 6.64965ZM17.1983 4.77057C16.9149 4.48714 16.9149 4.02762 17.1983 3.7442C17.4817 3.46087 17.9412 3.46069 18.2248 3.7442L20.104 5.62338C20.3874 5.9068 20.3874 6.36632 20.104 6.64974C19.9623 6.79146 19.7766 6.86231 19.5908 6.86231C19.405 6.86231 19.2192 6.79146 19.0775 6.64974L17.1983 4.77057ZM44.9302 17.523C44.7404 16.9385 44.2005 16.5462 43.5862 16.5462C43.5852 16.5462 43.5842 16.5462 43.5833 16.5462L40.9713 16.5512L40.169 14.0657C39.98 13.4799 39.4394 13.0865 38.8238 13.0865C38.2083 13.0866 37.6679 13.48 37.4788 14.0657L36.6764 16.5512L34.0646 16.5462C34.0635 16.5462 34.0627 16.5462 34.0617 16.5462C33.4475 16.5462 32.9076 16.9384 32.7176 17.523C32.5274 18.1083 32.7346 18.744 33.2333 19.1048L35.3493 20.6359L34.5375 23.1183C34.3461 23.7033 34.5521 24.3395 35.05 24.7012C35.2986 24.8818 35.5897 24.9721 35.8809 24.9721C36.1729 24.9721 36.465 24.8813 36.7139 24.6997L38.824 23.1604L40.9342 24.6997C41.4315 25.0625 42.1002 25.0629 42.5981 24.7012C43.0958 24.3395 43.3018 23.7034 43.1106 23.1184L42.2987 20.636L44.4147 19.1049C44.9132 18.744 45.1204 18.1082 44.9302 17.523ZM41.4251 19.4762C40.9252 19.8377 40.7184 20.4745 40.9102 21.0607L41.694 23.4573L39.6569 21.9713C39.1586 21.6078 38.4891 21.6079 37.9909 21.9713L35.9538 23.4573L36.7376 21.0606C36.9292 20.4745 36.7223 19.8377 36.2227 19.4763L34.1798 17.9981L36.7014 18.0029H36.7041C37.3196 18.0029 37.86 17.6097 38.0492 17.0237L38.8238 14.6242L39.5984 17.0238C39.7876 17.6098 40.3279 18.003 40.9435 18.003H40.9462L43.4678 17.9982L41.4251 19.4762ZM8.01563 19.1048L10.1316 20.6359L9.31982 23.1183C9.12848 23.7033 9.33442 24.3395 9.83233 24.7012C10.081 24.8819 10.3722 24.9722 10.6632 24.9722C10.9553 24.9722 11.2472 24.8814 11.4962 24.6997L13.6064 23.1604L15.7166 24.6997C16.2137 25.0625 16.8825 25.0629 17.3804 24.7012C17.8781 24.3395 18.0842 23.7034 17.8929 23.1184L17.0811 20.636L19.197 19.1049C19.6956 18.744 19.9029 18.1084 19.7128 17.5229C19.5227 16.9385 18.9828 16.5463 18.3688 16.5463C18.3678 16.5463 18.3668 16.5463 18.3658 16.5463L15.7539 16.5513L14.9516 14.0657C14.7625 13.48 14.2219 13.0866 13.6064 13.0866C12.9909 13.0866 12.4504 13.4801 12.2613 14.0657L11.459 16.5513L8.84722 16.5463C8.84614 16.5463 8.84532 16.5463 8.84432 16.5463C8.2301 16.5463 7.6901 16.9385 7.50012 17.5231C7.30978 18.1083 7.51709 18.744 8.01563 19.1048ZM11.4838 18.0029H11.4865C12.1023 18.0029 12.6427 17.6096 12.8317 17.0237L13.6063 14.6242L14.3808 17.0238C14.5701 17.6098 15.1103 18.003 15.7259 18.003H15.7286L18.2502 17.9982L16.2073 19.4764C15.7076 19.8379 15.5007 20.4747 15.6925 21.0608L16.4763 23.4574L14.4392 21.9714C14.1901 21.7897 13.8981 21.6988 13.6062 21.6988C13.3142 21.6988 13.0223 21.7897 12.7731 21.9714L10.7361 23.4574L11.5198 21.0608C11.7115 20.4747 11.5046 19.8379 11.005 19.4765L8.96208 17.9983L11.4838 18.0029Z" fill="currentColor"/>
                                </svg>
                            </div>
                            <div className="grow-content">
                                <div className="top-content">
                                    <h2 className="title"><span className="odometer" data-count="30">30</span>+</h2>
                                    <br/><p>Years Of Experience</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="grow-item fade-top">
                            <div className="grow-icon">
                            <svg width="35" height="45" viewBox="0 0 35 45" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M34.8136 40.5454L29.7921 27.1821C30.2882 26.8819 30.7195 26.4835 31.06 26.0107C31.4259 25.5017 31.6763 24.9174 31.7935 24.2992C31.9106 23.6811 31.8916 23.0444 31.7378 22.4346C31.6077 21.9013 31.6296 21.3417 31.8008 20.8205C31.972 20.2993 32.2856 19.8378 32.7052 19.4896C33.1909 19.0866 33.582 18.5794 33.8504 18.0047C34.1187 17.43 34.2575 16.8021 34.2567 16.1664C34.2559 15.5308 34.1156 14.9032 33.8458 14.3292C33.5761 13.7552 33.1837 13.249 32.697 12.8472C32.2789 12.4976 31.9672 12.0353 31.7978 11.5138C31.6285 10.9923 31.6085 10.433 31.7401 9.90047C31.8926 9.29168 31.9108 8.65633 31.7934 8.03961C31.6759 7.42289 31.4256 6.83995 31.0603 6.33222C30.6857 5.81068 30.2022 5.37916 29.644 5.06839C29.0859 4.75761 28.4669 4.57524 27.8311 4.53425C27.2842 4.49699 26.7583 4.30646 26.3123 3.98396C25.8662 3.66146 25.5176 3.21972 25.3054 2.70814C25.0679 2.12251 24.707 1.59638 24.2478 1.16646C23.7887 0.736551 23.2424 0.413206 22.6471 0.218989C22.0433 0.0191557 21.4037 -0.0449869 20.7729 0.0310328C20.1421 0.107052 19.5352 0.321405 18.9946 0.659149C18.5233 0.950633 17.9816 1.10486 17.4292 1.10486C16.8769 1.10486 16.3352 0.950633 15.8638 0.659149C15.3233 0.321392 14.7164 0.107031 14.0856 0.0310113C13.4548 -0.0450086 12.8151 0.0191414 12.2113 0.218989C11.6162 0.413365 11.0702 0.73677 10.6112 1.16666C10.1523 1.59655 9.7915 2.12258 9.55402 2.70807C9.3412 3.22061 8.99154 3.663 8.54423 3.98566C8.09692 4.30831 7.56965 4.49847 7.02155 4.53481C6.3869 4.57644 5.76911 4.75914 5.21215 5.0699C4.65519 5.38067 4.17273 5.81185 3.79912 6.33278C3.43326 6.84173 3.18284 7.4261 3.06569 8.04424C2.94854 8.66238 2.96756 9.29906 3.12139 9.90891C3.2514 10.4422 3.22954 11.0018 3.05833 11.523C2.88712 12.0442 2.57357 12.5057 2.15397 12.854C1.66827 13.2569 1.27711 13.7641 1.00879 14.3388C0.740459 14.9135 0.60167 15.5414 0.602454 16.1771C0.603239 16.8127 0.743577 17.4403 1.01332 18.0143C1.28307 18.5883 1.67547 19.0945 2.16217 19.4962C2.5802 19.8459 2.89192 20.3081 3.06126 20.8296C3.2306 21.351 3.25065 21.9103 3.1191 22.4428C2.96651 23.0516 2.94831 23.6869 3.06579 24.3036C3.18328 24.9204 3.43356 25.5033 3.79884 26.011C4.1395 26.4835 4.57079 26.8817 5.06692 27.1817L0.0455382 40.5454C-0.00178204 40.671 -0.0124945 40.8078 0.0146715 40.9394C0.0418376 41.071 0.105742 41.192 0.1988 41.2879C0.291858 41.3839 0.410163 41.4508 0.539673 41.4808C0.669184 41.5107 0.804463 41.5024 0.929454 41.4569L6.39877 39.467L9.1782 44.633C9.23784 44.744 9.32597 44.8367 9.4333 44.9013C9.54063 44.9659 9.66319 45 9.78806 45C9.80369 45 9.81925 44.9993 9.83488 44.9983C9.96744 44.9892 10.0946 44.9419 10.2014 44.8619C10.3082 44.7819 10.3901 44.6725 10.4373 44.5468L15.1386 32.0423C15.391 31.9457 15.634 31.8257 15.8645 31.6838C16.3358 31.3924 16.8774 31.2383 17.4296 31.2383C17.9818 31.2383 18.5233 31.3924 18.9946 31.6838L18.9953 31.6841C19.2253 31.8242 19.4674 31.9425 19.7188 32.0375L24.4218 44.5462C24.4691 44.6719 24.551 44.7812 24.6577 44.8612C24.7645 44.9413 24.8917 44.9886 25.0243 44.9977C25.0399 44.9987 25.0555 44.9994 25.0711 44.9994C25.196 44.9994 25.3185 44.9653 25.4259 44.9007C25.5332 44.8361 25.6213 44.7434 25.681 44.6323L28.4604 39.4664L33.9297 41.4562C34.0547 41.5018 34.19 41.5101 34.3195 41.4801C34.449 41.4502 34.5673 41.3833 34.6604 41.2873C34.7534 41.1913 34.8173 41.0704 34.8445 40.9388C34.8717 40.8071 34.8609 40.671 34.8136 40.5454ZM9.67614 42.618L7.3343 38.2656C7.25496 38.1184 7.12626 38.0046 6.9714 37.945C6.81654 37.8853 6.6457 37.8836 6.4897 37.9401L1.88061 39.6167L6.35722 27.7041C6.57793 27.7564 6.80228 27.7915 7.02829 27.809C7.57522 27.8463 8.10112 28.0368 8.54717 28.3593C8.99322 28.6818 9.34184 29.1235 9.55402 29.6351C9.79154 30.2207 10.1524 30.7468 10.6115 31.1767C11.0706 31.6066 11.6168 31.9299 12.212 32.1242C12.6413 32.2645 13.0894 32.337 13.5405 32.3392L9.67614 42.618ZM15.1339 30.4874C14.7651 30.7179 14.3511 30.8641 13.9207 30.9159C13.4903 30.9676 13.054 30.9237 12.6421 30.7871C12.2388 30.6558 11.8687 30.4371 11.5575 30.1462C11.2463 29.8553 11.0015 29.4992 10.8402 29.1027C10.5282 28.3474 10.0144 27.695 9.35659 27.2186C8.69876 26.7422 7.92285 26.4607 7.11582 26.4056C6.68431 26.3775 6.26421 26.2537 5.88536 26.0427C5.50652 25.8317 5.17825 25.5389 4.92388 25.185C4.67784 24.8428 4.50947 24.4498 4.43079 24.0341C4.35211 23.6184 4.36507 23.1903 4.46873 22.7803C4.6624 21.9888 4.6309 21.158 4.37784 20.3838C4.12479 19.6096 3.66051 18.9237 3.03865 18.4053C2.71081 18.1343 2.44675 17.7927 2.26568 17.4054C2.0846 17.0181 1.99105 16.5949 1.99183 16.1664C1.99261 15.738 2.08769 15.3151 2.27018 14.9285C2.45266 14.5419 2.71796 14.2013 3.04678 13.9314C3.66713 13.4118 4.12964 12.7251 4.3809 11.9508C4.63216 11.1764 4.66193 10.3459 4.46678 9.55516C4.36432 9.14615 4.35217 8.71931 4.4312 8.30501C4.51023 7.89071 4.67849 7.49912 4.92402 7.15812C5.17937 6.80343 5.50888 6.51011 5.88905 6.29908C6.26922 6.08804 6.69071 5.96448 7.12346 5.9372C7.92922 5.88103 8.70363 5.59903 9.36007 5.12276C10.0165 4.64649 10.529 3.99473 10.8404 3.24041C11.0015 2.84388 11.2462 2.48775 11.5574 2.19688C11.8687 1.90601 12.2389 1.68743 12.6422 1.55641C13.0542 1.41992 13.4907 1.37603 13.9211 1.42778C14.3516 1.47954 14.7658 1.62571 15.1347 1.85609C15.8259 2.28332 16.6201 2.50937 17.4301 2.50937C18.24 2.50937 19.0342 2.28332 19.7254 1.85609C20.0943 1.62576 20.5083 1.47963 20.9386 1.42787C21.369 1.37612 21.8053 1.41998 22.2172 1.55641C22.6205 1.68766 22.9906 1.90636 23.3018 2.19727C23.613 2.48817 23.8578 2.84428 24.0191 3.24077C24.3311 3.99608 24.8449 4.6485 25.5027 5.12488C26.1605 5.60127 26.9364 5.88279 27.7435 5.93791C28.175 5.96593 28.5951 6.08983 28.9739 6.30078C29.3528 6.51174 29.681 6.80457 29.9354 7.15847C30.1815 7.50068 30.3498 7.89365 30.4285 8.30933C30.5072 8.72502 30.4942 9.15315 30.3906 9.56318C30.1969 10.3547 30.2284 11.1855 30.4815 11.9597C30.7345 12.7338 31.1988 13.4197 31.8206 13.9381C32.1485 14.2092 32.4125 14.5508 32.5936 14.938C32.7747 15.3253 32.8682 15.7486 32.8675 16.177C32.8667 16.6055 32.7716 17.0284 32.5891 17.415C32.4066 17.8016 32.1413 18.1422 31.8125 18.412C31.1922 18.9316 30.7297 19.6183 30.4784 20.3926C30.2271 21.1669 30.1973 21.9974 30.3924 22.7881C30.4949 23.1971 30.507 23.6239 30.428 24.0382C30.3489 24.4526 30.1807 24.8441 29.9351 25.1851C29.6798 25.5398 29.3503 25.8332 28.9701 26.0442C28.5899 26.2552 28.1685 26.3788 27.7357 26.4061C26.9299 26.4622 26.1555 26.7442 25.4991 27.2205C24.8427 27.6968 24.3301 28.3485 24.0188 29.1028C23.8577 29.4994 23.6129 29.8555 23.3017 30.1464C22.9905 30.4372 22.6203 30.6558 22.2169 30.7868C21.805 30.9237 21.3685 30.9679 20.9379 30.9161C20.5074 30.8643 20.0932 30.7179 19.7245 30.4872C19.0332 30.06 18.239 29.834 17.4291 29.834C16.6192 29.8341 15.825 30.0601 15.1339 30.4874ZM28.3695 37.9399C28.2135 37.8832 28.0426 37.8849 27.8877 37.9446C27.7328 38.0043 27.6041 38.118 27.5249 38.2653L25.183 42.6177L21.3192 32.3408C21.7702 32.3382 22.2181 32.2652 22.6471 32.1246C23.2425 31.9303 23.7888 31.6068 24.2479 31.1769C24.7071 30.7469 25.0681 30.2208 25.3058 29.6351C25.5184 29.1225 25.8679 28.6801 26.3151 28.3574C26.7623 28.0347 27.2896 27.8446 27.8376 27.8084C28.0614 27.791 28.2836 27.7563 28.5022 27.7045L32.9785 39.6165L28.3695 37.9399Z" fill="currentColor"/>
                                    <path d="M27.8498 16.1716C27.8498 14.0856 27.2387 12.0465 26.0937 10.312C24.9487 8.57761 23.3213 7.22578 21.4172 6.4275C19.5132 5.62923 17.418 5.42036 15.3967 5.82732C13.3754 6.23427 11.5186 7.23878 10.0613 8.7138C8.60405 10.1888 7.61161 12.0681 7.20955 14.114C6.80748 16.1599 7.01383 18.2806 7.80252 20.2078C8.5912 22.135 9.92679 23.7822 11.6404 24.9411C13.354 26.1 15.3686 26.7186 17.4296 26.7186C20.1923 26.7155 22.8409 25.6033 24.7944 23.626C26.7479 21.6488 27.8468 18.9679 27.8498 16.1716ZM17.4296 25.3123C15.6434 25.3123 13.8974 24.7762 12.4123 23.7718C10.9272 22.7675 9.76965 21.3399 9.08613 19.6696C8.4026 17.9994 8.22376 16.1615 8.57222 14.3884C8.92068 12.6152 9.78078 10.9865 11.0438 9.70817C12.3068 8.42982 13.9159 7.55925 15.6677 7.20656C17.4196 6.85386 19.2354 7.03488 20.8855 7.72672C22.5357 8.41856 23.9462 9.59014 24.9385 11.0933C25.9308 12.5965 26.4605 14.3638 26.4605 16.1716C26.4578 18.5951 25.5054 20.9184 23.8124 22.6321C22.1194 24.3457 19.8239 25.3096 17.4296 25.3123Z" fill="currentColor"/>
                                    <path d="M22.9545 13.8401L19.5672 13.3419L18.0524 10.2355C17.9884 10.1259 17.8974 10.035 17.7882 9.97186C17.679 9.90873 17.5554 9.87553 17.4296 9.87553C17.3038 9.87553 17.1802 9.90873 17.071 9.97186C16.9618 10.035 16.8707 10.1259 16.8068 10.2355L15.292 13.3419L11.9047 13.8401C11.7763 13.8589 11.6558 13.9137 11.5566 13.9982C11.4574 14.0828 11.3836 14.1938 11.3435 14.3186C11.3034 14.4434 11.2986 14.5771 11.3297 14.7045C11.3608 14.832 11.4265 14.9481 11.5193 15.0397L13.9711 17.4577L13.3924 20.8721C13.3706 21.0014 13.3849 21.1342 13.4337 21.2556C13.4825 21.377 13.5639 21.4822 13.6687 21.5593C13.7734 21.6364 13.8974 21.6823 14.0266 21.6919C14.1558 21.7014 14.285 21.6742 14.3997 21.6134L17.4296 20.0014L20.4593 21.6134C20.574 21.6742 20.7033 21.7014 20.8324 21.6919C20.9616 21.6823 21.0856 21.6364 21.1903 21.5593C21.2951 21.4822 21.3765 21.377 21.4253 21.2556C21.4741 21.1342 21.4884 21.0014 21.4666 20.8721L20.8879 17.4577L23.3397 15.0397C23.4326 14.9481 23.4983 14.832 23.5293 14.7045C23.5604 14.5771 23.5557 14.4434 23.5156 14.3186C23.4755 14.1938 23.4016 14.0828 23.3024 13.9982C23.2033 13.9137 23.0828 13.8589 22.9545 13.8401ZM19.6568 16.7089C19.5762 16.7885 19.516 16.8868 19.4813 16.9952C19.4465 17.1036 19.4383 17.219 19.4573 17.3313L19.8596 19.7058L17.7525 18.5848C17.6529 18.5318 17.542 18.504 17.4294 18.504C17.3169 18.504 17.206 18.5318 17.1064 18.5848L14.9996 19.7055L15.4019 17.331C15.4209 17.2187 15.4127 17.1033 15.3779 16.9949C15.3431 16.8865 15.2829 16.7883 15.2024 16.7086L13.4977 15.027L15.8531 14.6806C15.9646 14.6642 16.0705 14.6206 16.1616 14.5535C16.2528 14.4865 16.3264 14.398 16.3762 14.2957L17.4296 12.1357L18.4831 14.2958C18.5329 14.3981 18.6065 14.4866 18.6977 14.5537C18.7888 14.6207 18.8947 14.6643 19.0062 14.6807L21.3616 15.0271L19.6568 16.7089Z" fill="currentColor"/>
                                </svg>
                               
                            </div>
                            <div className="grow-content">
                                <div className="top-content">
                                    <h2 className="title"><span className="odometer" data-count="300">300</span>+</h2><br/>
                                    <p>Video Projects</p>
                                </div>
                                 
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="grow-item fade-top">
                            <div className="grow-icon">
                            <svg width="35" height="45" viewBox="0 0 35 45" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M34.8136 40.5454L29.7921 27.1821C30.2882 26.8819 30.7195 26.4835 31.06 26.0107C31.4259 25.5017 31.6763 24.9174 31.7935 24.2992C31.9106 23.6811 31.8916 23.0444 31.7378 22.4346C31.6077 21.9013 31.6296 21.3417 31.8008 20.8205C31.972 20.2993 32.2856 19.8378 32.7052 19.4896C33.1909 19.0866 33.582 18.5794 33.8504 18.0047C34.1187 17.43 34.2575 16.8021 34.2567 16.1664C34.2559 15.5308 34.1156 14.9032 33.8458 14.3292C33.5761 13.7552 33.1837 13.249 32.697 12.8472C32.2789 12.4976 31.9672 12.0353 31.7978 11.5138C31.6285 10.9923 31.6085 10.433 31.7401 9.90047C31.8926 9.29168 31.9108 8.65633 31.7934 8.03961C31.6759 7.42289 31.4256 6.83995 31.0603 6.33222C30.6857 5.81068 30.2022 5.37916 29.644 5.06839C29.0859 4.75761 28.4669 4.57524 27.8311 4.53425C27.2842 4.49699 26.7583 4.30646 26.3123 3.98396C25.8662 3.66146 25.5176 3.21972 25.3054 2.70814C25.0679 2.12251 24.707 1.59638 24.2478 1.16646C23.7887 0.736551 23.2424 0.413206 22.6471 0.218989C22.0433 0.0191557 21.4037 -0.0449869 20.7729 0.0310328C20.1421 0.107052 19.5352 0.321405 18.9946 0.659149C18.5233 0.950633 17.9816 1.10486 17.4292 1.10486C16.8769 1.10486 16.3352 0.950633 15.8638 0.659149C15.3233 0.321392 14.7164 0.107031 14.0856 0.0310113C13.4548 -0.0450086 12.8151 0.0191414 12.2113 0.218989C11.6162 0.413365 11.0702 0.73677 10.6112 1.16666C10.1523 1.59655 9.7915 2.12258 9.55402 2.70807C9.3412 3.22061 8.99154 3.663 8.54423 3.98566C8.09692 4.30831 7.56965 4.49847 7.02155 4.53481C6.3869 4.57644 5.76911 4.75914 5.21215 5.0699C4.65519 5.38067 4.17273 5.81185 3.79912 6.33278C3.43326 6.84173 3.18284 7.4261 3.06569 8.04424C2.94854 8.66238 2.96756 9.29906 3.12139 9.90891C3.2514 10.4422 3.22954 11.0018 3.05833 11.523C2.88712 12.0442 2.57357 12.5057 2.15397 12.854C1.66827 13.2569 1.27711 13.7641 1.00879 14.3388C0.740459 14.9135 0.60167 15.5414 0.602454 16.1771C0.603239 16.8127 0.743577 17.4403 1.01332 18.0143C1.28307 18.5883 1.67547 19.0945 2.16217 19.4962C2.5802 19.8459 2.89192 20.3081 3.06126 20.8296C3.2306 21.351 3.25065 21.9103 3.1191 22.4428C2.96651 23.0516 2.94831 23.6869 3.06579 24.3036C3.18328 24.9204 3.43356 25.5033 3.79884 26.011C4.1395 26.4835 4.57079 26.8817 5.06692 27.1817L0.0455382 40.5454C-0.00178204 40.671 -0.0124945 40.8078 0.0146715 40.9394C0.0418376 41.071 0.105742 41.192 0.1988 41.2879C0.291858 41.3839 0.410163 41.4508 0.539673 41.4808C0.669184 41.5107 0.804463 41.5024 0.929454 41.4569L6.39877 39.467L9.1782 44.633C9.23784 44.744 9.32597 44.8367 9.4333 44.9013C9.54063 44.9659 9.66319 45 9.78806 45C9.80369 45 9.81925 44.9993 9.83488 44.9983C9.96744 44.9892 10.0946 44.9419 10.2014 44.8619C10.3082 44.7819 10.3901 44.6725 10.4373 44.5468L15.1386 32.0423C15.391 31.9457 15.634 31.8257 15.8645 31.6838C16.3358 31.3924 16.8774 31.2383 17.4296 31.2383C17.9818 31.2383 18.5233 31.3924 18.9946 31.6838L18.9953 31.6841C19.2253 31.8242 19.4674 31.9425 19.7188 32.0375L24.4218 44.5462C24.4691 44.6719 24.551 44.7812 24.6577 44.8612C24.7645 44.9413 24.8917 44.9886 25.0243 44.9977C25.0399 44.9987 25.0555 44.9994 25.0711 44.9994C25.196 44.9994 25.3185 44.9653 25.4259 44.9007C25.5332 44.8361 25.6213 44.7434 25.681 44.6323L28.4604 39.4664L33.9297 41.4562C34.0547 41.5018 34.19 41.5101 34.3195 41.4801C34.449 41.4502 34.5673 41.3833 34.6604 41.2873C34.7534 41.1913 34.8173 41.0704 34.8445 40.9388C34.8717 40.8071 34.8609 40.671 34.8136 40.5454ZM9.67614 42.618L7.3343 38.2656C7.25496 38.1184 7.12626 38.0046 6.9714 37.945C6.81654 37.8853 6.6457 37.8836 6.4897 37.9401L1.88061 39.6167L6.35722 27.7041C6.57793 27.7564 6.80228 27.7915 7.02829 27.809C7.57522 27.8463 8.10112 28.0368 8.54717 28.3593C8.99322 28.6818 9.34184 29.1235 9.55402 29.6351C9.79154 30.2207 10.1524 30.7468 10.6115 31.1767C11.0706 31.6066 11.6168 31.9299 12.212 32.1242C12.6413 32.2645 13.0894 32.337 13.5405 32.3392L9.67614 42.618ZM15.1339 30.4874C14.7651 30.7179 14.3511 30.8641 13.9207 30.9159C13.4903 30.9676 13.054 30.9237 12.6421 30.7871C12.2388 30.6558 11.8687 30.4371 11.5575 30.1462C11.2463 29.8553 11.0015 29.4992 10.8402 29.1027C10.5282 28.3474 10.0144 27.695 9.35659 27.2186C8.69876 26.7422 7.92285 26.4607 7.11582 26.4056C6.68431 26.3775 6.26421 26.2537 5.88536 26.0427C5.50652 25.8317 5.17825 25.5389 4.92388 25.185C4.67784 24.8428 4.50947 24.4498 4.43079 24.0341C4.35211 23.6184 4.36507 23.1903 4.46873 22.7803C4.6624 21.9888 4.6309 21.158 4.37784 20.3838C4.12479 19.6096 3.66051 18.9237 3.03865 18.4053C2.71081 18.1343 2.44675 17.7927 2.26568 17.4054C2.0846 17.0181 1.99105 16.5949 1.99183 16.1664C1.99261 15.738 2.08769 15.3151 2.27018 14.9285C2.45266 14.5419 2.71796 14.2013 3.04678 13.9314C3.66713 13.4118 4.12964 12.7251 4.3809 11.9508C4.63216 11.1764 4.66193 10.3459 4.46678 9.55516C4.36432 9.14615 4.35217 8.71931 4.4312 8.30501C4.51023 7.89071 4.67849 7.49912 4.92402 7.15812C5.17937 6.80343 5.50888 6.51011 5.88905 6.29908C6.26922 6.08804 6.69071 5.96448 7.12346 5.9372C7.92922 5.88103 8.70363 5.59903 9.36007 5.12276C10.0165 4.64649 10.529 3.99473 10.8404 3.24041C11.0015 2.84388 11.2462 2.48775 11.5574 2.19688C11.8687 1.90601 12.2389 1.68743 12.6422 1.55641C13.0542 1.41992 13.4907 1.37603 13.9211 1.42778C14.3516 1.47954 14.7658 1.62571 15.1347 1.85609C15.8259 2.28332 16.6201 2.50937 17.4301 2.50937C18.24 2.50937 19.0342 2.28332 19.7254 1.85609C20.0943 1.62576 20.5083 1.47963 20.9386 1.42787C21.369 1.37612 21.8053 1.41998 22.2172 1.55641C22.6205 1.68766 22.9906 1.90636 23.3018 2.19727C23.613 2.48817 23.8578 2.84428 24.0191 3.24077C24.3311 3.99608 24.8449 4.6485 25.5027 5.12488C26.1605 5.60127 26.9364 5.88279 27.7435 5.93791C28.175 5.96593 28.5951 6.08983 28.9739 6.30078C29.3528 6.51174 29.681 6.80457 29.9354 7.15847C30.1815 7.50068 30.3498 7.89365 30.4285 8.30933C30.5072 8.72502 30.4942 9.15315 30.3906 9.56318C30.1969 10.3547 30.2284 11.1855 30.4815 11.9597C30.7345 12.7338 31.1988 13.4197 31.8206 13.9381C32.1485 14.2092 32.4125 14.5508 32.5936 14.938C32.7747 15.3253 32.8682 15.7486 32.8675 16.177C32.8667 16.6055 32.7716 17.0284 32.5891 17.415C32.4066 17.8016 32.1413 18.1422 31.8125 18.412C31.1922 18.9316 30.7297 19.6183 30.4784 20.3926C30.2271 21.1669 30.1973 21.9974 30.3924 22.7881C30.4949 23.1971 30.507 23.6239 30.428 24.0382C30.3489 24.4526 30.1807 24.8441 29.9351 25.1851C29.6798 25.5398 29.3503 25.8332 28.9701 26.0442C28.5899 26.2552 28.1685 26.3788 27.7357 26.4061C26.9299 26.4622 26.1555 26.7442 25.4991 27.2205C24.8427 27.6968 24.3301 28.3485 24.0188 29.1028C23.8577 29.4994 23.6129 29.8555 23.3017 30.1464C22.9905 30.4372 22.6203 30.6558 22.2169 30.7868C21.805 30.9237 21.3685 30.9679 20.9379 30.9161C20.5074 30.8643 20.0932 30.7179 19.7245 30.4872C19.0332 30.06 18.239 29.834 17.4291 29.834C16.6192 29.8341 15.825 30.0601 15.1339 30.4874ZM28.3695 37.9399C28.2135 37.8832 28.0426 37.8849 27.8877 37.9446C27.7328 38.0043 27.6041 38.118 27.5249 38.2653L25.183 42.6177L21.3192 32.3408C21.7702 32.3382 22.2181 32.2652 22.6471 32.1246C23.2425 31.9303 23.7888 31.6068 24.2479 31.1769C24.7071 30.7469 25.0681 30.2208 25.3058 29.6351C25.5184 29.1225 25.8679 28.6801 26.3151 28.3574C26.7623 28.0347 27.2896 27.8446 27.8376 27.8084C28.0614 27.791 28.2836 27.7563 28.5022 27.7045L32.9785 39.6165L28.3695 37.9399Z" fill="currentColor"/>
                                    <path d="M27.8498 16.1716C27.8498 14.0856 27.2387 12.0465 26.0937 10.312C24.9487 8.57761 23.3213 7.22578 21.4172 6.4275C19.5132 5.62923 17.418 5.42036 15.3967 5.82732C13.3754 6.23427 11.5186 7.23878 10.0613 8.7138C8.60405 10.1888 7.61161 12.0681 7.20955 14.114C6.80748 16.1599 7.01383 18.2806 7.80252 20.2078C8.5912 22.135 9.92679 23.7822 11.6404 24.9411C13.354 26.1 15.3686 26.7186 17.4296 26.7186C20.1923 26.7155 22.8409 25.6033 24.7944 23.626C26.7479 21.6488 27.8468 18.9679 27.8498 16.1716ZM17.4296 25.3123C15.6434 25.3123 13.8974 24.7762 12.4123 23.7718C10.9272 22.7675 9.76965 21.3399 9.08613 19.6696C8.4026 17.9994 8.22376 16.1615 8.57222 14.3884C8.92068 12.6152 9.78078 10.9865 11.0438 9.70817C12.3068 8.42982 13.9159 7.55925 15.6677 7.20656C17.4196 6.85386 19.2354 7.03488 20.8855 7.72672C22.5357 8.41856 23.9462 9.59014 24.9385 11.0933C25.9308 12.5965 26.4605 14.3638 26.4605 16.1716C26.4578 18.5951 25.5054 20.9184 23.8124 22.6321C22.1194 24.3457 19.8239 25.3096 17.4296 25.3123Z" fill="currentColor"/>
                                    <path d="M22.9545 13.8401L19.5672 13.3419L18.0524 10.2355C17.9884 10.1259 17.8974 10.035 17.7882 9.97186C17.679 9.90873 17.5554 9.87553 17.4296 9.87553C17.3038 9.87553 17.1802 9.90873 17.071 9.97186C16.9618 10.035 16.8707 10.1259 16.8068 10.2355L15.292 13.3419L11.9047 13.8401C11.7763 13.8589 11.6558 13.9137 11.5566 13.9982C11.4574 14.0828 11.3836 14.1938 11.3435 14.3186C11.3034 14.4434 11.2986 14.5771 11.3297 14.7045C11.3608 14.832 11.4265 14.9481 11.5193 15.0397L13.9711 17.4577L13.3924 20.8721C13.3706 21.0014 13.3849 21.1342 13.4337 21.2556C13.4825 21.377 13.5639 21.4822 13.6687 21.5593C13.7734 21.6364 13.8974 21.6823 14.0266 21.6919C14.1558 21.7014 14.285 21.6742 14.3997 21.6134L17.4296 20.0014L20.4593 21.6134C20.574 21.6742 20.7033 21.7014 20.8324 21.6919C20.9616 21.6823 21.0856 21.6364 21.1903 21.5593C21.2951 21.4822 21.3765 21.377 21.4253 21.2556C21.4741 21.1342 21.4884 21.0014 21.4666 20.8721L20.8879 17.4577L23.3397 15.0397C23.4326 14.9481 23.4983 14.832 23.5293 14.7045C23.5604 14.5771 23.5557 14.4434 23.5156 14.3186C23.4755 14.1938 23.4016 14.0828 23.3024 13.9982C23.2033 13.9137 23.0828 13.8589 22.9545 13.8401ZM19.6568 16.7089C19.5762 16.7885 19.516 16.8868 19.4813 16.9952C19.4465 17.1036 19.4383 17.219 19.4573 17.3313L19.8596 19.7058L17.7525 18.5848C17.6529 18.5318 17.542 18.504 17.4294 18.504C17.3169 18.504 17.206 18.5318 17.1064 18.5848L14.9996 19.7055L15.4019 17.331C15.4209 17.2187 15.4127 17.1033 15.3779 16.9949C15.3431 16.8865 15.2829 16.7883 15.2024 16.7086L13.4977 15.027L15.8531 14.6806C15.9646 14.6642 16.0705 14.6206 16.1616 14.5535C16.2528 14.4865 16.3264 14.398 16.3762 14.2957L17.4296 12.1357L18.4831 14.2958C18.5329 14.3981 18.6065 14.4866 18.6977 14.5537C18.7888 14.6207 18.8947 14.6643 19.0062 14.6807L21.3616 15.0271L19.6568 16.7089Z" fill="currentColor"/>
                                </svg>
                               
                            </div>
                            <div className="grow-content">
                                <div className="top-content">
                                    <h2 className="title"><span className="odometer" data-count="3000">3000</span>+</h2><br/>
                                    <p>Audio Projects</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="grow-item fade-top">
                            <div className="grow-icon">
                            <svg width="45" height="45" viewBox="0 0 45 45" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.25 45C7.836 45 7.5 44.664 7.5 44.25V43.0965C7.5 40.458 9.528 37.6005 12.0195 36.726L18.186 34.569L18.5925 31.314C18.6435 30.9 19.044 30.6015 19.4295 30.6615C19.8405 30.7125 20.133 31.0875 20.082 31.4985L19.617 35.2155C19.5825 35.4975 19.3905 35.7375 19.1205 35.8305L12.5145 38.142C10.6095 38.8095 9 41.0805 9 43.0965V44.25C9 44.664 8.664 45 8.25 45Z" fill="currentColor"/>
                                    <path d="M36.75 45C36.336 45 36 44.664 36 44.25V43.0965C36 41.079 34.3905 38.8095 32.4855 38.1405L25.8795 35.829C25.6095 35.7345 25.4175 35.496 25.383 35.2155L24.9165 31.4955C24.8655 31.0845 25.1565 30.7095 25.5675 30.657C25.974 30.6015 26.3535 30.894 26.406 31.308L26.814 34.569L32.9805 36.726C35.472 37.6005 37.5 40.4595 37.5 43.0965V44.25C37.5 44.664 37.164 45 36.75 45Z" fill="currentColor"/>
                                    <path d="M22.5 33.0585C22.086 33.0585 21.75 32.7225 21.75 32.3085C21.75 31.8945 22.086 31.5585 22.5 31.5585C24.1725 31.5585 27.2865 31.5585 27.3015 23.352C27.3045 21.912 27.1995 20.5125 25.9005 19.212C25.134 18.4455 23.991 18.057 22.4985 18.057C21.006 18.057 19.863 18.4455 19.0965 19.212C17.799 20.5125 17.6925 21.912 17.6955 23.352C17.703 27.228 18.4095 29.7375 19.7955 30.813C20.1225 31.068 20.1825 31.5375 19.929 31.866C19.6725 32.193 19.2045 32.25 18.876 31.9995C17.0805 30.606 16.2045 27.78 16.1955 23.355C16.1925 21.732 16.332 19.8585 18.036 18.1515C19.0935 17.094 20.595 16.557 22.4985 16.557C24.402 16.557 25.9035 17.0925 26.961 18.1515C28.665 19.8585 28.8045 21.732 28.8015 23.355C28.788 30.066 26.8455 33.0585 22.5 33.0585Z" fill="currentColor"/>
                                    <path d="M22.4955 39.228C22.3125 39.228 22.1295 39.162 21.9855 39.0285L18.363 35.673C18.06 35.391 18.0405 34.9155 18.3225 34.6125C18.606 34.3065 19.08 34.293 19.383 34.572L22.4955 37.4565L25.617 34.572C25.9245 34.29 26.3985 34.3095 26.6775 34.6125C26.9595 34.917 26.94 35.3925 26.6355 35.673L23.0055 39.0285C22.86 39.162 22.6785 39.228 22.4955 39.228Z" fill="currentColor"/>
                                    <path d="M25.2195 23.8725C23.0865 23.8725 20.8665 23.121 19.6425 22.0215C19.3335 21.7425 19.308 21.27 19.5855 20.9625C19.863 20.655 20.3415 20.6295 20.6445 20.9055C22.1235 22.236 25.6665 22.932 27.696 21.84C28.059 21.642 28.5165 21.7815 28.7115 22.146C28.908 22.5105 28.77 22.9665 28.4055 23.1615C27.4815 23.6565 26.364 23.8725 25.2195 23.8725Z" fill="currentColor"/>
                                    <path d="M11.25 34.2C10.836 34.2 10.5 33.864 10.5 33.45V30.7335C10.5 30.4995 10.6095 30.2775 10.797 30.1365C11.562 29.5575 12 28.6875 12 27.75V25.5C12 23.8455 10.6545 22.5 9 22.5C7.3455 22.5 6 23.8455 6 25.5V27.75C6 28.6875 6.438 29.5575 7.203 30.1365C7.3905 30.279 7.5 30.4995 7.5 30.7335V33.45C7.5 33.864 7.164 34.2 6.75 34.2C6.336 34.2 6 33.864 6 33.45V31.0875C5.0415 30.231 4.5 29.034 4.5 27.75V25.5C4.5 23.019 6.519 21 9 21C11.481 21 13.5 23.019 13.5 25.5V27.75C13.5 29.0325 12.9585 30.2295 12 31.0875V33.45C12 33.864 11.664 34.2 11.25 34.2Z" fill="currentColor"/>
                                    <path d="M9.7545 32.1735C9.4065 32.1735 9.0945 31.929 9.021 31.575C8.9385 31.1685 9.1995 30.7725 9.606 30.6885C10.992 30.405 12 29.1675 12 27.75C12 27.336 12.336 27 12.75 27C13.164 27 13.5 27.336 13.5 27.75C13.5 29.8785 11.988 31.731 9.906 32.1585C9.855 32.169 9.8055 32.1735 9.7545 32.1735Z" fill="currentColor"/>
                                    <path d="M0.75 43.5C0.336 43.5 0 43.164 0 42.75V38.955C0 36.8535 1.245 34.962 3.171 34.14L6.4515 32.7165C6.711 32.6085 7.0065 32.6475 7.227 32.8245L9.003 34.2825L10.779 32.838C10.9965 32.6625 11.292 32.6205 11.5485 32.7315L14.8305 34.14C15.2115 34.302 15.387 34.743 15.2235 35.124C15.06 35.505 14.616 35.6805 14.2395 35.517L11.376 34.2885L9.477 35.832C9.201 36.057 8.8065 36.0555 8.5275 35.8305L6.6285 34.275L3.765 35.5185C2.388 36.105 1.5 37.4535 1.5 38.955V42.75C1.5 43.164 1.164 43.5 0.75 43.5Z" fill="currentColor"/>
                                    <path d="M11.9085 26.865C10.4145 26.865 8.9865 26.3505 7.779 25.3785C7.4565 25.1175 7.4055 24.6465 7.665 24.324C7.9275 23.9985 8.4 23.952 8.7195 24.21C9.681 24.9855 10.8165 25.4265 11.997 25.365C11.925 23.7735 10.608 22.5 9 22.5C7.3455 22.5 6 23.8455 6 25.5V26.055C6 26.469 5.664 26.805 5.25 26.805C4.836 26.805 4.5 26.469 4.5 26.055V25.5C4.5 23.019 6.519 21 9 21C11.481 21 13.5 23.019 13.5 25.5V26.025C13.5 26.394 13.2315 26.7075 12.8685 26.766C12.522 26.82 12.222 26.865 11.9085 26.865Z" fill="currentColor"/>
                                    <path d="M38.25 34.2C37.836 34.2 37.5 33.864 37.5 33.45V30.7335C37.5 30.4995 37.6095 30.2775 37.797 30.1365C38.562 29.5575 39 28.6875 39 27.75V25.5C39 23.8455 37.6545 22.5 36 22.5C34.3455 22.5 33 23.8455 33 25.5V27.75C33 28.6875 33.438 29.5575 34.203 30.1365C34.3905 30.279 34.5 30.4995 34.5 30.7335V33.45C34.5 33.864 34.164 34.2 33.75 34.2C33.336 34.2 33 33.864 33 33.45V31.0875C32.0415 30.231 31.5 29.034 31.5 27.75V25.5C31.5 23.019 33.519 21 36 21C38.481 21 40.5 23.019 40.5 25.5V27.75C40.5 29.0325 39.9585 30.2295 39 31.0875V33.45C39 33.864 38.664 34.2 38.25 34.2Z" fill="currentColor"/>
                                    <path d="M36.7545 32.1735C36.4065 32.1735 36.0945 31.929 36.021 31.575C35.9385 31.1685 36.1995 30.7725 36.606 30.6885C37.992 30.405 39 29.1675 39 27.75C39 27.336 39.336 27 39.75 27C40.164 27 40.5 27.336 40.5 27.75C40.5 29.8785 38.988 31.731 36.906 32.1585C36.855 32.169 36.8055 32.1735 36.7545 32.1735Z" fill="currentColor"/>
                                    <path d="M44.25 43.5C43.836 43.5 43.5 43.164 43.5 42.75V38.955C43.5 37.4535 42.612 36.1065 41.2395 35.52L38.3715 34.275L36.4755 35.8305C36.1965 36.0555 35.802 36.057 35.526 35.832L33.627 34.2885L30.7635 35.517C30.384 35.682 29.9415 35.505 29.7795 35.124C29.616 34.743 29.7915 34.302 30.1725 34.14L33.4545 32.7315C33.7125 32.622 34.008 32.6625 34.224 32.838L36 34.2825L37.776 32.8245C37.995 32.6475 38.292 32.607 38.5515 32.7165L41.835 34.1415C43.755 34.962 45 36.852 45 38.955V42.75C45 43.164 44.664 43.5 44.25 43.5Z" fill="currentColor"/>
                                    <path d="M34.6905 17.9925C34.3455 17.9925 34.0335 17.7525 33.9585 17.4C32.496 10.644 28.1745 4.842 22.0995 1.4835C21.738 1.2825 21.606 0.8265 21.807 0.4635C22.008 0.1005 22.4625 -0.027 22.827 0.171C29.28 3.7395 33.8715 9.903 35.424 17.0835C35.5125 17.4885 35.256 17.8875 34.8495 17.9745C34.7955 17.9865 34.7415 17.9925 34.6905 17.9925Z" fill="currentColor"/>
                                    <path d="M22.5 10.5C17.073 10.5 11.703 9.738 6.537 8.235C6.1395 8.1195 5.91 7.7025 6.027 7.305C6.144 6.9075 6.555 6.675 6.957 6.7935C16.9455 9.7005 27.84 9.72 37.836 6.8535C38.2365 6.735 38.6505 6.969 38.763 7.368C38.877 7.767 38.6475 8.181 38.2485 8.295C33.1515 9.759 27.852 10.5 22.5 10.5Z" fill="currentColor"/>
                                    <path d="M22.5 15C22.086 15 21.75 14.664 21.75 14.25V0.75C21.75 0.336 22.086 0 22.5 0C22.914 0 23.25 0.336 23.25 0.75V14.25C23.25 14.664 22.914 15 22.5 15Z" fill="currentColor"/>
                                    <path d="M1.0965 27.153C0.741 27.153 0.426 26.8995 0.36 26.5365C0.1215 25.2105 0 23.8515 0 22.5C0 10.0935 10.0935 0 22.5 0C34.9065 0 45 10.0935 45 22.5C45 23.8245 44.883 25.1565 44.6535 26.457C44.58 26.865 44.1825 27.144 43.785 27.0645C43.377 26.9925 43.1055 26.6025 43.1775 26.196C43.392 24.9795 43.5 23.736 43.5 22.5C43.5 10.92 34.08 1.5 22.5 1.5C10.92 1.5 1.5 10.92 1.5 22.5C1.5 23.7645 1.6125 25.032 1.8375 26.2695C1.911 26.676 1.6395 27.0675 1.233 27.141C1.1865 27.1485 1.143 27.153 1.0965 27.153Z" fill="currentColor"/>
                                    <path d="M10.0335 19.5C9.996 19.5 9.957 19.497 9.9195 19.491C9.51 19.4295 9.228 19.047 9.291 18.6375C10.4685 10.8825 15.2865 3.9795 22.1775 0.1695C22.5405 -0.0299999 22.998 0.099 23.1975 0.462C23.3985 0.825 23.2665 1.281 22.905 1.482C16.4175 5.0685 11.883 11.565 10.7745 18.8625C10.719 19.233 10.398 19.5 10.0335 19.5Z" fill="currentColor"/>
                                    <path d="M34.9665 19.5C34.6035 19.5 34.2825 19.233 34.227 18.8625C33.12 11.5665 28.5855 5.07 22.0995 1.4835C21.738 1.2825 21.606 0.8265 21.807 0.4635C22.008 0.1005 22.4625 -0.027 22.827 0.171C29.718 3.981 34.5345 10.8855 35.7105 18.6375C35.7735 19.047 35.4915 19.4295 35.082 19.491C35.0415 19.497 35.004 19.5 34.9665 19.5Z" fill="currentColor"/>
                                </svg>
                            </div>
                            <div className="grow-content">
                                <div className="top-content">
                                    <h2 className="title"><span className="odometer" data-count="3000">3000</span>...</h2><br/>
                                    <p>Satisfied Clients Globally</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                
                </div>
                </section>





{/*
        <div className="running-text running-3">
            <div className="bg-img" data-background={runningbg}></div>
            <div className="container">
                <div className="scroller" data-speed="fast">
                    <ul className="text-anim scroller__inner inner-3">
                        
                        <li className="stroke-text">Audio Production</li>
                        
                        <li className="stroke-text">Video Production</li>
                        
                        <li className="stroke-text">Commercial Photography</li>
                        
                        <li className="stroke-text">Web Development</li>
                    </ul>
                </div>
            </div>
        </div>
      
  */}
         
         <Footer/>
    </>
    
  )
}
