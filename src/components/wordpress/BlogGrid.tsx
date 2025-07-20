import { BlogCard } from './BlogCard';

/**
 * WordPress Query Loop Block
 * Demonstrates FSE post grid layout with responsive design
 */
export const BlogGrid = () => {
  const posts = [
    {
      title: "Building Modern WordPress Themes with FSE",
      excerpt: "Explore the power of Full Site Editing and learn how to create flexible, block-based themes that give users complete control over their website design.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      category: "WordPress",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      readTime: "5 min read"
    },
    {
      title: "CSS Grid and Flexbox: The Complete Guide",
      excerpt: "Master modern CSS layout techniques with practical examples and real-world use cases. Perfect for creating responsive designs that work everywhere.",
      author: "Michael Chen",
      date: "March 12, 2024",
      category: "CSS",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      readTime: "8 min read"
    },
    {
      title: "JavaScript DOM Manipulation Best Practices",
      excerpt: "Learn efficient ways to interact with the DOM, improve performance, and create dynamic user experiences in modern web applications.",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      category: "JavaScript",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      readTime: "6 min read"
    },
    {
      title: "Responsive Design in 2024",
      excerpt: "Discover the latest techniques and tools for creating websites that look perfect on any device, from mobile phones to ultra-wide monitors.",
      author: "David Park",
      date: "March 8, 2024",
      category: "Design",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      readTime: "7 min read"
    },
    {
      title: "Version Control with Git: Advanced Workflows",
      excerpt: "Take your Git skills to the next level with advanced branching strategies, collaborative workflows, and best practices for team development.",
      author: "Lisa Thompson",
      date: "March 5, 2024",
      category: "Development",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop",
      readTime: "10 min read"
    },
    {
      title: "Accessibility in Modern Web Development",
      excerpt: "Build inclusive websites that work for everyone. Learn about WCAG guidelines, semantic HTML, and testing tools for accessibility.",
      author: "Robert Kim",
      date: "March 3, 2024",
      category: "Accessibility",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop",
      readTime: "9 min read"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header Block */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-merriweather text-foreground mb-4">
            Latest Articles
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-inter">
            Discover insights, tutorials, and best practices for modern web development
          </p>
        </div>

        {/* Posts Grid Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="wp-block-enter" style={{ animationDelay: `${index * 100}ms` }}>
              <BlogCard {...post} />
            </div>
          ))}
        </div>

        {/* Load More Block */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  );
};