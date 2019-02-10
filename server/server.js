const express = require('express');
const ctrl = require('./controller');

const app = express();

app.use(express.json());

//  ENDPOINTS
app.get('/api/lists', ctrl.getListItems);

app.post('/api/lists', ctrl.createListItem);

app.delete('/api/list/:id', ctrl.deleteListItem);

app.put('/api/list/:id', ctrl.updateListItem);

const port = 4000

app.listen(4000, () => console.log(`Listening on port ${port}`));