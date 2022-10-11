import { Link } from 'react-router-dom';
import classes from './FooterMain.module.css'

export const FooterMain = () => {
  return <div className={classes.container}>
    <div className={classes.left}>
      <div >
        <div className={classes.logo}><img src="../../assets/logo.png" alt="" /></div>
        <div>Complete system for your eCommerce business</div>
        <div className={classes.search}>
          <input type="text" placeholder='Your Email Address' />
          <button>Subscribe</button>
        </div>
        <div className={classes.app}>
          <div>
            <img src="../../assets/play.png" alt="" />
          </div>
          <div>
            <img src="../../assets/app.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className={classes.right}>
      <div>
        <div className={classes.title}>CONTACT INFO</div>
        <div className={classes.content}>
          <div>
            <span className={classes.topHead}>Address:</span>
            <span className={classes.address}>Yola South Adamawa Nigeria</span>
          </div>
          <div className={classes.contact}>
            <div >Phone:</div>
            <div>+2348060684357</div>
          </div>
          <div>
            <div>Email:</div>
            <Link to='mailto:moseskelvin4u@gmail.com'>moseskelvin4u@gmail.com</Link>
          </div>
        </div>
      </div>
      <div>
         <div className={classes.title}>QUICK LINKS</div>
        <div className={classes.content}>
          {['Support Policy Page','Return Policy Page', 'About Us', 'Privacy Policy Page','Seller Policy','Term Conditions Page'].map(item=><Link to='/' key={item}>{item}</Link>)}
        </div>
      </div>
      <div>
          <div className={classes.title}>MY ACCOUNT</div>
          <div className={classes.content}>
            {['Login','Order History', 'My Wishlist', 'Track Order','Be an affiliate partner','Term Conditions Page'].map(item=><Link to='/' key={item}>{item}</Link>)}
          </div>
          <div className={classes.title}>MY ACCOUNT</div>
      </div>
    </div>
  </div>;
};
