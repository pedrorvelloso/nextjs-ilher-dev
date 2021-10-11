import { WithChildren } from '@/models/app'

function Paragraph({ children }: WithChildren) {
  return (
    <p className="text-md lg:text-xl text-gray-800 dark:text-gray-200 mb-5">
      {children}
    </p>
  )
}

export default Paragraph
