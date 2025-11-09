import { Button } from "@/components/ui/button";
import { MapPin, TrendingUp, FileText } from "lucide-react";
import heroImage from "@/assets/hero-urban.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80" />
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 mb-6 shadow-sm">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-secondary-foreground">Urban Mobility Intelligence</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
            GeoSense
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
            Advanced traffic insights and route optimization for governments, researchers, and civil engineers
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="lg" className="group">
              Explore Routes
              <TrendingUp className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              <FileText className="mr-2 h-5 w-5" />
              Generate Report
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-md border border-border">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">Route Types</div>
              <div className="text-xs text-foreground mt-1">Fastest • Cheapest • Eco-Friendly</div>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-md border border-border">
              <div className="text-3xl font-bold text-accent mb-2">Real-time</div>
              <div className="text-sm text-muted-foreground">Traffic Analysis</div>
              <div className="text-xs text-foreground mt-1">Live data & predictions</div>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-md border border-border">
              <div className="text-3xl font-bold text-success mb-2">Export</div>
              <div className="text-sm text-muted-foreground">Detailed Reports</div>
              <div className="text-xs text-foreground mt-1">Professional insights</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
