import { NoteType } from 'src/types/note'
import { dateFormatter } from 'utils/dateFormatter'
import { HorizontalDivider } from './UI/HorizontalDivider'

export const Note = ({title, article, caption, date, uid}: NoteType) => {
  return (
    <article id={uid} className='space-y-molecular'>
      <div>
        {date && <span>{dateFormatter(date)}</span>}
        <h2>{title}</h2>
      </div>
      <div className='space-y-atomic'>
        {article}
      </div>
      <HorizontalDivider />
      <div className='w-1/2 pr-4 text-sm text-gray-400 space-y-subatomic'>{caption}</div>
    </article>
  )
}