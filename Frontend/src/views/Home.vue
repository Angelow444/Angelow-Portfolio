<template>

  <!-- Sub Header -->
  <div class="sub-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-sm-8">
          <div class="left-content">
            <p>This is an educational <em>HTML CSS</em> template by TemplateMo website.</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-4">
          <div class="right-icons">
            <ul>
              <li><a href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a href="#"><i class="fa fa-behance"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ***** Header Area Start ***** -->
  <header class="header-area header-sticky">
      <div class="container">
          <div class="row">
              <div class="col-12">
                  <nav class="main-nav">
                      <!-- ***** Logo Start ***** -->
                      <a href="index.html" class="logo">
                          MEET ANGELOW
                      </a>
                      <!-- ***** Logo End ***** -->
                      <!-- ***** Menu Start ***** -->
                      <ul class="nav">
                          <li class="scroll-to-section"><a href="#top" class="active">Home</a></li>
                          <li><a href="meetings.html">Meetings</a></li>
                          <li class="scroll-to-section"><a href="#apply">Apply Now</a></li>
                          <li class="has-sub">
                              <a href="javascript:void(0)">Pages</a>
                              <ul class="sub-menu">
                                  <li><a href="meetings.html">Upcoming Meetings</a></li>
                                  <li><a href="meeting-details.html">Meeting Details</a></li>
                              </ul>
                          </li>
                          <li class="scroll-to-section"><a href="#courses">Courses</a></li> 
                          <li class="scroll-to-section"><a href="#contact">Contact Us</a></li> 
                          <li class="scroll-to-section" style="display: flex; align-items: center; margin-left: 15px;">
                              <a href="javascript:void(0)" @click="showLogin = true" style="border: 2px solid #f5ac53; border-radius: 40px; color: #f5ac53; padding: 8px 25px; font-weight: 700; background: transparent; transition: all 0.3s ease; display: inline-block; text-transform: uppercase; letter-spacing: 1px; font-size: 14px; height: auto; text-align: center;" onmouseover="this.style.backgroundColor='#f5ac53'; this.style.color='#fff'" onmouseout="this.style.backgroundColor='transparent'; this.style.color='#f5ac53'">MEMBER LOGIN</a>
                          </li>
                      </ul>        
                      <a class='menu-trigger'>
                          <span>Menu</span>
                      </a>
                      <!-- ***** Menu End ***** -->
                  </nav>
              </div>
          </div>
      </div>
  </header>
  <!-- ***** Header Area End ***** -->

  <!-- ***** Main Banner Area Start ***** -->
  <section class="section main-banner" id="top" data-section="section1" :style="bgStore.bannerType === 'image' ? { backgroundImage: 'url(' + bgStore.banner + ')', backgroundSize: 'cover', backgroundPosition: 'center' } : {}">
      <video v-if="bgStore.bannerType === 'video'" autoplay muted loop id="bg-video" :key="bgStore.banner">
          <source :src="bgStore.banner" type="video/mp4" />
      </video>

      <div class="video-overlay header-text">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="caption">
              <h6>Hello Students</h6>
              <h2>Welcome to Education</h2>
              <p>This is an edu meeting HTML CSS template provided by <a rel="nofollow" href="https://templatemo.com/page/1" target="_blank">TemplateMo website</a>. This is a Bootstrap v5.1.3 layout. The video background is taken from Pexels website, a group of young people by <a rel="nofollow" href="https://www.pexels.com/@pressmaster" target="_blank">Pressmaster</a>.</p>
              <div class="main-button-red">
                  <div class="scroll-to-section"><a href="#contact">Join Us Now!</a></div>
              </div>
          </div>
              </div>
            </div>
          </div>
      </div>
  </section>
  <!-- ***** Main Banner Area End ***** -->

  <section class="services">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="owl-service-item owl-carousel">
          
            <div class="item">
              <div class="icon">
                <img src="/assets/images/service-icon-01.png" alt="">
              </div>
              <div class="down-content">
                <h4>Best Education</h4>
                <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
              </div>
            </div>
            
            <div class="item">
              <div class="icon">
                <img src="/assets/images/service-icon-02.png" alt="">
              </div>
              <div class="down-content">
                <h4>Best Teachers</h4>
                <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
              </div>
            </div>
            
            <div class="item">
              <div class="icon">
                <img src="/assets/images/service-icon-03.png" alt="">
              </div>
              <div class="down-content">
                <h4>Best Students</h4>
                <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
              </div>
            </div>
            
            <div class="item">
              <div class="icon">
                <img src="/assets/images/service-icon-02.png" alt="">
              </div>
              <div class="down-content">
                <h4>Online Meeting</h4>
                <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
              </div>
            </div>
            
            <div class="item">
              <div class="icon">
                <img src="/assets/images/service-icon-03.png" alt="">
              </div>
              <div class="down-content">
                <h4>Best Networking</h4>
                <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="upcoming-meetings" id="meetings">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-heading">
            <h2>Upcoming Meetings</h2>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="categories">
            <h4>Meeting Catgories</h4>
            <ul>
              <li><a href="#">Sed tempus enim leo</a></li>
              <li><a href="#">Aenean molestie quis</a></li>
              <li><a href="#">Cras et metus vestibulum</a></li>
              <li><a href="#">Nam et condimentum</a></li>
              <li><a href="#">Phasellus nec sapien</a></li>
            </ul>
            <div class="main-button-red">
              <a href="meetings.html">All Upcoming Meetings</a>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="row">
            <div class="col-lg-6">
              <div class="meeting-item">
                <div class="thumb">
                  <div class="price">
                    <span>$22.00</span>
                  </div>
                  <a href="meeting-details.html"><img src="/assets/images/meeting-01.jpg" alt="New Lecturer Meeting"></a>
                </div>
                <div class="down-content">
                  <div class="date">
                    <h6>Nov <span>10</span></h6>
                  </div>
                  <a href="meeting-details.html"><h4>New Lecturers Meeting</h4></a>
                  <p>Morbi in libero blandit lectus<br>cursus ullamcorper.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="meeting-item">
                <div class="thumb">
                  <div class="price">
                    <span>$36.00</span>
                  </div>
                  <a href="meeting-details.html"><img src="/assets/images/meeting-02.jpg" alt="Online Teaching"></a>
                </div>
                <div class="down-content">
                  <div class="date">
                    <h6>Nov <span>24</span></h6>
                  </div>
                  <a href="meeting-details.html"><h4>Online Teaching Techniques</h4></a>
                  <p>Morbi in libero blandit lectus<br>cursus ullamcorper.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="meeting-item">
                <div class="thumb">
                  <div class="price">
                    <span>$14.00</span>
                  </div>
                  <a href="meeting-details.html"><img src="/assets/images/meeting-03.jpg" alt="Higher Education"></a>
                </div>
                <div class="down-content">
                  <div class="date">
                    <h6>Nov <span>26</span></h6>
                  </div>
                  <a href="meeting-details.html"><h4>Higher Education Conference</h4></a>
                  <p>Morbi in libero blandit lectus<br>cursus ullamcorper.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="meeting-item">
                <div class="thumb">
                  <div class="price">
                    <span>$48.00</span>
                  </div>
                  <a href="meeting-details.html"><img src="/assets/images/meeting-04.jpg" alt="Student Training"></a>
                </div>
                <div class="down-content">
                  <div class="date">
                    <h6>Nov <span>30</span></h6>
                  </div>
                  <a href="meeting-details.html"><h4>Student Training Meetup</h4></a>
                  <p>Morbi in libero blandit lectus<br>cursus ullamcorper.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="apply-now" id="apply" :style="bgStore.applyNow ? { backgroundImage: 'url(' + bgStore.applyNow + ')', backgroundSize: 'cover', backgroundPosition: 'center' } : {}">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 align-self-center">
          <div class="row">
            <div class="col-lg-12">
              <div class="item">
                <h3>APPLY FOR BACHELOR DEGREE</h3>
                <p>You are allowed to use this edu meeting CSS template for your school or university or business. You can feel free to modify or edit this layout.</p>
                <div class="main-button-red">
                  <div class="scroll-to-section"><a href="#contact">Join Us Now!</a></div>
              </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="item">
                <h3>APPLY FOR BACHELOR DEGREE</h3>
                <p>You are not allowed to redistribute the template ZIP file on any other template website. Please contact us for more information.</p>
                <div class="main-button-yellow">
                  <div class="scroll-to-section"><a href="#contact">Join Us Now!</a></div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="accordions is-first-expanded">
            <article class="accordion">
                <div class="accordion-head">
                    <span>About Edu Meeting HTML Template</span>
                    <span class="icon">
                        <i class="icon fa fa-chevron-right"></i>
                    </span>
                </div>
                <div class="accordion-body">
                    <div class="content">
                        <p>If you want to get the latest collection of HTML CSS templates for your websites, you may visit <a rel="nofollow" href="https://www.toocss.com/" target="_blank">Too CSS website</a>. If you need a working contact form script, please visit <a href="https://templatemo.com/contact" target="_parent">our contact page</a> for more info.</p>
                    </div>
                </div>
            </article>
            <article class="accordion">
                <div class="accordion-head">
                    <span>HTML CSS Bootstrap Layout</span>
                    <span class="icon">
                        <i class="icon fa fa-chevron-right"></i>
                    </span>
                </div>
                <div class="accordion-body">
                    <div class="content">
                        <p>Etiam posuere metus orci, vel consectetur elit imperdiet eu. Cras ipsum magna, maximus at semper sit amet, eleifend eget neque. Nunc facilisis quam purus, sed vulputate augue interdum vitae. Aliquam a elit massa.<br><br>
                        Nulla malesuada elit lacus, ac ultricies massa varius sed. Etiam eu metus eget nibh consequat aliquet. Proin fringilla, quam at euismod porttitor, odio odio tempus ligula, ut feugiat ex erat nec mauris. Donec viverra velit eget lectus sollicitudin tincidunt.</p>
                    </div>
                </div>
            </article>
            <article class="accordion">
                <div class="accordion-head">
                    <span>Please tell your friends</span>
                    <span class="icon">
                        <i class="icon fa fa-chevron-right"></i>
                    </span>
                </div>
                <div class="accordion-body">
                    <div class="content">
                        <p>Ut vehicula mauris est, sed sodales justo rhoncus eu. Morbi porttitor quam velit, at ullamcorper justo suscipit sit amet. Quisque at suscipit mi, non efficitur velit.<br><br>
                        Cras et tortor semper, placerat eros sit amet, porta est. Mauris porttitor sapien et quam volutpat luctus. Nullam sodales ipsum ac neque ultricies varius.</p>
                    </div>
                </div>
            </article>
            <article class="accordion last-accordion">
                <div class="accordion-head">
                    <span>Share this to your colleagues</span>
                    <span class="icon">
                        <i class="icon fa fa-chevron-right"></i>
                    </span>
                </div>
                <div class="accordion-body">
                    <div class="content">
                        <p>Maecenas suscipit enim libero, vel lobortis justo condimentum id. Interdum et malesuada fames ac ante ipsum primis in faucibus.<br><br>
                        Sed eleifend metus sit amet magna tristique, posuere laoreet arcu semper. Nulla pellentesque ut tortor sit amet maximus. In eu libero ullamcorper, semper nisi quis, convallis nisi.</p>
                    </div>
                </div>
            </article>
        </div>
        </div>
      </div>
    </div>
  </section>

  <section class="our-courses" id="courses">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-heading">
            <h2>Our Popular Courses</h2>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="owl-courses-item owl-carousel">
            <div class="item">
              <img src="/assets/images/course-01.jpg" alt="Course One">
              <div class="down-content">
                <h4>Morbi tincidunt elit vitae justo rhoncus</h4>
                <div class="info">
                  <div class="row">
                    <div class="col-8">
                      <ul>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                      </ul>
                    </div>
                    <div class="col-4">
                       <span>$160</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <img src="/assets/images/course-02.jpg" alt="Course Two">
              <div class="down-content">
                <h4>Curabitur molestie dignissim purus vel</h4>
                <div class="info">
                  <div class="row">
                    <div class="col-8">
                      <ul>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                      </ul>
                    </div>
                    <div class="col-4">
                       <span>$180</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <img src="/assets/images/course-03.jpg" alt="">
              <div class="down-content">
                <h4>Nulla at ipsum a mauris egestas tempor</h4>
                <div class="info">
                  <div class="row">
                    <div class="col-8">
                      <ul>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                      </ul>
                    </div>
                    <div class="col-4">
                       <span>$140</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <img src="/assets/images/course-04.jpg" alt="">
              <div class="down-content">
                <h4>Aenean molestie quis libero gravida</h4>
                <div class="info">
                  <div class="row">
                    <div class="col-8">
                      <ul>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                      </ul>
                    </div>
                    <div class="col-4">
                       <span>$120</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <img src="/assets/images/course-01.jpg" alt="">
              <div class="down-content">
                <h4>Lorem ipsum dolor sit amet adipiscing elit</h4>
                <div class="info">
                  <div class="row">
                    <div class="col-8">
                      <ul>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                      </ul>
                    </div>
                    <div class="col-4">
                       <span>$250</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <img src="/assets/images/course-02.jpg" alt="">
              <div class="down-content">
                <h4>TemplateMo is the best website for Free CSS</h4>
                <div class="info">
                  <div class="row">
                    <div class="col-8">
                      <ul>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                      </ul>
                    </div>
                    <div class="col-4">
                       <span>$270</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <img src="/assets/images/course-03.jpg" alt="">
              <div class="down-content">
                <h4>Web Design Templates at your finger tips</h4>
                <div class="info">
                  <div class="row">
                    <div class="col-8">
                      <ul>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                      </ul>
                    </div>
                    <div class="col-4">
                       <span>$340</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <img src="/assets/images/course-04.jpg" alt="">
              <div class="down-content">
                <h4>Please visit our website again</h4>
                <div class="info">
                  <div class="row">
                    <div class="col-8">
                      <ul>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                      </ul>
                    </div>
                    <div class="col-4">
                       <span>$360</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="our-facts" :style="bgStore.ourFacts ? { backgroundImage: 'url(' + bgStore.ourFacts + ')', backgroundSize: 'cover', backgroundPosition: 'center' } : {}">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="row">
            <div class="col-lg-12">
              <h2>A Few Facts About Our University</h2>
            </div>
            <div class="col-lg-6">
              <div class="row">
                <div class="col-12">
                  <div class="count-area-content percentage">
                    <div class="count-digit">94</div>
                    <div class="count-title">Succesed Students</div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="count-area-content">
                    <div class="count-digit">126</div>
                    <div class="count-title">Current Teachers</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="row">
                <div class="col-12">
                  <div class="count-area-content new-students">
                    <div class="count-digit">2345</div>
                    <div class="count-title">New Students</div>
                  </div>
                </div> 
                <div class="col-12">
                  <div class="count-area-content">
                    <div class="count-digit">32</div>
                    <div class="count-title">Awards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div class="col-lg-6 align-self-center">
          <div class="video">
            <a href="https://www.youtube.com/watch?v=HndV87XpkWg" target="_blank"><img src="/assets/images/play-icon.png" alt=""></a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="contact-us" id="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 align-self-center">
          <div class="row">
            <div class="col-lg-12">
              <form id="contact" action="" method="post">
                <div class="row">
                  <div class="col-lg-12">
                    <h2>Let's get in touch</h2>
                  </div>
                  <div class="col-lg-4">
                    <fieldset>
                      <input name="name" type="text" id="name" placeholder="YOURNAME...*" required="">
                    </fieldset>
                  </div>
                  <div class="col-lg-4">
                    <fieldset>
                    <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="YOUR EMAIL..." required="">
                  </fieldset>
                  </div>
                  <div class="col-lg-4">
                    <fieldset>
                      <input name="subject" type="text" id="subject" placeholder="SUBJECT...*" required="">
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <textarea name="message" type="text" class="form-control" id="message" placeholder="YOUR MESSAGE..." required=""></textarea>
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit" class="button">SEND MESSAGE NOW</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="right-info">
            <ul>
              <li>
                <h6>Phone Number</h6>
                <span>0950 0006 984</span>
              </li>
              <li>
                <h6>Email Address</h6>
                <span>angelow@meet.edu.ph</span>
              </li>
              <li>
                <h6>Street Address</h6>
                <span>Iligan City - Tambacan, 9200, Mindanao</span>
              </li>
              <li>
                <h6>Website URL</h6>
                <span>www.angelow.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <p>Copyright © 2026 ANGELOW Meeting Co., Ltd. All Rights Reserved. 
          <br>Design: <a href="https://angelow.com" target="_parent" title="free css templates">ANGELOW</a></p>
    </div>
  </section>

    <!-- Login Modal -->
    <div v-if="showLogin" class="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50 transition-opacity">
      <div class="relative bg-[#8cb080] rounded-3xl w-full max-w-sm mx-4 overflow-hidden shadow-2xl p-6" style="border-radius: 2rem;">
        <button @click="showLogin = false" class="absolute top-4 right-4 text-gray-800 hover:text-black focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        <h3 class="text-2xl font-bold text-gray-900 mb-6 font-sans">Member Login</h3>
        <form @submit.prevent="login" class="space-y-4">
          <div>
            <input type="text" v-model="form.username" placeholder="Username" class="w-full px-4 py-3 rounded-full bg-[#feefc9] border-none text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-[#f5b66d] focus:outline-none shadow-sm font-medium" required>
          </div>
          <div>
            <label class="pl-4 text-gray-700 text-sm mb-1 block">Password</label>
            <input type="password" v-model="form.password" placeholder="Password" class="w-full px-4 py-3 rounded-full bg-[#feefc9] border-none text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-[#f5b66d] focus:outline-none shadow-sm font-medium" required>
          </div>
          <div class="flex items-center pl-2 pt-2">
            <input type="checkbox" id="remember" class="w-4 h-4 text-[#f5b66d] bg-[#feefc9] border-none rounded focus:ring-[#f5b66d] focus:ring-2">
            <label for="remember" class="ml-2 text-sm text-gray-800 font-medium">Remember me</label>
          </div>
          <div class="pt-4 pb-2 text-center">
            <button type="submit" class="px-10 py-3 bg-[#f5b66d] text-white font-bold rounded-full hover:bg-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-300 transition-colors shadow-md text-lg">
              Login
            </button>
          </div>
          <div class="text-center">
            <a href="#" class="text-sm text-gray-700 hover:text-gray-900 font-medium">Forgotten password?</a>
          </div>
          <div class="mt-8 text-center border-t border-gray-600 border-opacity-20 pt-4">
            <p class="text-white font-bold text-lg"><span class="mr-2">Any Questions?</span> <span class="text-gray-800">010-020-0340</span></p>
          </div>
        </form>
        <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-[-1]" style="transform: translateY(1px);">
            <svg class="relative block w-full h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,120.22,194,105.15,238.11,94.59,281.39,78.22,321.39,56.44Z" class="fill-[#393946]"></path>
            </svg>
        </div>
      </div>
    </div>

  <!-- ====== FLOATING CHATBOX ====== -->
  <div class="chat-widget">
    <!-- Toggle Button -->
    <button class="chat-toggle-btn" @click="toggleChat" :class="{ 'chat-open': isChatOpen }" title="Chat with us">
      <span class="chat-icon" v-if="!isChatOpen">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </span>
      <span class="chat-icon" v-else>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </span>
      <span class="chat-unread-dot" v-if="!isChatOpen && hasUnread"></span>
    </button>

    <!-- Chat Window -->
    <transition name="chat-slide">
      <div class="chat-window" v-if="isChatOpen">
        <!-- Header -->
        <div class="chat-header">
          <div class="chat-header-avatar">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
            </svg>
          </div>
          <div class="chat-header-info">
            <span class="chat-header-name">ANGELOW Support</span>
            <span class="chat-header-status"><span class="status-dot"></span>Online</span>
          </div>
        </div>

        <!-- Messages Body -->
        <div class="chat-body" ref="chatBody">
          <div v-for="(msg, idx) in chatMessages" :key="idx"
               :class="['chat-msg-row', msg.from === 'user' ? 'chat-msg-row--user' : 'chat-msg-row--bot']">
            <div class="chat-bubble" :class="msg.from === 'user' ? 'chat-bubble--user' : 'chat-bubble--bot'">
              {{ msg.text }}
              <span class="chat-time">{{ msg.time }}</span>
            </div>
          </div>
          <!-- Typing indicator -->
          <div class="chat-msg-row chat-msg-row--bot" v-if="isTyping">
            <div class="chat-bubble chat-bubble--bot chat-typing">
              <span></span><span></span><span></span>
            </div>
          </div>
        </div>

        <!-- Input -->
        <div class="chat-footer">
          <input
            class="chat-input"
            type="text"
            v-model="chatInput"
            placeholder="Type a message..."
            @keyup.enter="sendMessage"
          />
          <button class="chat-send-btn" @click="sendMessage">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </div>
      </div>
    </transition>
  </div>
  <!-- ====== END CHATBOX ====== -->

