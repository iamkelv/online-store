import classes from "./AdsSection.module.css";

export const AdsSection = () => {
  return (
    <div className={classes.container}>
      {[
        { title: "ads1", img: "../../assets/ads1.png" },
        { title: "ads2", img: "../../assets/ads2.png" },
        { title: "ads3", img: "../../assets/ads3.png" },
      ].map((ads) => (
        <div className={classes.ads} key={ads.title}>
          <img src={ads.img} alt={ads.title} />
        </div>
      ))}
    </div>
  );
};
