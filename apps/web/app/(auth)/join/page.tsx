import AuthCard from '@/components/auth/auth-card'
import RegisterForm from '@/components/auth/register-form'
import SwitchSection from '@/components/auth/switch-section'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Join'
}

export default function Join() {
  return (
    <AuthCard>
      <RegisterForm />
      <p className="mt-3 text-center text-xs text-neutral-400">
        By signing up, you acknowledge our{' '}
        <Link
          href="/terms"
          className="underline underline-offset-2 transition-colors hover:text-neutral-200"
        >
          Terms of Service
        </Link>
        .
      </p>
      <SwitchSection url="/login" text="Login to your account" />
    </AuthCard>
  )
}
