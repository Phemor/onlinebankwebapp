import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper, IconButton, Tooltip, TextField, MenuItem } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';

const AccountHistory = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  // Sample data
    const rows = [
        { id: 1, date: '2024-09-23', transaction: 'Fee Payment', amount: '₵200', status: 'Completed' },
        { id: 2, date: '2024-09-22', transaction: 'Other Charges', amount: '₵50', status: 'Pending' },
        { id: 3, date: '2024-09-20', transaction: 'Fee Payment', amount: '₵100', status: 'Completed' },
        { id: 4, date: '2024-09-19', transaction: 'Fee Payment', amount: '₵300', status: 'Failed' },
        { id: 5, date: '2024-09-18', transaction: 'Other Charges', amount: '₵75', status: 'Completed' },
      ];


  // Handle pagination
  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Handle search
  const handleSearchChange = (event) => setSearchQuery(event.target.value.toLowerCase());

  // Handle filter by status
  const handleFilterChange = (event) => setFilterStatus(event.target.value);

  // Filter rows based on search query and filter status
  const filteredRows = rows.filter((row) => {
    const matchesSearch = row.transaction.toLowerCase().includes(searchQuery);
    const matchesFilter = filterStatus ? row.status === filterStatus : true;
    return matchesSearch && matchesFilter;
  });

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <div style={{ padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Account History</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          {/* Search */}
          <TextField
            size="small"
            label="Search"
            variant="outlined"
            onChange={handleSearchChange}
            InputProps={{
              endAdornment: (
                <IconButton>
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
          
          {/* Filter by Status */}
          <TextField
            select
            size="small"
            label="Filter"
            variant="outlined"
            value={filterStatus}
            onChange={handleFilterChange}
            style={{ width: '150px' }}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Failed">Failed</MenuItem>
          </TextField>
        </div>
      </div>

      <TableContainer>
        <Table stickyHeader aria-label="account history table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Transaction</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.transaction}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        component="div"
        count={filteredRows.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default AccountHistory;
