import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Github,
  ExternalLink,
  Globe,
  Smartphone,
  Brain,
  Server,
} from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack web application built with React, Node.js, and PostgreSQL. Features user authentication, payment processing, and admin dashboard.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com",
    demo: "https://demo.com",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: "Task Management App",
    description:
      "Mobile-first task management application with real-time collaboration features. Built using React Native and Firebase.",
    technologies: ["React Native", "Firebase", "Redux"],
    github: "https://github.com",
    demo: "https://demo.com",
    icon: <Smartphone className="w-6 h-6" />,
  },
  {
    title: "Machine Learning Classifier",
    description:
      "Image classification model using TensorFlow and Python. Achieved 94% accuracy on test dataset with custom CNN architecture.",
    technologies: ["Python", "TensorFlow", "OpenCV", "Jupyter"],
    github: "https://github.com",
    icon: <Brain className="w-6 h-6" />,
  },
  {
    title: "RESTful API Service",
    description:
      "Scalable REST API built with Express.js and MongoDB. Includes authentication, rate limiting, and comprehensive documentation.",
    technologies: ["Express.js", "MongoDB", "JWT", "Swagger"],
    github: "https://github.com",
    demo: "https://api-demo.com",
    icon: <Server className="w-6 h-6" />,
  },
];

export function Projects() {
  return (
    <section id="projects" className="container py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">
            My Projects
          </h2>
          <p className=" max-w-2xl mx-auto text-muted-foreground text-lg font-normal">
            Here are some of the projects I've worked on. Each project
            represents my skills and dedication to creating high-quality
            applications.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-3">
                  {project.icon}
                  <CardTitle className="text-2xl font-bold">
                    {project.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="font-bold">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  {project.demo && (
                    <Button variant="outline" size="sm" asChild>
                      <Link
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
