import { Shield, ExternalLink } from "lucide-react"
import { ReactNode } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Certification {
  title: string
  issuedBy: string
  date: string
  link: string
  icon?: ReactNode
  bgColor?: string
  iconColor?: string
}

const certifications: Certification[] = [
  {
    title: "OOP in Java",
    issuedBy: "Great Learning Academy",
    date: "October 2023",
    link: "https://drive.google.com/file/d/1mqIbhDO3aJx5y7jmJtdUZ7f72SSd9rlS/view",
    icon: <Shield className="w-8 h-8" />,
    bgColor: "bg-blue-50 group-hover:bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    title: "Python Essential Training",
    issuedBy: "LinkedIn Learning",
    date: "May 2023",
    link: "https://www.linkedin.com/posts/jinushi-rajapaksha_python-essential-training-certificate-activity-7069485062949351424-nzeU/",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    bgColor: "bg-blue-50 group-hover:bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    title: "Introduction to Cybersecurity",
    issuedBy: "Cisco Networking Academy",
    date: "June 2025",
    link: "https://drive.google.com/file/d/1vgVNdyH9WyeisWbmiZ5XFo2S99cHZX6x/view?usp=sharing",
    icon: <Shield className="w-8 h-8" />,
    bgColor: "bg-blue-50 group-hover:bg-blue-100",
    iconColor: "text-blue-600"
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="w-full py-16 bg-muted/50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">
          Certifications
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:border-blue-200 hover:-translate-y-1 cursor-pointer"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 ${cert.bgColor} rounded-full flex items-center justify-center transition-colors`}>
                    <span className={cert.iconColor}>
                      {cert.icon}
                    </span>
                  </div>
                </div>
                
                <CardTitle className="mb-3">
                  {cert.title}
                </CardTitle>
                
                <CardDescription className="font-medium">
                  {cert.issuedBy}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="text-center space-y-4">
                <p className="text-sm text-gray-500">
                  {cert.date}
                </p>
                
                {/* View Certificate Link */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors group/link"
                >
                  View Certificate
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}