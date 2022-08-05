var auto_play = true
var auto_play_kind = 0
var two_play = false
var endgame = false
var player1 = []
var player2 = []
var activePlaye = 1
var auto_play_first = false
var co = 0
var score_p1 = 0;
var score_p2 = 0;

function Playgame(id) {
    let choisebtn = document.getElementById(id)
    console.log("the id of btn : " + id)
    if (!endgame) {
        if (auto_play) {
            if (activePlaye == 1) {
                choisebtn.innerHTML = "X"
                choisebtn.style.pointerEvents = "none"
                player1.push(id)
                activePlaye = 2
                co++
                if (co > 2) {
                    if (checkwener(player1)) {
                        // end the game and play2 is the winner
                        score_p1++;
                        document.getElementById("ScoreP1").innerHTML = score_p1
                        endgame = true
                    } else if (checkwener(player2)) {
                        // end game and play2 is the winner
                        score_p2++;
                        document.getElementById("ScoreP2").innerHTML = score_p2
                        endgame = true
                    } else if (player2.length + player1.length == 9) {
                        // end game for draw
                        endgame = true
                    }
                    else {
                        if (!auto_play_first) {
                            if (auto_play_kind == 0) autoplay_easy()
                            else if (auto_play_kind == 1) auto_play_Medium()
                        }
                    }
                }
                else {
                    if (!auto_play_first) {
                        autoplay_easy()
                    }
                }
            }
            else {
                choisebtn.innerHTML = "O"
                player2.push(id)
                choisebtn.style.pointerEvents = "none"
                activePlaye = 1
                co++
                if (co > 3) {
                    if (checkwener(player1)) {

                        score_p1++;
                        document.getElementById("ScoreP1").innerHTML = score_p1
                        endgame = true
                    }
                    else if (checkwener(player2)) {

                        score_p2++;
                        document.getElementById("ScoreP2").innerHTML = score_p2
                        endgame = true
                    }
                    else if (player2.length + player1.length == 9) { endgame = true }
                    else {
                        if (auto_play_first) {
                            if (auto_play_kind == 0) autoplay_easy()
                            else if (auto_play_kind == 1) auto_play_Medium()
                        }
                    }
                }
                else {
                    if (auto_play_first) {
                        autoplay_easy()
                    }
                }
            }
        } else if (two_play) {
            if (activePlaye == 1) {
                choisebtn.innerHTML = "X"
                choisebtn.style.pointerEvents = "none"
                player1.push(id)
                activePlaye = 2
                co++
            }
            else {

                choisebtn.innerHTML = "O"
                player2.push(id)
                choisebtn.style.pointerEvents = "none"
                activePlaye = 1
                co++
            }
            if (co > 4) {
                if (checkwener(player1)) { //p1 
                    score_p1++;
                    document.getElementById("ScoreP1").innerHTML = score_p1
                    endgame = true
                }
                else if (checkwener(player2)) {//p2
                    score_p2++;
                    document.getElementById("ScoreP2").innerHTML = score_p2
                    endgame = true
                }
                else if (player2.size + player1.size == 9) {
                    endgame = true
                }
            }
        }

    }
}


function Restscore() {
    score_p1 = 0
    score_p2 = 0
    document.getElementById("ScoreP2").innerHTML = score_p2
    document.getElementById("ScoreP1").innerHTML = score_p1
}

function replay(score) {
    let btn_replay = document.getElementById('bnt-restart')
    let btn_l = []
    btn_l.push(document.getElementById('1'))
    btn_l.push(document.getElementById('2'))
    btn_l.push(document.getElementById('3'))
    btn_l.push(document.getElementById('4'))
    btn_l.push(document.getElementById('5'))
    btn_l.push(document.getElementById('6'))
    btn_l.push(document.getElementById('7'))
    btn_l.push(document.getElementById('8'))
    btn_l.push(document.getElementById('9'))
    for (i in btn_l) {
        btn_l[i].innerHTML = ""
        btn_l[i].style.pointerEvents = "auto"
        activePlaye = 1
    }
    player1 = []
    player2 = []
    endgame = false; co = 0
    auto_play_first= false
    document.getElementById("bot_first").disabled = false
    if (score) {
        Restscore()
    }
}

function Bot_First(){
    document.getElementById("bot_first").disabled = true
       auto_play_first = true 
        autoplay_easy()
}

function select_kindPlay() {
    var selectV = Number(document.getElementById("select").value)
    if (selectV == 3) {
        auto_play = false
        auto_play_kind = -1
        two_play = true
        replay(true)
        document.getElementById('bot_first').style.display = "none"
        
    }
    else {
        auto_play = true
        auto_play_kind = selectV
        two_play = false
        replay(true)
        document.getElementById('bot_first').style.display = "inline-block"
    }

}


