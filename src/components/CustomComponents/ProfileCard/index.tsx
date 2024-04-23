const Main:React.FC = () => {
    return (
        <>
            <div className="w-full h-[72px] relative z-20 dark:bg-darkmode-400 boxShadow rounded-lg mt-10 px-4 py-2 flex items-center justify-start gap-6">
            <img src="./arrow-left.svg" className="w-6 h-6" />
            <div className="flex gap-4">
                <img src="./userPic.svg" className="w-14 h-14 rounded-full" />
                <div className="flex flex-col items-start gap-2 justify-center">
                <p className="text-sm	font-medium	">Robert Fox</p>
                <p className="text-sm	text-[#7B93AF]">48 Years | Male | P1245</p>
                </div>
            </div>
            <div className="border-e border-[#E9EDF5] h-full"> </div>
            <div className="flex flex-col items-start justify-center">
                <p className="text-xs	font-medium	">Robert Fox</p>
                <p className="text-xs	text-[#7B93AF]">1. High Blood Pressure</p>
                <p className="text-xs	text-[#7B93AF]">2. Asthma</p>
            </div>
            </div>          
        </>
    )
}

export default Main