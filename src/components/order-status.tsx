type OrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

interface OrderStautsProps {
  status: OrderStatus
}

const orderStautsMap: Record<OrderStatus, string> = {
  canceled: 'Cancelado',
  delivered: 'Entregue',
  delivering: 'Em entrega',
  pending: 'Pendente',
  processing: 'Em preparo',
}

export function OrderStatus({ status }: OrderStautsProps) {
  return (
    <div className="flex items-center gap-2">
      {status === 'canceled' && (
        <span className="h-2 w-2 rounded-full bg-red-500" />
      )}
      {status === 'delivered' && (
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
      )}

      {status === 'pending' && (
        <span className="h-2 w-2 rounded-full bg-slate-400" />
      )}
      {['processing', 'delivering'].includes(status) && (
        <span className="h-2 w-2 rounded-full bg-amber-400" />
      )}
      <span className="font-medium text-muted-foreground">
        {orderStautsMap[status]}
      </span>
    </div>
  )
}
