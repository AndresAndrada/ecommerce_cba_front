import { MdOutlineAttachMoney } from "react-icons/md";

// eslint-disable-next-line react/prop-types
export default function InputNumberComponent({ title, formikTouched, formikError, formikOnBlur, formikHandleChange, formikValuesName }) {
  return (
    <div className="flex flex-col w-full items-start gap-2">
      <div className="flex px-4 justify-end items-start gap-2">
        <label className="text-teal-700 text-hawk-turquoise text-center font-product-sans font-bold text-xs">
          {title} <span className='text-gray-400'>{"(opcional)"}</span>
        </label>
      </div>
      <label
        className={`input input-bordered w-full bg-white flex p-2 items-center gap-2 rounded-lg placeholder-teal-700 focus:border-primary border-2 ${formikTouched && formikError ? 'border-red-500' : 'border-teal-700'
          }`}
      >
        <input
          type="number"
          className="grow placeholder-teal-700"
          placeholder='0'
          id={formikValuesName}
          onBlur={formikOnBlur}
          value={formikValuesName ? formikValuesName : ''}
          autoComplete={formikValuesName}
          onChange={formikHandleChange}
        />
        <MdOutlineAttachMoney className='text-customColor' />
      </label>
    </div>
  )
}
