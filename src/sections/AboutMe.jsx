import profile_pic from "../assets/images/profile_pic.png";
import { About_Me } from "../utils/data";
import { SocialLinks } from "../utils/data";
const AboutMe = () => {
  return (
    <section id="about" className="container mx-auto px-8 py-16">
      <h4 className="block lg:hidden w-[200px] section-title text-left mb-16">
        About Me
      </h4>

      <div className="flex flex-col lg:flex-row gap-16 items-start justify-between">
        <div className="w-[300px] md:w-[370px] h-[350px] md:h-[428px] bg-orange-100/50 rounded-3xl mx-auto">
          <img
            src={profile_pic}
            alt="Profile pic"
            className="profile-pic rounded-4xl"
          />
        </div>

        <div className="flex-1">
          <h4 className="hidden lg:block w-[200px] section-title text-left">
            About Me
          </h4>
          <p className="text-sm text-justify leading-10 whitespace-pre-line mt-4">
            {About_Me.content}
          </p>
          <div className="flex gap-4 mt-6">
            {SocialLinks.map((item) => {
              const IconComponent = item.icon;

              return (
                <a key={item.label} href={item.link} className="cursor-pointer group">
                  <IconComponent className="text-2xl text-amber-600 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:translate-y-[-2px] group-hover:text-amber-300" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
