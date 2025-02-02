export default function CapitalSuggestionItem({ TNA, currency, title }) {
  return (
    <div className="w-[185px] h-[200px] bg-white rounded-xl flex flex-col items-start justify-center gap-1 shadow-md px-7 py-5">
      <span className="font-medium text-[20px] text-center text-success">{TNA}% Anual</span>
      <span className="font-medium text-[20px] text-black">
        Invertí tus {currency}
      </span>
      <span className="font-normal text-[20px] text-muted">{title}</span>
      <div className="w-[114px] h-[23px] flex items-baseline cursor-pointer gap-0.5">
        <span className="font-medium text-[20px] text-[#96c2db]">Invertir</span>
        <svg width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.7434 1.25293C11.7434 0.987713 11.8488 0.73336 12.0363 0.545823C12.2239 0.358287 12.4782 0.25293 12.7434 0.25293H17.4101C17.6753 0.25293 17.9297 0.358287 18.1172 0.545823C18.3048 0.73336 18.4101 0.987713 18.4101 1.25293V5.9196C18.4101 6.18481 18.3048 6.43917 18.1172 6.6267C17.9297 6.81424 17.6753 6.9196 17.4101 6.9196C17.1449 6.9196 16.8905 6.81424 16.703 6.6267C16.5155 6.43917 16.4101 6.18481 16.4101 5.9196V3.66626L10.1168 9.9596C9.92928 10.1469 9.67512 10.2521 9.41011 10.2521C9.14511 10.2521 8.89095 10.1469 8.70345 9.9596L5.41011 6.66626L2.11678 9.9596C1.92721 10.1362 1.67649 10.2324 1.41742 10.2278C1.15835 10.2233 0.911169 10.1183 0.727952 9.93509C0.544734 9.75187 0.439785 9.50469 0.435214 9.24563C0.430643 8.98656 0.526807 8.73583 0.703447 8.54626L4.70345 4.54626C4.89095 4.359 5.14511 4.25381 5.41011 4.25381C5.67512 4.25381 5.92928 4.359 6.11678 4.54626L9.41011 7.8396L14.9968 2.25293H12.7434C12.4782 2.25293 12.2239 2.14757 12.0363 1.96004C11.8488 1.7725 11.7434 1.51815 11.7434 1.25293Z" fill="#96C2DB" />
        </svg>
      </div>
    </div>
  )
}
