
import * as XLSX from 'xlsx';

interface ExportData {
  [key: string]: any;
} 

export const exportService = {
  exportToExcel: (data: ExportData[], fileName: string): void => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Donations');
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  },
};
