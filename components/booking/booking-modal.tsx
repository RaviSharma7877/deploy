"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { BookingLanding } from "./booking-landing"
import { BookingConfirmation } from "./booking-confirmation"
import { BookingSuccess } from "./booking-success"

export type BookingStep = "landing" | "confirmation" | "success"

export interface BookingData {
  date: Date | null
  time: string | null
  timezone: string
  name: string
  email: string
  company: string
  notes: string
  sendInvite: boolean
}

interface BookingModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function BookingModal({ open, onOpenChange }: BookingModalProps) {
  const [step, setStep] = useState<BookingStep>("landing")
  const [bookingData, setBookingData] = useState<BookingData>({
    date: null,
    time: null,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    name: "",
    email: "",
    company: "",
    notes: "",
    sendInvite: true,
  })

  const handleClose = () => {
    onOpenChange(false)
    setTimeout(() => {
      setStep("landing")
      setBookingData({
        date: null,
        time: null,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        name: "",
        email: "",
        company: "",
        notes: "",
        sendInvite: true,
      })
    }, 300)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-5xl p-0 bg-background border border-border overflow-hidden max-h-[95vh] overflow-y-auto">
        {step === "landing" && (
          <BookingLanding
            bookingData={bookingData}
            setBookingData={setBookingData}
            onNext={() => setStep("confirmation")}
            onClose={handleClose}
          />
        )}
        {step === "confirmation" && (
          <BookingConfirmation
            bookingData={bookingData}
            setBookingData={setBookingData}
            onBack={() => setStep("landing")}
            onConfirm={() => setStep("success")}
          />
        )}
        {step === "success" && <BookingSuccess bookingData={bookingData} onClose={handleClose} />}
      </DialogContent>
    </Dialog>
  )
}
