import React, { useState } from 'react'
import {
  useReactTable, getCoreRowModel,
  flexRender, getPaginationRowModel,
  getSortedRowModel, getFilteredRowModel
} from '@tanstack/react-table'
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { MdOutlineAddBox } from "react-icons/md";



export const Table = ({ data, columns, name, create}) => {
  // console.log('data', data)
  // console.log('columns', columns)

  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");

  const tables = useReactTable({
    data: data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter: filtering
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    defaultColumn: {
      size: 5, //starting column size
      minSize: 5, //enforced during column resizing
      maxSize: 5, //enforced during column resizing
    },
  });

  return (
    <div className='container table-crud'>
      <input className="mb-5" type="text" name="filter" value={filtering} placeholder='Búsqueda' onChange={(e) => setFiltering(e.target.value)} />
      <div className='table-crud__button-create mb-2'>
        <span> <strong> Crear {name} </strong></span>
        <button className="btn btn-success" onClick={()=> create()}>
          <MdOutlineAddBox />
        </button>
      </div>

      <table>
        <thead>
          {
            tables.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {
                  headerGroup.headers.map(header => (
                    <th key={header.id} onClick={header.column.getToggleSortingHandler()}>
                      {
                        flexRender(header.column.columnDef.header, header.getContext())
                      }
                      {
                        { 'asc': '⬆️', 'desc': '⬇️' }[header.column.getIsSorted() ?? null]
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>

        <tbody>
          {
            tables.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} >
                    {
                      flexRender(cell.column.columnDef.cell, cell.getContext())
                    }
                  </td>
                ))}
              </tr>
            ))
          }
        </tbody>
      </table>

      <div className='mt-4'>
        {/* <button onClick={() => tables.setPageIndex(0)}>
        Primera página
      </button> */}
        <button className="btn btn-secondary me-2" onClick={() => tables.previousPage()}>
          <FaAngleLeft />
        </button>
        <button className="btn btn-secondary" onClick={() => tables.nextPage()}>
          <FaAngleRight  />
        </button>
        {/* <button onClick={() => tables.setPageIndex(tables.getPageCount() - 1)}>
        Última página
      </button> */}
      </div>

    </div>
  )
}
