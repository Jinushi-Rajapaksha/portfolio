"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail, Download } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <>
      <style jsx>{`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
        .wave {
          animation: wave 2s ease-in-out infinite;
          transform-origin: 70% 70%;
          display: inline-block;
        }
      `}</style>
      <section className="container py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-left text-center">
                Hi <span className="wave">👋</span>, I&apos;m{" "}
                <span className="text-primary block">Jinushi Rajapaksha</span>
              </h1>
              <h2 className="text-xl md:text-3xl text-gray-600 dark:text-gray-200 lg:text-left text-center">
                Computer Science Student &<br />
                Trainee Software Engineer
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-lg dark:text-gray-400 lg:text-left text-center">
                Passionate about creating elegant solutions to complex problems. I
                specialize in full-stack development with a focus on creating
                intuitive, high-performance applications.
              </p>
            </div>
            
            <div className="flex gap-4 lg:justify-start justify-center flex-wrap">
              <Button asChild>
                <Link href="#contact" className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link 
                  href="/JinushiResume.pdf" 
                  className="flex items-center border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    alt="Jinushi Rajapaksha - Profile"
                    width={400}
                    height={400}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}