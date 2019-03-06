import React, { Component } from 'react';
import HeaderComponent from '../common/header/index';
import FooterComponent from '../common/footer/index';
import '../home/css/custom.css';

class NewComponent extends Component {
  render() {
    const importAll = require =>
    require.keys().reduce((acc, next) => {
      acc[next.replace("./", "")] = require(next);
      return acc;
    }, {});
    const images = importAll(require.context('../../assets/img', false, /\.(png|jpe?g|svg)$/));

    return (
      <div>
        {/* Hello world */}
        <div className="awesome" style={{ border: '1px solid red' }}>
         <HeaderComponent images={images} />
          <section className="home_banners">
            <div className="row">
              <div className="col-md-7">
                <div className="left_banner_content">
                  <div className="art_line-banner col-md-5 col-xs-5"><img className="img-responsive" src={images['art-line.png']} alt="art_line" /></div>
                  <h2>WAZIRX IS INDIA’S MOST <span>TRUSTED BITCOIN EXCHANGE</span></h2>
                  <p>Buy, Sell &amp; Trade Bitcoin, Ethereum, Ripple, Litecoin and more cryptocurrencies in India. Start trading <span>now!</span></p>
                  <h5>Sign up now &amp; Earn <a href="#">100 WRX</a> Coins!</h5>
                  <a href="#" type="button" className="sign_up_button">Sign Up Now</a>
                  <div className="play_store_icons">
                    <a href="javascript:void(0);" className="play_store_data">
                      <img src={images["google_play.png"]} alt="google play" />
                    </a>
                    <a href="javascript:void(0);" className="app_store-data">
                      <img src={images["app_store.png"]} alt="app store" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="right_banner_content">
                  <img src={images["headerImage_banner.png"]} alt="header image" />
                </div>
              </div>
            </div>
          </section>
          <section className="coin_about">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div className="wrx_image text-left">
                    <img src={images["wrx_coin.png"]} alt="wrx" />
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="wrx_right_content">
                    <div className="download_art_line-banner col-md-3 col-xs-3"><img className="img-responsive" src={images["download_art_line.png"]} alt="art_line" /></div>
                    <h3>The Great 150 Million WRX Coins Giveaway by WazirX. Don’t <span>miss out.</span></h3>
                    <h6>Just like Bitcoin and other cryptocurrencies today, WRX is a digital coin created by WazirX. There will be a maximum of 1 Billion WRX coins ever created.</h6>
                    <hr />
                    <p>Of these, we’ve decided to do a free giveaway of 150 Million (15%) coins to the early adopters and traders of WazirX who signup early. WRX is going to be the first coin in the world where the early recipients of the coin are going to be Indian citizens. This is your chance to own WRX coins, so don’t miss out!</p>
                    <a href="#" className="red_more">Read more about how the 150M coins will be given away and how you can earn them.</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="featured-data">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="feature_in_data">
                    <h3>Featured In</h3>
                    <div className="marquee_images">
                      <marquee direction="left" behavior="alternate" >
                        <ul>
                          <li><a href="#"><img src={images["feature_01.png"]} alt="feature_images" /></a></li>
                          <li><a href="#"><img src={images["feature_02.png"]} alt="feature_images" /></a></li>
                          <li><a href="#"><img src={images["feature_03.png"]} alt="feature_images" /></a></li>
                          <li><a href="#"><img src={images["feature_04.png"]} alt="feature_images" /></a></li>
                          <li><a href="#"><img src={images["feature_05.png"]} alt="feature_images" /></a></li>
                          <li><a href="#"><img src={images["feature_06.png"]} alt="feature_images" /></a></li>
                          <li><a href="#"><img src={images["feature_07.png"]} alt="feature_images" /></a></li>
                          <li><a href="#"><img src={images["feature_08.png"]} alt="feature_images" /></a></li>
                          <li><a href="#"><img src={images["feature_09.png"]} alt="feature_images" /></a></li>
                          <li><a href="#"><img src={images["feature_10.png"]} alt="feature_images" /></a></li>
                          <li><a href="#"><img src={images["feature_11.png"]} alt="feature_images" /></a></li>
                          <li><a href="#"><img src={images["feature_12.png"]} alt="feature_images" /></a></li>
                          <li><a href="#"><img src={images["feature_13.png"]} alt="feature_images" /></a></li>
                          <li><a href="#"><img src={images["feature_14.png"]} alt="feature_images" /></a></li>
                          <li><a href="#"><img src={images["feature_15.png"]} alt="feature_images" /></a></li>
                          <li><a href="#"><img src={images["feature_08.png"]} alt="feature_images" /></a></li>
                          <li><a href="#"><img src={images["feature_09.png"]} alt="feature_images" /></a></li>
                          <li><a href="#"><img src={images["feature_10.png"]} alt="feature_images" /></a></li>
                          <li><a href="#"><img src={images["feature_11.png"]} alt="feature_images" /></a></li>
                          <li><a href="#"><img src={images["feature_12.png"]} alt="feature_images" /></a></li>
                        </ul>
                      </marquee>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="coin_timeline">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="top_heading_title text-center">
                    <h2>WRX Coin Timeline</h2>
                  </div>
                  <div className="sc-htpNat fnabJv">
                    <div className="sc-gisBJw hLugDy" color="#3df4ff">
                      <div className="sc-htpNat jZmgcW">
                        <div className="sc-fAjcbJ gRZfif">
                          <p className="sc-bxivhb kUbyHI">Phase 1 (completed)</p>
                          <p className="sc-bxivhb dJVBPh">Earn 500 WRX on signing up.</p>
                          <p className="sc-bxivhb cuhOMB">Exclusively for the first 10,000 traders.</p>
                          <a href="#">(Sign Up Now)</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sc-kjoXOD eaIQfW" />
                  <div className="sc-htpNat gtiYNb">
                    <div className="sc-caSCKo kmdusP">
                      <div className="sc-htpNat jZmgcW">
                        <div className="sc-fAjcbJ dJWlmx">
                          <p className="sc-bxivhb dHhwIL">Phase 2 (Active)</p>
                          <ul>
                            <li>First 30,000 Traders - Earn 250 WRX coins when you sign up - Completed</li>
                            <li>Next 30,000 Traders- Earn 100 WRX coins when you sign up - <b>Active</b></li>
                            <li>Earn 100 WRX coins for every friend you refer to WazirX - <b>Active</b></li>
                            <li>Your friend will earn 100 WRX coins too - <b>Active</b></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sc-kjoXOD gRrJLS" />
                  <div className="sc-htpNat fnabJv">
                    <div className="sc-gisBJw bXfTYM">
                      <div className="sc-htpNat jZmgcW">
                        <div className="sc-fAjcbJ kdaCBQ">
                          <p className="sc-bxivhb kUbyHI">Phase 3 (Active)</p>
                          <p className="sc-bxivhb dJVBPh">WazirX Bitcoin Exchange Launch.</p>
                          <p className="sc-bxivhb cuhOMB">WRX coins will be credited to you when you make your first Buy, Sell or Trade!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sc-kjoXOD gyAixI" />
                  <div className="sc-htpNat gtiYNb">
                    <div className="sc-caSCKo hzBEAA">
                      <div className="sc-htpNat jZmgcW">
                        <div className="sc-fAjcbJ dowXtF">
                          <p className="sc-bxivhb dHhwIL">Phase 4</p>
                          <p className="sc-bxivhb hDdiYT">WRX Coin Listing on WazirX.</p>
                          <p className="sc-bxivhb gaOLnX">Trading of WRX Coins starts.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sc-htpNat dUGlfw">
                    <div className="sc-gisBJw fKflrX" />
                  </div>
                  <div className="sc-kjoXOD bBeybt" />
                  <div className="sc-htpNat gtiYNb">
                    <div className="sc-caSCKo iEJqxJ" />
                  </div>
                  <div className="sc-kjoXOD RBGDf" />
                  <div className="sc-htpNat dUGlfw">
                    <div className="sc-gisBJw dKFNjw" />
                  </div>
                  <div className="sc-kjoXOD dfrUAX" />
                </div>
              </div>
            </div>
          </section>
          <section className="sequirity_sec">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <div className="inner_security_part text-center">
                  <img src={images["lock_icon.png"]} alt="lock" />
                  <h4>Best in className  security</h4>
                  <p>We’ve left no stone unturned to make WazirX India’s most secure exchange. We’re investing in regular security audits to ensure a highly secured trading platform for India.</p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="inner_security_part text-center">
                  <img src={images["super_fast.png"]} alt="super_fast" />
                  <h4>Super Fast KYC</h4>
                  <p>Top of the line identity verification systems process your KYC within a few hours of signing up, while ensuring the right KYC protocol. We’re building in robustness to sharply reduce verification times.</p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="inner_security_part text-center">
                  <img src={images["lighting_speed.png"]} alt="lighting_speed" />
                  <h4>Lightning Speed Transactions</h4>
                  <p>WazirX can handle Millions of transactions. Our system infrastructure can scale up in a few seconds to match surging demand.</p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="inner_security_part text-center">
                  <img src={images["app_icons.png"]} alt="app" />
                  <h4>Android &amp; iOS Apps</h4>
                  <p>WazirX is India’s first Bitcoin exchange with a powerful web platform as well as Android &amp; iOS mobile apps.</p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="inner_security_part text-center">
                  <img src={images["efficient_design_icon.png"]} alt="efficient_design_icon" />
                  <h4>Simple &amp; Efficient Design</h4>
                  <p>Trading on the WazirX platform is a super fast experience you’ll fall in love with! We’ve built technology used by Millions, and that experience has helped us build this powerful exchange.</p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="inner_security_part text-center">
                  <img src={images["blockchain_icon.png"]} alt="blockchain_icon" />
                  <h4>Built By Blockchain Believers</h4>
                  <p>We’re a team of hardcore traders &amp; passionate blockchain believers. We understand exactly what you need. Powerful graphs, mobile apps, etc are features being built into WazirX from day 1.</p>
                </div>
              </div>
            </div>
          </section>
          <section className="team_section">
            <div className="top_heading_team">THE TEAM</div>
            <div className="row">
              <div className="col-md-4">
                <div className="team_data">
                  <img src={images["team_icon_01.png"]} alt="team" />
                  <h2>Nischal Shetty</h2>
                  <p>Founded Crowdfire after an all-night coding session. Blockchain influencer on Twitter<a href="#" target="_blank">(Follow him)</a> with over 50K followers. Forbes 30 under 30. He's on a mission to involve every Indian in the blockchain revolution!</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="team_data">
                  <img src={images["team_icon_02.png"]} alt="team" />
                  <h2>Sameer Mhatre</h2>
                  <p>Ex-Network 18. Co-founder of Crowdfire. Oversees all things tech. An ace developer (full-stack) and designer wrapped into one. A huge Java and JS fan. Solves programming puzzles on TopCoder when not busy.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="team_data">
                  <img src={images["team_icon_03.png"]} alt="team" />
                  <h2>Siddharth Menon</h2>
                  <p>Co-founded Crowdfire. Heads Product at Wazirx. Has been involved in the crypto revolution since the beginning. Believes in open-economy, and that more Indians should be a part of it.&nbsp;<a href="#" target="_blank">(Follow him)</a></p>
                </div>
              </div>
            </div>
          </section>
          <section className="every_indian_sec">
            <h2>WazirX is for every Indian</h2>
            <h4>We’re building an exchange that will bring every Indian to join the digital cyptocurrency revolution. The world is moving on to this revolution at an unprecedented pace.</h4>
            <p>Now is India’s time. With WazirX you can Buy, Sell &amp; Trade digital currencies with amazing ease, confidence and trust. Whether you’re a first time investor or a professional trader - WazirX has got you both covered!</p>
          </section>
          <FooterComponent images={images}/>
        </div>

      </div>
    );
  }
};


export default NewComponent;
