const express = require("express");
const app = express();
const pool = require("./db");
app.use(express.json());




// app.get("/", async (req, res) => {
//     try {
//       const allemp = await pool.query("SELECT * FROM emp");
//       res.render('layout',{emp:allemp.rows});
      
      
//     } catch (err) {
//       console.log(err.message);
//     }
//   });
  

app.post("/person", async (req, res) => {
    try {
      const { name } = req.body;
      const { city_name } = req.body;
      const { comaony_name } = req.body;
      const postemp1=`CALL postemp($1,$2,$3,$4)`;
      
      const newemp = await pool.query(postemp1, [emp_id, name, address,mob_no]);
     
      res.json(newemp.rows[0]);
    } catch (err) {
      console.log(err.message);
    }
  });

  app.listen(4000, () => {
    console.log("Server is listening");
  });
  