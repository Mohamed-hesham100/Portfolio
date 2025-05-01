import { IoMdMail } from "react-icons/io";
import { About_Me } from "../utils/data";
import ContactInCard from "../components/ContactInCard";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineWeb } from "react-icons/md";

const ContactMe = () => {
  return (
    <section id="contact">
      <div className="container mx-auto px-6 py-10">
        <div className="w-full lg:w-[60vw] mx-auto text-center">
          <h4 className="section-title">Contact Me</h4>

          <p className="text-sm mt-4 leading-6 text-gray-700">
            Whether you have a question, want to start a project, or just want
            to say hi — I’ll try my best to get back to you!
            <br />
            Feel free to reach out through the form below or connect with me on
            my social platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 mt-16">
          <div>
            <ContactInCard icon={<IoMdMail />} text={About_Me.email} type="email" />
            <ContactInCard
              icon={<IoPhonePortraitOutline />}
              text={About_Me.phone}
              type="phone"
            />
            <ContactInCard icon={<MdOutlineWeb />} text={About_Me.website} type="website" />
          </div>

          <div>
            <h5 className="md:hidden text-amber-600 text-lg font-medium mt-4 pb-5">
              Contact Form
            </h5>

            <form className="flex flex-col space-y-4">
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                className="input-box"
                autoComplete="off"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="input-box"
                autoComplete="off"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="input-box h-32 resize-none"
                autoComplete="off"
              />
              <button
                className="h-10 md:h-12 text-xs md:text-sm font-medium text-white px-4 lg:px-10 rounded-[71px] 
             bg-gradient-to-r from-[#f4a44f] to-[#ac573f] 
             transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
