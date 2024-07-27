import AccountForm from '@/components/settings/account-form'

export default function AccountSettings() {
  return (
    <section className="flex flex-col gap-y-5">
      <div className="rounded-xl bg-neutral-800 p-10">
        <AccountForm />
      </div>
    </section>
  )
}
