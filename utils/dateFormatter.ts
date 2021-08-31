import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

type dateFormatterType = {
  date: string,
  format?: string,
}

export const dateFormatter = ({ date, format }: dateFormatterType) => dayjs(date).tz('Asia/Tokyo').format(format || 'YYYY-MM-DD HH:mm')
