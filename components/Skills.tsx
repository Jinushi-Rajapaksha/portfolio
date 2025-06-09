import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Server, Database, Code, Brain } from "lucide-react";

const skills = [
  { name: "Html", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
  { name: "MUI", category: "Frontend" },

  { name: "JavaScript", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
    { name: ".NET", category: "Backend" },

  { name: "Python", category: "Backend" },
  { name: "Java", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Oracle", category: "Database" },
  { name: "SQL Express", category: "Database" },
    { name: "Postman", category: "Tools" },

  { name: "Git", category: "Tools" },
  { name: "Figma", category: "Tools" },
    { name: "Canva", category: "Tools" },
    { name: "Photoshop", category: "Tools" },

  { name: "AWS", category: "Cloud" },
];

export function Skills() {
  return (
    <section id="skills" className="container py-24 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">
          Skills & Technologies
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {["Frontend", "Backend", "Database", "Tools", "Cloud"].map(
            (category) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl font-bold">
                    {category === "Frontend" && <Globe className="w-5 h-5" />}
                    {category === "Backend" && <Server className="w-5 h-5" />}
                    {category === "Database" && (
                      <Database className="w-5 h-5" />
                    )}
                    {category === "Tools" && <Code className="w-5 h-5" />}
                    {category === "Cloud" && <Brain className="w-5 h-5" />}
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills
                      .filter((s) => s.category === category)
                      .map((skill) => (
                        <Badge
                          key={skill.name}
                          variant="secondary"
                          className="text-sm py-1 px-2"
                        >
                          {skill.name}
                        </Badge>
                      ))}
                  </div>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </div>
    </section>
  );
}
