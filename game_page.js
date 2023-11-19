function send() {
    number1 = document.getElementById("word").value;
    number2 = get_word.toLowerCase();
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + "X" + number2 +"</h4>";
    inputbox = "<br>Answer : <input type='text' id='input_text_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").innerHTML = row;
    document.getElementById("number2").innerHTML = row;
}
function check(){
    get_answer = document.getElementById("input_check_box").value;
    if (answer == actual answer){
        if(answer_turn == "player1"){
            player1_score = player1_score + 1;
            player2_score = player2_score - 1;
            document.getElementById("player1_score").innerHTML=player1_score;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    else{
        player1_score = player1_score - 1;
        player2_score = player2_score + 1;
        document.getElementById("player1_score").innerHTML=player1_score;
        document.getElementById("player2_score").innerHTML=player2_score;
    }
}
else{
    if(answer_turn == "player1"){
        player1_score = player1_score - 1;
        player2_score = player2_score + 1;
        document.getElementById("player1_score").innerHTML=player1_score;
        document.getElementById("player2_score").innerHTML=player2_score;
    }
else{
    player1_score = player1_score + 1;
    player2_score = player2_score - 1;
    document.getElementById("player1_score").innerHTML=player1_score;
    document.getElementById("player2_score").innerHTML=player2_score;
}
}
    if (answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML ="Answer turn - " + player2_name;
    }
    else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML ="Answer turn - " + player1_name;
    }
    if (question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML ="Question turn - " + player2_name;
    }
    else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML ="Question turn - " + player1_name;
    }
    document.getElementById("output").innerHTML="";
}
}