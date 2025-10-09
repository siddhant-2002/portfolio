
const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-6 px-4">
      <div className="w-full max-w-6xl mx-auto text-center">
        <div className="w-24 h-1 bg-gray-700 rounded-full mx-auto mb-4" />
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Siddhant Deshmukh. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
