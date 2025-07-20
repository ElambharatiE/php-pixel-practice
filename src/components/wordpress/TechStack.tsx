import { Code, Database, Globe, GitBranch, Smartphone, TestTube } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

/**
 * Tech Stack Showcase
 * Demonstrates skills alignment with rtcamp requirements
 */
export const TechStack = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: <Code className="h-8 w-8" />,
      technologies: ["HTML5 Semantic", "CSS3/Flexbox/Grid", "JavaScript ES6+", "React.js", "TypeScript"],
      description: "Modern frontend with responsive design and accessibility"
    },
    {
      category: "WordPress Expertise",
      icon: <Globe className="h-8 w-8" />,
      technologies: ["FSE/Gutenberg", "Block Development", "Theme Structure", "template.json", "Custom Blocks"],
      description: "Full Site Editing compatible theme development"
    },
    {
      category: "Backend & Database",
      icon: <Database className="h-8 w-8" />,
      technologies: ["PHP 8+", "MySQL", "WordPress APIs", "REST APIs", "OOP Principles"],
      description: "Server-side development with best practices"
    },
    {
      category: "Development Tools",
      icon: <GitBranch className="h-8 w-8" />,
      technologies: ["Git/GitHub", "Composer", "NPM/Yarn", "Webpack/Vite", "Code Standards"],
      description: "Professional development workflow and collaboration"
    },
    {
      category: "Responsive Design",
      icon: <Smartphone className="h-8 w-8" />,
      technologies: ["Mobile-First", "CSS Grid", "Flexbox", "Media Queries", "Performance"],
      description: "Cross-device compatibility and optimization"
    },
    {
      category: "Quality Assurance",
      icon: <TestTube className="h-8 w-8" />,
      technologies: ["Unit Testing", "Code Review", "Accessibility", "Performance", "Documentation"],
      description: "Maintainable, tested, and documented code"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-merriweather text-foreground mb-4">
            Technical Skills Demonstration
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            This project showcases the key technologies and skills required for the 
            Associate Software Engineer position at rtcamp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">
                      {skill.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold font-merriweather text-foreground">
                    {skill.category}
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-4 font-inter text-sm">
                  {skill.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-block px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Portfolio Highlight */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold font-merriweather text-foreground mb-4">
              Portfolio Project Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-primary mb-2">✅ WordPress FSE Ready</h4>
                <p className="text-sm text-muted-foreground">
                  Block-based architecture demonstrating Gutenberg expertise
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">✅ Enterprise Standards</h4>
                <p className="text-sm text-muted-foreground">
                  Clean code, proper documentation, and scalable structure
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">✅ Production Ready</h4>
                <p className="text-sm text-muted-foreground">
                  Optimized performance, accessibility, and responsive design
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};