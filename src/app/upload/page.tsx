"use client"
import { useState } from "react";
import {read, utils} from "xlsx"
import axios from "axios";
export default function Upload() {
    const [file,setFile] = useState();
    const handleFileChange = (e:any) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
      };
    async function handleFile(e:any) {
        e.preventDefault();
        console.log(file);
        if (!file) {
          console.error('No file selected.');
          return;
        }
        // const formData = new FormData();
        // formData.append("file", file);
        const reader = new FileReader();
        reader.onload = async (e:any) => {
          const data = e.target.result;
          const workbook = read(data, { type: 'binary' });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const jsonData = utils.sheet_to_json(sheet);
          console.log(jsonData);
          
          // Send a POST request to the server with the JSON data
          try {
            const response = await axios.post('/api/product',{data:jsonData});
            console.log('File uploaded successfully!');
            // console.log(response.data); // Log the server response
          } catch (error) {
            console.error('Error uploading file:', error);
          }
        };

    reader.readAsBinaryString(file);
      };
    
      
      return (
        <div>

          <form className="flex justify-center mt-8">
            <input type="file" onChange={handleFileChange} name="excelfile" required/>
            <button type="submit" onClick={handleFile} className="bg-blue-300 px-2 py-1 rounded-sm">Upload</button>
        </form>
        </div>
    )
}
