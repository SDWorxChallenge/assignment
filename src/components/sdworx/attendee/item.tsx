"use client"

import { useState } from "react"
import { DialogTrigger } from "@radix-ui/react-dialog"
import { Trash2Icon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TD, TR } from "@/components/ui/typography"

interface Props {
  idx: number
  onDelete: (idx: number) => void
  attendee: {
    dateOfBirth: string
    name: string
    avatar: string
    country: string
    city: string
    id: string
  }
}

export default function AttendeeItem(props: Props) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <TR className="m-0 border-t border-slate-200 p-0 even:bg-slate-100 dark:border-slate-700 dark:even:bg-slate-800">
      <TD className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
        #{props.attendee.id}
      </TD>
      <TD className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
        <Avatar>
          <AvatarImage src={props.attendee.avatar} />
          <AvatarFallback>{props.attendee.name}</AvatarFallback>
        </Avatar>
      </TD>
      <TD className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
        {props.attendee.name}
      </TD>
      <TD className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
        {props.attendee.dateOfBirth}
      </TD>
      <TD className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
        {props.attendee.city}
      </TD>
      <TD className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
        {props.attendee.country}
      </TD>
      <TD className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
        <Dialog open={isDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="ghost" onClick={() => setIsDialogOpen(true)}>
              <Trash2Icon className="h-5 w-5" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Confirm</DialogTitle>
              <DialogDescription>
                Are you sure you wish to delete this item?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline">No</Button>
              <Button
                onClick={() => {
                  setIsDialogOpen(false)
                  props.onDelete(props.idx)
                }}
              >
                Yes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </TD>
    </TR>
  )
}
