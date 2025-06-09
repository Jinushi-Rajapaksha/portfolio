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
                I'm a passionate software engineering intern with a strong
                foundation in computer science and a drive for solving
                real-world challenges through technology.
              </p>
              <p>
                Currently, I’m honing my skills in software design,
                architecture, and full-stack development by contributing to
                dynamic projects that push me to grow both technically and
                creatively. I'm especially enthusiastic about modern web
                technologies, system design, and building scalable, user-focused
                solutions.
              </p>
            </div>

            {/* Traits */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground text-base font-medium tracking-tight">
                  Team Collaborator
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground text-base font-medium tracking-tight">
                  Attention to Detail
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground text-base font-medium tracking-tight">
                  Adaptable
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground text-base font-medium tracking-tight">
                  Quick Learner
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
                I enjoy writing clean and efficient code.
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
                Always curious and open to learning new things.
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
                Keeps me focused during long coding sessions.
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
                I love building things that make a difference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
