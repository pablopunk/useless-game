var Result;
(function (Result) {
    Result[Result["Win"] = 0] = "Win";
    Result[Result["Draw"] = 1] = "Draw";
    Result[Result["Lose"] = 2] = "Lose";
})(Result || (Result = {}));
var Hand = {
    "Rock": "Scissors",
    "Paper": "Rock",
    "Scissors": "Paper"
};
function play(player1, player2) {
    if (player2 == player1)
        return Result.Draw;
    if (player2 == Hand[player1])
        return Result.Win;
    return Result.Lose;
}
function add(hand, result) {
    var id = getString(result).toLowerCase();
    if (hand == "Rock")
        id = ("rock" + "-" + id);
    else if (hand == "Paper")
        id = ("paper" + "-" + id);
    else if (hand == "Scissors")
        id = ("scissors" + "-" + id);
    var before = parseInt(document.getElementById(id).innerText);
    var now = before + 1;
    document.getElementById(id).innerText = now.toString();
}
function getString(result) {
    if (result == Result.Draw)
        return "Draw";
    if (result == Result.Lose)
        return "Lose";
    return "Win";
}
function randomHand() {
    var rand = Math.floor(Math.random() * 3);
    if (rand == 0)
        return "Rock";
    if (rand == 1)
        return "Paper";
    return "Scissors";
}
function game() {
    var player1 = randomHand();
    var player2 = randomHand();
    var result = play(player1, player2);
    add(player1, result);
    add(player2, result);
}
for (var i = 0; i < 10000; i++) {
    game();
}
//# sourceMappingURL=index.js.map