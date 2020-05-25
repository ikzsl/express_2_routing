const Express = require('express');
const Router = require('named-routes');

// const app = Express();
// const router = new Router();
// router.extendExpress(app);
// router.registerAppHelpers(app);

// app.get('/admin/users/:id', 'admin.user', (req, res, next) => {
//   const path = app.namedRoutes.build('admin.user', {id: 2});


//   res.send('Hi', 200);
// });

// app.get('/users', 'users', (req, res, next) => {
//     const path = app.namedRoutes.build('admin.user', {id: 2});
//     res.send('Hi', 200);
// });


// app.get('/users', (req, res) => {
//     console.log(req.query);
//     res.status(200);
//     res.send(200);
// });

// Ваше первое express приложение, будет представлять из себя простой счетчик, с доступом через http интерфейс. Над счетчиком можно выполнять следующие операции:

// / - получить текущее значение счетчика в виде json: { "value": 0 }
// <METHOD> /increment - увеличение на единицу
// <METHOD> /decrement - уменьшение на единицу
// <METHOD> /reset - сброс значения счетчика на значение по умолчанию.
// <METHOD> /set?value=5 - установка счетчика в конкретное значение, которое передается как query параметр с именем value.
// Значение по умолчанию равно нулю. Все точки входа, кроме /, должны возвращать 204 no content.

// Имена методов не указаны специально. Необходимо их выбрать правильно с учетом требований http к семантике глаголов. Важно анализировать идемпотентность операции и требований по обеспечению идемпотентности глаголами http.

// solution.js
// Реализуйте функцию, которая возвращает сконфигурированное express приложение по приведенному выше сценарию.


    // BEGIN (write your solution here)
    const app = new Express();
    let counter = 0;
  
    app.get('/', (req, res) => {
      res.status(200);
      res.json({ value: counter });
    });
  
    app.post('/increment', (req, res) => {
      counter += 1;
      res.status(204).end();
    });
  
    app.post('/decrement', (req, res) => {
      counter -= 1;
      res.status(204).end();
    });
  
    app.delete('/reset', (req, res) => {
      counter = 0;
      res.status(204).end();
    });
  
    app.put('/set', (req, res) => {
      counter = +req.query.value;
      res.status(204).end();
    });
    // END
  


app.listen(3000, () => {
  console.log('listening port 3000');
});
