import XLSX from "xlsx"
// Read the Excel file
async function handleFile(data:FormData) {
    "use server"
    const file = await data.get("excelFile");
    console.log(file);
    
    if (!file) {
        console.error('No file selected.');
        return;
    }
/
  const reader = new FileReader();
  
  reader.onload = function (e:any) {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: 'array' });
      
      // Assuming the first sheet is the one you want to parse
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

    // Convert the sheet data to JSON
    const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

    // Now you have your Excel data as JSON
    console.log(jsonData);
  };

  
}



export default function Upload() {
    "use client"
    return (
        <form className="flex" action={handleFile}>
            <input type="file" name="excelfile" required/>
            <button type="submit" className="bg-blue-300 px-2 py-1 rounded-sm">Upload</button>
        </form>
    )
}