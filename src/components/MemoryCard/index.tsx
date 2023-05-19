import Link from 'next/link'
import Image from 'next/image'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import { ArrowRight } from 'lucide-react'

interface Memory {
  memory: { id: string; coverUrl: string; excerpt: string; createdAt: string }
}

dayjs.locale(ptBr)

export function MemoryCard({ memory }: Memory) {
  return (
    <div className="space-y-4">
      <time className="-ml-8 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50">
        {dayjs(memory.createdAt).format('D[ de ] MMMM[, ]YYYY')}
      </time>

      <Image
        src={memory.coverUrl}
        alt="Lembrança"
        width={592}
        height={280}
        className="aspect-video w-full rounded-lg object-cover"
      />

      <p className="text-lg leading-relaxed text-gray-100">{memory.excerpt}</p>

      <Link
        href={`/memories/${memory.id}`}
        className="flex items-center gap-2 text-sm text-gray-200 hover:text-gray-100"
      >
        Ler mais
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  )
}