import './Shimmer.css';

const Shimmer = () => {
  return (
    <div className="ml-4 sm:ml-12">

      <div className="shimmer-bar bg-gray-300 w-72 h-8 mb-2 rounded"></div>
      <div className="flex gap-4 mb-6 overflow-x-hidden">
        {
          Array(5).fill(0).map((_, index) => {
            return <div key={index} className="shimmer-card bg-cyan-600 w-36 h-52 rounded flex-shrink-0"></div>
          })
        }
      </div>

      <div className="shimmer-bar bg-gray-300 w-72 h-8 mb-2 rounded"></div>
      <div className="flex gap-4 mb-6 overflow-x-hidden">
        {
          Array(10).fill(0).map((_, index) => {
            return <div key={index} className="shimmer-card bg-cyan-600 w-36 h-52 rounded flex-shrink-0"></div>
          })
        }
      </div>

      <div className="shimmer-bar bg-gray-300 w-72 h-8 mb-2 rounded"></div>
      <div className="flex gap-4 mb-6 overflow-x-hidden">
        {
          Array(3).fill(0).map((_, index) => {
            return <div key={index} className="shimmer-card bg-cyan-600 w-36 h-52 rounded flex-shrink-0"></div>
          })
        }
      </div>
    </div>
  )
}

export default Shimmer;