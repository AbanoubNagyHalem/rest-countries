import React from 'react';
import { Dropdown, DropdownButton, Form } from 'react-bootstrap';

const SearchFilter = ({ mode, searchFromApi, filterRegion, fetchData }) => {
  return (
    <div className={`filtering ${mode}`}>
      <div className="container">
        <Form.Control
          onChange={(e) => searchFromApi(e)}
          className='inputSearch'
          placeholder="Search for a country"
          aria-label="Search"
        />
        <DropdownButton className='inputFilter' id="dropdown-basic-button" title="Filter by Region">
          <Dropdown.Item onClick={(e) => { filterRegion(e) }} href="#/action-1">Africa</Dropdown.Item>
          <Dropdown.Item onClick={(e) => { filterRegion(e) }} href="#/action-2">Americas</Dropdown.Item>
          <Dropdown.Item onClick={(e) => { filterRegion(e) }} href="#/action-3">Asia</Dropdown.Item>
          <Dropdown.Item onClick={(e) => { filterRegion(e) }} href="#/action-4">Europe</Dropdown.Item>
          <Dropdown.Item onClick={(e) => { filterRegion(e) }} href="#/action-5">Oceania</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={fetchData} href="#/action-6">Reset</Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
}

export default SearchFilter;
