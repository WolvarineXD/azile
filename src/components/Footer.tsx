import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    // Load the FreeVisitorCounters auth script
    const authScript = document.createElement('script');
    authScript.src = 'https://www.freevisitorcounters.com/auth.php?id=177354ed97282b0c94e7d2d8bd7dcc4847722b64';
    authScript.async = true;
    document.body.appendChild(authScript);

    // Load the FreeVisitorCounters counter script
    const counterScript = document.createElement('script');
    counterScript.src = 'https://www.freevisitorcounters.com/en/home/counter/1330372/t/10';
    counterScript.async = true;
    document.body.appendChild(counterScript);

    // Cleanup scripts on component unmount
    return () => {
      document.body.removeChild(authScript);
      document.body.removeChild(counterScript);
    };
  }, []);

  return (
    <footer className="bg-theme-darkGray">
      {/* Main Footer */}
      <div className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">India Digital Vision</h3>
              <p className="text-white/60">
                Showcasing India's innovative digital public infrastructure and technologies that are transforming the nation.
              </p>
              <div className="flex space-x-4 mt-6">
                <a
                  href="https://www.facebook.com/"
                  aria-label="Visit our Facebook page"
                  className="bg-theme-gray hover:bg-theme-orange text-white p-2 rounded-full transition-colors"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://x.com/i/flow/single_sign_on"
                  aria-label="Visit our Twitter page"
                  className="bg-theme-gray hover:bg-theme-orange text-white p-2 rounded-full transition-colors"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="https://in.linkedin.com/"
                  aria-label="Visit our LinkedIn page"
                  className="bg-theme-gray hover:bg-theme-orange text-white p-2 rounded-full transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://www.instagram.com/accounts/login/?hl=en"
                  aria-label="Visit our Instagram page"
                  className="bg-theme-gray hover:bg-theme-orange text-white p-2 rounded-full transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.youtube.com/@bcnishantreddy"
                  aria-label="Visit our YouTube channel"
                  className="bg-theme-gray hover:bg-theme-orange text-white p-2 rounded-full transition-colors"
                >
                  <Youtube size={18} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-white/60 hover:text-theme-orange transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-white/60 hover:text-theme-orange transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white/60 hover:text-theme-orange transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Visitor Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                {/* FreeVisitorCounters will inject the visitor count here */}
                <div
                  id="fv_counter_1330372"
                  className="bg-theme-gray p-4 rounded-lg text-xl font-bold text-theme-orange"
                >
                  {/* Initially empty, counter script fills this */}
                </div>
                <div className="bg-theme-gray p-4 rounded-lg">
                  <div className="text-xl font-bold text-theme-orange">—</div>
                  <p className="text-white/60 text-sm">Today's Visitors</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2024. India Digital Vision
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/contact" className="text-white/60 hover:text-theme-orange text-sm transition-colors">
                Contact Us
              </Link>
              <Link to="#" className="text-white/60 hover:text-theme-orange text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-white/60 hover:text-theme-orange text-sm transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-theme-orange p-3 rounded-full shadow-lg hover:bg-theme-orange/90 transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} className="text-white" />
      </button>
    </footer>
  );
};

export default Footer;
