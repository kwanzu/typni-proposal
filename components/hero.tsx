import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="container px-4 py-16 md:py-24 lg:py-32">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              The Young People's Network International - TYPNI
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Connecting young professionals globally. Build your network, enhance your skills, and grow your career.
            </p>
          </div>
          <div className="space-x-4">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

