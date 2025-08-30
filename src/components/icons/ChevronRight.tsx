export default function ({ className }: { className: string }) {
   return (
      <>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            className={className}
         >
            <path
               fill="none"
               stroke="currentColor"
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth={1}
               d="m9 18l6-6l-6-6"
            ></path>
         </svg>
      </>
   )
}
