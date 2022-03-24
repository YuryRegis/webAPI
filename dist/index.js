"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { v4: uuid } = require('uuid');
const app = (0, express_1.default)();
app.use(express_1.default.json());
const customers = Array();
app.post('/accounts', (request, response) => {
    const { name, cpf } = request.body;
    const id = uuid();
    if (!name || !cpf)
        return response.status(400).json({ error: 'name and cpf are required' });
    const customerAlreadyExists = customers.some(customer => customer.cpf === cpf);
    if (customerAlreadyExists)
        return response.status(400).json({ error: 'customer already exists' });
    customers.push({ id, name, cpf, statement: [] });
    response.status(201).json({ id });
});
app.get('/statement/:cpf', (request, response) => {
    const { cpf } = request.params;
    const customer = customers.find(customer => customer.cpf === cpf);
    if (!customer)
        return response.status(400).json({ error: 'customer not found' });
    response.json(customer.statement);
});
app.listen(3000);
