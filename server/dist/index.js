"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const fs_1 = __importDefault(require("fs"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.text());
app.post('/api/newsletter/emails/new', (req, res) => {
    const data = req.body + '\n';
    const filePath = '../server/data/emails.txt';
    fs_1.default.appendFile(filePath, data, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            res.status(500).send('Error writing to file');
            return;
        }
        console.log('Data written to file successfully.');
        res.send('Data written to file successfully.');
    });
});
app.listen(4000, () => {
    console.log('Server running on port 4000');
});
