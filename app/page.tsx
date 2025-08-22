import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ServiceCard } from "@/components/ServiceCard"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-16">
      {/* Hero Section */}
      <section className="container px-4 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Web3 Growth<br />Leader
            </h1>
            <div className="mt-8 space-y-2 text-gray-600 dark:text-gray-400">
              <p className="text-lg">Scaled t3rn from 0 to</p>
              <p className="text-2xl font-semibold text-foreground">95,000 users in 6 months</p>
              <p className="text-2xl font-semibold text-foreground">$3.7B bridged volume</p>
            </div>
            <p className="mt-8 text-lg text-gray-600 dark:text-gray-400">
              Growth strategist for Web3 & AI startups. I scale crypto projects using automation systems and community strategies refined over 10 years of testing what actually works.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="animate-fade-in animate-delay-100" asChild>
                <Link href="#contact">Get in touch</Link>
              </Button>
              <Button size="lg" variant="outline" className="animate-fade-in animate-delay-200" asChild>
                <Link href="https://twitter.com/your-handle" target="_blank">Follow on X</Link>
              </Button>
              <Button size="lg" variant="outline" className="animate-fade-in animate-delay-300" asChild>
                <Link href="https://linkedin.com/in/your-profile" target="_blank">Connect on LinkedIn</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-auto md:h-[600px] animate-fade-in animate-delay-200">
            <div className="hero-image-container theme-transition">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-gray-200 dark:border-gray-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600">
                      <svg className="h-32 w-32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section id="achievements" className="container px-4">
        <h2 className="section-heading">Key achievements at t3rn</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { number: "95,000", text: "Users scaled in 6 months" },
            { number: "$3.7B", text: "Volume bridged" },
            { number: "95%", text: "Support automation" },
            { number: "5-6x", text: "Community growth" }
          ].map((achievement, i) => (
            <Card key={i} className="p-8 card-hover theme-transition">
              <h3 className="text-4xl font-bold">{achievement.number}</h3>
              <p className="mt-2 text-muted-foreground">{achievement.text}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container px-4">
        <h2 className="section-heading">I can help you with ...</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="Growth Marketing"
            description="Scaling Web3 projects through automation-first growth systems, user acquisition, and retention optimization."
          />
          <ServiceCard
            title="Community Building"
            description="Designing community as product with ambassador programs, creator flywheels, and authentic engagement strategies."
          />
          <ServiceCard
            title="Automation & AI"
            description="Building AI-powered support systems and marketing automation that scales efficiently while maintaining quality."
          />
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="container px-4">
        <h2 className="section-heading">My way of getting things done</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {[
            {
              number: "01",
              title: "Technical + Emotional Narratives",
              description: "Nail both the technical excellence and emotional storytelling that connects with users and drives adoption."
            },
            {
              number: "02",
              title: "Community as Product",
              description: "Design community programs that turn TOFU users into filtered contributors and eventually ambassadors."
            },
            {
              number: "03",
              title: "Automation-First Growth",
              description: "Build systems that scale efficiently - from AI support desks to automated onboarding flows."
            },
            {
              number: "04",
              title: "Data-Driven Optimization",
              description: "Focus on real metrics that matter - successful transactions, retention, and quality user engagement."
            }
          ].map((method, i) => (
            <div key={i} className="group space-y-4 rounded-lg border p-6 card-hover theme-transition">
              <h3 className="text-xl font-semibold">
                {method.number}. {method.title}
              </h3>
              <p className="text-muted-foreground">{method.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-heading">Let's talk about scaling your Web3 project</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Open to Head of Growth / Growth Lead roles in crypto & AI.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="mailto:ginowinnefeld@gmail.com">Send me an email</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://linkedin.com/in/your-profile" target="_blank">Connect on LinkedIn</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}