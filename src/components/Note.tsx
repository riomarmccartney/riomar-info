import { molecularSpacing, subAtomicSpacing } from 'src/constants/spacing'
import { NoteType } from 'src/types/note'
import { dateFormatter } from 'utils/dateFormatter'


export const Note = ({title, article, caption, date, uid}: NoteType) => {
  return (
    <article id={uid} className={(molecularSpacing)}>
      <div className={(subAtomicSpacing)}>
        <span>{dateFormatter(date)}</span>
        <h2 >{title}</h2>
      </div>
      
      {article}
      <div className='h-px border-t border-black border-dashed opacity-25'></div>
      <div className='text-sm opacity-25'>{caption}</div>
    </article>
  )
}