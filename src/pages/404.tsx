import { Link } from 'react-router-dom'

export function NotFounded() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Página nâo encontrada</h1>
      <p className="text-accent-foreground">
        Voltar para o{' '}
        <Link className="text-sky-500" to="/">
          Dashboard
        </Link>
      </p>
    </div>
  )
}
