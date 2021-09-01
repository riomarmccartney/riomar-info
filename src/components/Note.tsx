import { atomicSpacing } from 'src/constants/spacing'
import { NoteType } from 'src/types/note'
import { dateFormatter } from 'utils/dateFormatter'


export const Note = ({title, article, caption, date, uid}: NoteType) => {
  return (
    <article id={uid} className={atomicSpacing}>
      <div className="max-w-xl">
        <span>{dateFormatter({date})}</span>
        <h2 >{title}</h2>
      </div>
      {article}
      <div className="text-sm text-gray-300">{caption}</div>
    </article>
  )
}