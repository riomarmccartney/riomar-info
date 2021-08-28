import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import { NoteType } from "src/types/note"
import { RichText } from 'prismic-reactjs'

dayjs.extend(utc)
dayjs.extend(timezone)

export const Note = ({title, article, caption, date, uid}: NoteType) => {
  const dateLocalized = dayjs(date).tz("Asia/Tokyo").format('YYYY.MM.DD HH:mm')

  return (
    <article>
      <h2>{RichText.asText(title)}</h2>
      <span>{dateLocalized}</span>
      {RichText.render(article)}
      {RichText.render(caption)}
    </article>
  )
}