import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, DollarSign, Leaf, Navigation } from "lucide-react";
import fastestRoute from "@/assets/route-fastest.png";
import cheapestRoute from "@/assets/route-cheapest.png";
import ecoRoute from "@/assets/route-eco.png";

const routes = [
  {
    id: "fastest",
    title: "Fastest Route",
    description: "Optimize for minimal travel time",
    icon: Clock,
    image: fastestRoute,
    time: "18 min",
    distance: "12.4 km",
    cost: "$4.50",
    emissions: "2.8 kg CO₂",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    id: "cheapest",
    title: "Cheapest Route",
    description: "Minimize travel costs",
    icon: DollarSign,
    image: cheapestRoute,
    time: "26 min",
    distance: "15.2 km",
    cost: "$2.80",
    emissions: "3.2 kg CO₂",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    id: "eco",
    title: "Eco-Friendly Route",
    description: "Reduce environmental impact",
    icon: Leaf,
    image: ecoRoute,
    time: "22 min",
    distance: "13.8 km",
    cost: "$3.20",
    emissions: "1.6 kg CO₂",
    color: "text-success",
    bgColor: "bg-success/10",
  },
];

export const RouteComparison = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4" variant="secondary">
            <Navigation className="mr-1 h-3 w-3" />
            Smart Routing
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your Optimal Route
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Compare three intelligent route options tailored to your priorities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {routes.map((route) => {
            const IconComponent = route.icon;
            return (
              <Card key={route.id} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg ${route.bgColor}`}>
                      <IconComponent className={`h-6 w-6 ${route.color}`} />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Recommended
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">{route.title}</CardTitle>
                  <CardDescription>{route.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <img
                      src={route.image}
                      alt={route.title}
                      className="w-full h-32 object-contain rounded-lg"
                    />
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-sm text-muted-foreground">Travel Time</span>
                      <span className="font-semibold">{route.time}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-sm text-muted-foreground">Distance</span>
                      <span className="font-semibold">{route.distance}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-sm text-muted-foreground">Est. Cost</span>
                      <span className="font-semibold">{route.cost}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm text-muted-foreground">CO₂ Emissions</span>
                      <span className="font-semibold">{route.emissions}</span>
                    </div>
                  </div>

                  <Button className="w-full" variant="outline">
                    Select Route
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
