'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from 'lucide-react'

interface MembershipCardProps {
  title: string
  price: string
  features: string[]
  highlighted?: boolean
}

export default function MembershipCard({ title, price, features, highlighted = false }: MembershipCardProps) {
  return (
    <Card className={`p-6 ${highlighted ? 'border-2 border-primary shadow-lg' : ''}`}>
      <h3 className="text-2xl font-bold">{title}</h3>
      <div className="mt-4 flex items-baseline">
        <span className="text-3xl font-bold">{price}</span>
        {price !== "Custom" && <span className="ml-1 text-muted-foreground">/month</span>}
      </div>
      <ul className="mt-6 space-y-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <Check className="h-4 w-4 text-primary mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <Button className="mt-8 w-full">Get Started</Button>
    </Card>
  )
}

