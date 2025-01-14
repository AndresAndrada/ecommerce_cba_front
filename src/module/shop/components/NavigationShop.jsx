/* eslint-disable react/prop-types */
import SearchBar from '../../core/components/SearchBar'
// import useGetProducts from '@/modules/shop/hooks/useGetProducts'
// import { categories } from '../mock/categories'
import clsx from 'clsx'
import { useProductStore } from '../../../stores'
import { useState } from 'react'

export default function NavigationShop({
  option,
  setOption,
  optionFilter,
  setFilter,
  setCurrentPage,
  setSearch,
  selectedTab,
  setSelectedTab,
}) {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false)
  const { Categories } = useProductStore((state) => state)
  // const { loading } = useGetProducts()

  const handleTabClick = (tab) => setSelectedTab(tab)


  const handleTabClickFilter = (tab) => setFilter(tab)


  const buttonUnderline = (optionSelect) =>
    optionSelect === option ? 'underline' : ''

  const buttonUnderlineFilter = (optionSelect) =>
    optionSelect === optionFilter ? 'underline' : ''

  const handleConsumerChange = (consumer) => {
    setCurrentPage(1)
    setOption(consumer)
  }

  return (
    <div className="flex flex-col items-center justify-center gap-8 px-4 mb-10 pt-2 sm:pt-10">
      <div className="flex gap-4 font-medium text-secondary">
        <button
          type="button"
          onClick={() => handleConsumerChange('Minorista')}
          className={`${buttonUnderline('Minorista')} hover:text-zinc-950`}
        >
          Minorista
        </button>
        <button
          type="button"
          onClick={() => handleConsumerChange('Mayorista')}
          className={`${buttonUnderline('Mayorista')} hover:text-zinc-950`}
        >
          Mayorista
        </button>
      </div>
      <SearchBar setSearch={setSearch} setSelectedTab={setSelectedTab} />
      <div className="flex gap-4 sm:gap-10 flex-wrap w-full justify-center">
        <button
          type="button"
          className={clsx(`${buttonUnderlineFilter('Todos')} font-medium text-secondary transition-colors`)}
          onClick={() => handleTabClickFilter('Todos')}
        >
          Todos
        </button>
        <button
          type="button"
          className={clsx(`${buttonUnderlineFilter('Mates')} font-medium text-secondary transition-colors`)}
          onClick={() => handleTabClickFilter('Mates')}
        >
          Mates
        </button>
        <button
          type="button"
          className={clsx(`${buttonUnderlineFilter('Termos')} font-medium text-secondary transition-colors`)}
          onClick={() => handleTabClickFilter('Termos')}
        >
          Termos
        </button>
        {!loading &&
          Categories &&
          Categories.map((category, index) => (
            <button
              type="button"
              key={index}
              className={clsx(
                'font-medium hover:text-primary transition-colors',
                {
                  'text-primary underline': selectedTab === category,
                }
              )}
              onClick={() => handleTabClick(category)}
            >
              {category}
            </button>
          ))}
      </div>
    </div>
  )
}