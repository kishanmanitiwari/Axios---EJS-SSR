import express from "express";
import axios from "axios";

const app = express();
const PORT = 8080;
app.use(express.json())

//Routes

app.get("/get", async (req, res) => {
  try {
    const response = await axios.get(
      "https://userdb-rest-api.onrender.com/api/users"
    );
    res.json(response.data)
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Cannot found data" });
  }
});

app.get("/update", async (req, res) => {
  try {
    const response = await axios.patch(
      "https://userdb-rest-api.onrender.com/api/users/99",
      { last_name: "Flintstone" },
      { headers: { "Content-Type": "application/json" } }
    );

    console.log(req.headers);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Cannot found data" });
  }
});

const url = "https://userdb-rest-api.onrender.com/api/users";
const dataObject = 
  {
    first_name: 'Devesh',
    last_name: 'Jadhav',
    email: 'kboness0@histats.com',
    gender: 'Make',
    job_title: 'Ceo at Warje Vadapav',
  }


app.get("/add", async (req, res) => {
  try {
    const response = await axios.post(url, dataObject);
    console.log(response.data);
    res.status(200).json(response.data); // Send the response data back to the client
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Failed to add data" });
  }
});


app.get('/',(req,res)=>{
    res.render('index.ejs');
})


//Server

app.listen(PORT, () => {
  console.log(`Server is running on localhost ${PORT}`);
});
