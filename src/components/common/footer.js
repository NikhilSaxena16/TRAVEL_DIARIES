import React from 'react';

import { BackTop } from 'antd';

import image9 from '../../assets/images/logo.png';

function AppFooter() {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="/">TRVL<span style={{color:"red"}}>DIARY</span></a>
        </div>
        <ul className="socials">
          <li><a href="https://www.facebook.com/" target='_blank'><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="https://www.twitter.com/" target='_blank'><i className="fab fa-twitter"></i></a></li>
          <li><a href="https://www.linkedin.com/" target='_blank'><i className="fab fa-linkedin-in"></i></a></li>
          <li><a href="https://www.pinterest.com/" target='_blank'><i className="fab fa-pinterest-p"></i></a></li>
          <li><a href="https://www.instagram.com/" target='_blank'><i className="fab fa-instagram"></i></a></li>
        </ul>
        <div className="copyright">Copyright &copy; 2022 TRVL.com
        <img alt="Modern Design" src={image9} style={{ width: '200px', height: '90px' }} />
        </div>
        <BackTop>
          <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
        </BackTop>
      </div>
    </div>
  );
}

export default AppFooter;