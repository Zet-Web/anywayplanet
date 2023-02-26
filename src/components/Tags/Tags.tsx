import { FC } from 'react'
import s from './tags.module.scss'
import cn from 'classnames'
import { RarityTag } from 'shared/types'
import { Filters, RaityFilters } from 'shared/types/filters'

interface TagsProps {
  tags: RarityTag[]
  handleFilters?: (filter: RaityFilters, value?: number[]) => void
  rarity?: RarityTag | null
  onClick?: (tag: RaityFilters) => void
  className?: string
  filters?: Filters
}

export const Tags: FC<TagsProps> = ({
  tags,
  rarity,
  onClick,
  className,
  handleFilters,
  filters,
}) => {
  const handleOnClick = (tag: RaityFilters) => {
    onClick?.(tag)
    handleFilters?.(tag)
  }

  return (
    <div className={cn(s.tagsWrapper, className)}>
      {tags.map(tag => {
        const tagClasses = cn(s.tag, s[tag])

        return (
          <button
            type='button'
            className={tagClasses}
            key={tag}
            onClick={() => handleOnClick(tag)}
            data-active={filters?.rarity.includes(tag)}
          >
            {tag}
          </button>
        )
      })}
    </div>
  )
}
