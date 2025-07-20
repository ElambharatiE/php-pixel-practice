import { Header } from '@/components/wordpress/Header';
import { Hero } from '@/components/wordpress/Hero';
import { BlogGrid } from '@/components/wordpress/BlogGrid';
import { BlockEditor } from '@/components/wordpress/BlockEditor';
import { TechStack } from '@/components/wordpress/TechStack';
import { Footer } from '@/components/wordpress/Footer';

/**
 * WordPress FSE Theme Demo - Main Template
 * Showcases modern WordPress development for rtcamp portfolio
 */
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Template Part */}
      <Header />
      
      {/* Hero Block */}
      <Hero />
      
      {/* Blog Posts Query Loop */}
      <BlogGrid />
      
      {/* Block Editor Demonstration */}
      <BlockEditor />
      
      {/* Technical Skills Showcase */}
      <TechStack />
      
      {/* Footer Template Part */}
      <Footer />
    </div>
  );
};

export default Index;
