import { Code, BookOpen, Coffee, Heart } from "lucide-react";

export function About() {
  return (
    <section id="about" className="container py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-4">
          About Me
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-16"></div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Who I Am */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-tighter mb-6">
              Who I Am
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed md:text-lg font-normal">
              <p>
                I'm a computer science student and trainee software engineer
                with a passion for building innovative solutions that solve
                real-world problems. My journey in technology began when I was
                introduced to programming in high school, and I've been hooked
                ever since.
              </p>
              <p>
                Currently, I'm deepening my understanding of software
                engineering principles and practices while working on exciting
                projects that challenge me to grow as a developer. I'm
                particularly interested in web development, AI, mobile apps, and
                cutting-edge technologies.
              </p>
            </div>

            {/* Traits */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground text-base font-medium tracking-tight">
                  Problem Solver
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground text-base font-medium tracking-tight">
                  Quick Learner
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground text-base font-medium tracking-tight">
                  Team Player
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground text-base font-medium tracking-tight">
                  Detail-Oriented
                </span>
              </div>{" "}
            </div>
          </div>

          {/* Right Column - Cards Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Coding Card */}
            <div className="bg-card border p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
              <div className="mb-4">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-2xl font-semibold tracking-tight mb-3">
                Coding
              </h4>
              <p className="text-muted-foreground text-base leading-relaxed">
                I love solving complex problems and turning ideas into working
                software.
              </p>
            </div>

            {/* Learning Card */}
            <div className="bg-card border p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
              <div className="mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-2xl font-semibold tracking-tight mb-3">
                Learning
              </h4>
              <p className="text-muted-foreground text-base leading-relaxed">
                Constantly exploring new technologies and expanding my
                knowledge.
              </p>
            </div>

            {/* Coffee Card */}
            <div className="bg-card border p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
              <div className="mb-4">
                <Coffee className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-2xl font-semibold tracking-tight mb-3">
                Coffee
              </h4>
              <p className="text-muted-foreground text-base leading-relaxed">
                Fueling late-night coding sessions and creative problem-solving.
              </p>
            </div>

            {/* Passion Card */}
            <div className="bg-card border p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
              <div className="mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-2xl font-semibold tracking-tight mb-3">
                Passion
              </h4>
              <p className="text-muted-foreground text-base leading-relaxed">
                Dedicated to crafting elegant solutions that make an impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
