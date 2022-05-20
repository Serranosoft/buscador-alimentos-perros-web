import { google } from "googleapis";
import { removeAccents } from "../../utils/strings";
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
        range: "Hoja 2",
    });
    const cols = response.data.values;
    cols.shift();
    cols.forEach(ingredient => {
        result.push({name: ingredient[0], descr: ingredient[1] != undefined ? ingredient[1] : null})
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
        range: "Hoja 2",
    });
    const data = response.data.values;
    data.shift();
    data.forEach(ingredient => {
        result.push(ingredient[0]);
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
        range: "Hoja 2",
    });
    const data = response.data.values;
    data.shift();
    console.log(name);
    data.forEach(ingredient => {
        if (removeAccents(ingredient[0]).toLowerCase() == name) {
            result = {
                name: ingredient[0], 
                descr: ingredient[1]
            }
        }
    })

    return result;
}