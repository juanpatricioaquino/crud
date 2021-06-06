const crud = require('./index.js')
const assert = require('assert')

describe('Crud', () => {


    it('Read with valid id should return an object', () => {

        let item = crud.read(1)
        let expected = {id: 1, name: "John", lastname: "Doe"}

        assert.strictEqual(item.id, expected.id)
        assert.strictEqual(item.name, expected.name)
        assert.strictEqual(item.lastname, expected.lastname)
    })

    it('Read with  invalid id should return null', () => {

        let item = crud.read(666)

        assert.strictEqual(item, null)
    })

    it('create should return an object with autoincremental id', () => {
        let item = crud.create("John", "Rambo")
        let expected = {id: 3, name: "John", lastname: "Rambo"}

        assert.strictEqual(item.id, expected.id)
        assert.strictEqual(item.name, expected.name)
        assert.strictEqual(item.lastname, expected.lastname)
    })


    it('update with valid id should return an updated object', () => {
        let item = crud.update(2, "John", "Wick")
        let expected = {id: 2, name: "John", lastname: "Wick"}

        assert.strictEqual(item.id, expected.id)
        assert.strictEqual(item.name, expected.name)
        assert.strictEqual(item.lastname, expected.lastname)

        item = crud.read(2)
        assert.strictEqual(item.id, expected.id)
        assert.strictEqual(item.name, expected.name)
        assert.strictEqual(item.lastname, expected.lastname)
    })

    it('update with invalid id should return false', () => {
        let item = crud.update(789,  "John",  "Wick")
        assert.strictEqual(item, false)
    })

    it('delete with valid id should return true', () => {
        let result = crud.delete(2)
        assert.strictEqual(result, true)
        //we check that the element doesnt exist
        let result2 = crud.read(2)
        assert.strictEqual(result2, null)
    })


    it('delete with invalid id should return false', () => {
        let result = crud.delete(987)
        assert.strictEqual(result, false)
    })
})
