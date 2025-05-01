import profile_pic from "../assets/images/profile_pic.png";
import icon_1 from "../assets/images/icon_1.png";
import icon_2 from "../assets/images/icon_2.png";
import icon_3 from "../assets/images/icon_3.png";
import icon_4 from "../assets/images/icon_4.png";
import { States } from "../utils/data";
import { TypeAnimation } from "react-type-animation";
import StatInfoCard from "../components/StatInfoCard";
const Hero = () => {
  return (
    <section id="hero" className="container mx-auto px-30">
      <div className="flex flex-col lg:flex-row gap-14 items-center justify-between mt-[80px]">
        <div className="order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0">
          <h3 className="text-xl lg:text-3xl font-medium text-black lg:leading-15 mb-4 lg:mb-0">
            👋 Hi, I’m Mohamed Hesham
          </h3>

          <h1 className="w-full text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] text-transparent bg-clip-text bg-gradient-to-r from-[#f4a44f] to-[#ac573f]">
            <TypeAnimation
              sequence={[
                "Fullstack Developer",
                2000,
                "",
                500,
                "MERN Stack Developer",
                2000,
                "",
                500,
              ]}
              wrapper="span"
              speed={70}
              repeat={Infinity}
            />
          </h1>

          <p className="w-full lg:w-[500px] text-sm lg:text-lg mt-4 leading-6">
            I’m a passionate Full Stack Web Developer specialized in building
            high-performance and scalable web applications using
            <span className="font-semibold">
              {" "}
              React, Next.js, Node & Django{" "}
            </span>
            . I love turning ideas into reality through clean code.
          </p>

          <div className="flex justify-center lg:justify-start gap-4 md:gap-8 mt-6">
            <button
              onClick={() => {
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className="flex-1 md:flex-none action-btn-outline btn-scale-anim flex items-center justify-center "
            >
              View  Projects
            </button>

            <a
              href="/CV_Mohamed_Hesham.pdf"
              download
              className="action-btn btn-scale-anim btn-background flex items-center justify-center"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="w-[300px] md:w-[370px] h-[350px] md:h-[428px] bg-orange-100/50 rounded-3xl relative order-1 lg:order-2">
          <img
            src={profile_pic}
            alt="profile"
            className="profile-pic rounded-4xl"
          />
          <img
            src={icon_1}
            alt=""
            className="icon-img -left-10 bottom-20 rotate-[2.75deg]"
          />
          <img
            src={icon_2}
            alt=""
            className="icon-img left-5 md:left-10 -bottom-2 rotate-[2.75deg]"
          />
          <img
            src={icon_3}
            alt=""
            className="icon-img left-[110px] md:left-[150px] -bottom-6 rotate-[2.75deg]"
          />
          <img
            src={icon_4}
            alt=""
            className="icon-img left-[200px] md:left-[255px] -bottom-9 md:-bottom-10 rotate-[2.75deg]"
          />
        </div>
      </div>

      <div className="flex md:flex-row gap-6 mt-16 md:mt-24 flex-wrap">
        {States.map((item) => (
          <StatInfoCard key={item.id} count={item.count} label={item.label} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
