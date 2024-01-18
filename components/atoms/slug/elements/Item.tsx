import React from 'react'
import { PiCommandBold } from "react-icons/pi";
import { ModeToggle } from "@/components/ui/toggle-theme"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
const Item = () => {
  return (
    <>
     <div>
        <div className='flex justfy-center items-center gap-2'>
            <Dialog>
                <DialogTrigger ><PiCommandBold size={20} /></DialogTrigger>
                <DialogContent >
            <Command >
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                    <CommandItem>Calendar</CommandItem>
                    <CommandItem>Search Emoji</CommandItem>
                    <CommandItem>Calculator</CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Settings">
                    <CommandItem>Profile</CommandItem>
                    <CommandItem>Billing</CommandItem>
                    <CommandItem>Settings</CommandItem>
                    <CommandItem>switch toggle mode</CommandItem>
                    </CommandGroup>
                </CommandList>
                </Command>
                </DialogContent>
                </Dialog>
                <ModeToggle/>
                </div>
            </div>

    </>
  )
}

export default Item