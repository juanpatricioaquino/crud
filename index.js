const crud = function () {

    let items = [
        {id: 1, name: "John", lastname: "Doe"},
        {id: 2, name: "Jane", lastname: "Doe"},
    ]

    let autoincrement = 3

    return {
        create: (name, lastname) => {
            /*YOUR CODE HERE */

        },
        read: (id) => {
            /*YOUR CODE HERE */

        },
        update: (id, name, lastname) => {
            /*YOUR CODE HERE */

        },
        delete: (id) => {
            /*YOUR CODE HERE */

        }
    }

}

module.exports = crud()
