const crud = function () {

    let items = [
        { id: 1, name: "John", lastname: "Doe" },
        { id: 2, name: "Jane", lastname: "Doe" },
    ]

    let autoincrement = 3

    return {
        create: (name, lastname) => {
            const id = autoincrement++;
            const person = { id, name, lastname }
            items.push(person);
            return person;
        },
        read: (id) => {
            return items.find(item => item.id === id) || null;
        },
        update: (id, name, lastname) => {
            const index = items.findIndex(item => item.id === id);
            if (index > -1) {
                items[index] = { id, name, lastname };
            }
            return index > -1 ? items[index] : false;
        },
        delete: (id) => {
            const index = items.findIndex(item => item.id === id);
            if (index > -1) {
                items = items.filter(item => item.id !== id)
            }
            return index > -1;
        }
    }

}

module.exports = crud()
