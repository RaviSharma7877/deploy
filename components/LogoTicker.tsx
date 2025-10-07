"use client"
import acmeLogo from "@/assets/logo-acme.png"
import apexLogo from "@/assets/logo-apex.png"
import celestialLogo from "@/assets/logo-celestial.png"
import quantumLogo from "@/assets/logo-quantum.png"
import pulseLogo from "@/assets/logo-pulse.png"
import echoLogo from "@/assets/logo-echo.png"
import Image from "next/image"

interface Translations {
    hero: {
        introducing: string;
        // Add other translation keys as needed
    };
}

const logos = [acmeLogo, apexLogo, celestialLogo, quantumLogo, pulseLogo, echoLogo]

export const LogoTicker = ({}) => {
    const marqueeLogos = [...logos, ...logos]
    return (
        <section className="mx-auto px-4 py-16 md:py-20 lg:px-8">
            <div className="container">
                <div className="flex flex-col gap-6 md:flex-row md:items-center">
                    <div className="w-full md:w-auto">
                        <h2 className="text-center md:text-left font-bold text-foreground">
                            Trusted by top innovative teams
                        </h2>
                    </div>
                    <div
                        className="relative flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_12%,white_88%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,white_12%,white_88%,transparent)]"
                        aria-hidden="true"
                    >
                        <div
                            className="logo-marquee flex flex-none gap-8 md:gap-14 whitespace-nowrap"
                            style={{ animationDuration: "12s" }}
                        >
                            {marqueeLogos.map((logo, index) => (
                                <div key={`${logo.src}-${index}`} className="flex h-7 md:h-8 w-auto flex-none items-center">
                                    <Image
                                        src={logo.src}
                                        alt="Partner logo"
                                        className="h-full w-auto grayscale opacity-80 transition-opacity duration-200 hover:opacity-100 dark:opacity-90"
                                        width={120}
                                        height={60}
                                        priority={index === 0}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
