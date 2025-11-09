import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, BarChart3, Users } from "lucide-react";

const reportTypes = [
  {
    title: "Government Analytics",
    description: "Comprehensive traffic patterns and urban planning insights",
    icon: Users,
    features: ["Traffic flow analysis", "Peak hour identification", "Infrastructure recommendations"],
  },
  {
    title: "Research Data",
    description: "Detailed datasets for academic and scientific research",
    icon: BarChart3,
    features: ["Historical data access", "Statistical analysis", "Exportable datasets"],
  },
  {
    title: "Engineering Reports",
    description: "Technical specifications for civil engineering projects",
    icon: FileText,
    features: ["Route optimization metrics", "Environmental impact", "Cost-benefit analysis"],
  },
];

export const ReportSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4" variant="secondary">
            <FileText className="mr-1 h-3 w-3" />
            Professional Reports
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Export Actionable Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Generate comprehensive reports tailored for your stakeholders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reportTypes.map((report, index) => {
            const IconComponent = report.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{report.title}</CardTitle>
                  </div>
                  <CardDescription>{report.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {report.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Ready to Generate Your Report?</h3>
                <p className="text-muted-foreground">
                  Access professional-grade analytics and export data in multiple formats
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="lg">
                  Preview Sample
                </Button>
                <Button variant="accent" size="lg">
                  <Download className="mr-2 h-5 w-5" />
                  Generate Report
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
