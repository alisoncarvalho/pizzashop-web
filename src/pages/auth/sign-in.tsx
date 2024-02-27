import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as zod from 'zod'
// import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'

const SignInFormSchema = zod.object({
  email: zod.string().email(),
})

type SignInForm = zod.infer<typeof SignInFormSchema>

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>()

  async function handleSignIn(data: SignInForm) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success('Enviamos um link de autentificação no seu e-mail.', {
        action: {
          label: 'Reenviar',
          onClick: () => {
            handleSignIn(data)
          },
        },
      })
    } catch {
      toast.error('credenciais invalidas')
    }
  }

  return (
    <div className="p-8">
      <Button asChild className="absolute right-8 top-8  ">
        <Link to="/signup">Novo estabelecimento</Link>
      </Button>
      <div className="flex w-[350px] flex-col justify-center gap-6 ">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Acessar painel
          </h1>
          <p className=" text-sm text-muted-foreground">
            Acompanhe suas vendas pelo painel do parceiro
          </p>
        </div>

        <form
          onSubmit={handleSubmit(handleSignIn)}
          action=""
          className="space-y-8"
        >
          <div className="space-y-2">
            <Label htmlFor="email">Seu e-mail </Label>
            <Input
              id="email"
              type="email"
              placeholder="E-mail"
              {...register('email')}
            />
          </div>
          <Button disabled={isSubmitting} type="submit" className="w-full">
            Acessar painel
          </Button>
        </form>
      </div>
    </div>
  )
}
