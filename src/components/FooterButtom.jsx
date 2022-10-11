import { Link } from 'react-router-dom'
import classes from './FooterButtom.module.css'

export const FooterButtom = () => {
  return (
    <div className={classes.container}>
        <div>© Active eCommerce CMS 2022 by || <Link to="mailto:moseskelvin4u@gmail.com">Kelvin Moses </Link></div>
        <div>
            <span>faceboook</span>
            <span>twitter</span>
            <span>instagram</span>
            <span>youtube</span>
            <span>linkIn</span>
        </div>
        <div>
            <img src="../../assets/pay.png" alt="" />
        </div>
    </div>
  )
}
