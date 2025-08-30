export default function () {
   const currentYear = new Date().getFullYear()

   return (
      <footer>
         <div className="container font-sans text-sm font-light text-gray-500">
            <div className="py-4">
               <span>
                  &copy; Copyright {currentYear} &ndash;{" "}
                  <span className="font-medium">Riva Almero</span>
               </span>
            </div>
         </div>
      </footer>
   )
}
