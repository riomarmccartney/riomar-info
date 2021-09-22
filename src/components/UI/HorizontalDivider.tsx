import clsx from 'clsx'

export const HorizontalDivider = ({ className }: {className?: string}) => {
  return <div className={className}><div className={clsx('h-px border-t border-dashed border-gray-300')}></div></div>
}