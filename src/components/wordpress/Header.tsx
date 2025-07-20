import { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * WordPress Header Template Part
 * Demonstrates FSE header structure with navigation block
 */
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-md bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Site Logo/Title Block */}
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-primary font-merriweather">
              Minimal Blog
            </h1>
          </div>

          {/* Desktop Navigation Block */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-link text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="nav-link text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#blog" className="nav-link text-foreground hover:text-primary transition-colors">
              Blog
            </a>
            <a href="#contact" className="nav-link text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Search & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-4 w-4" />
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Block */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-up">
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#blog"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-2 border-t border-border">
                <Button variant="ghost" className="w-full justify-start">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};