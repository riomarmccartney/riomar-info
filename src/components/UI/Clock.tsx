import { useState , useEffect } from 'react'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import clsx from 'clsx'

dayjs.extend(utc)
dayjs.extend(timezone)

export const Clock = () => {
  const [date, setDate] = useState(new Date());
  const [tick, setTick] = useState(true)

  useEffect(() => {
    const timer = setInterval(()=>setDate(new Date()), 1000 )
    return function cleanup() {
      clearInterval(timer)
      setTick(!tick)
    }
  })

  const time = dayjs(date).tz('Asia/Tokyo')
  const day = time.format('YYYY-MM-DD')
  const hour = time.format('HH')
  const min = time.format('mm')

  return <span>{day} {hour}<span className={clsx(tick ? 'opacity-100' : 'opacity-0', 'transition-opacity duration-1000')}>:</span>{min}</span>

}