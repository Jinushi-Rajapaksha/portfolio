import Image from "next/image"  // Import Image from next/image
import { Button } from "@/components/ui/button"
import { Mail, Download, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="container py-24 md:py-32">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="relative">
          <Image
            src="/placeholder.svg"
            alt="Profile"
            width={150}
            height={150}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Hi, I'm <span className="text-primary">Jinushi Rajapaksha</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Computer Science Student & Trainee Software Engineer passionate about building innovative solutions and
            learning cutting-edge technologies.
          </p>
        </div>
        <div className="flex gap-4 mt-6">
          <Button asChild>
            <Link href="#contact" className="flex items-center">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/resume.pdf" className="flex items-center" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Link>
          </Button>
        </div>
        <div className="flex gap-4 mt-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
