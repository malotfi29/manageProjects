import React from 'react'
import useProposals from './useProposals'
import Table from '../../ui/Table'
import Loader from '../../ui/Loader';
import ProposalRow from './ProposalRow';

function ProposalTable() {
    const {isLoading,proposals}=useProposals()

    if (isLoading) return <Loader />;
  if(!proposals.length) return <div>درخواستی یافت نشد</div>;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>توضیحات</th>
        <th>زمان تحویل</th>
        <th>هزینه</th>
        <th>وضعیت</th>
      </Table.Header>
      <Table.Body>
        {proposals.map((proposal, index) => (
          <ProposalRow key={index} proposal={proposal} index={index} />
        ))}
      </Table.Body>
    </Table>
  )
}

export default ProposalTable
