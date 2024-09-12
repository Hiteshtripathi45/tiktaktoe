const gameboard =(function(){
    let board = ['','','','','','','','','']

    function getboard(){
        return board
    }

    function update(index,mark){
        if(board[index]==''){
            board[index]=mark
        }
    }
    function reset(){
        board = ['','','','','','','','','']
    }
    return { getboard,update,reset };
})();

function players(name,mark){
    return{name ,mark}
}

gameplay = (function(){
    let player1 = players('hitesh','x')
    let player2 = players('anuj','o')
    let tur =player1.mark
    function turn(){
        if(tur==player2.mark){
            tur=player1.mark
        } 
        else{
            tur=player2.mark
        }
    }
    function currenturn(){
        return tur
    }
    function check(){
    const chances=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    let board = gameboard.getboard()
        for(let chan of chances){
           const [a,b,c]=chan
           if(board[a]==board[b] && board[b]==board[c]){
            return 'win'
           }

        }
    }
    return {check,turn,currenturn}
})();

const cell=Array.from (document.getElementsByClassName('cell'))
cell.forEach(element => {
    element.addEventListener('click',()=>{

        if((gameboard.getboard()[element.id])==''){
        element.textContent=gameplay.currenturn()
        gameboard.update(element.id,gameplay.currenturn())
        gameplay.turn()
        }
        
    }) 
});