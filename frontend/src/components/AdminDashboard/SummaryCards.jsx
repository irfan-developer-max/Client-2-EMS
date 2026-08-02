

const SummaryCards = ({icon,text,number,color}) => {
  return (
    <div className="rounded flex bg-white-200">
        <div className={`text-3xl flex justify-center items-center ${color} text-white px-4`}>
            {icon}
        </div>
        <div className="px-2 py-2 bg-gray-600">
            <p className="text-lg font-semibold ">{text}</p>
            <p className="text-xl font-bold">{number}</p>
        </div>
    </div>
  )
}

export default SummaryCards
