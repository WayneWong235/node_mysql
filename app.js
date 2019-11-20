const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
var app = express();
//Configuring express server
app.use(bodyparser.json());

//MySQL details
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Waynewong24.',
    database: 'demo',
    multipleStatements: true
});

mysqlConnection.connect((err)=> {
    if(!err)
    console.log('Connection Established Successfully');
    else
    console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
});

//Establish the server connection
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));

//Router to GET specific students detail via class
app.get('/fetchStudents' , (req, res) => {
    if (req.query.id){
        var sql ="SELECT * FROM students WHERE id=?";
        mysqlConnection.query(sql,[req.query.id], (err, rows, fields) => {
            if (!err)
                res.send(rows);
            else
                console.log(err);
            })
    } else if (req.query.class){
        var sql ="SELECT * FROM students WHERE class=?";
        mysqlConnection.query(sql,[req.query.class], (err, rows, fields) => {
            if (!err)
                res.send(rows);
            else
                console.log(err);
            })
    }
});


//Router to INSERT/POST a student's detail
app.post('/student', (req, res) => {
    let student = req.body; 
    var sql ="INSERT INTO students (id, firstName, lastName, class, nationality) VALUES (?, ?, ?, ?, ?)";
    mysqlConnection.query(sql, [student.id, student.firstName, student.lastName, student.class, student.nationality], (err, rows, fields) => {
    if (!err)
        res.send(rows);
    else
        console.log(err);
    })
});

//Router to UPDATE/PUT a student's detail
app.put('/student', (req, res) => {
    let student = req.body; 
    var sql ="UPDATE students SET class=? WHERE id=?";
    mysqlConnection.query(sql, [student.class, student.id], (err, rows, fields) => {
    if (!err)
        res.send(rows);
    else
        console.log(err);
    })
});

//Router to DELETE a student's detail
app.delete('/student', (req, res) => {
    let student = req.body; 
    var sql ="DELETE FROM students WHERE id=?";
    mysqlConnection.query(sql, [student.id], (err, rows, fields) => {
    if (!err)
        res.send(rows);
    else
        console.log(err);
    })
});