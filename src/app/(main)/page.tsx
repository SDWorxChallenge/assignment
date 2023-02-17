import api from "@/lib/api"
import AttendeeOverview from "@/components/sdworx/attendee/overview"
import { H1 } from "@/components/ui/typography"

export default async function Home() {
  const attendees = await api.attendee.getAll()

  return (
    <div className="flex-1 h-full flex overflow-auto flex-col">
      <H1 className="text-lg lg:text-xl">
        Attendees ({attendees.body.length})
      </H1>

      <AttendeeOverview attendees={attendees.body} />
    </div>
  )
}
