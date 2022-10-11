import { Footer } from "./Footer";
import { Header } from "./Header";
import classes from "./Layout.module.css";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={classes.container}>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};
