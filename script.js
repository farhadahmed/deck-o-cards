// We'll start by creating an empty deck. Once we add cards, each card will have two 
// properties: value and next. The last card's next will be null.

function Deck() {
	this.head = null;
}

// The isEmpty method will be useful for testing whether a deck was filled.
Deck.prototype.isEmpty = function() {
	if (this.head === null) {return true;}
	return false;
}

// The size method is useful for verifying whether the deck was filled with the 
// right number of cards; 52.
Deck.prototype.size = function() {
	if (this.isEmpty()) {return 0}

	var current = this.head;
	var count = 1;

	while (current.next !== null) {
		current = current.next;
		count++;
	}

	return count;
}

// The print method will be useful for visualizing the deck and verifying that the
// fill and shuffle methods are working as expected.
Deck.prototype.print = function() {
	if (this.isEmpty()) { return '[]'}
	
	var current = this.head;
	var output = '['

	while (current !== null) {
		if (current.next === null) {
			output += current.value + ']';
		} else {
			output += current.value + ']->[';
		}
		current = current.next;
	}	
	return output;
}

// The append method will be used to fill the deck. I have an array of card values that
// I'll iterate through to append cards to a deck.
Deck.prototype.append = function(val) {
	var newNode = {
		value: val,
		next: null
	};

	if (this.isEmpty()) {
		this.head = newNode;
		return;
	}

	var current = this.head;

	while (current.next !== null) {
		current = current.next;
	}

	current.next = newNode;
}

// The fillDeck method will iterate through the cards array and append each node to the deck.
Deck.prototype.fillDeck = function() {

	for (var i=0; i<cards.length; i++) {
		this.append(cards[i]);
	};

}


/*
	In order to shuffle, we'll start with the front of the deck and work our way to the back. Each card will be switched with
	a random card.
	Steps:

		- use the variable current to iterate through the deck and switch each "current" card with a random card from the deck
		- for each card in the deck:
			- select random card from the deck
			- find it's location
			- switch the value of the random card with the value of the current card.
*/
Deck.prototype.shuffle = function() {
	var indexOfRandomCardToReplace;
	var randomCardToReplace = this.head;
	var current = this.head;

	for (i=0; i<cards.length; i++) {
	
		indexOfRandomCardToReplace = Math.floor(Math.random()*cards.length);

		// While loop finds the location of the random card. Once complete, randomCardToReplace refers to a random node.
		while (randomCardToReplace.value !== cards[indexOfRandomCardToReplace]) {
			randomCardToReplace = randomCardToReplace.next;
		}

		// Store the value of the random card node in a variable so that we don't lose it.
		valOfRandomCardToReplace = randomCardToReplace.value;
		// Replace the value of the random card with the current node's value.
		randomCardToReplace.value = current.value;
		// Replace the current node's value with the original value of the random card node.
		current.value = valOfRandomCardToReplace;

		// Move current to the next card that needs to be replaced (moving from front of deck to the back)
		current = current.next;
		// Reset the card to replace to be the head in order to find random card location with the while loop.
		randomCardToReplace = this.head;
	}
}


var cards = ['2H', '2D', '2S', '2C', '3H', '3D', '3S', '3C', '4H', '4D', '4S', '4C', '5H', '5D',
             '5S', '5C', '6H', '6D', '6S', '6C', '7H', '7D', '7S', '7C', '8H', '8D', '8S', '8C', 
             '9H', '9D', '9S', '9C', '10H', '10D', '10S', '10C', 'JH', 'JD', 'JS', 'JC', 'QH',
             'QD', 'QS', 'QC', 'KH', 'KD', 'KS', 'KC', 'AH', 'AD', 'AS', 'AC'];


var deck1 = new Deck;

deck1.isEmpty(); // true
deck1.fillDeck(); 
deck1.size(); // should be 52
deck1.print(); // should display the cards in order
deck1.shuffle(); 
deck1.print(); // should display the shuffled cards



