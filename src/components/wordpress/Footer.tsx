import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

/**
 * WordPress Footer Template Part
 * Demonstrates FSE footer structure with multiple block areas
 */
export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Block */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-2xl font-bold font-merriweather mb-4">Minimal Blog</h3>
            <p className="text-primary-foreground/80 mb-6 font-inter leading-relaxed">
              A demonstration of modern WordPress FSE theme development. 
              Built with React to showcase block-based design principles, 
              responsive layouts, and accessibility best practices.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Block */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-merriweather">Quick Links</h4>
            <ul className="space-y-2 font-inter">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Categories Block */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-merriweather">Categories</h4>
            <ul className="space-y-2 font-inter">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  WordPress
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Design
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  JavaScript
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Block */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-primary-foreground/60">
            <div className="flex items-center space-x-1 mb-2 md:mb-0">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>for rtcamp portfolio • WordPress FSE Demo</span>
            </div>
            <div>
              <span>© 2024 Minimal Blog. Built with React & TypeScript.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};