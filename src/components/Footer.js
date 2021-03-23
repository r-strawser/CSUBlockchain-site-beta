import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    let webData = this.props.webData;
    return (
      <footer style= {{ background: '#fafbff' }}>
      <div  className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {
              webData.socialLinks && webData.socialLinks.map((item)=>{
                return(
                  <li key={item.url}>
                    <a href={item.url}>
                    <i className={item.className} />
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div id="go-top">
          <a style={{ background: '#69BE28' }} className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"/>
          </a>
        </div>
        <div>
        <a href='https://twitter.com/CSUBlockchain'>&copy;</a>2021 CSU Blockchain&nbsp;|&nbsp; All right reserved.&nbsp; | Template By Cornell Club&nbsp;
         <br></br>
         Cleveland State University, Cleveland, OH
        </div>
      </div>
    </footer>
    );
  }
}