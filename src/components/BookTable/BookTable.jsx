
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import style from './style.module.css';

const Books = [
      {
        "name":"Убийство на улице Морг",
        "author":"Эдгар Аллан По",
        "year":1841,
        "publisher": "ЭКСМО",
        "genre": "Детектив",
        "score": 8,
    },
    {
      "name":"Солярис",
      "author":"Станислав Лем",
      "year": 1961,
      "publisher": "PLK",
      "genre": "Научная фантастика",
      "score": 7,
    },
    {
      "name":"Лунный камень",
      "author":"Уилки Коллинз",
      "year": 1866,
      "publisher": "ЭКСМО",
      "genre": "Детектив",
      "score": 9,
  },
  {
    "name":"451 по Фаренгейту",
    "author":"Рей Брэдбери",
    "year": 1953,
    "publisher": "Ballantine Books",
    "genre": "Научная фантастика",
    "score": 8,
  },
  {
    "name":"JavaScript & jQuery",
    "author":"Jon Duckett",
    "year": 2015,
    "publisher": "Wiley",
    "genre": "Учебное пособие",
    "score": 5,
  },
  
{
  "name":"Ребекка",
  "author":"Дафна Дюморье",
  "year": 1938,
  "publisher": "ЭКСМО",
  "genre": "Детектив",
  "score": 6,
},
{
  "name":"О дивный новый мир",
  "author":"Олдос Хаксли",
  "year": 1932,
  "publisher": "Chatto & Windus",
  "genre": "Научная фантастика",
  "score": 9,
},
{
  "name":"Путь к изучению JavaScript",
  "author":"Mark Myers",
  "year": 2014,
  "publisher": "CreateSpace ",
  "genre": "Учебное пособие",
  "score": 7,
},
{
  "name":"Рассказы о Шерклоке Холмсе",
  "author":"Артур Конан Дойл",
  "year": 1927,
  "publisher": "ЭКСМО",
  "genre": "Детектив",
  "score": 7,
},
    {
        "name":"Основы алгоритмизации и программирования на Python",
        "author":"Сергей Гуриков",
        "year":2018,
        "publisher": "Моспечать",
        "genre": "Учебное пособие",
        "score": 10,
    },
    {
      "name":"JavaScript: The Good Parts",
      "author":" Douglas Crockford",
      "year": 2016,
      "publisher": "O’Reilly",
      "genre": "Учебное пособие",
      "score": 8,
    },
]



const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, author, year, publisher, genre, score) {
  return { name, author, year, publisher, genre, score };
}

let rows = [

];

for (var i = 0; i<11; i++){
  rows.push(createData(Books[i].name,Books[i].author,Books[i].year, Books[i].publisher,Books[i].genre, Books[i].score))
}





const BookTable = (props) => {
  const classes = useStyles();

  if (props.sorted === 0){
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Название</TableCell>
            <TableCell align="right">Автор</TableCell>
            <TableCell align="right">Год издания</TableCell>
            <TableCell align="right">Издательство</TableCell>
            <TableCell align="right">Жанр</TableCell>
            <TableCell align="right">Оценка</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.author}</TableCell>
              <TableCell align="right">{row.year}</TableCell>
              <TableCell align="right">{row.publisher}</TableCell>
              <TableCell align="right">{row.genre}</TableCell>
              <TableCell align="right">{row.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
   }
   Books.sort( function(a, b) {          
    if (a["genre"] === b["genre"]) {
       // Price is only important when cities are the same
       return b["score"] - a["score"];
    }
    return a["genre"] > b["genre"] ? 1 : -1;
 });
 

   rows = [

  ];
  
  for (var i = 0; i<11; i++){
    rows.push(createData(Books[i].name,Books[i].author,Books[i].year, Books[i].publisher,Books[i].genre, Books[i].score))
  }
  return(
    <div>
    <h2 className = {style.sortedLabel}>Список книг отсортирован по жанрам и оценкам</h2>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Название</TableCell>
            <TableCell align="right">Автор</TableCell>
            <TableCell align="right">Год издания</TableCell>
            <TableCell align="right">Издательство</TableCell>
            <TableCell align="right">Жанр</TableCell>
            <TableCell align="right">Оценка</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.author}</TableCell>
              <TableCell align="right">{row.year}</TableCell>
              <TableCell align="right">{row.publisher}</TableCell>
              <TableCell align="right">{row.genre}</TableCell>
              <TableCell align="right">{row.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
     );
}

export default BookTable;