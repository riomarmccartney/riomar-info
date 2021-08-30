import { NoteType } from 'src/types/note'
import { dateFormatter } from 'utils/dateFormatter'

export const Note = ({title, article, caption, date, uid}: NoteType) => {

  return (
    <article>
      <h2>{title}</h2>
      <span>{dateFormatter(date)}</span>
      <div>{article}</div>
      <div>{caption}</div>
    </article>
  )
}