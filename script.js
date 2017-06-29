alert("Hello player! Ready for the game? Then go ahead!")

let i = 0;

outer: while(i< 10) { 
    let start = prompt('Are you ready to start the game?')
    const YES = "yes"
    const NO = "no"
    if(start == YES) {
        //Ввод данных о игроке. И запись введенных данных в переменные
        let isName = prompt ("What is your name?" , "name")
        let isLastName = prompt ("What is your last name?" , "last name")
        let isFullYears = prompt ("How many full years?" , "Full years")
        
        //Вывод вопросов, и запись в переменные ответов.
        let question1 = prompt ("If the \"var\" is specified in the \"if\" is it visible outside the \"if\"?" , "\"yes\" or\"no\".")
        let question2 = prompt ("If the \"let\" is specified in the \"if\" is it visible outside the \"if\"?" , "\"yes\" or\"no\".")
        let question3 = prompt ("The value \"boolean\" takes only \"thru / false\"?" , "\"yes\" or\"no\".")
        let question4 = prompt ("\"alert()\" is a pop-up window in the browser?" , "\"yes\" or\"no\".")
        let question5 = prompt ("\"prompt\" is a window with imput?" , "\"yes\" or\"no\".")

        //Считаем количество правильных ответов 
        const trueQuestion = 1 * (2 ** 2)
        const falseQuestion = 0

        if(question1 == YES){
            question1 = trueQuestion
        } else {
             question1 = falseQuestion
        }
         if(question2 == NO){
            question2 = trueQuestion
        } else {
             question2 = falseQuestion
        } 
        if(question3 == YES){
            question3 = trueQuestion
        } else {
             question3 = falseQuestion
        }
        if(question4 == YES){
            question4 = trueQuestion
        } else {
             question4 = falseQuestion
        }
         if(question5 == YES){
            question5 = trueQuestion
        } else {
             question5 = falseQuestion
        }
        
        //подсчет очков
        let points = question1 + question2 + question3 + question4 + question5

        //Выводим полльзователю информацию о его выполнении теста
        alert("Thanks for the game "+ isName + " " + isLastName + "(" + isFullYears + "). You "+ points +" points.")

        //выходим из цикла
        break outer;
    } else if(start == NO){
        alert("Game over!")

        //выходим из цикла
        break outer;
    } else {
        /**Выводим информацию, что принимаются только 2 значения.
         *  Дорбавляем 1 к счетчику i. И если i не больше 10 переходим снова на начало цикла*/
        alert("Only \"yes\" or \"no\" answers are accepted.")
        i++
    }
}