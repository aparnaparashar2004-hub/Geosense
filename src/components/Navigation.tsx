import { Button } from "@/components/ui/button";
import { MapPin, Menu } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 font-bold text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                GeoSense
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="#routes" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Routes
            </a>
            <a href="#insights" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Insights
            </a>
            <a href="#reports" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Reports
            </a>
            <Button variant="default" size="sm">
              Get Started
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};
