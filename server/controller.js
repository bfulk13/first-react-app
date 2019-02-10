const list = [
  {
    id: 0,
    title: "first",
    description: "this is the first thing on the list"
  }
];

module.exports = {
  getListItems: (req, res) => {
    res.status(200).send(list);
  },

  createListItem: (req, res) => {
    const { title, description } = req.body;
    const id = list.length + 1;

    let newListItem = {
      id,
      title,
      description
    };

    list.push(newListItem);

    res.status(200).send(list);
  },

  deleteListItem: (req, res) => {
    const { id } = req.params;

    const index = list.findIndex(item => item.id == id);

    list.splice(index, 1);

    res.status(200).send(list);
  },

  updateListItem: (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const index = list.findIndex(item => item.id == id);

    let foundItem = list[index];

    foundItem = {
      id: foundItem.id,
      title: title || foundItem.title,
      description: description || foundItem.description
    };

    list.splice(index, 1, foundItem);

    res.status(200).send(list);
  }
};
