const applist = [];

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.json(applist);
    })


    app.post('/add', function (req, res) {
        applist.push(req.body.TodoItem);
        res.send(applist);
    })


    app.delete('/delete', function (req, res) {
        applist.splice(req.body.home, 1);
        res.json(applist);
        console.log(applist);
    })


    app.get('/api/applist', function (req, res) {
        res.json(applist);
    })


}