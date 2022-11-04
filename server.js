const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(201).send({
        slackUsername: 'ebube', 
        backend: true, 
        age: 27, 
        bio: 'i am Ebube, a chemical engineer from delta state, Nigeria.i am new to coding, however i am convinced that my passion will keep me going.'
    })
})

app.post('/', (req, res) => {
    let { operation_type, x, y } = req.body;
    let result;
  
    //   operations object
    let operation = {
      addition: x + y,
      subtraction: x - y,
      multiplication: x * y
    };
  
    //   additon: x + y,
    if (
      operation_type.includes('add') ||
      operation_type.includes('sum') ||
      operation_type.includes('plus') ||
      operation_type.includes('+')
    ) {
      result = operation.addition;
      operation_type = 'addition';
    }
  
    //   subtraction: x - y,
    if (
      operation_type.includes('subtract') ||
      operation_type.includes('minus') ||
      operation_type.includes('-') ||
      operation_type.includes('less')||
      operation_type.includes('remove')||
      operation_type.includes('from')
    ) {
      result = operation.subtraction;
      operation_type = 'subtraction';
    }
  
    //   multiplication: x * y,
    if (
      operation_type.includes('multiply') ||
      operation_type.includes('*') ||
      operation_type.includes('times')
    ) {
      result = operation.multiplication;
      operation_type = 'multiplication';
    }
  
    res.setHeader("Content-Type", "application/json").json({
      slackUsername: 'ebuwonders',
      operation_type,
      result,
    });
  });
  

const port = process.env.PORT || 5010;
app.listen(port, () => {
    console.log('listening on 5010');
});
