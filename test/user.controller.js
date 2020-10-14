const { expect } = require('chai')
const userController = require('../src/controllers/user')

describe('User', () => {


  describe('Create', () => {

    it('create a new user', (done) => {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      userController.create(user, (err, result) => {
        expect(err).to.be.equal(null)
        expect(result).to.be.equal('OK')
        done()
      })
    })

    it('passing wrong user parameters', (done) => {
      const user = {
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      userController.create(user, (err, result) => {
        expect(err).to.not.be.equal(null)
        expect(result).to.be.equal(null)
        done()
      })
    })

    // it('avoid creating an existing user', (done)=> {
    //   // TODO create this test
    //   // Warning: the user already exists
    //   done()
    // })
    
  })
  
  describe('Get', ()=> {
  // TODO Create test for the get method
  it('get a user by username', (done) => {
    // 1. First, create a user to make this unit test independent from the others
    const user = {
      username = 'anneclairelaisney',
      firstname = 'AnneClaire',
      lastname = 'Laisney'
    }
    userController.create(user, (err, result) => {
      expect(err).to.not.be.equal(null)
      expect(result).to.be.equal('OK')
      done()
    })
    // 2. Then, check if the result of the get method is correct
    userController.get(user.username, (err, result) => {
      expect(err).to.not.be.equal(null)
      expect(result).to.be.eql('OK')
      done()
    })
  })
  })
})
