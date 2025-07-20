import { Button } from '@/components/ui/button';

/**
 * WordPress Hero Block (Cover Block equivalent)
 * Demonstrates FSE block structure with background and content
 */
export const Hero = () => {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image Block */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&h=1080&fit=crop)'
        }}
      >
        <div className="absolute inset-0 bg-blog-overlay"></div>
      </div>

      {/* Content Block */}
      <div className="relative z-10 text-center text-blog-hero-foreground px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold font-merriweather mb-6 leading-tight">
            Welcome to
            <span className="block text-blog-accent">Minimal Blog</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blog-hero-foreground/90 font-inter">
            A clean, modern WordPress theme built with Full Site Editing capabilities
          </p>
          
          {/* Button Block */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-blog-accent text-blog-hero hover:bg-blog-accent/90 font-medium"
            >
              Read Our Stories
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-blog-hero-foreground text-blog-hero-foreground hover:bg-blog-hero-foreground hover:text-blog-hero"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blog-hero-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blog-hero-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};