module.exports = (err, req, res, next) => {
   res.status(422).send(err);
}