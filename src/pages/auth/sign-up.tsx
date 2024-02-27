import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
// import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'

const SignUpFormSchema = zod.object({
  email: zod.string().email(),
})

type SignUpForm = zod.infer<typeof SignUpFormSchema>

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>()

  async function handleSignUp(data: SignUpForm) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success('Enviamos um link de autentificação no seu e-mail.', {
        action: {
          label: 'Reenviar',
          onClick: () => {
            handleSignUp(data)
          },
        },
      })
    } catch {
      toast.error('credenciais invalidas')
    }
  }

  return (
    <div className="p-8">
      <div className="flex w-[350px] flex-col justify-center gap-6 ">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Criar conta grátis
          </h1>
          <p className=" text-sm text-muted-foreground">
            Seja um parceiro e comece suas vendas!
          </p>
        </div>

        <form
          onSubmit={handleSubmit(handleSignUp)}
          action=""
          className="space-y-4"
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
            Finalizar cadastro
          </Button>
        </form>
      </div>
    </div>
  )
}
