const ContactInCard = ({ icon, text, type }) => {
  const getLink = () => {
    if (type === "email") {
      return `mailto:${text}`;
    } else if (type === "phone") {
      return `tel:${text}`;
    } else if (type === "website") {
      return text;
    }
    return "#";
  };

  return (
    <div className="flex items-center gap-5 bg-orange-50 rounded border border-orange-100 px-4 py-3 mb-5">
      <div
        className="w-10 h-10 text-xl text-white flex items-center justify-center rounded-lg"
        style={{
          background: "linear-gradient(to right, #f4a44f, #ac573f)",
        }}
      >
        {icon}
      </div>
      <div className="text-amber-600 text-xs md:text-sm">
        <a
          href={getLink()}
          className="hover:underline transition-colors duration-300"
          target={type === "website" ? "_blank" : "_self"} // فتح الروابط الخارجية في نافذة جديدة
          rel="noopener noreferrer"
        >
          {text}
        </a>
      </div>
    </div>
  );
};

export default ContactInCard;
