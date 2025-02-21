import {
  getSubscriberInviteClicks,
  getSubscriberInviteCount,
  getSubscriberRankingPosition,
} from '@/http/api'
import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react'

interface StatsProps {
  subscribedId: string
}

export async function Stats({ subscribedId }: StatsProps) {
  const { count: accessCount } = await getSubscriberInviteClicks(subscribedId)
  const { count: inviteCount } = await getSubscriberInviteCount(subscribedId)
  const { position: rankingPosition } =
    await getSubscriberRankingPosition(subscribedId)

  return (
    <div className="grid gap-3 md:grid-cols-3">
      <div className="bg-gray-700 border border-gray-600 relative px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          {accessCount}
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Acessos ao link
        </span>
        <MousePointerClick className="size-5 text-purple absolute top-3 left-3" />
      </div>
      <div className="bg-gray-700 border border-gray-600 relative px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          {inviteCount}
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Inscrições feitas
        </span>
        <BadgeCheck className="size-5 text-purple absolute top-3 left-3" />
      </div>
      <div className="bg-gray-700 border border-gray-600  relative px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          {rankingPosition ? `${rankingPosition}°` : '-'}°
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Posições no ranking
        </span>
        <Medal className="size-5 text-purple absolute top-3 left-3" />
      </div>
    </div>
  )
}