function checkwener(player) {

    if (player.includes(1) && player.includes(2) && player.includes(3)) {
        return true
    }
    else if (player.includes(4) && player.includes(5) && player.includes(6)) {
        return true
    }
    else if (player.includes(7) && player.includes(8) && player.includes(9)) {
        return true
    }
    else if (player.includes(1) && player.includes(4) && player.includes(7)) {
        return true
    }
    else if (player.includes(5) && player.includes(2) && player.includes(8)) {
        return true
    }
    else if (player.includes(6) && player.includes(9) && player.includes(3)) {
        return true
    }
    else if (player.includes(1) && player.includes(5) && player.includes(9)) {
        return true
    }
    else if (player.includes(3) && player.includes(5) && player.includes(7)) {
        return true
    }
    else {
        return false
    }
}
function autoplay_easy() {
    let empety = []
    for (let i = 1; i <= 9; i++) {
        if (!(player1.includes(i) || player2.includes(i))) {
            empety.push(i)
        }
    }
    let randIndex = Math.floor(Math.random() * empety.length)
    Playgame(empety[randIndex])
}
function auto_play_Medium() {
    let empety = []
    for (let i = 1; i <= 9; i++) {
        if (!(player1.includes(i) || player2.includes(i))) {
            empety.push(i)
        }
    }
    if (auto_play_first) {

        if ((player1.includes(1) && player1.includes(9) && empety.includes(5)) || (player1.includes(6) && player1.includes(4) && empety.includes(5)) || (player1.includes(7) && player1.includes(3) && empety.includes(5)) || (player1.includes(2) && player1.includes(8) && empety.includes(5))) {
            Playgame(5)
        }
        else if ((player1.includes(1) && player1.includes(2) && empety.includes(3)) || (player1.includes(6) && player1.includes(9) && empety.includes(3)) || (player1.includes(7) && player1.includes(5) && empety.includes(3))) {
            Playgame(3)
        }
        else if ((player1.includes(3) && player1.includes(2) && empety.includes(1)) || (player1.includes(4) && player1.includes(7) && empety.includes(1)) || (player1.includes(9) && player1.includes(5) && empety.includes(1))) {
            Playgame(1)
        }
        else if ((player1.includes(1) && player1.includes(4) && empety.includes(7)) || (player1.includes(8) && player1.includes(9) && empety.includes(7)) || (player1.includes(3) && player1.includes(5) && empety.includes(7))) {
            Playgame(7)
        }
        else if ((player1.includes(3) && player1.includes(6) && empety.includes(9)) || (player1.includes(8) && player1.includes(7) && empety.includes(9)) || (player1.includes(1) && player1.includes(5) && empety.includes(9))) {
            Playgame(9)
        }
        else if ((player1.includes(1) && player1.includes(3) && empety.includes(2)) || (player1.includes(8) && player1.includes(5) && empety.includes(2))) {
            Playgame(2)
        }
        else if ((player1.includes(1) && player1.includes(7) && empety.includes(4)) || (player1.includes(6) && player1.includes(5) && empety.includes(4))) {
            Playgame(4)
        }
        else if ((player1.includes(3) && player1.includes(9) && empety.includes(6)) || (player1.includes(4) && player1.includes(5) && empety.includes(6))) {
            Playgame(6)
        }
        else if ((player1.includes(7) && player1.includes(9) && empety.includes(8)) || (player1.includes(2) && player1.includes(5) && empety.includes(8))) {
            Playgame(8)
        }
        else if ((player2.includes(1) && player2.includes(9) && empety.includes(5)) || (player2.includes(6) && player2.includes(4) && empety.includes(5)) || (player2.includes(7) && player2.includes(3) && empety.includes(5)) || (player2.includes(2) && player2.includes(8) && empety.includes(5))) {
            Playgame(5)
        }
        else if ((player2.includes(1) && player2.includes(2) && empety.includes(3)) || (player2.includes(6) && player2.includes(9) && empety.includes(3)) || (player2.includes(7) && player2.includes(5) && empety.includes(3))) {
            Playgame(3)
        }
        else if ((player2.includes(3) && player2.includes(2) && empety.includes(3)) || (player2.includes(4) && player2.includes(7) && empety.includes(1)) || (player2.includes(9) && player2.includes(5) && empety.includes(1))) {
            Playgame(1)
        }
        else if ((player2.includes(1) && player2.includes(4) && empety.includes(7)) || (player2.includes(8) && player2.includes(9) && empety.includes(7)) || (player2.includes(3) && player2.includes(5) && empety.includes(7))) {
            Playgame(7)
        }
        else if ((player2.includes(3) && player2.includes(6) && empety.includes(9)) || (player2.includes(8) && player2.includes(7) && empety.includes(9)) || (player2.includes(1) && player2.includes(5) && empety.includes(9))) {
            Playgame(9)
        }
        else if ((player2.includes(1) && player2.includes(3) && empety.includes(2)) || (player2.includes(8) && player2.includes(5) && empety.includes(2))) {
            Playgame(2)
        }
        else if ((player2.includes(1) && player2.includes(7) && empety.includes(4)) || (player2.includes(6) && player2.includes(5) && empety.includes(4))) {
            Playgame(4)
        }
        else if ((player2.includes(3) && player2.includes(9) && empety.includes(6)) || (player2.includes(4) && player2.includes(5) && empety.includes(6))) {
            Playgame(6)
        }
        else if ((player2.includes(7) && player2.includes(9) && empety.includes(8)) || (player2.includes(2) && player2.includes(5) && empety.includes(8))) {
            Playgame(8)
        }
        else {
            autoplay_easy()
        }
    }
    else {
        if ((player2.includes(1) && player2.includes(9) && empety.includes(5)) || (player2.includes(6) && player2.includes(4) && empety.includes(5)) || (player2.includes(7) && player2.includes(3) && empety.includes(5)) || (player2.includes(2) && player2.includes(8) && empety.includes(5))) {
            Playgame(5)
        }
        else if ((player2.includes(1) && player2.includes(2) && empety.includes(3)) || (player2.includes(6) && player2.includes(9) && empety.includes(3)) || (player2.includes(7) && player2.includes(5) && empety.includes(3))) {
            Playgame(3)
        }
        else if ((player2.includes(3) && player2.includes(2) && empety.includes(1)) || (player2.includes(4) && player2.includes(7) && empety.includes(1)) || (player2.includes(9) && player2.includes(5) && empety.includes(1))) {
            Playgame(1)
        }
        else if ((player2.includes(1) && player2.includes(4) && empety.includes(7)) || (player2.includes(8) && player2.includes(9) && empety.includes(7)) || (player2.includes(3) && player2.includes(5) && empety.includes(7))) {
            Playgame(7)
        }
        else if ((player1.includes(3) && player2.includes(6) && empety.includes(9)) || (player2.includes(8) && player2.includes(7) && empety.includes(9)) || (player2.includes(1) && player2.includes(5) && empety.includes(9))) {
            Playgame(9)
        }
        else if ((player2.includes(1) && player2.includes(3) && empety.includes(2)) || (player2.includes(8) && player2.includes(5) && empety.includes(2))) {
            Playgame(2)
        }
        else if ((player2.includes(1) && player2.includes(7) && empety.includes(4)) || (player2.includes(6) && player2.includes(5) && empety.includes(4))) {
            Playgame(4)
        }
        else if ((player2.includes(3) && player2.includes(9) && empety.includes(6)) || (player2.includes(4) && player2.includes(5) && empety.includes(6))) {
            Playgame(6)
        }
        else if ((player2.includes(7) && player2.includes(9) && empety.includes(8)) || (player2.includes(2) && player2.includes(5) && empety.includes(8))) {
            Playgame(8)
        }
        else if ((player1.includes(1) && player1.includes(9) && empety.includes(5)) || (player1.includes(6) && player1.includes(4) && empety.includes(5)) || (player1.includes(7) && player1.includes(3) && empety.includes(5)) || (player1.includes(2) && player1.includes(8) && empety.includes(5))) {
            Playgame(5)
        }
        else if ((player1.includes(1) && player1.includes(2) && empety.includes(3)) || (player1.includes(6) && player1.includes(9) && empety.includes(3)) || (player1.includes(7) && player1.includes(5) && empety.includes(3))) {
            Playgame(3)
        }
        else if ((player1.includes(3) && player1.includes(2) && empety.includes(3)) || (player1.includes(4) && player1.includes(7) && empety.includes(1)) || (player1.includes(9) && player1.includes(5) && empety.includes(1))) {
            Playgame(1)
        }
        else if ((player1.includes(1) && player1.includes(4) && empety.includes(7)) || (player1.includes(8) && player1.includes(9) && empety.includes(7)) || (player1.includes(3) && player1.includes(5) && empety.includes(7))) {
            Playgame(7)
        }
        else if ((player1.includes(3) && player1.includes(6) && empety.includes(9)) || (player1.includes(8) && player1.includes(7) && empety.includes(9)) || (player1.includes(1) && player1.includes(5) && empety.includes(9))) {
            Playgame(9)
        }
        else if ((player1.includes(1) && player1.includes(3) && empety.includes(2)) || (player1.includes(8) && player1.includes(5) && empety.includes(2))) {
            Playgame(2)
        }
        else if ((player1.includes(1) && player1.includes(7) && empety.includes(4)) || (player1.includes(6) && player1.includes(5) && empety.includes(4))) {
            Playgame(4)
        }
        else if ((player1.includes(3) && player1.includes(9) && empety.includes(6)) || (player1.includes(4) && player1.includes(5) && empety.includes(6))) {
            Playgame(6)
        }
        else if ((player1.includes(7) && player1.includes(9) && empety.includes(8)) || (player1.includes(2) && player1.includes(5) && empety.includes(8))) {
            Playgame(8)
        }
        else {
            autoplay_easy()
        }
    }

}
