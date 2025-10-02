export default function RecipeSkeleton() {
  return (
    <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden animate-pulse">
      <div className="h-48 bg-gray-300"></div>
      <div className="p-4">
        <div className="h-6 bg-gray-300 rounded mb-3"></div>
        <div className="h-4 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
        <div className="flex gap-2">
          <div className="flex-1 h-10 bg-gray-300 rounded"></div>
          <div className="flex-1 h-10 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  )
}
