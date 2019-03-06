import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class  P2p extends Component {
  constructor() {
    super();
    this.state = {
      classdata: "prefered_seller_header",
      displaypropp : "none",
      classactivemarket : 'active',
      classactiveorder : '',    
      classactiveseller : '',
      classactivebuyer : 'active',
      classactiveopen : 'active',
      classactiveclose : '',
      classactivebuy : 'active',
      classactivesell : '',
      classactivebuybar: 'buy-active-a',
      classactivesellbar: '',
      classactivebuybtn : 'place_buy_order',
      
    };
    this.prefered_seller_header = this.prefered_seller_header.bind(this);
    this.changetabs = this.changetabs.bind(this);
  }
  prefered_seller_header (event){  //alert();

    const changedclass = "prefered_seller_header opened";
    if(this.state.classdata == changedclass){
      this.setState({ 
        classdata : 'prefered_seller_header',
        displaypropp: "none"
       });
    }else{
      this.setState({ 
        classdata : 'prefered_seller_header opened',
        displaypropp: "block" 
      });
    }
    
  }

  changetabs (event){ 
   
    if(event.target.parentNode.getAttribute('id') === 'order') {
     
      this.setState({ 
        classactivemarket : '',
        classactiveorder : 'active'
      });
    } else if(event.target.parentNode.getAttribute('id') === 'market') {
       this.setState({ 
        classactivemarket : 'active',
        classactiveorder : ''
      });
    } else if(event.target.parentNode.getAttribute('id') === 'buyer') {
       this.setState({ 
        classactivebuyer : 'active',
        classactiveseller : ''
      });
    } else if(event.target.parentNode.getAttribute('id') === 'seller') {
       this.setState({ 
        classactiveseller : 'active',
        classactivebuyer : ''
      });
    } else if(event.target.parentNode.getAttribute('id') === 'open') {
       this.setState({ 
        classactiveopen : 'active',
        classactiveclose : ''
      });
    } else if(event.target.parentNode.getAttribute('id') === 'close') {
       this.setState({ 
        classactiveopen : '',
        classactiveclose : 'active'
      });
    } else if(event.target.parentNode.getAttribute('id') === 'buy') {
       this.setState({ 
        classactivebuy : 'active',
        classactivesell : ''
      });
    } else if(event.target.parentNode.getAttribute('id') === 'sell') {
       this.setState({ 
        classactivebuy : '',
        classactivesell : 'active'
      });
    } 

    if(event.target.id === 'buybar') {
       this.setState({ 
        classactivebuybar : 'buy-active-a',
        classactivesellbar : '',
        classactivebuybtn : 'place_buy_order'
      });
    } else if(event.target.id === 'sellbar') { 
       this.setState({ 
        classactivebuybar : '',
        classactivesellbar : 'sell-active-a',
        classactivebuybtn : 'place_buy_order sell-active-btn'
      });
    }

  }
  render() {
   const importAll = require =>
  require.keys().reduce((acc, next) => {
    acc[next.replace("./", "")] = require(next);
    return acc;
  }, {});



  

  const images = importAll(require.context('../../assets/img', false, /\.(png|jpe?g|svg)$/));
    
 function addClass (name) { 
  var x = document.getElementById("navbar");
  if (x.className === "collapse navbar-collapse") {
    x.className += " in";
  } else {
    x.className = "collapse navbar-collapse";
  } 
}

    const  classes  = this.state.classdata;
    const displayproppapps = this.state.displaypropp ;
    const classactive = this.state.classactive ;
    const classactivemarket = this.state.classactivemarket ;
    const classactiveorder = this.state.classactiveorder ;
    const classactivebuyer = this.state.classactivebuyer ;
    const classactiveseller = this.state.classactiveseller ;
    const classactiveopen = this.state.classactiveopen ;
    const classactiveclose = this.state.classactiveclose ;
    const classactivebuy = this.state.classactivebuy ;
    const classactivesell = this.state.classactivesell ;
    const classactivebuybar = this.state.classactivebuybar ;
    const classactivesellbar = this.state.classactivesellbar ;
    const classactivebuybtn= this.state.classactivebuybtn;
    

    return (
      <div>
        {/* Hello world */}
        <div className ="awesome" style={{border: '1px solid red'}}>
          <div className="p2p_wrapper">
            <nav className="navbar navbar-inverse p2p_header">
              <div className="navbar-header">
                <button type="button" onClick={addClass} className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                {/* <a className="navbar-brand" href="#"><img src={images["wazir-logo-white.png"]} alt="wazir-logo-white" /></a> */}
                <NavLink className="navbar-brand" to= "/"><img src={images["wazir-logo-white.png"]} /></NavLink>              </div>
              <div id="navbar" className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                  <li><a href="#"><p>Exchange</p></a></li>
                  <li className="active"><a href="/p2p"><p>P2P</p></a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="#"><p>Deposit Dhamaka</p></a></li>
                  <li><a href="#"><p>Invite &amp; Earn 50% Fees</p></a></li>
                  <li><a href="#"><i className="fa fa-mobile" aria-hidden="true" /><p>Download Apps</p></a></li>
                  <li><a href="#"><i className="fa fa-question-circle-o" aria-hidden="true" /></a></li>
                </ul>
              </div>{/*/.nav-collapse */}
            </nav>
            {/*header close here*/}
            <section className="p2p_content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-4">{/*left content start heere*/}  
                    <div className="order_book_table">
                      {/* Nav tabs */}
                      <div className="right_tabs">
                        <h3>Order Book</h3>
                        <ul className="nav nav-tabs" role="tablist">
                          <li role="presentation" onClick={this.changetabs} id="market"  className={classactivemarket}><a  href="javascript:void(0);"  aria-controls="market_depth" role="tab" data-toggle="tab">Market depth</a></li>
                          <li role="presentation" onClick={this.changetabs} id="order" className = {classactiveorder}><a   href="javascript:void(0);"  aria-controls="order_volume" role="tab" data-toggle="tab">Order Volume</a></li>
                        </ul>
                      </div>
                      {/* Tab panes */}
                      <div className="tab-content">
                        <div role="tabpanel" className={'tab-pane ' + classactivemarket} id="market_depth">
                          <div className="upper_book_table">
                            <table className="table order-book-table order-book-table--open order-book-table--left">
                              <thead>
                                <tr>
                                  <th className="right">VOLUME</th>
                                  <th className="right">BUY PRICE</th>
                                </tr>
                              </thead>
                              <tbody className="buy">
                                <tr>
                                  <td>239.59</td>
                                  <td>70.71</td>
                                  <td className="filler" style={{width: '2.45462%'}} />
                                </tr>
                                <tr>
                                  <td>1148.25</td>
                                  <td>70.70</td>
                                  <td className="filler" style={{width: '11.7639%'}} />
                                </tr>
                                <tr>
                                  <td>2154.25</td>
                                  <td>70.69</td>
                                  <td className="filler" style={{width: '22.0705%'}} />
                                </tr>
                                <tr>
                                  <td>2564.71</td>
                                  <td>70.67</td>
                                  <td className="filler" style={{width: '26.2757%'}} />
                                </tr>
                                <tr>
                                  <td>4064.71</td>
                                  <td>70.66</td>
                                  <td className="filler" style={{width: '41.6433%'}} />
                                </tr>
                                <tr>
                                  <td>5434.85</td>
                                  <td>70.65</td>
                                  <td className="filler" style={{width: '55.6805%'}} />
                                </tr>
                                <tr>
                                  <td>7016.40</td>
                                  <td>70.64</td>
                                  <td className="filler" style={{width: '71.8836%'}} />
                                </tr>
                                <tr>
                                  <td>8372.56</td>
                                  <td>70.63</td>
                                  <td className="filler" style={{width: '85.7776%'}} />
                                </tr>
                                <tr>
                                  <td>9194.73</td>
                                  <td>70.62</td>
                                  <td className="filler" style={{width: '94.2008%'}} />
                                </tr>
                                <tr>
                                  <td>9272.74</td>
                                  <td>70.61</td>
                                  <td className="filler" style={{width: '95%'}} />
                                </tr>
                              </tbody>
                            </table>
                            <table className="table order-book-table order-book-table--open order-book-table--right">
                              <thead>
                                <tr>
                                  <th>SELL PRICE</th>
                                  <th>VOLUME</th>
                                </tr>
                              </thead>
                              <tbody className="sell">
                                <tr>
                                  <td>70.80</td>
                                  <td>167.10</td>
                                  <td className="filler" style={{width: '1.71195%'}} />
                                </tr>
                                <tr>
                                  <td>70.90</td>
                                  <td>238.08</td>
                                  <td className="filler" style={{width: '2.43915%'}} />
                                </tr>
                                <tr>
                                  <td>71.01</td>
                                  <td>319.08</td>
                                  <td className="filler" style={{width: '3.269%'}} />
                                </tr>
                                <tr>
                                  <td>71.07</td>
                                  <td>358.67</td>
                                  <td className="filler" style={{width: '3.6746%'}} />
                                </tr>
                                <tr>
                                  <td>71.09</td>
                                  <td>558.67</td>
                                  <td className="filler" style={{width: '5.72362%'}} />
                                </tr>
                                <tr>
                                  <td>71.16</td>
                                  <td>932.17</td>
                                  <td className="filler" style={{width: '9.55016%'}} />
                                </tr>
                                <tr>
                                  <td>71.17</td>
                                  <td>1124.75</td>
                                  <td className="filler" style={{width: '11.5232%'}} />
                                </tr>
                                <tr>
                                  <td>71.18</td>
                                  <td>1167.61</td>
                                  <td className="filler" style={{width: '11.9623%'}} />
                                </tr>
                                <tr>
                                  <td>71.29</td>
                                  <td>1261.81</td>
                                  <td className="filler" style={{width: '12.9273%'}} />
                                </tr>
                                <tr>
                                  <td>71.30</td>
                                  <td>1342.68</td>
                                  <td className="filler" style={{width: '13.7559%'}} />
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div role="tabpanel" className={'tab-pane ' + classactiveorder} id="order_volume">
                          <div className="upper_book_table">
                            <table className="order-book-table order-book-table--open order-book-table--left">
                              <thead>
                                <tr>
                                  <th className="right">VOLUME</th>
                                  <th className="right">BUY PRICE</th>
                                </tr>
                              </thead>
                              <tbody className="buy">
                                <tr>
                                  <td>264.44</td>
                                  <td>70.90</td>
                                  <td className="filler" style={{width: '16.7479%'}} />
                                </tr>
                                <tr>
                                  <td>50.00</td>
                                  <td>70.81</td>
                                  <td className="filler" style={{width: '3.16667%'}} />
                                </tr>
                                <tr>
                                  <td>90.00</td>
                                  <td>70.80</td>
                                  <td className="filler" style={{width: '5.7%'}} />
                                </tr>
                                <tr>
                                  <td>100.00</td>
                                  <td>70.71</td>
                                  <td className="filler" style={{width: '6.33333%'}} />
                                </tr>
                                <tr>
                                  <td>650.00</td>
                                  <td>70.70</td>
                                  <td className="filler" style={{width: '41.1667%'}} />
                                </tr>
                                <tr>
                                  <td>100.00</td>
                                  <td>70.64</td>
                                  <td className="filler" style={{width: '6.33333%'}} />
                                </tr>
                                <tr>
                                  <td>1500.00</td>
                                  <td>70.63</td>
                                  <td className="filler" style={{width: '95%'}} />
                                </tr>
                                <tr>
                                  <td>1500.00</td>
                                  <td>70.62</td>
                                  <td className="filler" style={{width: '95%'}} />
                                </tr>
                                <tr>
                                  <td>180.00</td>
                                  <td>70.61</td>
                                  <td className="filler" style={{width: '11.4%'}} />
                                </tr>
                                <tr>
                                  <td>1075.00</td>
                                  <td>70.60</td>
                                  <td className="filler" style={{width: '68.0833%'}} />
                                </tr>
                              </tbody>
                            </table>
                            <table className="order-book-table order-book-table--open order-book-table--right">
                              <thead>
                                <tr>
                                  <th>SELL PRICE</th>
                                  <th>VOLUME</th>
                                </tr>
                              </thead>
                              <tbody className="sell">
                                <tr>
                                  <td>70.90</td>
                                  <td>130.24</td>
                                  <td className="filler" style={{width: '8.24853%'}} />
                                </tr>
                                <tr>
                                  <td>70.95</td>
                                  <td>30.00</td>
                                  <td className="filler" style={{width: '1.9%'}} />
                                </tr>
                                <tr>
                                  <td>70.98</td>
                                  <td>64.38</td>
                                  <td className="filler" style={{width: '4.0774%'}} />
                                </tr>
                                <tr>
                                  <td>70.99</td>
                                  <td>200.00</td>
                                  <td className="filler" style={{width: '12.6667%'}} />
                                </tr>
                                <tr>
                                  <td>71.00</td>
                                  <td>798.88</td>
                                  <td className="filler" style={{width: '50.5957%'}} />
                                </tr>
                                <tr>
                                  <td>71.18</td>
                                  <td>42.86</td>
                                  <td className="filler" style={{width: '2.71447%'}} />
                                </tr>
                                <tr>
                                  <td>71.20</td>
                                  <td>100.00</td>
                                  <td className="filler" style={{width: '6.33333%'}} />
                                </tr>
                                <tr>
                                  <td>71.29</td>
                                  <td>50.00</td>
                                  <td className="filler" style={{width: '3.16667%'}} />
                                </tr>
                                <tr>
                                  <td>71.30</td>
                                  <td>147.86</td>
                                  <td className="filler" style={{width: '9.36447%'}} />
                                </tr>
                                <tr>
                                  <td>71.34</td>
                                  <td>50.00</td>
                                  <td className="filler" style={{width: '3.16667%'}} />
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="order_book_table">
                      {/* Nav tabs */}
                      <div className="right_tabs">
                        <h3>XID ORDER BOOK <a href="#">(Read More <i className="fa fa-external-link" aria-hidden="true" />)</a></h3>
                        <ul className="nav nav-tabs" role="tablist">
                          <li role="presentation" id="buyer" className={classactivebuyer} onClick={this.changetabs}><a href="javascript:void(0);" aria-controls="buyers_tab" role="tab"  data-toggle="tab">Buyers</a></li>
                          <li role="presentation" id="seller"  className={classactiveseller} onClick={this.changetabs}><a href="javascript:void(0);" aria-controls="seller_tab" role="tab"  data-toggle="tab">Sellers</a></li>
                        </ul>
                      </div>
                      {/* Tab panes */}
                      <div className="tab-content">
                        <div role="tabpanel"  className={'tab-pane ' + classactivebuyer} id="buyers_tab">
                          <div className="upper_book_table">
                            <table className="order-book-table order-book-table--xid">
                              <colgroup>
                                <col width="30%" />
                                <col width="30%" />
                                <col width="40%" />
                              </colgroup>
                              <thead>
                                <tr>
                                  <th>BUY PRICE</th>
                                  <th>VOLUME</th>
                                  <th>XID</th>
                                </tr>
                              </thead>
                              <tbody className="buy">
                                <tr>
                                  <td>70.71</td>
                                  <td>1370.00</td>
                                  <td><span className="username">anonchoyal</span></td>
                                  <td className="filler" style={{width: '86.7667%'}} />
                                  <td className="overlay">
                                    <div className="overlay__box">
                                      <button className="sc-ifAKCX dXbGXd" width="48px" height="20px">
                                        <p className="sc-bxivhb lpmmyf" color="#ffffff"> SELL </p>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>70.65</td>
                                  <td>1500.00</td>
                                  <td><span className="username">shubham21</span></td>
                                  <td className="filler" style={{width: '95%'}} />
                                  <td className="overlay">
                                    <div className="overlay__box">
                                      <button className="sc-ifAKCX dXbGXd" width="48px" height="20px">
                                        <p className="sc-bxivhb lpmmyf" color="#ffffff"> SELL </p>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>70.63</td>
                                  <td>1500.00</td>
                                  <td><span className="username">sacusdt</span></td>
                                  <td className="filler" style={{width: '95%'}} />
                                  <td className="overlay">
                                    <div className="overlay__box">
                                      <button className="sc-ifAKCX dXbGXd" width="48px" height="20px">
                                        <p className="sc-bxivhb lpmmyf" color="#ffffff"> SELL </p>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>70.51</td>
                                  <td>1180.02</td>
                                  <td><span className="username">maa1968</span></td>
                                  <td className="filler" style={{width: '74.7346%'}} />
                                  <td className="overlay">
                                    <div className="overlay__box">
                                      <button className="sc-ifAKCX dXbGXd" width="48px" height="20px">
                                        <p className="sc-bxivhb lpmmyf" color="#ffffff"> SELL </p>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>70.34</td>
                                  <td>500.00</td>
                                  <td><span className="username">welcomemumbai</span></td>
                                  <td className="filler" style={{width: '31.6667%'}} />
                                  <td className="overlay">
                                    <div className="overlay__box">
                                      <button className="sc-ifAKCX dXbGXd" width="48px" height="20px">
                                        <p className="sc-bxivhb lpmmyf" color="#ffffff"> SELL </p>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>70.33</td>
                                  <td>500.00</td>
                                  <td><span className="username">bet365</span></td>
                                  <td className="filler" style={{width: '31.6667%'}} />
                                  <td className="overlay">
                                    <div className="overlay__box">
                                      <button className="sc-ifAKCX dXbGXd" width="48px" height="20px">
                                        <p className="sc-bxivhb lpmmyf" color="#ffffff"> SELL </p>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>70.32</td>
                                  <td>550.00</td>
                                  <td><span className="username">sj1285</span></td>
                                  <td className="filler" style={{width: '34.8333%'}} />
                                  <td className="overlay">
                                    <div className="overlay__box">
                                      <button className="sc-ifAKCX dXbGXd" width="48px" height="20px">
                                        <p className="sc-bxivhb lpmmyf" color="#ffffff"> SELL </p>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>70.28</td>
                                  <td>500.00</td>
                                  <td><span className="username">soul56</span></td>
                                  <td className="filler" style={{width: '31.6667%'}} />
                                  <td className="overlay">
                                    <div className="overlay__box">
                                      <button className="sc-ifAKCX dXbGXd" width="48px" height="20px">
                                        <p className="sc-bxivhb lpmmyf" color="#ffffff"> SELL </p>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>70.25</td>
                                  <td>500.00</td>
                                  <td><span className="username">vikasnehra</span></td>
                                  <td className="filler" style={{width: '31.6667%'}} />
                                  <td className="overlay">
                                    <div className="overlay__box">
                                      <button className="sc-ifAKCX dXbGXd" width="48px" height="20px">
                                        <p className="sc-bxivhb lpmmyf" color="#ffffff"> SELL </p>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>70.21</td>
                                  <td>569.71</td>
                                  <td><span className="username">laxminarayan</span></td>
                                  <td className="filler" style={{width: '36.0816%'}} />
                                  <td className="overlay">
                                    <div className="overlay__box">
                                      <button className="sc-ifAKCX dXbGXd" width="48px" height="20px">
                                        <p className="sc-bxivhb lpmmyf" color="#ffffff"> SELL </p>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div role="tabpanel"  className={'tab-pane ' + classactiveseller} id="seller_tab">
                          <div className="upper_book_table">
                            <table className="order-book-table order-book-table--xid">
                              <colgroup>
                                <col width="30%" />
                                <col width="30%" />
                                <col width="40%" />
                              </colgroup>
                              <thead>
                                <tr>
                                  <th>SELL PRICE</th>
                                  <th>VOLUME</th>
                                  <th>XID</th>
                                </tr>
                              </thead>
                              <tbody className="sell">
                                <tr>
                                  <td>71.29</td>
                                  <td>1409.10</td>
                                  <td><span className="username">mhsethi</span></td>
                                  <td className="filler" style={{width: '37.2678%'}} />
                                  <td className="overlay">
                                    <div className="overlay__box">
                                      <button className="overlay__box__button sc-ifAKCX cvwdwF" width="48px" height="20px">
                                        <p className="sc-bxivhb lpmmyf" color="#ffffff"> BUY </p>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>71.30</td>
                                  <td>600.00</td>
                                  <td><span className="username">despot</span></td>
                                  <td className="filler" style={{width: '15.8688%'}} />
                                  <td className="overlay">
                                    <div className="overlay__box">
                                      <button className="overlay__box__button sc-ifAKCX cvwdwF" width="48px" height="20px">
                                        <p className="sc-bxivhb lpmmyf" color="#ffffff"> BUY </p>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>71.43</td>
                                  <td>1500.00</td>
                                  <td><span className="username">kkcrypto</span></td>
                                  <td className="filler" style={{width: '39.6719%'}} />
                                  <td className="overlay">
                                    <div className="overlay__box">
                                      <button className="overlay__box__button sc-ifAKCX cvwdwF" width="48px" height="20px">
                                        <p className="sc-bxivhb lpmmyf" color="#ffffff"> BUY </p>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>71.44</td>
                                  <td>740.00</td>
                                  <td><span className="username">maa1968</span></td>
                                  <td className="filler" style={{width: '19.5715%'}} />
                                  <td className="overlay">
                                    <div className="overlay__box">
                                      <button className="overlay__box__button sc-ifAKCX cvwdwF" width="48px" height="20px">
                                        <p className="sc-bxivhb lpmmyf" color="#ffffff"> BUY </p>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>71.45</td>
                                  <td>2381.47</td>
                                  <td><span className="username">cryptomicheal</span></td>
                                  <td className="filler" style={{width: '62.985%'}} />
                                  <td className="overlay">
                                    <div className="overlay__box">
                                      <button className="overlay__box__button sc-ifAKCX cvwdwF" width="48px" height="20px">
                                        <p className="sc-bxivhb lpmmyf" color="#ffffff"> BUY </p>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>71.69</td>
                                  <td>1506.59</td>
                                  <td><span className="username">fastusdt</span></td>
                                  <td className="filler" style={{width: '39.8462%'}} />
                                  <td className="overlay">
                                    <div className="overlay__box">
                                      <button className="overlay__box__button sc-ifAKCX cvwdwF" width="48px" height="20px">
                                        <p className="sc-bxivhb lpmmyf" color="#ffffff"> BUY </p>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>71.71</td>
                                  <td>3591.96</td>
                                  <td><span className="username">cryptomicheal</span></td>
                                  <td className="filler" style={{width: '95%'}} />
                                  <td className="overlay">
                                    <div className="overlay__box">
                                      <button className="overlay__box__button sc-ifAKCX cvwdwF" width="48px" height="20px">
                                        <p className="sc-bxivhb lpmmyf" color="#ffffff"> BUY </p>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>71.80</td>
                                  <td>1023.08</td>
                                  <td><span className="username">cryptolalit</span></td>
                                  <td className="filler" style={{width: '27.0584%'}} />
                                  <td className="overlay">
                                    <div className="overlay__box">
                                      <button className="overlay__box__button sc-ifAKCX cvwdwF" width="48px" height="20px">
                                        <p className="sc-bxivhb lpmmyf" color="#ffffff"> BUY </p>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>73.00</td>
                                  <td>2300.00</td>
                                  <td><span className="username">cryptofanda</span></td>
                                  <td className="filler" style={{width: '60.8303%'}} />
                                  <td className="overlay">
                                    <div className="overlay__box">
                                      <button className="overlay__box__button sc-ifAKCX cvwdwF" width="48px" height="20px">
                                        <p className="sc-bxivhb lpmmyf" color="#ffffff"> BUY </p>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>73.00</td>
                                  <td>1000.09</td>
                                  <td><span className="username">plato</span></td>
                                  <td className="filler" style={{width: '26.4503%'}} />
                                  <td className="overlay">
                                    <div className="overlay__box">
                                      <button className="overlay__box__button sc-ifAKCX cvwdwF" width="48px" height="20px">
                                        <p className="sc-bxivhb lpmmyf" color="#ffffff"> BUY </p>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{/*left content close here*/}  
                  <div className="col-md-4">{/*middle conent start here*/}
                    <div className="order_book_table">
                      <div className="right_tabs">
                        <h3>Match History</h3>
                      </div>
                      <div className="upper_book_table">
                        <div className="sc-fOICqy dfBYMX sc-eInJlc iJXbTi">
                          <div className="sc-htpNat hdXkGz">
                            <table className="trade-history">
                              <thead>
                                <tr>
                                  <th>PRICE</th>
                                  <th>VOLUME</th>
                                  <th>TIME</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr refvalue={0} className="fadeInRed">
                                  <td><i className="fa fa-long-arrow-down" aria-hidden="true" />70.81</td>
                                  <td>100.00</td>
                                  <td>13:38:22</td>
                                </tr>
                                <tr refvalue={1} className="fadeInGreen">
                                  <td><i className="fa fa-long-arrow-up" aria-hidden="true" />71.29</td>
                                  <td>1409.10</td>
                                  <td>13:37:52</td>
                                </tr>
                                <tr refvalue={1} className="fadeInGreen">
                                  <td><i className="fa fa-long-arrow-up" aria-hidden="true" />71.00</td>
                                  <td>29.84</td>
                                  <td>13:35:52</td>
                                </tr>
                                <tr refvalue={1} className="fadeInGreen">
                                  <td><i className="fa fa-long-arrow-up" aria-hidden="true" />70.94</td>
                                  <td>20.16</td>
                                  <td>13:35:52</td>
                                </tr>
                                <tr refvalue={0} className="fadeInRed">
                                  <td><i className="fa fa-long-arrow-down" aria-hidden="true" />70.80</td>
                                  <td>35.31</td>
                                  <td>13:35:07</td>
                                </tr>
                                <tr refvalue={1} className="fadeInGreen">
                                  <td><i className="fa fa-long-arrow-up" aria-hidden="true" />70.95</td>
                                  <td>34.69</td>
                                  <td>13:35:07</td>
                                </tr>
                                <tr refvalue={0} className="fadeInRed">
                                  <td><i className="fa fa-long-arrow-down" aria-hidden="true" />70.80</td>
                                  <td>35.31</td>
                                  <td>13:34:22</td>
                                </tr>
                                <tr refvalue={1} className="fadeInGreen">
                                  <td><i className="fa fa-long-arrow-up" aria-hidden="true" />70.95</td>
                                  <td>39.99</td>
                                  <td>13:34:22</td>
                                </tr>
                                <tr refvalue={1} className="fadeInGreen">
                                  <td><i className="fa fa-long-arrow-up" aria-hidden="true" />70.80</td>
                                  <td>148.69</td>
                                  <td>13:32:52</td>
                                </tr>
                                <tr className="fadeInRed">
                                  <td><i className="fa fa-long-arrow-down" aria-hidden="true" />70.80</td>
                                  <td>16.00</td>
                                  <td>13:32:52</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="order_book_table open_completed_order">
                      {/* Nav tabs */}
                      <div className="right_tabs">
                        <ul className="nav nav-tabs" role="tablist">
                          <li role="presentation" id="open" className={classactiveopen} onClick={this.changetabs}><a href="javascript:void(0);" aria-controls="open_orders" role="tab" data-toggle="tab">Open Orders</a></li>
                          <li role="presentation" id="close" className={classactiveclose} onClick={this.changetabs}><a href="javascript:void(0);" aria-controls="completed_orders" role="tab" data-toggle="tab">Completed Orders</a></li>
                        </ul>
                      </div>
                      {/* Tab panes */}
                      <div className="tab-content">
                        <div role="tabpanel" className={'tab-pane ' + classactiveopen} id="open_orders">
                          <div className="upper_book_table">
                            <div className="sc-hgHYgh uuBqR">
                              <div className="inner_account_part">
                                <button className="sc-ifAKCX bwUeNe">Login</button>
                                <p className="sc-bxivhb kXHauW">OR</p>
                                <button className="sc-ifAKCX iMzfdG">Create an account</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div role="tabpanel" className={'tab-pane ' + classactiveclose} id="completed_orders">
                          <div className="upper_book_table">
                            <div className="sc-hgHYgh uuBqR">
                              <div className="inner_account_part">
                                <button className="sc-ifAKCX bwUeNe">Login</button>
                                <p className="sc-bxivhb kXHauW">OR</p>
                                <button className="sc-ifAKCX iMzfdG">Create an account</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> {/*middle conent close here*/}
                  <div className="col-md-4">{/*right content start here*/}
                    <div className="funds-p2p">                
                      <div className="row">
                        <div className="col-md-2 no-gutter">
                          <div className="funds-p2p-logo"><img src={images["inr-usdt-logo.9532355a.svg"]} alt="inr-usdt-logo" /></div>
                        </div>
                        <div className="col-md-10 no-gutter">
                          <div className="funds-p2p-wrapper">
                            <div className="funds-p2p-wrapper-title"><span className="funds-p2p-wrapper-title-text">WazirX P2P: Convert INR ↔ USDT</span></div>
                            <div className="funds-p2p-wrapper-description"><span className="funds-p2p-wrapper-description-text">Use WazirX P2P when you want to buy USDT to trade cryptos, or when you want to sell USDT and cash out to INR. It's safe and hassle free!</span></div>
                          </div>
                        </div>  
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="p2p-illustration">
                            <a className="p2p-illustration-heading sc-ktHwxA hzJVYn" target="_blank" href="#">
                              <span className="p2p-illustration-heading-title">How it works ?</span>
                              <span className="p2p-illustration-heading-subtitle">(Read More <i className="fa fa-external-link" />)</span>
                            </a>
                            <img src={images["how-it-works.svg"]} alt="how-it-works" className="p2p-illustration-image" />
                          </div>
                        </div>
                      </div> 
                    </div>
                    <div className="order_book_table open_completed_order form_buy_sell">
                      {/* Nav tabs */}
                      <div className="right_tabs">
                        <ul className="nav nav-tabs" role="tablist">
                          <li role="presentation" id="buy" className={classactivebuy} onClick={this.changetabs}><a href="javascript:void(0);" aria-controls="buy_form" role="tab" id="buybar" className={classactivebuybar} data-toggle="tab">Buy</a></li>
                          <li role="presentation" id="sell" className={classactivesell} onClick={this.changetabs}><a href="javascript:void(0);" aria-controls="sell_form" role="tab" id="sellbar" className={classactivesellbar} data-toggle="tab">Sell</a></li>
                        </ul>
                      </div>
                      {/* Tab panes */}
                      <div className="tab-content">
                        <div role="tabpanel" className={'tab-pane ' + classactivebuy} id="buy_form">
                          <form className="buy-sell-form">
                            <div className="row">
                              <div className="col-md-12">                      
                                <div className="form-group">
                                  <div className="input_plotting">
                                    <div className="label_data">
                                      <p>Price</p><p>INR</p>
                                    </div>
                                    <input type="text" name="curreny" placeholder={0.0} className="form-control" />
                                  </div>
                                </div>
                                <div className="form-group">
                                  <label>Volume</label>
                                  <div className="input_plotting">
                                    <div className="label_data">
                                      <p>USDT</p>
                                    </div>
                                    <input type="text" name="volume" placeholder={0} className="form-control" />
                                  </div>
                                </div>
                                <div className="form-group total_form_group">
                                  <label>Total</label>
                                  <div className="input_plotting">
                                    <div className="label_data">
                                      <p>INR</p>
                                    </div>
                                    <input type="text" name="volume" placeholder={0.00} className="form-control" />
                                  </div>
                                  <p className="sc-kTUwUJ gfGHah">Min amount ₹1,000 | Max amount ₹1,00,000</p>
                                </div>                      
                                <div className="prefered_seller">
                                  <div className= {classes}  onClick={this.prefered_seller_header}>
                                    <i className="fa fa-caret-right" aria-hidden="true" /> Add preferred seller (Optional)
                                  </div>
                                  <div className="prefered_seller_body" style={{display: displayproppapps}} >                            
                                    <div className="form-group">
                                      <label>Enter XID of preferred</label>
                                      <input type="text" name placeholder="Eg: cryptotrader" className="form-control" />
                                    </div>
                                    <a className="how_it_work_prefered" href="#" target="_blank">How it works <i className="fa fa-external-link" /></a>
                                    <div className="get_own_username">
                                      <div className="xid-body-username-create">
                                        <span className="xid-body-username-label">Get your own XID!</span>
                                        <a className="xid-body-username-link">Create now</a>
                                      </div>
                                      <div className="xid-body-username-intro">
                                        <ol className="xid-body-username-intro-list">
                                          <li>Create &amp; Share your XID in Crypto groups</li>
                                          <li>Get matched instantly with sellers</li>
                                        </ol>
                                      </div>
                                    </div>
                                  </div>                         
                                </div>      
                                <div className="form-group">
                                  <button type="submit" className={classactivebuybtn}>Place Buy Order</button>
                                </div>
                                <p className="sc-bxivhb fGVEHW">Fee: 0% fees</p>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div role="tabpanel" className={'tab-pane ' + classactivesell} id="sell_form">
                          <form className="buy-sell-form">
                            <div className="row">
                              <div className="col-md-12">                      
                                <div className="form-group">
                                  <div className="input_plotting">
                                    <div className="label_data">
                                      <p>Price</p><p>INR</p>
                                    </div>
                                    <input type="text" name="curreny" placeholder={0.0} className="form-control" />
                                  </div>
                                </div>
                                <div className="form-group">
                                  <label>Volume</label>
                                  <div className="input_plotting">
                                    <div className="label_data">
                                      <p>USDT</p>
                                    </div>
                                    <input type="text" name="volume" placeholder={0} className="form-control" />
                                  </div>
                                </div>
                                <div className="form-group total_form_group">
                                  <label>Total</label>
                                  <div className="input_plotting">
                                    <div className="label_data">
                                      <p>INR</p>
                                    </div>
                                    <input type="text" name="volume" placeholder={0.00} className="form-control" />
                                  </div>
                                  <p className="sc-kTUwUJ gfGHah">Min amount ₹1,000 | No max limit</p>
                                </div>                      
                                <div className="prefered_seller">
                                  <div className= {classes}  onClick={this.prefered_seller_header}>
                                    <i className="fa fa-caret-right" aria-hidden="true" /> Add preferred seller (Optional)
                                  </div>
                                  <div className="prefered_seller_body" style={{display: displayproppapps}}>                            
                                    <div className="form-group">
                                      <label>Enter XID of preferred</label>
                                      <input type="text" name placeholder="Eg: cryptotrader" className="form-control" />
                                    </div>
                                    <a className="how_it_work_prefered" href="#" target="_blank">How it works <i className="fa fa-external-link" /></a>
                                    <div className="get_own_username">
                                      <div className="xid-body-username-create">
                                        <span className="xid-body-username-label">Get your own XID!</span>
                                        <a className="xid-body-username-link">Create now</a>
                                      </div>
                                      <div className="xid-body-username-intro">
                                        <ol className="xid-body-username-intro-list">
                                          <li>Create &amp; Share your XID in Crypto groups</li>
                                          <li>Get matched instantly with sellers</li>
                                        </ol>
                                      </div>
                                    </div>
                                  </div>                         
                                </div>      
                                <div className="form-group">
                                  <button type="submit" className={classactivebuybtn}>Place Buy Order</button>
                                </div>
                                <p className="sc-bxivhb fGVEHW">Fee: 0% fees</p>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>{/*right content close here*/}
                </div>
              </div>
            </section>
          </div>  


        </div>
       
      </div>
    );
  }
};


export default P2p;
