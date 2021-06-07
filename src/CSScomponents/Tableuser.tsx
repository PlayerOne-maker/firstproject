import style from 'styled-components'

export const TableuserCSS = style.div`
.table {
    font-family: 'Roboto Condensed', sans-serif;
    border-collapse: collapse;
    width: 100%;
    
  }
  
  .table td, #table th {
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  .table tr:nth-child(even){background-color: #f2f2f2;}
  
  .table tr:hover {background-color: #ddd;}
  
  .table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #04AA6D;
    color: white;
    
  }
`