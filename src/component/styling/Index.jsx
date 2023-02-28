// import Plain from "./Plain";
// import Scss from "./Scss";
// import Module from "./Module";
// import CssinJS from "./CssinJS";
import Header from "./Header";
// import BackgroundImagePage from "./Bg";
import "../assets/style/css/bg.css";
// import Imgprofile from "./Imgprofile";
import { Profile } from "./Header";

const Home = () => {
  return (
    <>
      {/* <Plain />
      <Scss />
      <Module />
      <CssinJS /> */}
      <Header />
      <div className="bg font-monospace">
        <h1 style={{ color: "greenyellow" }}>Halo Dunia Manusia</h1>
        <div className="container text-start">
          <div className="row pt-3 font-monospace" style={{ color: "white" }}>
            <h1 className="text-center">Siapakah Saya?</h1>
            <div className="col-lg-8 col-md-6 col-12">
              <p>
                Saya merupakan seorang pembelajar yang menyukai belajar.
                Motivasi dalam hidup saya adalah{" "}
                <em>"belajar sepanjang masa tambah ilmu tambah sederhana"</em>.{" "}
                <br />
                Saya percaya bakat itu ada namun orang berbakat akan kalah
                dengan orang yang selalu berusaha. Saya juga percaya bakat saya
                adalah mampu mempelajari sesuatu lebih cepat dari orang
                kebanyakan. Namun, dengan mengetahui bakat tersebut terkadang
                saya terlena terhadap sesuatu yang saya anggap mudah untuk
                dipelajari. Sehingga membuat saya tidak menggali lebih dalam
                terhadap sesuatu yang saya pelajari tersebut. <br /> Saya juga
                merupakan guru yang sangat menyukai dunia <em>coding</em>.{" "}
                <br />
                Nama saya adalah....
              </p>
            </div>
            <div className="col-lg-4 col-md-6 col-12 bg-primary">
              <Profile />
            </div>
            <h2
              className="text-center text-uppercase"
              style={{ color: "greenyellow" }}
            >
              Arif Saputra
            </h2>
            <div className="col-12 border"></div>
          </div>
          <div className="col-md-12 text-center pt-5">
            <a
              href="https://www.linkedin.com/in/arif-saputra-2938b1229/"
              className="btn btn-plain"
              role="button"
              aria-pressed="true"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
