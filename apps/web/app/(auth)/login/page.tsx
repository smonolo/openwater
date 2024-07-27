import AuthCard from '@/components/auth/auth-card'
import LoginForm from '@/components/auth/login-form'
import SwitchSection from '@/components/auth/switch-section'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login'
}

export default function Login() {
  return (
    <AuthCard>
      <LoginForm />
      <SwitchSection url="/join" text="Create an account" />
    </AuthCard>
  )
}
