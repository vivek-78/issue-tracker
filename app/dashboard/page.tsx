import React from 'react'
import PaginationComponent from '../components/PaginationComponent';

function Dashboard({ searchParams }: { searchParams : { page : string}}) {
  return (
    <div>
      <PaginationComponent itemCount={100} pageSize={10} currentPage={parseInt(searchParams.page)}/>
    </div>
  )
}

export default Dashboard;