interface ColumnsProps {
  label: string;
  accessor: string;
  sortable: boolean;
  sortbyOrder?: string | null;
}

interface TableDataProps {
  id: number;
  barcode: string;
  item: string;
  supplier_article: string;
  size: string;
  available: number;
  transit: number;
}
