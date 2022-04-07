input.onButtonPressed(Button.A, function () {
    if (Start == 1) {
        if (Lock == 0) {
            RPS_Value += 1
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (Start == 1) {
        Lock = 1
        RPS_Confirm = RPS_Value
        RPS_Value = 0
        RPS_AI_Pick = randint(1, 3)
        if (RPS_AI_Pick == 1) {
            basic.showLeds(`
                . # # . .
                . # . # .
                . # # . .
                . # . # .
                . # . # .
                `)
        }
        if (RPS_AI_Pick == 2) {
            basic.showLeds(`
                . # # . .
                . # . # .
                . # # . .
                . # . . .
                . # . . .
                `)
        }
        if (RPS_AI_Pick == 3) {
            basic.showLeds(`
                . . # # .
                . # . . .
                . # # # .
                . . . # .
                . # # . .
                `)
        }
        basic.pause(1000)
        if (RPS_Confirm == 2 && RPS_AI_Pick == 1) {
            basic.showString("WIN!")
            Player_Wins += 1
        }
        if (RPS_Confirm == 3 && RPS_AI_Pick == 2) {
            basic.showString("WIN!")
            Player_Wins += 1
        }
        if (RPS_Confirm == 1 && RPS_AI_Pick == 3) {
            basic.showString("WIN!")
            Player_Wins += 1
        }
        if (RPS_Confirm == 1 && RPS_AI_Pick == 2) {
            basic.showString("LOSE")
            AI_Wins += 1
        }
        if (RPS_Confirm == 2 && RPS_AI_Pick == 3) {
            basic.showString("LOSE")
            AI_Wins += 1
        }
        if (RPS_Confirm == 3 && RPS_AI_Pick == 1) {
            basic.showString("LOSE")
            AI_Wins += 1
        }
        if (RPS_Confirm == RPS_AI_Pick) {
            basic.showString("DRAW")
        }
        basic.pause(500)
        if (Player_Wins == 3) {
            basic.showString("VICTORY       ")
            Player_Wins = 0
            AI_Wins = 0
        }
        if (AI_Wins == 3) {
            basic.showString("DEFEAT          ")
            Player_Wins = 0
            AI_Wins = 0
        }
        RPS_AI_Pick = 0
        RPS_Confirm = 0
        RPS_Value = 1
        Lock = 0
    }
})
let AI_Wins = 0
let Player_Wins = 0
let RPS_AI_Pick = 0
let RPS_Confirm = 0
let Lock = 0
let RPS_Value = 0
let Start = 0
Start = 0
basic.showString("WELCOME")
Start = 1
RPS_Value = 1
basic.forever(function () {
    if (RPS_Value == 1) {
        basic.showLeds(`
            # # # # .
            # . . . #
            # . # # .
            # . . . #
            # . . . #
            `)
    }
    if (RPS_Value == 2) {
        basic.showLeds(`
            # # # # .
            # . . . #
            # # # # .
            # . . . .
            # . . . .
            `)
    }
    if (RPS_Value == 3) {
        basic.showLeds(`
            . # # # #
            # . . . .
            . # # # .
            . . . . #
            # # # # .
            `)
    }
})
basic.forever(function () {
    if (RPS_Value == 4) {
        RPS_Value = 1
    }
})
