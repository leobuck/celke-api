const mongoose = require('mongoose');
const schema = mongoose.Schema;

const homeSchema = new mongoose.Schema({
    topTitulo: {
        type: String
    },
    topSubtitulo: {
        type: String
    },
    topTextButton: {
        type: String
    },
    topLinkButton: {
        type: String
    },
    servTitulo: {
        type: String
    },
    servSubtitulo: {
        type: String
    },
    servUmIcone: {
        type: String
    },
    servUmTitulo: {
        type: String
    },
    servUmDesc: {
        type: String
    },
    servDoisIcone: {
        type: String
    },
    servDoisTitulo: {
        type: String
    },
    servDoisDesc: {
        type: String
    },
    servTresIcone: {
        type: String
    },
    servTresTitulo: {
        type: String
    },
    servTresDesc: {
        type: String
    },
    portTitulo: {
        type: String
    },
    portSubtitulo: {
        type: String
    },
    portUmOriginalName: {
        type: String
    },
    portUmFileName: {
        type: String
    },
    portUmTitulo: {
        type: String
    },
    portUmSubtitulo: {
        type: String
    },
    portDoisOriginalName: {
        type: String
    },
    portDoisFileName: {
        type: String
    },
    portDoisTitulo: {
        type: String
    },
    portDoisSubtitulo: {
        type: String
    },
    portTresOriginalName: {
        type: String
    },
    portTresFileName: {
        type: String
    },
    portTresTitulo: {
        type: String
    },
    portTresSubtitulo: {
        type: String
    },
    portQuatroOriginalName: {
        type: String
    },
    portQuatroFileName: {
        type: String
    },
    portQuatroTitulo: {
        type: String
    },
    portQuatroSubtitulo: {
        type: String
    },
    portCincoOriginalName: {
        type: String
    },
    portCincoFileName: {
        type: String
    },
    portCincoTitulo: {
        type: String
    },
    portCincoSubtitulo: {
        type: String
    },
    portSeisOriginalName: {
        type: String
    },
    portSeisFileName: {
        type: String
    },
    portSeisTitulo: {
        type: String
    },
    portSeisSubtitulo: {
        type: String
    },
},
{
    timestamps: true
});

mongoose.model('Home', homeSchema);
