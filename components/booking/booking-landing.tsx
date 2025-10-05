"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Globe, Video, CheckCircle2 } from "lucide-react"
import type { BookingData } from "./booking-modal"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { siteConfig } from "@/lib/site"

interface BookingLandingProps {
  bookingData: BookingData
  setBookingData: (data: BookingData) => void
  onNext: () => void
  onClose: () => void
}

const AVAILABLE_SLOTS = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
]

const TIMEZONES = [
  "America/New_York",
  "America/Chicago",
  "America/Denver",
  "America/Los_Angeles",
  "Europe/London",
  "Europe/Paris",
  "Asia/Dubai",
  "Asia/Kolkata",
  "Asia/Singapore",
  "Asia/Tokyo",
  "Australia/Sydney",
]

export function BookingLanding({ bookingData, setBookingData, onNext }: BookingLandingProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(bookingData.date || undefined)

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date)
    setBookingData({ ...bookingData, date: date || null, time: null })
  }

  const handleTimeSelect = (time: string) => {
    setBookingData({ ...bookingData, time })
  }

  const handleTimezoneChange = (timezone: string) => {
    setBookingData({ ...bookingData, timezone })
  }

  const canProceed = bookingData.date && bookingData.time

  return (
    <div className="grid lg:grid-cols-[400px,1fr] gap-0 min-h-[600px]">
      <div className="p-8 lg:p-10 bg-muted border-r border-border/40">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-primary text-primary-foreground rounded-xl flex items-center justify-center">
            <span className="font-bold text-lg">E2</span>
          </div>
          <span className="text-base font-medium text-foreground">{siteConfig.shortName}</span>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-sans font-bold text-foreground mb-3 leading-tight">Book a strategy session</h1>
            <p className="text-base text-muted-foreground">
              Share where your SaaS, SME, or D2C product is stuck and we’ll map the pod, plan, and proof you need next.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-secondary text-foreground border border-border/50 px-3 py-1">
              <Clock className="w-3.5 h-3.5 mr-1.5" />
              30 minutes
            </Badge>
            <Badge variant="secondary" className="bg-secondary text-foreground border border-border/50 px-3 py-1">
              <Video className="w-3.5 h-3.5 mr-1.5" />
              Google Meet
            </Badge>
          </div>

          <div className="h-px bg-border/60" />

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">What to expect</h3>
            <ul className="space-y-3">
              {[
                "Align on the outcomes that matter to your team",
                "Audit product, data, and revenue signals",
                "Outline an AI-first build, scale, and growth plan",
                "Confirm next steps, pod makeup, and timeline",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="p-8 lg:p-10 bg-background">
        <div className="max-w-xl mx-auto space-y-6">
          <div>
            <label className="text-sm font-semibold text-foreground mb-3 block flex items-center gap-2">
              <Globe className="w-4 h-4 text-primary" />
              Timezone
            </label>
            <Select value={bookingData.timezone} onValueChange={handleTimezoneChange}>
              <SelectTrigger className="bg-card border-border text-foreground h-11">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                {TIMEZONES.map((tz) => (
                  <SelectItem key={tz} value={tz} className="text-foreground focus:bg-muted focus:text-foreground">
                    {tz.replace("_", " ")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-semibold text-foreground mb-3 block">Select a date</label>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              disabled={(date) => date < new Date()}
              className="rounded-xl border border-border bg-card p-4 w-full"
              classNames={{
                months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 w-full",
                month: "space-y-4 w-full",
                caption: "flex justify-center pt-1 relative items-center text-foreground",
                caption_label: "text-sm font-medium",
                nav: "space-x-1 flex items-center",
                nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 text-foreground",
                nav_button_previous: "absolute left-1",
                nav_button_next: "absolute right-1",
                table: "w-full border-collapse space-y-1",
                head_row: "flex w-full",
                head_cell: "text-muted-foreground rounded-md w-full font-normal text-[0.8rem] uppercase",
                row: "flex w-full mt-2",
                cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-primary/10 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20 w-full",
                day: "h-10 w-full p-0 font-normal text-foreground hover:bg-primary/10 hover:text-foreground rounded-md transition-colors",
                day_selected:
                  "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                day_today: "bg-secondary text-primary ring-1 ring-primary",
                day_outside: "text-muted-foreground opacity-30",
                day_disabled: "text-muted-foreground opacity-30",
                day_range_middle: "aria-selected:bg-primary/10 aria-selected:text-foreground",
                day_hidden: "invisible",
              }}
            />
          </div>

          {selectedDate && (
            <div>
              <label className="text-sm font-semibold text-foreground mb-3 block">Available times</label>
              <div className="grid grid-cols-3 gap-2">
                {AVAILABLE_SLOTS.map((slot) => (
                  <Button
                    key={slot}
                    variant={bookingData.time === slot ? "default" : "outline"}
                    size="sm"
                    className={
                      bookingData.time === slot
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 border-0 h-10"
                        : "bg-card border-border text-foreground hover:bg-primary/10 hover:border-primary h-10"
                    }
                    onClick={() => handleTimeSelect(slot)}
                  >
                    {slot}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {!selectedDate && (
            <div className="text-center py-12 text-muted-foreground text-sm bg-card rounded-xl border border-border/60">
              Select a date to see available times
            </div>
          )}

          <Button
            onClick={onNext}
            disabled={!canProceed}
            size="lg"
            className="w-full rounded-xl h-12 text-base font-medium transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Continue to details
          </Button>
        </div>
      </div>
    </div>
  )
}
