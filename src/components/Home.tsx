import { homeCSS } from "../css-constants/home";

function Home() {
  return (
      <section className={homeCSS.container}>
        <div className={homeCSS.presentationContainer}>
          <div className={homeCSS.imgContainer}>
            <video
              src="/video/spider.mp4"
              className={homeCSS.video}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className={homeCSS.presentationTextContainer}>
            <h1 className={homeCSS.h1}>Azzedine.H</h1>
            <p className={homeCSS.p}>
              I'm a designer and developer passionate about creating harmonious
              and functional digital experiences. <br />
              <br />
              My approach combines technical rigor and aesthetic sensibility to
              design solutions that marry elegance with efficiency. <br />
              <br />
              As the spider weaves its web, I craft online experiences where
              every connection matters.
            </p>
          </div>
          <div className={homeCSS.imgContainer}>
            <img
              src="/img/img2.webp"
              alt="img-test-2"
              className={homeCSS.img}
            />
          </div>
        </div>
        <div className={homeCSS.sceneContainer}>
          <img
            src="/img/img3.jpg"
            alt="img-test-3"
            className={homeCSS.scene}
          />
        </div>
      </section>
  );
}

export default Home