import { MDXRemote } from 'next-mdx-remote'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import { NoteType } from "src/types/note"
dayjs.extend(utc)
dayjs.extend(timezone)

export const Note = ({title, publishedAt, article, caption, slug}: NoteType) => {
  const date = dayjs(publishedAt).tz("Asia/Tokyo").format('YYYY.MM.DD HH:mm')

  return (
    <article>
      <h2>{title}</h2>
      <span>{date}</span>
      <MDXRemote {...article} />
      <MDXRemote {...caption} />
    </article>
  )
}