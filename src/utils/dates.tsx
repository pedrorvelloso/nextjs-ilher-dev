import { format, add, parseISO } from 'date-fns'

export function formatDate(dateString: string) {
  return format(
    add(parseISO(dateString), {
      minutes: new Date().getTimezoneOffset(),
    }),
    'PPP',
  )
}
