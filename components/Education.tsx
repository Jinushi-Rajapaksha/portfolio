import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, GraduationCap } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="container py-30 ">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Experience & Education</h2>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Experience Card */}
          <Card className="flex-1 rounded-lg">
            <CardHeader className="flex items-center justify-between px-6 py-4">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Experience</span>
              <div className="flex items-start gap-3">
                <Briefcase className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <CardDescription className="mb-3">
                  DMS Software Engineering.<br />• 2023 - Present
                </CardDescription>
              </div>
            </CardHeader>
            <CardTitle className="px-6 text-xl font-semibold">Trainee Software Engineer</CardTitle>
            <CardContent className="px-6 pb-6">
              <p className="text-base leading-relaxed">
                Working on full-stack development using React, .NET, and Sql Server Management. Participating in agile development processes and collaborating with cross-functional teams.
              </p>
            </CardContent>
          </Card>

          {/* Education Card */}
          <Card className="flex-1 rounded-lg">
            <CardHeader className="flex items-center justify-between px-6 py-4">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Education</span>
              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <CardDescription className="mb-3">
                  University of Westminster<br />• 2023 - 2028
                </CardDescription>
              </div>
            </CardHeader>
            <CardTitle className="px-6 text-xl font-semibold">Bachelor of Science in Computer Science</CardTitle>
            <CardContent className="px-6 pb-6 space-y-2">
              <p className="text-base leading-relaxed">
                Studying algorithms, data structures, software engineering principles, and computer architecture.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}