import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import { NoteType } from 'src/types/note'

dayjs.extend(utc)
dayjs.extend(timezone)

export const Note = ({title, article, caption, date, uid}: NoteType) => {
  const dateLocalized = dayjs(date).tz('Asia/Tokyo').format('YYYY.MM.DD HH:mm')

  return (
    <article>
      <h2>{title}</h2>
      <span>{dateLocalized}</span>
      <div>{article}</div>
      <div>{caption}</div>
    </article>
  )
}