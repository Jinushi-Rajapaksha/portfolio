import { Shield, ExternalLink } from "lucide-react"
import Link from "next/link"

interface Certification {
  title: string
  issuedBy: string
  date: string
  link: string
}

const certifications: Certification[] = [
  {
    title: "AWS Certified Solutions Architect",
    issuedBy: "Amazon Web Services (AWS)",
    date: "January 2024",
    link: "https://aws.amazon.com/certification/",
  },
  {
    title: "Google Professional Cloud Architect",
    issuedBy: "Google Cloud",
    date: "March 2024",
    link: "https://cloud.google.com/certification/cloud-architect",
  },
  {
    title: "Microsoft Certified: Azure Developer Associate",
    issuedBy: "Microsoft",
    date: "February 2024",
    link: "https://learn.microsoft.com/en-us/certifications/azure-developer-associate/",
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Certifications
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              
              {/* Content */}
              <div className="text-center space-y-3">
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  {cert.title}
                </h3>
                
                <div className="space-y-2">
                  <p className="text-gray-600 font-medium">
                    {cert.issuedBy}
                  </p>
                  <p className="text-sm text-gray-500">
                    {cert.date}
                  </p>
                </div>
                
                {/* View Certificate Link */}
                <div className="pt-4">
                  <Link
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors group/link"
                  >
                    View Certificate
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}