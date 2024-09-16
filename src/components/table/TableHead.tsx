import { useState } from 'react';
import style from './table.module.css';

const TableHead = ({
  columns,
  handleSorting,
}: {
  columns: ColumnsProps[];
  handleSorting: any;
}) => {
  const [sortField, setSortField] = useState('');
  const [order, setOrder] = useState('asc');

  const handleSortingChange = (accessor: string) => {
    const sortOrder =
      accessor === sortField && order === 'asc' ? 'desc' : 'asc';
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  return (
    <thead>
      <tr>
        {columns?.map(
          ({
            label,
            accessor,
            sortable,
          }: {
            label: string;
            accessor: string;
            sortable: boolean;
          }) => {
            const cl = sortable
              ? sortField === accessor && order === 'asc'
                ? 'up'
                : sortField === accessor && order === 'desc'
                ? 'down'
                : 'default'
              : '';
            return (
              <th
                key={accessor}
                onClick={() =>
                  sortable ? handleSortingChange(accessor) : null
                }
                className={
                  cl === 'up'
                    ? style.up
                    : cl === 'down'
                    ? style.down
                    : style.default
                }
              >
                {label}
              </th>
            );
          }
        )}
      </tr>
    </thead>
  );
};

export default TableHead;
