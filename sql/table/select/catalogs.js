module.exports = {
  selectCatalog: (columns = "*") => {
    return `SELECT ${columns} FROM Catalogs;`;
  },
};
