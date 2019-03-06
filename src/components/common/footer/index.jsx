import React, { Component } from 'react';

class FooterComponent extends Component {
    render() {
    const images = this.props.images;
        return (
            <footer className="main_footer">
            <div className="row">
              <div className="col-md-6 col-xs-6 col-sm-6">
                <div className="footer_logo">
                  <img src={images["footer-logo.png"]} alt="footer logo" />
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="copyright_footer text-right">
                  <p>© 2019 Zanmai Labs Private Limited. All rights reserved</p>
                </div>
              </div>
            </div>
            <div className="bottom_footer">
              <div className="row hide_for_mobile">
                <div className="col-md-8">
                  <div className="col-md-3 float-left">
                    <h4 className="footer_title">Legal</h4>
                  </div>
                  <div className="col-md-3 float-left">
                    <h4 className="footer_title">About</h4>
                  </div>
                  <div className="col-md-3 float-left">
                    <h4 className="footer_title">Support</h4>
                  </div>
                  <div className="col-md-3 float-left">
                    <h4 className="footer_title">Download</h4>
                  </div>
                </div>
                <div className="col-md-4 footer_blank" />
              </div>
              <div className="footer_border" />
              <div className="row">
                <div className="col-md-4 footer_socials show_for_mobile_hide_desktop">
                  <div className="bottom_footer_social_icons">
                    <ul className="pull-right">
                      <li><a href="#"><i className="fa fa-paper-plane" aria-hidden="true" /></a></li>
                      <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                      <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                      <li><a href="#"><i className="fa fa-maxcdn" aria-hidden="true" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="col-md-3 float-left" >
                    <h4 className="footer_title for_mobile_show">Legal</h4>
                    <ul>
                      <li><a href="#">AML Policy</a></li>
                      <li><a href="#">Terms of use</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="#">Refund Policy</a></li>
                    </ul>
                  </div>
                  <div className="col-md-3 float-left">
                    <h4 className="footer_title for_mobile_show">About</h4>
                    <ul>
                      <li><a href="#">FAQs</a></li>
                      <li><a href="#">What is WRX Coin?</a></li>
                      <li><a href="#">WazirX API</a></li>
                      <li><a href="#">Trading, Deposit &amp; Withdrawal Fees</a></li>
                      <li><a href="#">Security</a></li>
                      <li><a href="#">Jobs</a></li>
                      <li><a href="#">Blog</a></li>
                    </ul>
                  </div>
                  <div className="col-md-3 float-left">
                    <h4 className="footer_title for_mobile_show">Support</h4>
                    <ul>
                      <li><a href="#">Help Center</a></li>
                      <li><a href="#">List your Token</a></li>
                      <li><a href="#">Partnerships &amp; Enquiries</a></li>
                      <li><a href="#">Media Assets</a></li>
                    </ul>
                  </div>
                  <div className="col-md-3 float-left">
                    <div className="footer_app_icons">
                      <h4 className="footer_title for_mobile_show">Download</h4>
                      <ul>
                        <li><a href="#"><i className="fa fa-android" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fa fa-apple" aria-hidden="true" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 footer_socials">
                  <div className="bottom_footer_social_icons">
                    <ul className="pull-right">
                      <li><a href="#"><i className="fa fa-paper-plane" aria-hidden="true" /></a></li>
                      <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                      <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                      <li><a href="#"><i className="fa fa-maxcdn" aria-hidden="true" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>

        );
    }
};


export default FooterComponent;
