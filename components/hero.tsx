'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { UtmUrl } from '@/utils/urls'
import { motion, useInView } from 'framer-motion'


import { UtmMediums } from '@/types/links'


import { Button } from './ui/button'

// import GridGifImage from '/public/images/home/1.gif'
// import GridWideImage from '/public/images/home/wide-computer.webp'
const variants = {
    initial: {
        y: 40,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
    },
}

export function Hero() {
    const [isPopupVisible, setIsPopupVisible] = useState(false)
    const heroRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(heroRef, { once: true, margin: '-100px' })
    return (
        <>
            <motion.section
                id='hero'
                className='fade-in-down mt-10'
                initial='initial'
                animate={isInView ? 'animate' : 'initial'}
                variants={variants}
                ref={heroRef}
                transition={{
                    duration: 0.5,
                }}>
                <Background />
                <div className='flex flex-col'>
                    <div className='flex flex-col items-center'>
                        <div className='flex flex-col'>
                                <h1 className='title-1 mb-2 bg-clip-text  text-center text-3xl font-bold text-transparent sm:text-4xl md:text-6xl'>
                                    emre kalaycı
                                </h1>
                                <div className='mb-10 flex flex-row items-center justify-center gap-2'>
                                    <span className='relative flex size-2'>
                                        <span className='absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75'></span>
                                        <span className='relative inline-flex size-2 rounded-full bg-green-600'></span>
                                    </span>

                                    <span className=' text-md font-bold text-green-500 md:text-sm'>
                                        Available for Work
                                    </span>
                                </div>
                                <h2 className='title-2 bg-clip-text text-center text-xl  font-semibold text-transparent sm:text-2xl md:text-3xl lg:text-6xl'>
                                    “The happiness of your life depends upon
                                    <br />
                                    the quality of your thoughts.“ <br />
                                </h2>
                        </div>

                        <div className='my-6 space-y-2'>
                            <h2 className='flex flex-wrap items-center justify-center gap-4 text-xs font-medium leading-8 md:text-xs'>
                                eng & dev @
                                <Button variant='secondary' size={'sm'} className='border bg-muted px-2' asChild>
                                    <Link
                                        href={UtmUrl('', {
                                            source: 'emrklyci.dev',
                                            medium: UtmMediums.Homepage,
                                            content: 'hero',
                                        })}>
               
                                        bets
                                    </Link>
                                </Button>
                                <div className='flex items-center'>
                                    <Button variant='secondary' size={'sm'} className='border bg-muted px-2' asChild>
                                        <Link
                                            href={UtmUrl('https://github.com/ek-uint61', {
                                                medium: UtmMediums.Homepage,
                                                content: 'hero',
                                            })}>
                        
                                            github{' '}
                                        </Link>
                                    </Button>
                                </div>
                                <Button variant='secondary' size={'sm'} className='border bg-muted px-2' asChild>
                                    <Link
                                        href={UtmUrl('https://lichess.org/@/emrklyci', {
                                            medium: UtmMediums.Homepage,
                                            content: 'hero',
                                        })}>
                                        lichess{' '}
                                    </Link>
                                </Button>
                                <Button variant='secondary' size={'sm'} className='border bg-muted px-2' asChild>
                                    <a href={'/emre_kalayci.pdf'} target='_blank' rel='noreferrer'>
                           
                                        resume
                                    </a>
                                </Button>
                            </h2>
                        </div>
                        {/* CTA */}
                        <Button variant={'ghost'} className='-ml-4' asChild>
                            <Link href='/about'>
                                <p className='mr-2 font-serif'>I will tell you who I am in thirty seconds.</p>
                                <p className='inline-block animate-bounce'> ↓ </p>
                            </Link>
                        </Button>

                    </div>

                </div>
            </motion.section>
        </>
    )
}

function Background() {
    return (
        // eslint-disable-next-line tailwindcss/no-contradicting-classname
        <div className='absolute inset-0 -z-10 size-full bg-[linear-gradient(to_right,#ffffff11_1px,transparent_1px),linear-gradient(to_bottom,#ffffff11_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]'></div>
    )
}
