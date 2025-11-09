import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { RouteComparison } from "@/components/RouteComparison";
import { ReportSection } from "@/components/ReportSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <RouteComparison />
        <ReportSection />
      </main>
      <footer className="bg-muted/30 py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            &copy; 2025 GeoSense. Urban mobility intelligence for a better tomorrow.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
