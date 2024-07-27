import ProfileForm from '@/components/settings/profile-form'

export default function ProfileSettings() {
  return (
    <section className="flex flex-col gap-y-5">
      <div className="rounded-xl bg-neutral-800 p-10">
        <ProfileForm />
      </div>
    </section>
  )
}
