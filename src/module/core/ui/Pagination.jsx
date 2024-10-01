import { scrollToTop } from '../../../utils/scrollToTop'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/24/solid'
import clsx from 'clsx'

// eslint-disable-next-line react/prop-types
export const Pagination = ({ currentPage, setCurrentPage, pages }) => {
  const handleNextPage = () => {
    if (currentPage < pages) {
      scrollToTop({ smooth: true })
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1)
    if (currentPage >= 1) {
      setTimeout(() => {
        scrollToTop({ smooth: true })
      }, 0)
    }
  }

  const handleNextPagesX4 = () => {
    if (pages - currentPage >= 4) {
      setCurrentPage(currentPage + 4)
    } else return
    if (currentPage >= 1) {
      setTimeout(() => {
        scrollToTop({ smooth: true })
      }, 0)
    }
  }

  const handlePrevPagesX4 = () => {
    if (currentPage >= 4) {
      setCurrentPage(currentPage - 4)
      setTimeout(() => {
        scrollToTop({ smooth: true })
      }, 0)
    }
  }

  // Controla las páginas que serán visibles en los botones medios
  const renderPageButtons = () => {
    const maxVisiblePages = 3
    const halfMaxVisiblePages = Math.floor(maxVisiblePages / 2)
    let startPage = Math.max(1, currentPage - halfMaxVisiblePages)
    let endPage = Math.min(startPage + maxVisiblePages - 1, pages)

    if (currentPage <= halfMaxVisiblePages) {
      endPage = Math.min(maxVisiblePages, pages)
    } else if (currentPage >= pages - halfMaxVisiblePages) {
      startPage = Math.max(1, pages - maxVisiblePages + 1)
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => index + startPage
    ).map((page) => (
      <button
        type="button"
        key={page}
        className={clsx(
          'border border-r-0 border-gray-200 w-7 h-7 sm:pb-[2px] sm:w-10 sm:h-10 flex justify-center items-center transition-all',
          {
            ' text-secondary text-[18px] pb-[3px]  sm:text-2xl':
              page === currentPage,

            'text-slate-900 hover:sm:text-secondary': page !== currentPage,
          }
        )}
        onClick={() => {
          setCurrentPage(page)
          if (currentPage >= 1) {
            setTimeout(() => {
              scrollToTop({ smooth: true })
            }, 0)
          }
        }}
      >
        {page}
      </button>
    ))
  }

  return (
    <div className="flex w-fit justify-center items-center mx-auto my-10 text-sm font-bold sm:text-xl text-slate-900 bg-slate-100 rounded-md">
      <button
        type="button"
        disabled={currentPage === 1}
        className={clsx(
          'border border-r-0 border-gray-200 w-7 h-7 sm:w-10 sm:h-10 flex justify-center items-center rounded-s-md hover:bg-secondary hover:text-slate-200 transition-colors',
          {
            'hover:bg-secondary hover:text-slate-200': currentPage > 1,
            'hover:bg-transparent hover:text-slate-300 text-slate-300':
              currentPage <= 1,
          }
        )}
        onClick={handlePrevPage}
      >
        <ChevronLeftIcon className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>
      <button
        type="button"
        disabled={currentPage < 4}
        className={clsx(
          'border border-r-0 border-gray-200 w-7 h-7 sm:w-10 sm:h-10 flex justify-center items-center transition-colors',
          {
            'text-primary hover:bg-secondary hover:text-slate-200':
              currentPage > 4,
            'hover:bg-transparent hover:text-slate-300 text-slate-300':
              currentPage < 4,
          }
        )}
        onClick={handlePrevPagesX4}
      >
        <ChevronDoubleLeftIcon className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>

      {currentPage > 2 && (
        <>
          <button
            type="button"
            onClick={() => setCurrentPage(1)}
            className={clsx(
              'text-slate-900 border border-r-0 border-gray-200 sm:pb-[2px] w-7 h-7 sm:w-10 sm:h-10 transition-all',
              {
                'text-secondary text-[18px] pb-[3px] text-xl sm:text-2xl':
                  1 === currentPage,
                'text-slate-900 hover:sm:text-secondary': 1 !== currentPage,
              }
            )}
          >
            1
          </button>

          {pages > 4 && (
            <div className="border border-r-0 select-none border-gray-200 w-7 h-7 sm:w-10 sm:h-10 flex justify-center items-center pb-2 sm:pb-3">
              ...
            </div>
          )}
        </>
      )}
      {renderPageButtons()}
      {pages >= 4 && currentPage < pages - 1 && (
        <>
          {pages !== 4 && (
            <div className="border border-r-0 select-none border-gray-200 w-7 h-7 sm:w-10 sm:h-10 flex justify-center items-center pb-2 sm:pb-3">
              ...
            </div>
          )}
          <button
            type="button"
            onClick={() => {
              setCurrentPage(pages)
              scrollToTop({ smooth: true })
            }}
            className={clsx(
              'border border-r-0 border-gray-200 w-7 h-7 sm:w-10 sm:h-10  sm:pb-[2px] flex justify-center items-center transition-all',
              {
                'text-secondary text-[18px] pb-[3px] text-md sm:text-2xl':
                  pages === currentPage,
                'text-slate-900 hover:sm:text-secondary': pages !== currentPage,
              }
            )}
          >
            {pages}
          </button>
        </>
      )}
      <button
        type="button"
        disabled={pages - currentPage < 4}
        className={clsx(
          'border border-r-0 border-gray-200 w-7 h-7 sm:w-10 sm:h-10 flex justify-center items-center transition-colors',
          {
            'text-primary hover:bg-secondary hover:text-slate-200':
              pages - currentPage > 4,
            'hover:bg-transparent hover:text-slate-300 text-slate-300':
              pages - currentPage < 4,
          }
        )}
        onClick={handleNextPagesX4}
      >
        <ChevronDoubleRightIcon className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>

      <button
        type="button"
        disabled={currentPage === pages}
        className={clsx(
          'border border-gray-200 w-7 h-7 sm:w-10 sm:h-10 flex justify-center items-center rounded-e-md transition-colors',
          {
            'hover:bg-secondary hover:text-slate-200': currentPage < pages,
            'hover:bg-transparent hover:text-slate-300 text-slate-300':
              currentPage === pages,
          }
        )}
        onClick={handleNextPage}
      >
        <ChevronRightIcon className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>
    </div>
  )
}