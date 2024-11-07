'use client'

import React from 'react'
import Link from 'next/link'
import { IconMenu } from '@tabler/icons-react'

import { HeaderLinks } from '@/config/links'
import { Button } from './ui/button'
import { Icon } from './icon'
import { CalendarButton } from './calendar-button'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

export function NavbarMobile() {
    const [open, setOpen] = React.useState(false)

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                <Button
                    className='z-11 flex size-9 items-center justify-center p-0 md:hidden'
                    type='button'
                    aria-label='Toggle menu'
                    title='Toggle menu'
                    variant='ghost'>
                    <IconMenu size={20} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
                {HeaderLinks.map((link) => (
                    <DropdownMenuItem key={link.text} asChild>
                        <Link href={link.href} className='m-2 flex items-center gap-3' onClick={() => setOpen(false)}>
                            <Icon name={link.icon} className='size-4' />
                            <div>{link.text}</div>
                        </Link>
                    </DropdownMenuItem>
                ))}

                <CalendarButton className='m-2' size={'sm'} />
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
