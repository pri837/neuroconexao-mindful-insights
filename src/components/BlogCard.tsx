import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, User, ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  readTime: string;
  date: string;
  image?: string;
  featured?: boolean;
}

const BlogCard = ({ 
  title, 
  excerpt, 
  category, 
  author, 
  readTime, 
  date, 
  image,
  featured = false 
}: BlogCardProps) => {
  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
      featured ? 'md:col-span-2 lg:col-span-2' : ''
    }`}>
      {image && (
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-gradient-to-r from-primary to-accent text-white">
              {category}
            </Badge>
          </div>
        </div>
      )}
      
      <CardHeader className="space-y-3">
        {!image && (
          <Badge className="w-fit bg-gradient-to-r from-primary to-accent text-white">
            {category}
          </Badge>
        )}
        <CardTitle className={`line-clamp-2 group-hover:text-primary transition-colors ${
          featured ? 'text-xl' : 'text-lg'
        }`}>
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className={`text-muted-foreground line-clamp-3 ${
          featured ? 'text-base' : 'text-sm'
        }`}>
          {excerpt}
        </p>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{readTime}</span>
            </div>
          </div>
          <span>{date}</span>
        </div>

        <Button 
          variant="ghost" 
          className="w-full group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:text-white transition-all duration-300"
        >
          Ler artigo
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default BlogCard;