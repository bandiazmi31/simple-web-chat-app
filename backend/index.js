const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');

const app = express();
app.use(express.json());
app.use(cors({origin: true}));

app.post("/authenticate", async (req, res) => {
    const {username} = req.body;

    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            {username: username, secret: username, first_name: username},
            {headers: {'Private-Key': '8c71e6b5-308e-40ff-9d62-a528e2d8121a'}}
        )
        return res.status(r.status).json(r.data);
    } catch (e) {
        return res.status(e.response.status).json(e.response.data);
    }

    return res.json({username: username, secret: "sha256..."});
});

app.listen(3001);