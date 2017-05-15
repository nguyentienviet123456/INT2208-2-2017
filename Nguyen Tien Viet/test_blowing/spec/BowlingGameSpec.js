describe("BowlingGame", function() {
	var game;

	beforeEach(function(){
		game = new BowlingGame();
	});

	function rollMany (n, pins) {
		for (var i = 0; i < n; i++) {
			game.roll(pins)
		}
	}

	function rollSpare() {
		game.roll(5);
		game.roll(5);
	}

	function rollStrike() {
		game.roll(10);
	}

	it("should properly calculate a gutter game", function() {
		rollMany(20, 0);
		expect(game.score()).toEqual(0);
	});

	it("should properly calculate a strike", function() {
		rollStrike();
		game.roll(3);
		game.roll(4);
		rollMany(16, 0);
		expect(game.score()).toEqual(24);
	});

	it("should properly calculate a spare", function() {
		rollSpare();
		game.roll(3);
		rollMany(17, 0);
		expect(game.score()).toEqual(16);
	});



	
});