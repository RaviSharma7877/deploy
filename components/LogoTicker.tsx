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
        <section className="mx-auto px-4 py-20 md:py-24 lg:px-8">
            <div className="container">
                <div className="flex items-center gap-5">
                    <div className="flex-1 md:flex-none">
                        <h2 className="font-bold">Trusted by top innovative teams</h2>
                    </div>
                    <div className="relative flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
                        <div className="logo-marquee flex flex-none gap-14 whitespace-nowrap" style={{ animationDuration: "12s" }}>
                            {marqueeLogos.map((logo, index) => (
                                <div key={`${logo.src}-${index}`} className="flex h-6 w-auto flex-none items-center">
                                    <Image
                                        src={logo.src}
                                        alt="Partner logo"
                                        className="h-full w-auto brightness-150 contrast-125 !grayscale saturate-150"
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
