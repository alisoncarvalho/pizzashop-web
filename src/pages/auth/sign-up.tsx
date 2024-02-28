import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
// import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { Link, useNavigate } from 'react-router-dom'

const SignUpFormSchema = zod.object({
  restaurantName: zod.string(),
  managerName: zod.string(),
  phone: zod.string(),
  email: zod.string().email(),
})

type SignUpForm = zod.infer<typeof SignUpFormSchema>

export function SignUp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>()

  async function handleSignUp(data: SignUpForm) {
    try {
      console.log(data)
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success('Restaurante cadastrado com sucesso.', {
        action: {
          label: 'Login',
          onClick: () => {
            navigate('/signin')
          },
        },
      })
    } catch {
      toast.error('Erro ao cadastrar restaurante')
    }
  }

  return (
    <div className="p-8">
      <Button
        variant={'secondary'}
        asChild
        className="absolute right-8 top-8  "
      >
        <Link to="/signin">Fazer login</Link>
      </Button>
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
            <Label htmlFor="restaurantName">Nome do estabelecimento </Label>
            <Input
              id="restaurantName"
              type="text"
              {...register('restaurantName')}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="managerName">Seu nome</Label>
            <Input id="managerName" type="text" {...register('managerName')} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Seu celular </Label>
            <Input id="phone" type="tel" {...register('phone')} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Seu e-mail </Label>
            <Input id="email" type="email" {...register('email')} />
          </div>
          <Button disabled={isSubmitting} type="submit" className="w-full">
            Finalizar cadastro
          </Button>

          <p className=" px-6 text-center text-sm leading-relaxed text-muted-foreground">
            Ao continuar, você concorda com nossas{' '}
            <a href="">políticas de privacidade</a> e{' '}
            <a href="">termos de serviço</a>.
          </p>
        </form>
      </div>
    </div>
  )
}
