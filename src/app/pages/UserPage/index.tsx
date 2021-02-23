/**
 *
 * UserPage
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useUserPageSlice } from './slice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectUsers } from './slice/selectors';
import { Table } from 'app/components/Table';
import { User } from 'types/User';
import { DEFAULT_PAGE_SIZE } from 'constant/paginate';
import { Pagination } from 'app/components/Pagination';
import qs from 'qs';

const columns = [
  {
    Header: 'Full Name',
    accessor: originalRow =>
      `${originalRow.name.title}. ${originalRow.name.first} ${originalRow.name.last}`,
  },
  {
    Header: 'Username',
    accessor: 'login.username',
  },
  {
    Header: 'Thumbnail Icon',
    accessor: 'picture.thumbnail',
    Cell: ({ value }) => <img src={value} alt="thumbnail" />,
  },
];

interface Props {}

export function UserPage(props: Props) {
  const { actions } = useUserPageSlice();
  const dispatch = useDispatch();
  const history = useHistory();

  const [page, setPage] = useState<number>(1);

  const users: User[] = useSelector(selectUsers);

  useEffect(() => {
    const { page } = qs.parse(history.location.search, {
      ignoreQueryPrefix: true,
    });
    setPage(parseInt(page as string) || 1);
  }, [history.location.search]);

  useEffect(() => {
    dispatch(
      actions.fetchUsers({
        page,
        size: DEFAULT_PAGE_SIZE,
      }),
    );
  }, [actions, dispatch, page]);

  const handlePageChange = ({ selected }) => {
    history.push({ search: qs.stringify({ page: selected + 1 }) });
  };

  return (
    <Div>
      <h1>Users</h1>
      <Table columns={columns} data={users} striped bordered />
      <Pagination
        pageCount={100}
        pageRangeDisplayed={5}
        marginPagesDisplayed={1}
        onPageChange={handlePageChange}
        forcePage={page - 1}
      />
    </Div>
  );
}

const Div = styled.div``;
