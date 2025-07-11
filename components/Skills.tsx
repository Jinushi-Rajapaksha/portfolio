"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Server, Database, Code, Brain } from "lucide-react";
import { useState, useEffect } from "react";

const skills = [
  { name: "HTML", category: "Frontend", icon: "🌐" },
  { name: "CSS", category: "Frontend", icon: "🎨" },
  { name: "Tailwind CSS", category: "Frontend", icon: "💨" },
  { name: "MUI", category: "Frontend", icon: "⚛️" },
  { name: "JavaScript", category: "Frontend", icon: "🟨" },
  { name: "TypeScript", category: "Frontend", icon: "🔷" },
  { name: "React", category: "Frontend", icon: "⚛️" },
  { name: "Next.js", category: "Frontend", icon: "▲" },
  { name: ".NET", category: "Backend", icon: "🟣" },
  { name: "Python", category: "Backend", icon: "🐍" },
  { name: "Java", category: "Backend", icon: "☕" },
  { name: "Node.js", category: "Backend", icon: "🟢" },
  { name: "PostgreSQL", category: "Database", icon: "🐘" },
  { name: "MongoDB", category: "Database", icon: "🍃" },
  { name: "Oracle", category: "Database", icon: "🔴" },
  { name: "SQL Express", category: "Database", icon: "📊" },
  { name: "Postman", category: "Tools", icon: "📮" },
  { name: "Git", category: "Tools", icon: "🔀" },
  { name: "Figma", category: "Tools", icon: "🎨" },
  { name: "Canva", category: "Tools", icon: "✨" },
  { name: "Photoshop", category: "Tools", icon: "🖼️" },
];

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedCards, setAnimatedCards] = useState(new Set());

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const categories = ["Frontend", "Backend", "Database", "Tools"];
      categories.forEach((category, index) => {
        setTimeout(() => {
          setAnimatedCards(prev => new Set([...prev, category]));
        }, index * 200);
      });
    }
  }, [isVisible]);

  return (
    <section id="skills" className="w-full px-6 py-24 bg-muted/50 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h2 
          className={`text-3xl font-bold tracking-tighter mb-8 text-center transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          Skills & Technologies
        </h2>
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {["Frontend", "Backend", "Database", "Tools"].map(
            (category, categoryIndex) => (
              <Card
                key={category}
                className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-700 group cursor-pointer transform hover:-translate-y-3 hover:rotate-1 backdrop-blur-sm ${
                  animatedCards.has(category)
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-12 scale-90'
                }`}
                style={{ 
                  transitionDelay: `${categoryIndex * 200}ms`,
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px) rotate(1deg) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) rotate(0deg) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)';
                }}
              >
                <CardHeader className="relative overflow-hidden">
                  <CardTitle className="flex items-center gap-2 text-2xl font-bold relative z-10 transition-all duration-500 group-hover:text-primary">
                    <div className="relative p-2 rounded-full transition-all duration-500 group-hover:bg-primary/10 group-hover:shadow-lg">
                      {category === "Frontend" && (
                        <Globe className="w-5 h-5 text-blue-500 transition-all duration-500 group-hover:rotate-180 group-hover:scale-125 group-hover:text-blue-400" />
                      )}
                      {category === "Backend" && (
                        <Server className="w-5 h-5 text-green-500 transition-all duration-500 group-hover:rotate-12 group-hover:scale-125 group-hover:text-green-400" />
                      )}
                      {category === "Database" && (
                        <Database className="w-5 h-5 text-purple-500 transition-all duration-500 group-hover:rotate-12 group-hover:scale-125 group-hover:text-purple-400" />
                      )}
                      {category === "Tools" && (
                        <Code className="w-5 h-5 text-orange-500 transition-all duration-500 group-hover:rotate-12 group-hover:scale-125 group-hover:text-orange-400" />
                      )}
                    </div>
                    <span className="transition-all duration-500 group-hover:text-primary group-hover:tracking-wider">
                      {category}
                    </span>
                  </CardTitle>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </CardHeader>
                <CardContent className="relative">
                  <div className="flex flex-wrap gap-2">
                    {skills
                      .filter((s) => s.category === category)
                      .map((skill, skillIndex) => {
                        return (
                          <Badge
                            key={skill.name}
                            variant="secondary"
                            className={`text-sm py-2 px-4 flex items-center gap-2 transition-all duration-700 hover:scale-115 hover:shadow-lg hover:bg-primary/15 cursor-pointer transform border border-transparent hover:border-primary/30 ${
                              animatedCards.has(category)
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-6'
                            }`}
                            style={{ 
                              transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`,
                              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                              backdropFilter: 'blur(10px)'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'scale(1.15) rotate(3deg) translateY(-2px)';
                              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(var(--primary), 0.15) 0%, rgba(var(--secondary), 0.15) 100%)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'scale(1) rotate(0deg) translateY(0px)';
                              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)';
                            }}
                          >
                            <span className="text-lg transition-all duration-500 hover:animate-pulse">
                              {skill.icon}
                            </span>
                            <span className="relative font-medium transition-all duration-300 group-hover:font-semibold">
                              {skill.name}
                            </span>
                          </Badge>
                        );
                      })}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </CardContent>
              </Card>
            )
          )}
        </div>
      </div>
      
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500/20 rounded-full animate-pulse" 
             style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-green-500/20 rounded-full animate-pulse" 
             style={{ animationDelay: '1s', animationDuration: '4s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-purple-500/20 rounded-full animate-pulse" 
             style={{ animationDelay: '2s', animationDuration: '5s' }} />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-orange-500/20 rounded-full animate-pulse" 
             style={{ animationDelay: '1.5s', animationDuration: '3.5s' }} />
      </div>
    </section>
  );
}