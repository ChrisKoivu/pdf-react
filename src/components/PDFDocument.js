import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  
} from "@react-pdf/renderer";
 
 

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff"
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  movieContainer: {
    backgroundColor: "#f6f6f5",
    display: "flex",
    flexDirection: "row",
    padding: 5
  },
  movieDetails: {
    display: "flex",
    marginLeft: 80,
    padding:20,
    backgroundColor:'beige',

  },
  movieTitle: {
    fontSize: 15,
    marginBottom: 10
  },
  
});

export function PdfDocument(props) {
  var data = JSON.parse(props.data);
  console.log("pdf props", props.data);
  console.log(data);
  return (
    <Document>
      <Page style={styles.page}>
      <View style={styles.movieDetails}>
        <Text style={styles.movieTitle}>{data.name}</Text>
        <Text style={styles.movieTitle}>{data.age}</Text>
        <Text style={styles.movieTitle}>{data.city}</Text>
       </View>
      </Page>
    </Document>
  );
}
