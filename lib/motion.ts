import type { Transition } from "framer-motion"

const smoothEase: Transition["ease"] = [0.16, 1, 0.3, 1]

export const createSmoothTransition = (overrides?: Partial<Transition>): Transition => ({
  duration: 0.6,
  ease: smoothEase,
  ...overrides,
})

export const smoothTransition = createSmoothTransition()
