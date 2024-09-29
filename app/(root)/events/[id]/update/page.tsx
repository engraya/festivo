import EventForm from "@/components/shared/EventForm"
import { getEventById } from "@/lib/actions/event.actions"
import { currentUser } from "@clerk/nextjs/server";

type UpdateEventProps = {
  params: {
    id: string
  }
}

const UpdateEvent = async ({ params: { id } }: UpdateEventProps) => {

  // const userId = sessionClaims?.userId as string;

  const user = await currentUser();
  const organizerId = user?.id as string
  const event = await getEventById(id)

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">Update Festival</h3>
      </section>

      <div className="wrapper my-8">
        {/* @ts-ignore */}
        <EventForm 
          type="Update" 
          event={event} 
          eventId={event._id} 
          organizerId={organizerId} 
        />
      </div>
    </>
  )
}

export default UpdateEvent