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
      {caption && <HorizontalDivider />}
      <div className='text-sm text-gray-500 lg:pr-4 lg:w-1/2 space-y-subatomic'>{caption}</div>
    </article>
  )
}