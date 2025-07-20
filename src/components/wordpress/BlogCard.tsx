import { Calendar, User, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

/**
 * WordPress Post Block Card
 * Demonstrates block-based post layout for query loop
 */
export const BlogCard = ({ title, excerpt, author, date, category, image, readTime }: BlogCardProps) => {
  return (
    <Card className="h-full blog-card-hover group overflow-hidden">
      {/* Featured Image Block */}
      <div className="relative overflow-hidden">
        <img 
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-blog-accent text-blog-hero font-medium">
            {category}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-3">
        <h3 className="text-xl font-semibold font-merriweather line-clamp-2 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
      </CardHeader>

      <CardContent className="flex-grow">
        {/* Post Excerpt Block */}
        <p className="text-muted-foreground line-clamp-3 mb-4 font-inter">
          {excerpt}
        </p>

        {/* Post Meta Block */}
        <div className="flex items-center text-sm text-muted-foreground space-x-4">
          <div className="flex items-center space-x-1">
            <User className="h-4 w-4" />
            <span>{author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <span>•</span>
          <span>{readTime}</span>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        {/* Read More Block */}
        <button className="flex items-center text-primary hover:text-primary/80 transition-colors group/link font-medium">
          Read More
          <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/link:translate-x-1" />
        </button>
      </CardFooter>
    </Card>
  );
};