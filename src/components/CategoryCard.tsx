import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  postCount: number;
  gradient: string;
}

const CategoryCard = ({ title, description, icon: Icon, postCount, gradient }: CategoryCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300"
        style={{ background: gradient }}
      />
      
      <CardHeader className="relative">
        <div className="flex items-center justify-between mb-4">
          <div 
            className="p-3 rounded-lg"
            style={{ background: gradient }}
          >
            <Icon className="h-6 w-6 text-white" />
          </div>
          <span className="text-sm text-muted-foreground font-medium">
            {postCount} artigos
          </span>
        </div>
        <CardTitle className="text-lg group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="relative space-y-4">
        <p className="text-muted-foreground text-sm line-clamp-3">
          {description}
        </p>

        <Button 
          variant="ghost" 
          className="w-full group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:text-white transition-all duration-300"
        >
          Explorar categoria
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;