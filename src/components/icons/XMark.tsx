export default function ({ className }: { className?: string }) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width={16}
         height={16}
         viewBox="0 0 24 24"
         className={className}
      >
         <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M18 6L6 18M6 6l12 12"
         ></path>
      </svg>
   )
}
