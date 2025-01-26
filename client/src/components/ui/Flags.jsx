import {
  AR, BR, BO, CL, PY, UY
} from 'country-flag-icons/react/3x2'

const style = "absolute top-3 left-3 size-5"

export default function Flags({ selected }) {
  return <>
    {(selected === 'AR') && <AR className={"absolute top-3 left-3 size-5"} />}
    {(selected === 'BR') && <BR className={"absolute top-3 left-3 size-5"} />}
    {(selected === 'BO') && <BO className={"absolute top-3 left-3 size-5"} />}
    {(selected === 'CH') && <CL className={"absolute top-3 left-3 size-5"} />}
    {(selected === 'PA') && <PY className={"absolute top-3 left-3 size-5"} />}
    {(selected === 'UR') && <UY className={"absolute top-3 left-3 size-5"} />}
  </>
}
