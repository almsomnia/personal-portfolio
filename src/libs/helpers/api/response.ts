type Meta = {
   message?: string
   error?: string
}

export function response<T>(data: T, { message, error }: Meta) {
   return {
      meta: {
         success: !error,
         message: message ?? "",
         error: error ?? "",
      },
      data: data,
   }
}
