
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Chibuzor <span className="text-cyan-400">Promise</span>
            </h3>
            <p className="text-blue-200 leading-relaxed">
              Copywriting specialist helping businesses communicate their value 
              and connect with their ideal customers through powerful, converting copy.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-blue-200">
              <li>Sales Copy</li>
              <li>Content Marketing</li>
              <li>Email Marketing</li>
              <li>Website Copy</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Get In Touch</h4>
            <div className="space-y-2 text-blue-200">
              <p>Ready to start your project?</p>
              <a 
                href="mailto:ikennachibuzor50@gmail.com" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
              >
                ikennachibuzor50@gmail.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-blue-300">
          <p>&copy; 2024 Chibuzor Promise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
