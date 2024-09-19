import React from "react";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedIn,
  TiSocialInstagram,
  TiSocialGithub,
} from "react-icons/ti";
import { IoCloudDownload } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";

const Footer = () => {
  return  (
    <footer
      className="site-footer footer__ico pos-rel"
      data-background="assets/img/bg/footer_bg.png"
    >
      <div className="container">
        <div className="row mt-none-38">
          <div className="col-lg-4 mt-30">
            <div className="footer__widget footer__subscribe">
              <h2>Subscribe newsletter</h2>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo omnis, assumenda nemo dolorem nostrum alias?
              </p>

              <form action="">
                <input
                  type="text" 
                  placeholder="info@1mpro.xyz" 
                />
                <button>
                  <IoIosSend />
                </button>
                </form>
              </div>
            </div>

            <div className="col-lg-8 mt-30">
              <div className="footer__widget text-lg-end">
                <h2>Download Document</h2>

                <div className="footer__document-item ul_li_right">
                  <a href="#" className="footer__document-item text-center">
                    <div className="icon">
                      <img src="assets/img/icon/pdf.svg" alt="" srcset="" />
                    </div>
                    <span className="title">
                      <IoCloudDownload />
                      white paper
                    </span>
                  </a>
                  <a href="#" className="footer__document-item text-center">
                    <div className="icon">
                      <img src="assets/img/icon/pdf.svg" alt="" srcset="" />
                      <span className="title">
                        <IoCloudDownload />
                        one paper
                      </span>
                    </div>
                  </a>
                  <a href="#" className="footer__document-item text-center">
                    <div className="icon">
                      <img src="assets/img/icon/pdf.svg" alt="" srcset="" />
                      <span className="title">
                        <IoCloudDownload />
                        privacy policy
                      </span>
                    </div>
                  </a>
                  <a href="#" className="footer__document-item text-center">
                    <div className="icon">
                      <img src="assets/img/icon/pdf.svg" alt="" srcset="" />
                      <span className="title">
                        <IoCloudDownload />
                        terms of sale
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer__button ul_li_between mt-50">
            <div className="footer__logo mt-20">
              <a href="#">
              <img src="assets/img/logo/logomp.svg" alt="" srcset="" />
              </a>
            </div>

            <ul className="footer__social ul_li mt-20">
              <li>
                <a href="#">
                  <TiSocialFacebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <TiSocialTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <TiSocialLinkedIn />
                </a>
              </li>
              <li>
                <a href="#">
                  <TiSocialInstagram />
                </a>
              </li>
              <li>
                <a href="#">
                  <TiSocialGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__copyright mt-35">
          <div className="container">
            <div className="footer__copyright-inner ul_li_between">
              <div className="footer__copyright-text mt-15">
                Copyright @ 2024 @1MPro All rights recerved
              </div>
              
              <ul className="footer__links ul_li_right mt-15">
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Cookies</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
              </ul>
            </div>

            <ul>

            </ul>
          </div>
        </div>

        <div className="footer__icon-shape">
          <div className="icon icon--1">
            <div>
              <img src="asset/img/shape/f_icon.png" alt="" />
            </div>
          </div>

          <div className="icon icon--2">
            <div>
              <img src="asset/img/shape/f_icon2.png" alt="" srcset="" />
            </div>
          </div>
        </div>
      </footer>
  );   
};
    
export default Footer;
