const { connectionMySql } = require("../connection");
const { selectCatalog } = require("../sql/table/select/catalogs");

exports.getCatalogs = async (req, res) => {
  console.log(req.query, "=> ini query");
  connectionMySql.query(selectCatalog("name,price"), (err, results) => {
    if (err) {
      return res.json(err);
    }

    if (results.length === 0) {
      return res.json({ message: "empty catalogs" });
    }
    return res.json(results);
  });
};
