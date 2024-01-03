import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { Select, MenuItem, FormControl, InputLabel, Checkbox } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const LabelFile = () => {
  const [excelData, setExcelData] = useState(null);
  const [selectedLabels, setSelectedLabels] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        // Filter out arrays with only empty strings
        const nonEmptyData = jsonData.filter((row) => row.some((cell) => cell.trim() !== "")).slice(1).flat();

        // Check if there is any non-empty data
        if (nonEmptyData.length > 0) {
          setExcelData(nonEmptyData);
          // setSelectedLabels([nonEmptyData[0]]); // Set the default selected labels
        } else {
          // No non-empty data found, handle accordingly (e.g., show a message)
          setExcelData(null);
          console.log("No non-empty data found in the Excel sheet.");
        }
      };
      reader.readAsBinaryString(file);
    }
  };

  return (
    <div className="p-4">
      <input type="file" onChange={handleFileUpload} />

      {excelData && (
        <FormControl style={{ width: "250px" }}>
          <InputLabel style={{ color: "white" }}>Select Label</InputLabel>
          <Select
            multiple
            value={selectedLabels}
            onChange={(e) => setSelectedLabels(e.target.value)}
            style={{ color: "#2C9BF6" }}
            MenuProps={MenuProps}
          >
            {excelData.map((label, index) => (
              <MenuItem key={index} value={label}>
                <Checkbox checked={selectedLabels.indexOf(label) > -1} />
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </div>
  );
};

export default LabelFile;
