const express = require('express');
const app = express();
const hbs = require('hbs');

app.set("view engine", "hbs");
app.set("views", "src/views");

app.use('/assets', express.static('src/assets'));
app.use(express.urlencoded({ extended: false }));

const datas = []; 
app.get('/', home);
app.get('/myproject', myproject);
app.get('/testimonial', testimony);
app.get('/contact', contact_me);
app.get('/project-detail/:id', detail_project);
app.post('/myproject', handlePostProject);
app.get('/delete-project/:id', handleDeleteProject);

function home(req, res) {
    res.render('index');
}
function myproject(req, res) {
    res.render('index');
}
function testimony(req, res) {
    res.render('index');
}
function contact_me(req, res) {
    res.render('index');
}
function detail_project(req, res) {
    res.render('index');
}
function handlePostProject(req, res) {
  datas.push(req.body); 
  res.redirect('/myproject'); 
}

function handleDeleteProject(req, res) {
  const projectId = req.params.id;
  res.redirect('/myproject');
}
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})