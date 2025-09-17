export default function ({ className }: { className?: string }) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width={16}
         height={16}
         viewBox="0 0 24 24"
         className={className}
      >
         <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
         >
            <circle
               cx={12}
               cy={12}
               r={10}
            ></circle>
            <path d="m9 12l2 2l4-4"></path>
         </g>
      </svg>
   )
}