</template>

<script setup>
import { ref, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { bgStore } from '../store/backgrounds.js'

const showLogin = ref(false)
const form = ref({
  username: '',
  password: ''
})
const router = useRouter()

// ---- Chat Widget ----
const isChatOpen = ref(false)
const hasUnread = ref(true)
const chatInput = ref('')
const isTyping = ref(false)
const chatBody = ref(null)
const botReplies = [
  "Hello! How can I help you today? 😊",
  "That's a great question! Please contact our team at angelow@meet.edu.ph for more details.",
  "Thank you for reaching out! We'll get back to you shortly.",
  "Feel free to explore our courses and upcoming meetings!",
  "Is there anything else I can assist you with?"
]
let replyIndex = 0

const chatMessages = ref([
  { from: 'bot', text: 'Hi there! 👋 Welcome to ANGELOW. How can we help you today?', time: formatTime() }
])

function formatTime() {
  const now = new Date()
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

function toggleChat() {
  isChatOpen.value = !isChatOpen.value
  if (isChatOpen.value) hasUnread.value = false
}

async function sendMessage() {
  const text = chatInput.value.trim()
  if (!text) return
  chatMessages.value.push({ from: 'user', text, time: formatTime() })
  chatInput.value = ''
  await scrollToBottom()
  isTyping.value = true
  await scrollToBottom()
  setTimeout(async () => {
    isTyping.value = false
    const reply = botReplies[replyIndex % botReplies.length]
    replyIndex++
    chatMessages.value.push({ from: 'bot', text: reply, time: formatTime() })
    await scrollToBottom()
  }, 1200)
}

async function scrollToBottom() {
  await nextTick()
  if (chatBody.value) chatBody.value.scrollTop = chatBody.value.scrollHeight
}

const login = async () => {
  try {
    const res = await fetch('http://localhost:8000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(form.value)
    })
    
    const data = await res.json()
    if(res.ok && data.success) {
      showLogin.value = false
      router.push('/admin')
    } else {
      alert('Login failed: ' + (data.message || 'Invalid credentials'))
    }
  } catch (err) {
    alert('Error connecting to backend: ' + err)
  }
}
</script>

<style scoped>
/* ===== CHAT WIDGET ===== */
.chat-widget {
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
}

/* Toggle Button */
.chat-toggle-btn {
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f5ac53 0%, #e8841a 100%);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  box-shadow: 0 6px 24px rgba(245, 172, 83, 0.55), 0 2px 8px rgba(0,0,0,0.18);
  transition: transform 0.22s cubic-bezier(.34,1.56,.64,1), box-shadow 0.22s;
  position: relative;
  flex-shrink: 0;
}
.chat-toggle-btn:hover {
  transform: scale(1.12);
  box-shadow: 0 10px 34px rgba(245, 172, 83, 0.7), 0 2px 12px rgba(0,0,0,0.18);
}
.chat-toggle-btn.chat-open {
  background: linear-gradient(135deg, #484860 0%, #2c2c3a 100%);
  box-shadow: 0 6px 24px rgba(72, 72, 96, 0.5);
}
.chat-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
.chat-unread-dot {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 13px;
  height: 13px;
  background: #ef4444;
  border-radius: 50%;
  border: 2px solid #fff;
  animation: pulse-dot 1.4s infinite;
}
@keyframes pulse-dot {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.3); opacity: 0.75; }
}

