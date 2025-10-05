"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Video, CheckCircle2, Copy, Download } from "lucide-react"
import type { BookingData } from "./booking-modal"
import { useState } from "react"

interface BookingSuccessProps {
  bookingData: BookingData
  onClose: () => void
}

export function BookingSuccess({ bookingData, onClose }: BookingSuccessProps) {
  const [copied, setCopied] = useState(false)

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  }

  const meetLink = "https://meet.google.com/abc-defg-hij"

  const handleCopyLink = () => {
    navigator.clipboard.writeText(meetLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="p-8 lg:p-16 bg-background text-center min-h-[600px] flex flex-col items-center justify-center">
      <div className="max-w-2xl mx-auto w-full space-y-8">
        <div className="relative inline-block">
          <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
        </div>

        <div>
          <h2 className="text-3xl lg:text-4xl font-sans font-bold text-foreground mb-3">
            You're all set{bookingData.name && `, ${bookingData.name.split(" ")[0]}`}!
          </h2>
          <p className="text-base text-muted-foreground">Your meeting is confirmed. Check your email for details.</p>
        </div>

        <div className="bg-card border border-border rounded-xl p-8 text-left space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Calendar className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">When</p>
              <p className="text-foreground font-medium text-lg">{bookingData.date && formatDate(bookingData.date)}</p>
              <p className="text-foreground mt-1">{bookingData.time}</p>
              <p className="text-sm text-muted-foreground mt-1">{bookingData.timezone.replace("_", " ")}</p>
            </div>
          </div>

          <div className="h-px bg-border/60" />

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Video className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">Meeting Link</p>
              <div className="flex items-center gap-2 bg-card rounded-lg p-3 border border-border">
                <code className="text-primary text-sm flex-1 truncate">{meetLink}</code>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleCopyLink}
                  className="text-foreground hover:bg-primary/10 flex-shrink-0 h-8"
                >
                  {copied ? "Copied!" : <Copy className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          </div>

          <div className="h-px bg-border/60" />

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Download className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">Add to Calendar</p>
              <div className="flex flex-wrap gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-border text-foreground hover:bg-primary/10 bg-transparent"
                >
                  Google
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-border text-foreground hover:bg-primary/10 bg-transparent"
                >
                  Outlook
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-border text-foreground hover:bg-primary/10 bg-transparent"
                >
                  iCal
                </Button>
              </div>
            </div>
          </div>

          {(bookingData.company || bookingData.notes) && (
            <>
              <div className="h-px bg-border/60" />
              <div className="space-y-3">
                {bookingData.company && (
                  <div>
                    <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">Company</p>
                    <p className="text-foreground">{bookingData.company}</p>
                  </div>
                )}
                {bookingData.notes && (
                  <div>
                    <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">Your Notes</p>
                    <p className="text-foreground leading-relaxed">{bookingData.notes}</p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="outline" className="border-border text-foreground hover:bg-primary/10 bg-transparent">
            Reschedule
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground hover:bg-muted">
            Cancel meeting
          </Button>
        </div>

        <Button
          onClick={onClose}
          size="lg"
          className="rounded-xl h-12 px-8 transition-all hover:-translate-y-0.5 hover:shadow-lg"
        >
          Done
        </Button>
      </div>
    </div>
  )
}
