const indexCtrls = {};

indexCtrls.renderIndex = (req, res) => {
  res.render('index.hbs');
};

indexCtrls.renderAbout = (req, res) => {
  res.render('about.hbs');
};

module.exports = indexCtrls;
