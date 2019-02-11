const list = [
  {
    id: 0,
    title: "first",
    description: "this is the first thing on the list"
  }
];

let incrementingID = 1

module.exports = {
  getListItems: (req, res) => {
    res.status(200).send(list);
  },

  createListItem: (req, res) => {
    const { title, description } = req.body;
    // const id = list.length + 1;

    let listItem = {
      id: incrementingID++,
      title,
      description
    };

    list.push(listItem);

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
  },

  moveListItem: (req, res) => {
    const {id} = req.params
    const {direction} = req.body


    const listPos = list.findIndex(item => item.id == id);

    if(direction == "up") { 
      if(listPos !== 0) {
        let itemInFront = list[listPos-1]
        list[listPos-1] = list[listPos]
        list[listPos] = itemInFront
      }
    } 
    else {
      if(listPos !== list.length-1) {
        let itemBehind = list[listPos+1]
        list[listPos+1] = list[listPos]
        list[listPos] = itemBehind
      }
    }
      

    res.status(200).send(list)

  }

};
