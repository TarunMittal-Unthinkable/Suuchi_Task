const express = require("express");
const app = express();
const pool = require("./db");
app.use(express.json());



//to get data from tables
app.get("/data", async (req, res) => {
    try {
      const data=`select data()`;
      const alldata = await pool.query(data);
      res.json(alldata.rows[0])
      
      
    } catch (err) {
      console.log(err.message);
    }
  });


//to post data into city
app.post("/city", async (req, res) => {
    try {
      const { city_id } = req.body;
      const { city_name } = req.body;
      const city=`call city($1,$2)`;
      const newcity = await pool.query(city,[city_id,city_name]);
      res.json(newcity.rows[0]);
    } catch (err) {
      console.log(err.message);
    }
  });


  //to post data into company
  app.post("/company", async (req, res) => {
    try {
      const { company_id } = req.body;
      const { company_name } = req.body;
      const company=`call company($1,$2)`;
      const newcompany = await pool.query(company,[company_id,company_name]);
      res.json(newcompany.rows[0]);
    } catch (err) {
      console.log(err.message);
    }
  });


  //to post data into person
app.post("/person", async (req, res) => {
    try {
      const { name } = req.body;
      const { city_name } = req.body;
      const { company_name } = req.body;
      const company = await pool.query("SELECT company_id FROM company WHERE company_name=$1", [company_name]);
      const c1=company.rows[0].company_id
      const city = await pool.query("SELECT city_id FROM city WHERE city_name=$1", [city_name]);
      const c2=city.rows[0].city_id
      const person = await pool.query('insert into person(name,city_id,company_id) values($1,$2,$3)',[name,c2,c1]);
     
      res.json(person.rows[0]);
    } catch (err) {
      console.log(err.message);
    }
  });

  app.listen(4000, () => {
    console.log("Server is listening");
  });
  