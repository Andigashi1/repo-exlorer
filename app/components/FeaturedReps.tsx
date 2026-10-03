import Rep from '../ui/Rep'
import { repositories } from '@/lib/data'

const FeaturedReps = () => {
  return (
    <div className='text-left space-y-10'>
        <h2 className='text-2xl font-semibold'>Popular Repositories</h2>
        <div className='flex gap-4 flex-wrap'>
          {repositories.map(rep => (
              <Rep key={rep.id} data={rep} variant="featured"/>
          ))}
        </div>
    </div>
  )
}

export default FeaturedReps