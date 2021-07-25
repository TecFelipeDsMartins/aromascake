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
    console.log(sheet.title)
    await sheet.addRows([
        {
            'pedido': 3,
            'nome do cliente': 'Elisa',	
            'telefone do cliente': '999990022',
            'produto': 'Bolo unicórnio',
            'quantidade': 1,
            'sub-total': 140,
            'total pediados': 140,
            'status': 'Aguardando pagamento' 
        }

    ])

}

run()