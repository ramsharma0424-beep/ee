import React from 'react'

export default function TeamImgSection() {
    return (
        <section className="relative w-full overflow-clip py-8 lg:py-16">
            <img
                src="/AboutImgs/essentia-team.webp"
                alt="team image"
                className="w-full h-[250px] sm:h-[320px] md:h-[550px] object-cover"
                loading="lazy"
                decoding="async"
            />
        </section>
    )
}
