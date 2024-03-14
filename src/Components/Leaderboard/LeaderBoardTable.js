import React, { useState } from 'react'
import '../../assests/styles/leadboard.scss'
import Pagination from './Pagination';
import { useMyContext } from '../Context';

const LeaderBoardTable = () => {
    

    const {leadboardData} = useMyContext()

    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = leadboardData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(leadboardData.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {

            setCurrentPage(pageNumber);
        }
    };


    return (
        <div className='leadboard_div_main'>
            <h2 className='leadboard_div'>Leaderboard</h2>
            <table className='leadboard_div'>
                <thead>
                    <tr>
                        <th className='th_table_leadboard'>User</th>
                        <th className='th_table_leadboard'>Rank</th>
                        {/* <th className='th_table_leadboard'>Country</th> */}
                        <th className='th_table_leadboard'>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((user, index) => (
                        <tr className='tr_body'>
                            <td >{user.name}</td>
                            <td >{index + 1}</td>
                            {/* <td >{index.country}</td> */}
                            <td >{user.score}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />


        </div>
    )
}

export default LeaderBoardTable