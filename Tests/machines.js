const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
const expect = require('chai').expect

chai.use(chaiHttp);
chai.should();

describe("Machines", () => {

    // Test to add a new coffee machine
    it("should add new coffee machine", (done) => {
        chai.request(app)
            .post('/machines')
            .send({
                "product_type": "COFFEE_MACHINE_LARGE",
                "water_line_compatible": true
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                expect(res.body).to.have.property('product_type')
                expect(res.body).to.have.property('water_line_compatible')

                done();
            });
    });

    // Test to get water_line_compatible coffee machines  
    it("should get water_line_compatible coffee machines", (done) => {
        chai.request(app)
            .get('/machines?water_line_compatible=true')
            .end((err, res) => {

                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.forEach(function (machine) {
                    expect(machine).to.have.property('product_type')
                    expect(machine.product_type).to.equal('COFFEE_MACHINE_LARGE')
                });

                done();
            });
    });



});