var script = require('../script');
var Deck   = script.Deck;
var expect = require('chai').expect;

describe('script.js', function() {
	it('isEmpty() should return "true" when passed an empty deck', function() {
		var testDeck = new Deck;
		expect(testDeck.isEmpty()).to.eql(true);
	});

	it('size() should return 0 when passed an empty deck', function() {
		var testDeck = new Deck;
		expect(testDeck.size()).to.eql(0);
	});

	it('print() should return \'[]\' when passed an empty deck', function() {
		var testDeck = new Deck;
		expect(testDeck.print()).to.eql('[]');
	});

	it('when 5 is appended, print() should return \'[5]\'; size() should return 1; isEmpty should return false', function() {
		var testDeck = new Deck;
		testDeck.append(5);
		expect(testDeck.print()).to.eql('[5]');
		expect(testDeck.size()).to.eql(1);
		expect(testDeck.isEmpty()).to.eql(false);
	});

	it('should have a size of 52 when deck is filled', function() {
		var testDeck = new Deck;
		testDeck.fillDeck();
		expect(testDeck.size()).to.eql(52);
		expect(testDeck.isEmpty()).to.eql(false);
		expect(testDeck.print()).to.eql('[2H]->[2D]->[2S]->[2C]->[3H]->[3D]->[3S]->[3C]->[4H]->[4D]->[4S]->[4C]->[5H]->[5D]->[5S]->[5C]->[6H]->[6D]->[6S]->[6C]->[7H]->[7D]->[7S]->[7C]->[8H]->[8D]->[8S]->[8C]->[9H]->[9D]->[9S]->[9C]->[10H]->[10D]->[10S]->[10C]->[JH]->[JD]->[JS]->[JC]->[QH]->[QD]->[QS]->[QC]->[KH]->[KD]->[KS]->[KC]->[AH]->[AD]->[AS]->[AC]');
	});

	it('should have a size of 52 when deck is shuffled and first node should not be 2H', function() {
		var testDeck = new Deck;
		testDeck.fillDeck();
		testDeck.shuffle();
		expect(testDeck.size()).to.eql(52);
		expect(testDeck.isEmpty()).to.eql(false);
		expect(testDeck.print().substr(0,10)).to.not.eql('[2H]->[2D]');
	});
});

