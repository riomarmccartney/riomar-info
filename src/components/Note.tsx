import { molecularSpacing } from 'src/constants/spacing'
import { NoteType } from 'src/types/note'
import { dateFormatter } from 'utils/dateFormatter'


export const Note = ({title, article, caption, date, uid}: NoteType) => {
  return (
    <article id={uid} className={(molecularSpacing)}>
      <div className='w-1/2 mr-6'>
        <span>{dateFormatter(date)}</span>
        <h2 >{title}</h2>
      </div>
      {article}
      <div className='h-px border-t border-black border-dashed opacity-25'></div>
      <div className='w-1/2 mr-6 text-sm opacity-25'>{caption}</div>
    </article>
  )
}