import { User } from 'lucide-react'
import StatusCard from '../../../components/StatusCard';
import { CSVLink, CSVDownload } from "react-csv";

const DashBoardHome = () => {
    return (
        <>
            <div className='w-full min-h-screen  bg-gray-100'>
                <h2 className='font-semibold capitalize text-2xl'>dashboard</h2>
                <p className='text-md capitalize mb-5 font-semibold'>welcome back , here's what's happing today</p>
                <StatusCard />
            </div>
        </>
    )
}

export default DashBoardHome
