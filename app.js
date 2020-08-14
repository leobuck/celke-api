const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

require('./models/home');
const Home = mongoose.model('Home');

// Permite dados em formato JSON
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'X-PINGOTHER, Content-Type, Authorization');
    app.use(cors());
    next();
});

app.use(
  '/file',
  express.static(path.resolve(__dirname, 'tmp', 'uploads'))
);

mongoose.connect('mongodb://localhost:27017/celke', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => {
    console.log('Conexão com o banco de dados MongoDB realizada com sucesso!');
}).catch((err) => {
    console.log(`Erro: ${err}`);
});

app.get('/home', (req, res) => {
    Home
        .findOne({})
        //.findOne({}, '_id topTitulo')
        .then((home) => {
            if (home.portUmFileName) {
                var portUmFileName = "http://192.168.0.104:8080/file/home/" + home.portUmFileName;
            } else {
                var portUmFileName = "http://192.168.0.104:8080/file/home/portifolio.jpg";
            }

            if (home.portDoisFileName) {
                var portDoisFileName = "http://192.168.0.104:8080/file/home/" + home.portDoisFileName;
            } else {
                var portDoisFileName = "http://192.168.0.104:8080/file/home/portifolio.jpg";
            }

            if (home.portTresFileName) {
                var portTresFileName = "http://192.168.0.104:8080/file/home/" + home.portTresFileName;
            } else {
                var portTresFileName = "http://192.168.0.104:8080/file/home/portifolio.jpg";
            }

            if (home.portQuatroFileName) {
                var portQuatroFileName = "http://192.168.0.104:8080/file/home/" + home.portQuatroFileName;
            } else {
                var portQuatroFileName = "http://192.168.0.104:8080/file/home/portifolio.jpg";
            }

            if (home.portCincoFileName) {
                var portCincoFileName = "http://192.168.0.104:8080/file/home/" + home.portCincoFileName;
            } else {
                var portCincoFileName = "http://192.168.0.104:8080/file/home/portifolio.jpg";
            }

            if (home.portSeisFileName) {
                var portSeisFileName = "http://192.168.0.104:8080/file/home/" + home.portSeisFileName;
            } else {
                var portSeisFileName = "http://192.168.0.104:8080/file/home/portifolio.jpg";
            }

            return res.json({
                home,
                portUmFileName,
                portDoisFileName,
                portTresFileName,
                portQuatroFileName,
                portCincoFileName,
                portSeisFileName
            });
        })
        .catch((err) => {
            return res
                .status(400)
                .json({
                    error: true,
                    message: 'Nenhum registro encontrado!'
                });
        });
});

app.post('/home', async (req, res) => {
    const homeExiste = await Home.findOne({});

    if (homeExiste) {
        return res
            .status(400)
            .json({
                error: true,
                message: 'A página Home já esta cadastrada!'
            });
    }

    Home.create(req.body, (err) => {
        if (err) 
            return res
                .status(400)
                .json({
                    error: true,
                    message: 'Erro ao cadastrar o conteúdo da página Home!'
                })
    });

    return res
        .json({
            error: false,
            message: 'Conteúdo da página Home cadastrada com sucesso!'
        })
});

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080: http://localhost:8080');
});