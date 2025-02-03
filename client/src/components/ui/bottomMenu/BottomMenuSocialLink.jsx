import { useSelector } from "react-redux"

export default function BottomMenuLink({ handler, current }) {
  
  const { isCapital } = useSelector(state => state.switcher)

  return (
    <button
      onClick={() => handler("/dashboard/social")}
      className="flex flex-col items-center"
    >
      <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.5001 7.5C11.5001 6.17392 12.0269 4.90215 12.9646 3.96447C13.9023 3.02678 15.174 2.5 16.5001 2.5C17.8262 2.5 19.098 3.02678 20.0357 3.96447C20.9733 4.90215 21.5001 6.17392 21.5001 7.5C21.5001 8.82608 20.9733 10.0979 20.0357 11.0355C19.098 11.9732 17.8262 12.5 16.5001 12.5C15.174 12.5 13.9023 11.9732 12.9646 11.0355C12.0269 10.0979 11.5001 8.82608 11.5001 7.5ZM13.5001 14.5C12.7045 14.5 11.9414 14.8161 11.3788 15.3787C10.8162 15.9413 10.5001 16.7044 10.5001 17.5V22.5C10.5001 24.0913 11.1323 25.6174 12.2575 26.7426C13.3827 27.8679 14.9088 28.5 16.5001 28.5C18.0914 28.5 19.6175 27.8679 20.7428 26.7426C21.868 25.6174 22.5001 24.0913 22.5001 22.5V17.5C22.5001 16.7044 22.184 15.9413 21.6214 15.3787C21.0588 14.8161 20.2958 14.5 19.5001 14.5H13.5001ZM8.61212 16.44C8.53712 16.7883 8.49958 17.1437 8.50012 17.5V22.5C8.49992 23.5704 8.71453 24.63 9.13125 25.6159C9.54796 26.6019 10.1583 27.4942 10.9261 28.24L10.7261 28.296C9.18947 28.7071 7.55245 28.4912 6.17493 27.6958C4.79741 26.9003 3.79214 25.5904 3.38012 24.054L2.60212 21.154C2.5002 20.7734 2.47424 20.3765 2.52572 19.9859C2.57721 19.5953 2.70513 19.2187 2.90217 18.8775C3.09922 18.5363 3.36154 18.2373 3.67415 17.9975C3.98676 17.7578 4.34354 17.5819 4.72412 17.48L8.61212 16.44ZM22.0721 28.24C22.8403 27.4944 23.451 26.6021 23.8681 25.6162C24.2851 24.6302 24.5001 23.5705 24.5001 22.5V17.5C24.4988 17.1347 24.4615 16.7813 24.3881 16.44L28.2741 17.48C28.6549 17.5819 29.0119 17.7578 29.3247 17.9977C29.6374 18.2376 29.8998 18.5369 30.0969 18.8782C30.294 19.2196 30.4218 19.5965 30.4732 19.9873C30.5245 20.3782 30.4983 20.7753 30.3961 21.156L29.6201 24.054C29.4117 24.8318 29.0489 25.5597 28.5532 26.1943C28.0576 26.8289 27.4393 27.3572 26.7351 27.7478C26.031 28.1384 25.2554 28.3833 24.4547 28.4678C23.6539 28.5524 22.8423 28.4749 22.0721 28.24ZM2.50012 10.5C2.50012 9.43913 2.92155 8.42172 3.67169 7.67157C4.42184 6.92143 5.43925 6.5 6.50012 6.5C7.56098 6.5 8.5784 6.92143 9.32855 7.67157C10.0787 8.42172 10.5001 9.43913 10.5001 10.5C10.5001 11.5609 10.0787 12.5783 9.32855 13.3284C8.5784 14.0786 7.56098 14.5 6.50012 14.5C5.43925 14.5 4.42184 14.0786 3.67169 13.3284C2.92155 12.5783 2.50012 11.5609 2.50012 10.5ZM22.5001 10.5C22.5001 9.43913 22.9215 8.42172 23.6717 7.67157C24.4218 6.92143 25.4393 6.5 26.5001 6.5C27.561 6.5 28.5784 6.92143 29.3285 7.67157C30.0787 8.42172 30.5001 9.43913 30.5001 10.5C30.5001 11.5609 30.0787 12.5783 29.3285 13.3284C28.5784 14.0786 27.561 14.5 26.5001 14.5C25.4393 14.5 24.4218 14.0786 23.6717 13.3284C22.9215 12.5783 22.5001 11.5609 22.5001 10.5Z"
          fill={current !== 'social' ? "#797979" : (isCapital ? "#004AAC" : "#ffa600")}
        />
      </svg>
      <span className={`
        font-medium text-sm 
        ${current !== 'social' ? 'text-muted' : (isCapital ? 'text-primary' : 'text-accent')}
      `}>
        Social
      </span>
    </button>
  )
}
