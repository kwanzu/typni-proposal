'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from 'lucide-react'

export default function EventsCalendar() {
  const events = [
    {
      id: 1,
      title: "Leadership Workshop",
      date: "2025-01-20",
      time: "14:00",
      location: "Virtual",
      type: "Workshop"
    },
    {
      id: 2,
      title: "Networking Mixer",
      date: "2025-01-25",
      time: "18:00",
      location: "City Center Hub",
      type: "Networking"
    },
    {
      id: 3,
      title: "Tech Talk: Future of AI",
      date: "2025-02-01",
      time: "15:00",
      location: "Virtual",
      type: "Seminar"
    }
  ]

  return (
    <div className="grid gap-6 md:grid-cols-[1fr_300px]">
      <div className="space-y-4">
        {events.map((event) => (
          <Card key={event.id} className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold">{event.title}</h3>
                <div className="mt-2 text-sm text-muted-foreground">
                  <p className="flex items-center">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {new Date(event.date).toLocaleDateString()} at {event.time}
                  </p>
                  <p className="mt-1">{event.location}</p>
                </div>
              </div>
              <Button size="sm">Register</Button>
            </div>
          </Card>
        ))}
      </div>
      <div className="space-y-4">
        <Calendar mode="single" className="rounded-md border" />
        <Card className="p-4">
          <h4 className="font-semibold">Event Types</h4>
          <div className="mt-2 space-y-2">
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-blue-500 mr-2" />
              <span className="text-sm">Workshop</span>
            </div>
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-green-500 mr-2" />
              <span className="text-sm">Networking</span>
            </div>
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-purple-500 mr-2" />
              <span className="text-sm">Seminar</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

