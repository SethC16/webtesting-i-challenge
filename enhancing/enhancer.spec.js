const { repair, succeed, fail, } = require('./enhancer.js');
// test away!

describe("enhancer", function() {

    describe("succeed()", () => {
        it("should increase enhancement level", () => {
            expect(succeed({ enhancement: 10 }).enhancement).toBe(11);
            expect(succeed({ enhancement: 19 }).enhancement).toBe(20);
            expect(succeed({ enhancement: 20 }).enhancement).toBe(20);   
    })
});

    describe("repair()", () => {
        it("should repair the durability to 100", () => {
            expect(repair({ durability: 10 }).durability).toBe(100);
            expect(repair({ durability: 19 }).durability).toBe(100);
            expect(repair({ durability: 100 }).durability).toBe(100);
        })
    })

    describe('fail()', () => {
        it("item failed to enchance", () => {
            expect(fail({ enhancement: 10, durability: 10 }).durability).toBe(5);
                expect(fail({ enhancement: 15, durability: 20 }).durability).toBe(10);
                expect(fail({ enhancement: 20, durability: 20 }).durability).toBe(19);
        })
    })
})
