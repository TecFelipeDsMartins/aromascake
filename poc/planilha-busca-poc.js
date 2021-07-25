const { GoogleSpreadsheet } = require('google-spreadsheet')
require('dotenv').config({path:'../.env.homologacao'})
const fs = require('fs')
const credenciais = require('../credenciais.json')


const doc = new GoogleSpreadsheet('1GQU6vtd__YfLLV8cbURJFbjyGXm2GtRs1vKipVYH2ho');

const run = async() => {

    await doc.useServiceAccountAuth({
        client_email: process.env.EMAIL_GOOGLE_API,
        private_key: credenciais.private_key
    })
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[1]
    const maxRows = sheet.rowCount
    await sheet.loadCells('A1:A'+ maxRows)
    await sheet.loadCells('H1:H'+ maxRows)
    const validIndex = [...Array(maxRows).keys()]
    const orderId = 2
    const status = 'Pago com pix'

    for await(const i of validIndex){
       const cell = await sheet.getCell(1+i, 0)
       if(cell.value){
           if(cell.value===orderId){
               const statusCell = await sheet.getCell(1+i,7)
               statusCell.value = status
           }
       }else{
        break
       }
    }
    await sheet.saveUpdatedCells()
}

run()