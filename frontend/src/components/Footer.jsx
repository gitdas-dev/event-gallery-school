import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="./logo.png" 
                alt="DBTB School Logo" 
                className="h-42 w-44"
              />
            </div>
            <p className="text-gray-600 leading-relaxed">
              DBTB School Higher Secondary School<br />
              (Government Aided)<br />
              Affiliated to TN State Board
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-800">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Admissions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Academic Calendar</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Events & News</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Photo Gallery</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-800">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-gray-600 mt-1 flex-shrink-0" />
                <span className="text-gray-600 leading-relaxed">
                  No. 2, Medavakkam Main Road,<br />
                  Madipakkam, Chennai - 600091,<br />
                  Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-gray-600 flex-shrink-0" />
                <span className="text-gray-600">044-2254 2254</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-gray-600 flex-shrink-0" />
                <span className="text-gray-600">contact@dbtbschool.edu.in</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-800">Working Hours</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <span className="font-semibold">Monday - Friday:</span><br />
                8:30 AM - 4:30 PM
              </li>
              <li>
                <span className="font-semibold">Saturday:</span><br />
                8:30 AM - 12:30 PM
              </li>
              <li>
                <span className="font-semibold">Sunday:</span><br />
                Closed
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} DBTB School. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;