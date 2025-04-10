import { useState, useEffect } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Change active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Contact', id: 'contact' },
  ];

  const services = [
    { name: 'Web Development', description: 'Creating responsive and dynamic web applications using modern technologies.' },
    { name: 'Mobile Apps', description: 'Building native and cross-platform mobile applications for iOS and Android.' },
    { name: 'UI/UX Design', description: 'Designing intuitive and beautiful user interfaces with focus on user experience.' },
    { name: 'Digital Marketing', description: 'Helping your brand reach its target audience through effective digital strategies.' },
  ];

  const portfolioItems = [
    { title: 'E-commerce Platform', category: 'Web Development' },
    { title: 'Social Media App', category: 'Mobile Development' },
    { title: 'Corporate Website', category: 'UI/UX Design' },
    { title: 'Travel Booking System', category: 'Web Development' },
    { title: 'Fitness Tracker', category: 'Mobile Development' },
    { title: 'Restaurant Menu App', category: 'UI/UX Design' },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-black bg-opacity-90 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-purple-500">NOVA<span className="text-white">Studio</span></h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.id}
                  href={`#${link.id}`}
                  className={`transition duration-300 hover:text-purple-500 ${activeSection === link.id ? 'text-purple-500' : 'text-gray-300'}`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white focus:outline-none"
              >
                {isMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 pb-4">
            <nav className="flex flex-col space-y-4 px-4 py-2">
              {navLinks.map((link) => (
                <a 
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`transition duration-300 hover:text-purple-500 ${activeSection === link.id ? 'text-purple-500' : 'text-gray-300'}`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        {/* Section 1: Hero */}
        <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-12 md:mb-0">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-purple-500">Digital</span> Solutions for the Modern Age
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  We create stunning digital experiences that help businesses reach their full potential.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a href="#contact" className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg transition duration-300 text-center flex items-center justify-center">
                    Get Started 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#services" className="border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white py-3 px-6 rounded-lg transition duration-300 text-center">
                    Our Services
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="w-4/5 h-64 md:h-96 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 relative overflow-hidden flex items-center justify-center">
                  <div className="text-2xl font-bold">HERO IMAGE</div>
                  <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-purple-700 rounded-full opacity-20"></div>
                  <div className="absolute -top-8 -left-8 w-40 h-40 bg-blue-700 rounded-full opacity-20"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: About */}
        <section id="about" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-purple-500">Us</span></h2>
              <div className="w-20 h-1 bg-purple-500 mx-auto mb-8"></div>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We are a passionate team of designers and developers committed to creating exceptional digital experiences.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-8 rounded-lg hover:transform hover:scale-105 transition duration-300">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <div className="text-2xl font-bold">01</div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Our Mission</h3>
                <p className="text-gray-300 text-center">
                  To empower businesses with cutting-edge digital solutions that drive growth and success.
                </p>
              </div>
              
              <div className="bg-gray-800 p-8 rounded-lg hover:transform hover:scale-105 transition duration-300">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <div className="text-2xl font-bold">02</div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Our Vision</h3>
                <p className="text-gray-300 text-center">
                  To be the leading digital agency known for innovation, quality, and exceptional customer service.
                </p>
              </div>
              
              <div className="bg-gray-800 p-8 rounded-lg hover:transform hover:scale-105 transition duration-300">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <div className="text-2xl font-bold">03</div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Our Values</h3>
                <p className="text-gray-300 text-center">
                  Integrity, collaboration, innovation, and a relentless pursuit of excellence in everything we do.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Services */}
        <section id="services" className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-purple-500">Services</span></h2>
              <div className="w-20 h-1 bg-purple-500 mx-auto mb-8"></div>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We offer a comprehensive range of digital services to help your business thrive in the digital landscape.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition duration-300">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-6">
                    <div className="text-lg font-bold">{index + 1}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.name}</h3>
                  <p className="text-gray-300">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Portfolio */}
        <section id="portfolio" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-purple-500">Portfolio</span></h2>
              <div className="w-20 h-1 bg-purple-500 mx-auto mb-8"></div>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Take a look at some of our recent projects and the amazing results we've achieved for our clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg">
                  <div className="h-64 bg-gradient-to-br from-purple-800 to-blue-800 flex items-center justify-center">
                    <div className="text-xl font-bold">PROJECT {index + 1}</div>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <div className="text-center p-4">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-purple-400 mb-4">{item.category}</p>
                      <a href="#" className="inline-block border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white py-2 px-4 rounded-lg transition duration-300">
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Contact */}
        <section id="contact" className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="text-purple-500">Touch</span></h2>
              <div className="w-20 h-1 bg-purple-500 mx-auto mb-8"></div>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Have a project in mind or want to know more about our services? We'd love to hear from you!
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                    <textarea 
                      id="message" 
                      rows="5" 
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <div>
                    <button 
                      type="submit" 
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg transition duration-300"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
              
              <div className="md:w-1/2 md:pl-8">
                <div className="bg-gray-800 p-8 rounded-lg h-full">
                  <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="mr-4 text-purple-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold">Email</h4>
                        <p className="text-gray-300">info@novastudio.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-4 text-purple-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold">Phone</h4>
                        <p className="text-gray-300">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-4 text-purple-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold">Office</h4>
                        <p className="text-gray-300">123 Digital Street, Tech City, CA 94107</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="font-bold mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-purple-500 transition duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-purple-500 transition duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-purple-500 transition duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-purple-500">NOVA<span className="text-white">Studio</span></h2>
              <p className="text-gray-300 mt-2">Creating digital experiences that matter</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.id}
                  href={`#${link.id}`}
                  className="text-gray-300 hover:text-purple-500 transition duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} NOVAStudio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}