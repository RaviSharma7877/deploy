"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Calendar, Clock, Video, ArrowLeft, Mail } from "lucide-react"
import type { BookingData } from "./booking-modal"

interface BookingConfirmationProps {
  bookingData: BookingData
  setBookingData: (data: BookingData) => void
  onBack: () => void
  onConfirm: () => void
}

export function BookingConfirmation({ bookingData, setBookingData, onBack, onConfirm }: BookingConfirmationProps) {
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleConfirm = () => {
    const newErrors: Record<string, string> = {}

    if (!bookingData.name.trim()) {
      newErrors.name = "Name is required"
    }
    if (!bookingData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(bookingData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    onConfirm()
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  }

  return (
    <div className="grid lg:grid-cols-[400px,1fr] gap-0 min-h-[600px]">
      <div className="p-8 lg:p-10 bg-gradient-to-br from-background to-secondary border-r border-border">
        <Button
          variant="ghost"
          onClick={onBack}
          size="sm"
          className="mb-8 text-muted-foreground hover:text-foreground hover:bg-secondary/50 -ml-2"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-sans font-bold text-foreground mb-2">Confirm booking</h2>
            <p className="text-sm text-muted-foreground">Review your meeting details</p>
          </div>

          <div className="bg-secondary border border-border rounded-xl p-6 space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 text-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">Date</p>
                <p className="text-foreground font-medium">{bookingData.date && formatDate(bookingData.date)}</p>
              </div>
            </div>

            <div className="h-px bg-border" />

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">Time</p>
                <p className="text-foreground font-medium">{bookingData.time}</p>
                <p className="text-xs text-muted-foreground mt-1">{bookingData.timezone.replace("_", " ")}</p>
              </div>
            </div>

            <div className="h-px bg-border" />

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                <Video className="w-5 h-5 text-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">Meeting</p>
                <p className="text-foreground font-medium">30-min Discovery Call</p>
                <p className="text-xs text-foreground mt-1">via Google Meet</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 lg:p-10 bg-background">
        <div className="max-w-xl mx-auto space-y-6">
          <div>
            <h3 className="text-xl font-sans font-bold text-foreground mb-2">Your details</h3>
            <p className="text-sm text-muted-foreground">We'll use this to send you the meeting invite</p>
          </div>

          <div className="space-y-5">
            <div>
              <Label htmlFor="name" className="text-foreground mb-2 text-sm font-medium">
                Full name <span className="text-foreground">*</span>
              </Label>
              <Input
                id="name"
                value={bookingData.name}
                onChange={(e) => {
                  setBookingData({ ...bookingData, name: e.target.value })
                  setErrors({ ...errors, name: "" })
                }}
                className="bg-secondary border-border text-foreground focus:border-foreground h-11"
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="text-xs text-destructive-foreground mt-2 flex items-center gap-1">{errors.name}</p>
              )}
            </div>

            <div>
              <Label htmlFor="email" className="text-foreground mb-2 text-sm font-medium">
                Email address <span className="text-foreground">*</span>
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  value={bookingData.email}
                  onChange={(e) => {
                    setBookingData({ ...bookingData, email: e.target.value })
                    setErrors({ ...errors, email: "" })
                  }}
                  className="bg-secondary border-border text-foreground focus:border-foreground h-11 pl-10"
                  placeholder="john@company.com"
                />
              </div>
              {errors.email && (
                <p className="text-xs text-destructive-foreground mt-2 flex items-center gap-1">{errors.email}</p>
              )}
            </div>

            <div>
              <Label htmlFor="company" className="text-foreground mb-2 text-sm font-medium">
                Company <span className="text-muted-foreground text-xs">(optional)</span>
              </Label>
              <Input
                id="company"
                value={bookingData.company}
                onChange={(e) => setBookingData({ ...bookingData, company: e.target.value })}
                className="bg-secondary border-border text-foreground focus:border-foreground h-11"
                placeholder="Your company"
              />
            </div>

            <div>
              <Label htmlFor="notes" className="text-foreground mb-2 text-sm font-medium">
                Notes or agenda <span className="text-muted-foreground text-xs">(optional)</span>
              </Label>
              <Textarea
                id="notes"
                value={bookingData.notes}
                onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                className="bg-secondary border-border text-foreground focus:border-foreground min-h-[100px] resize-none"
                placeholder="What would you like to discuss?"
              />
            </div>

            <div className="flex items-center justify-between bg-secondary border border-border rounded-lg p-4">
              <div className="flex-1">
                <Label htmlFor="send-invite" className="text-foreground text-sm font-medium cursor-pointer">
                  Send calendar invite
                </Label>
                <p className="text-xs text-muted-foreground mt-0.5">Receive meeting details via email</p>
              </div>
              <Switch
                id="send-invite"
                checked={bookingData.sendInvite}
                onCheckedChange={(checked) => setBookingData({ ...bookingData, sendInvite: checked })}
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button variant="outline" onClick={onBack} size="lg" className="flex-1 h-12 bg-transparent">
              Back
            </Button>
            <Button
              onClick={handleConfirm}
              size="lg"
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 h-12 font-medium"
            >
              Confirm booking
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            By booking, you agree to our terms. We respect your privacy.
          </p>
        </div>
      </div>
    </div>
  )
}
