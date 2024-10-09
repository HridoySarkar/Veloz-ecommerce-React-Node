import React from 'react'
import '../footer/style.css'
import happyclient from '../../assets/imgs/happy client.gif'


const Index = () => {
  return (
    <footer id="footer-bg">
    <div className="inner">
      <div className="footer__top">
        <p className="footer__logo footer__logo--small">
          <svg width={30} height={16} viewBox="0 0 30 16">
            <path d="m18.4 0-2.803 10.855L12.951 0H9.34L6.693 10.855 3.892 0H0l5.012 15.812h3.425l2.708-10.228 2.709 10.228h3.425L22.29 0h-3.892ZM24.77 13.365c0 1.506 1.12 2.635 2.615 2.635C28.879 16 30 14.87 30 13.365c0-1.506-1.12-2.636-2.615-2.636s-2.615 1.13-2.615 2.636Z" />
          </svg>
        </p>
        <div className="footer__wrapper align-items-center">
          <div className="footer__grid">
            <ul className="footer__menu">
              <li>
                <a href="/websites/">Websites</a>
              </li>
              <li>
                <a href="/collections/search/">Collections</a>
              </li>
              <li>
                <a href="/elements/">Elements</a>
              </li>
            </ul>
            <ul className="footer__menu">
              <li>
                <a href="/academy/">Academy</a>
              </li>
              <li>
                <a href="/jobs/search/">Jobs</a>
              </li>
              <li>
                <a href="/market/">Market</a>
              </li>
            </ul>
            <ul className="footer__menu">
              <li>
                <a href="/directory/search/">Directory</a>
              </li>
              <li>
                <a href="https://conference.awwwards.com">Conferences</a>
              </li>
            </ul>
            <ul className="footer__menu">
              <li>
                <a rel="nofollow" href="/faqs/">
                  FAQs
                </a>
              </li>
              <li>
                <a rel="nofollow" href="/about-us/">
                  About Us
                </a>
              </li>
              <li>
                <a rel="nofollow" href="/contact-us/">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="box-featured">
            <div className="box-featured__content">
              <img className='footer-img-width' src={happyclient} alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__left">
          <ul className="footer__nav">
            <li>
              <a rel="nofollow" href="/cookies-policy/">
                Cookies Policy
              </a>
            </li>
            <li>
              <a rel="nofollow" href="/terms/">
                Legal Terms
              </a>
            </li>
            <li>
              <a rel="nofollow" href="/privacy-policy/">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__right">
          <ul className="footer__nav">
            <li>
              <strong>Connect:</strong>
            </li>
            <li>
              <a href="https://www.instagram.com/awwwards">Instagram</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/awwwards">LinkedIn</a>
            </li>
            <li>
              <a href="https://twitter.com/awwwards">Twitter</a>
            </li>
            <li>
              <a href="https://www.facebook.com/awwwards">Facebook</a>
            </li>
            <li>
              <a href="https://www.youtube.com/awwwardstv">YouTube</a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@awwwards.com">TikTok</a>
            </li>
            <li>
              <a href="https://www.pinterest.es/awwwards/">Pinterest</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  
    
  )
}


export default Index