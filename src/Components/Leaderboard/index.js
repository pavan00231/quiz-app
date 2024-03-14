import React, { useContext, useState } from 'react'
import LeaderBoardTable from './LeaderBoardTable'
import PieChart from './Pichart'
import NewCircle from './NewCircle';
import { useMyContext } from '../Context';

const LeaderboardIndex = () => {
   
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: '100%' }}>

                <LeaderBoardTable />
            </div>
          
        </div>

    )
}

export default LeaderboardIndex