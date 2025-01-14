import { GoBackLink } from '../module/core/ui/GoBackLink'

export default function DetailsAllProduct() {


  return (
    <header
      className={'bg-primary py-10 w-screen'}
    >
      <div className="absolute top-14 left-6">
        <GoBackLink />
      </div>

    </header>
  )
}