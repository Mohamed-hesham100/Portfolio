const Footer = () => {
  return (
    <footer className="mt-20 py-6 bg-gradient-to-r from-[#f4a44f] to-[#ac573f] text-white text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm md:text-base font-medium">
          © {new Date().getFullYear()} Mohamed Hisham. All rights reserved.
        </p>
        <p className="text-xs mt-1 opacity-80">Built with ❤️ using React & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
