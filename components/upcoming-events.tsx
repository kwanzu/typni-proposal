'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon, MapPinIcon, ClockIcon } from 'lucide-react'
import { EventRegistrationModal } from "./event-registration-modal"

interface Event {
  id: number
  title: string
  date: string
  time: string
  location: string
  description: string
}

interface UpcomingEventsProps {
  events: Event[]
  limit?: number
}

export function UpcomingEvents({ events, limit }: UpcomingEventsProps) {
  const [showAll, setShowAll] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const displayedEvents = showAll ? events : events.slice(0, limit || 3)

  const handleRegister = (event: Event) => {
    setSelectedEvent(event)
  }

  const handleCloseModal = () => {
    setSelectedEvent(null)
  }

  return (
    <div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {displayedEvents.map((event) => (
          <Card key={event.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-primary text-white p-4">
                <h2 className="text-xl font-bold mb-2">{event.title}</h2>
                <p className="flex items-center text-sm">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {new Date(event.date).toLocaleDateString()}
                </p>
              </div>
              <div className="p-4">
                <div className="space-y-2 mb-4">
                  <p className="flex items-center text-sm">
                    <ClockIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                    {event.time}
                  </p>
                  <p className="flex items-center text-sm">
                    <MapPinIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                    {event.location}
                  </p>
                </div>
                <p className="mb-4 text-sm">{event.description}</p>
                <Button className="w-full" onClick={() => handleRegister(event)}>Register Now</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {limit && events.length > limit && (
        <div className="mt-8 text-center">
          <Button onClick={() => setShowAll(!showAll)} variant="outline">
            {showAll ? 'Show Less' : 'View All Events'}
          </Button>
        </div>
      )}
      {selectedEvent && (
        <EventRegistrationModal
          event={selectedEvent}
          isOpen={!!selectedEvent}
          onClose={handleCloseModal}
        />
      )}
    </div>
  )
}

