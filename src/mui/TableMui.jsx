import React, { useState, useRef, useEffect, useMemo, useLayoutEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Pagination
} from "@mui/material"; 
import { LoadingOverlaySmall } from "./LoadingOverlay";

export default function TableMui({
  th,
  td,
  styleTableTh,
  styleTableContainer,
  styleTableThead,
  customFields,
  loading,
  onSort,
  sortDisable
}) {
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const tableContainerRef = useRef(null);
  const scrollPos = useRef(0);

  useEffect(() => {
    const container = tableContainerRef.current;
    if (!loading && container) {
      container.scrollLeft = scrollPos.current;

      const handleScroll = () => {
        scrollPos.current = container.scrollLeft;
      };

      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [loading]);

  


  const handleSort = (columnName) => {
    const direction = columnName === sortColumn && sortDirection === "asc" ? "desc" : "asc";
    setSortColumn(columnName);
    setSortDirection(direction);
    onSort && onSort(columnName, direction);
  };

  const found = (key) => customFields?.find(obj => obj.name === key);

 

  return (<>
  
  

  <TableContainer ref={tableContainerRef} style={styleTableContainer}>
    <Table aria-label="simple table">
      <Header 
      values={{
         styleTableThead, th, loading, onSort,
        sortDisable, styleTableTh, handleSort, sortDirection,sortColumn,
      }} 
      />
      {!loading && (
        <TableBody>
          {td?.map((row, index) => (
            <MuiTableRow values={{row, th, index, found,customFields }} />
          ))}
        </TableBody>
      )}
     
    </Table>
    
    
  </TableContainer>
  
  {loading && <LoadingOverlaySmall open={loading} />}
  </>

  );
}


const ScrollWrapper=({values,children})=>{

  const {tableContainerRef,topScrollBarRef,firstRowRef,td}=values

  useLayoutEffect(() => {
    const tableDiv = tableContainerRef.current;
    const topScrollBarDiv = topScrollBarRef.current;
    const firstRowDiv = firstRowRef.current;

    if (firstRowDiv) {
      const totalWidth = Array.from(firstRowDiv.children).reduce((sum, cell) => sum + cell.offsetWidth, 0);
      topScrollBarDiv.firstChild.style.width = `${totalWidth}px`;

      const syncScroll = (src, dest) => {
        src.scrollLeft = dest.scrollLeft;
      };

      tableDiv.addEventListener('scroll', () => syncScroll(topScrollBarDiv, tableDiv));
      topScrollBarDiv.addEventListener('scroll', () => syncScroll(tableDiv, topScrollBarDiv));

      return () => {
        tableDiv.removeEventListener('scroll', () => syncScroll(topScrollBarDiv, tableDiv));
        topScrollBarDiv.removeEventListener('scroll', () => syncScroll(tableDiv, topScrollBarDiv));
      };
    }
  }, [td]);
  return (
    <div style={{ width: '100%', overflow: 'auto' }}>
      <div ref={topScrollBarRef} style={{ overflow: 'auto', height: '20px' }}>
        <div style={{ width: '100%' }}></div>
      </div>
      {children}

      </div>

  )
}

const MuiTableRow = ({ values }) => {
  const { row,th, index, found,customFields } = values
  return (
    <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      {Object.keys(th).map((key, ind) => (
        <TableCell key={ind} style={{ whiteSpace: "nowrap" , backgroundColor:"#0B121C" , color:"#fff" , borderColor:"#090B11" }} align="left">
          {
           (customFields && found(key))? found(key).data(row[key], row) : getNestedValue(row,key)
          }
          {key === "sr" && index + 1}
        </TableCell>
      ))}
    </TableRow>
  );
};

const Header = ({ values }) => {
  
  const { firstRowRef, styleTableThead, th, loading, onSort,sortColumn,
    sortDisable, styleTableTh, handleSort, sortDirection } = values
    console.log('styleTableTh:', styleTableTh);
    const customTableHead = {
      '& th:first-child': {
        borderTopLeftRadius: '10px',
      },
      '& th:last-child': {
        borderTopRightRadius: '10px',
      },
      '& th': {
        color:"red",
        backgroundColor:"pink"
      },
   
    };
    
    const combinedStyles = {
      ...customTableHead,
      ...styleTableThead,
    };

  return (
    <TableHead sx={styleTableThead ?  {...styleTableThead}  :{customTableHead}} >
      <TableRow ref={firstRowRef}>
        {Object.entries(th).map(([key, value], index) => (
          <TableCell key={index} align="left" sx={styleTableTh}>
            {value}
            {!loading && onSort && !sortDisable?.includes(key) && !["action", "actions"].includes(key.toLowerCase()) && (
              <TableSortLabel
                onClick={() => handleSort(key)}
                active={true}
                style={{ opacity: sortColumn === key ? "100%" : "30%" }}
                direction={ sortColumn === key ?sortDirection : "asc"}
              />
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
const getNestedValue = (obj, key) => {
  const keys = key.split('.');
  return keys.reduce(function (acc, currentKey) {
    return acc && acc[currentKey] !== undefined ? acc[currentKey] : '';
  }, obj);
};
