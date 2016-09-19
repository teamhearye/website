exports.privacy = function(req, res) {
  res.render('privacy', {
    title: 'Privacy Policy'
  });
};

exports.terms = function(req, res) {
  res.render('terms', {
    title: 'Terms and Agreement'
  });
};
