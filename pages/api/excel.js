import { google } from "googleapis";
import { removeAccents, addSpaces } from "../../utils/strings";

const IngredientesHoja = "Hoja 2"

export async function fetchExcel() {
    let result = [];
    const target = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
    const jwt = new google.auth.JWT(
        process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        null,
        (process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
        target
    );
    const sheets = google.sheets({ version: "v4", auth: jwt });
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: IngredientesHoja,
    });
    const cols = response.data.values;
    cols.shift();
    cols.forEach(ingredient => {
        result.push({id: ingredient[0], name: ingredient[1], descr: ingredient[2] != undefined ? ingredient[2] : null})
    })
    return result;
}

export async function fetchAllIngredientNames() {
    let result = [];
    const target = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
    const jwt = new google.auth.JWT(
        process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        null,
        (process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
        target
    );
    const sheets = google.sheets({ version: "v4", auth: jwt });
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: IngredientesHoja,
    });
    const data = response.data.values;
    data.shift();
    data.forEach(ingredient => {
        result.push(ingredient[1]);
    })
    
    return result;
}


export async function fetchIngredientByName(name) {
    let result = {};
    const target = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
    const jwt = new google.auth.JWT(
        process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        null,
        (process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
        target
    );
    const sheets = google.sheets({ version: "v4", auth: jwt });
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: IngredientesHoja,
    });
    const data = response.data.values;
    data.shift();

    data.forEach(ingredient => {
        if (removeAccents(ingredient[1]).toLowerCase() == addSpaces(name)) {
            result = {
                name: ingredient[1], 
                descr: ingredient[2] != undefined ? ingredient[2] : "Ha ocurrido un error en la descripción. Lo sentimos :(",
                suitable: ingredient[3] == "Si" ? true : false
            }
        }
    })

    return result;
}