/* Chat Window */
.chat-window {
  width: 340px;
  max-width: calc(100vw - 56px);
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(245,172,83,0.12);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* Transition */
.chat-slide-enter-active { animation: chatSlideIn 0.32s cubic-bezier(.34,1.56,.64,1); }
.chat-slide-leave-active { animation: chatSlideOut 0.22s ease-in forwards; }
@keyframes chatSlideIn {
  from { opacity: 0; transform: translateY(30px) scale(0.93); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes chatSlideOut {
  from { opacity: 1; transform: translateY(0) scale(1); }
  to   { opacity: 0; transform: translateY(30px) scale(0.93); }
}

/* Header */
.chat-header {
  background: linear-gradient(135deg, #f5ac53 0%, #e8841a 100%);
  padding: 14px 18px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: #fff;
}
.chat-header-avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(255,255,255,0.22);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.chat-header-info { display: flex; flex-direction: column; gap: 2px; }
.chat-header-name { font-weight: 700; font-size: 15px; letter-spacing: 0.3px; }
.chat-header-status { font-size: 12px; display: flex; align-items: center; gap: 5px; opacity: 0.9; }
.status-dot {
  width: 8px; height: 8px;
  background: #bbf7d0;
  border-radius: 50%;
  display: inline-block;
  animation: pulse-dot 1.4s infinite;
}

/* Body */
.chat-body {
  flex: 1;
  overflow-y: auto;
  padding: 16px 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #f8f8fc;
  min-height: 240px;
  max-height: 320px;
}
.chat-body::-webkit-scrollbar { width: 4px; }
.chat-body::-webkit-scrollbar-thumb { background: #ddd; border-radius: 4px; }

.chat-msg-row { display: flex; }
.chat-msg-row--user { justify-content: flex-end; }
.chat-msg-row--bot  { justify-content: flex-start; }

.chat-bubble {
  max-width: 78%;
  padding: 9px 14px 22px;
  border-radius: 16px;
  font-size: 13.5px;
  line-height: 1.5;
  position: relative;
  word-break: break-word;
}
.chat-bubble--user {
  background: linear-gradient(135deg, #f5ac53 0%, #e8841a 100%);
  color: #fff;
  border-bottom-right-radius: 4px;
}
.chat-bubble--bot {
  background: #fff;
  color: #2d2d3a;
  border-bottom-left-radius: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
}
.chat-time {
  position: absolute;
  bottom: 5px;
  right: 10px;
  font-size: 10px;
  opacity: 0.55;
  white-space: nowrap;
}

/* Typing indicator */
.chat-typing {
  padding: 12px 16px 12px;
  display: flex;
  align-items: center;
  gap: 5px;
}
.chat-typing span {
  width: 7px; height: 7px;
  background: #bbb;
  border-radius: 50%;
  display: inline-block;
  animation: typingBounce 1.1s infinite both;
}
.chat-typing span:nth-child(2) { animation-delay: 0.18s; }
.chat-typing span:nth-child(3) { animation-delay: 0.36s; }
@keyframes typingBounce {
  0%, 80%, 100% { transform: translateY(0); background: #ccc; }
  40% { transform: translateY(-7px); background: #f5ac53; }
}

/* Footer */
.chat-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-top: 1px solid #f0f0f5;
  background: #fff;
}
.chat-input {
  flex: 1;
  border: 1.5px solid #ececf2;
  border-radius: 30px;
  padding: 9px 16px;
  font-size: 13.5px;
  outline: none;
  background: #f8f8fc;
  color: #2d2d3a;
  transition: border-color 0.2s;
}
.chat-input:focus {
  border-color: #f5ac53;
  background: #fff;
}
.chat-send-btn {
  width: 40px; height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f5ac53 0%, #e8841a 100%);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  flex-shrink: 0;
  transition: transform 0.18s, box-shadow 0.18s;
  box-shadow: 0 3px 10px rgba(245,172,83,0.4);
}
.chat-send-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 5px 16px rgba(245,172,83,0.55);
}
</style>
