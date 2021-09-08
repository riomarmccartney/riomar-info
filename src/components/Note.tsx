import clsx from 'clsx'
import { molecularSpacing, atomicSpacing, subAtomicSpacing } from 'src/constants/spacing'
import { NoteType } from 'src/types/note'
import { dateFormatter } from 'utils/dateFormatter'
import { HorizontalDivider } from './UI/HorizontalDivider'

export const Note = ({title, article, caption, date, uid}: NoteType) => {
  return (
    <article id={uid} className={(molecularSpacing)}>
      <div>
        <span>{dateFormatter(date)}</span>
        <h2>{title}</h2>
      </div>
      <div className={atomicSpacing}>
        {article}
      </div>
      <HorizontalDivider />
      <div className={clsx(subAtomicSpacing,'w-1/2 pr-4 text-sm text-gray-400')}>{caption}</div>
    </article>
  )
}