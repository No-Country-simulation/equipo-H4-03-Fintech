import FilterOpcion from "./FilterOpcion";

export default function FilterSelectOpcion({ title, dataState, handler }) {
  return (
    <div className="w-[412px] flex flex-col justify-center items-center gap-2.5">
      <div className="w-[380px] flex gap-2.5">
        <span className="font-medium text-base text-black">{title}</span>
      </div>
      <div className="flex flex-col justify-center items-center gap-2.5">
        {
          dataState?.length > 0 ? dataState.map(data => (
            <FilterOpcion
              key={data.label}
              label={data.label}
              name={data.name}
              selected={data.selected}
              handler={handler}
            />
          )) : null
        }
      </div>
    </div>
  )
}
