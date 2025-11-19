import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bibty-charcoal text-white pt-20 pb-10 rounded-t-[3rem] mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-display text-4xl font-bold mb-4">
              BIBTY<span className="text-bibty-orange">.</span>
            </h2>
            <p className="text-gray-400 max-w-md text-lg">
              Bathroom-obsessed interior studio creating personal sanctuaries in Singapore. 
              Turning functional spaces into daily retreats.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-gray-400 hover:text-bibty-orange transition-colors">Services</Link></li>
              <li><Link href="#projects" className="text-gray-400 hover:text-bibty-orange transition-colors">Projects</Link></li>
              <li><Link href="#process" className="text-gray-400 hover:text-bibty-orange transition-colors">Our Process</Link></li>
              <li><Link href="#about" className="text-gray-400 hover:text-bibty-orange transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>hello@bibtydesigns.com</li>
              <li>+65 8123 4567</li>
              <li>123 Design Road, #05-01<br/>Singapore 123456</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-bibty-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-bibty-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-bibty-orange transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Bibty Designs Pte Ltd. All rights reserved.</p>
          <p className="font-mono">Ingat Renovasi? Ingat Bibty!</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

