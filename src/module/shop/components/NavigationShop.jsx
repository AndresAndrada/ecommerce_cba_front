import SearchBar from '@/modules/core/components/search-bar'
// import useGetProducts from '@/modules/shop/hooks/useGetProducts'
import useGetProducts from '../hook/useGetProducts'
// import { categories } from '../mock/categories'
import clsx from 'clsx'
import { useProductStore } from '../../../stores'

export default function NavigationShop({
    // eslint-disable-next-line react/prop-types
    option,
    // eslint-disable-next-line react/prop-types
    setOption,
    // eslint-disable-next-line react/prop-types
    setCurrentPage,
    // eslint-disable-next-line react/prop-types
    setSearch,
    // eslint-disable-next-line react/prop-types
    selectedTab,
    // eslint-disable-next-line react/prop-types
    setSelectedTab,
}) {
    const { Categories } = useProductStore((state) => state)
    const { loading } = useGetProducts()

    const handleTabClick = (tab) => {
        setSelectedTab(tab)
    }

    const buttonUnderline = (optionSelect) =>
        optionSelect === option ? 'underline' : ''

    const handleConsumerChange = (consumer) => {
        setCurrentPage(1)
        setOption(consumer)
    }

    return (
        <div className="flex flex-col items-center justify-center gap-8 px-4 mb-10 pt-2 sm:pt-10">
            <div className="flex gap-4 font-medium text-primary">
                <button
                    type="button"
                    onClick={() => handleConsumerChange('Personas')}
                    className={`${buttonUnderline('Personas')}`}
                >
                    Personas
                </button>
                <button
                    type="button"
                    onClick={() => handleConsumerChange('Mascotas')}
                    className={`${buttonUnderline('Mascotas')} `}
                >
                    Mascotas
                </button>
            </div>
            <SearchBar setSearch={setSearch} setSelectedTab={setSelectedTab} />
            <div className="flex gap-4 sm:gap-10 flex-wrap w-full justify-center">
                <button
                    type="button"
                    className={clsx('font-medium hover:text-primary transition-colors', {
                        'text-primary underline': selectedTab === '',
                    })}
                    onClick={() => handleTabClick('')}
                >
                    Todos
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