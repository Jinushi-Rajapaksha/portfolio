import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github } from "lucide-react"
import Link from "next/link"

export function Contact() {
  return (
    <section id="contact" className="container py-24">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tighter mb-8">Get In Touch</h2>
        <p className="text-lg text-muted-foreground mb-8">
          I'm always open to discussing new opportunities, interesting projects, or just having a chat about
          technology. Feel free to reach out!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="mailto:rwjinushi@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              rwjinushi@gmail.com
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://www.linkedin.com/in/jinushi-rajapaksha/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://github.com/Jinushi-Rajapaksha" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
