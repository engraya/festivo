import EventForm from "@/components/shared/EventForm"
import { currentUser } from "@clerk/nextjs/server";


const CreateEvent = async () => {
  const user = await currentUser();
  const organizerId = user?.id as string
  const organizerFirstName = user?.firstName;
  const organizerLastName = user?.lastName

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">Create Festival</h3>
      </section>
      <div className="wrapper my-8">
        <EventForm organizerId={organizerId} organizerFirstName={organizerFirstName} organizerLastName={organizerLastName} type="Create" />
      </div>
    </>
  )
}

export default CreateEvent