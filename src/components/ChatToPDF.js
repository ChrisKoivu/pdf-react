import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { PdfDocument } from "./PDFDocument";

export default function ChatToPDF() {
 
  var obj = { name: "John", age: 30, city: "New York" };
  var myJSON = JSON.stringify(obj);
  var isLoggedIn = true;
  return (
    <div className="container">
        {isLoggedIn
        ? 
         <PDFDownloadLink
          document={<PdfDocument data={myJSON} />}
          fileName="people.pdf"
          style={{
            textDecoration: "none",
            padding: "10px",
            marginLeft:"10px",
            color: "#4a4a4a",
            backgroundColor: "#f2f2f2",
            border: "1px solid #4a4a4a"
          }}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download Pdf"
          }
        </PDFDownloadLink> :
        null }
    </div>
  );
}
