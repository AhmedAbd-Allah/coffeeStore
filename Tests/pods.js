const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
const expect = require('chai').expect

chai.use(chaiHttp);
chai.should();

describe("Pods", () => {

    // Test to add a new coffee pod
    it("should add new coffee pod", (done) => {
        chai.request(app)
            .post('/pods')
            .send({
                "coffee_flavor": "COFFEE_FLAVOR_VANILLA",
                "product_type": "COFFEE_POD_LARGE",
                "pack_size": "5"
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                expect(res.body).to.have.property('product_type')
                expect(res.body).to.have.property('coffee_flavor')
                expect(res.body).to.have.property('pack_size')

                done();
            });
    });

    // Test to get coffee pods with pack_size = 5 dozens
    it("should get coffee pods with pack_size = 5 dozens", (done) => {
        chai.request(app)
            .get('/pods?pack_size=5')
            .end((err, res) => {

                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.forEach(function (pod) {
                    expect(pod).to.have.property('product_type')
                    expect(pod.coffee_flavor).to.equal('COFFEE_FLAVOR_VANILLA')
                    expect(pod.product_type).to.equal('COFFEE_POD_LARGE')
                    expect(pod.pack_size).to.equal(60)

                });

                done();
            });
    });



});