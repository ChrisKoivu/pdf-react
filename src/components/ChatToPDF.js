import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { PdfDocument } from "./PDFDocument";

export default function ChatToPDF(props) {
  var isLoggedIn = true;
  
 // creating another component for simplicity
 function DisplayPdfLink(props) {
    var myJSON = JSON.stringify(props.data);
    console.log(myJSON);
    return (
      <PDFDownloadLink       
      document={<PdfDocument data={myJSON} />}
      fileName="people.pdf"
      className="download-link"
      style={{
        textDecoration: "none",
        padding: "10px",
        marginLeft:"10px",
        color: "#4a4a4a",
        backgroundColor: "white",
        border: "1px solid #4a4a4a"
      }}
    >
      {({ blob, url, loading, error }) =>
        loading ? "Loading document..." : "Download Pdf"
      }
    </PDFDownloadLink>
    );
  }
  return (
    <div className="container">
        {isLoggedIn
        ? 
          <DisplayPdfLink data={props.obj} />
        : null }
    </div>
  );
}
