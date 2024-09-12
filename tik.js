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
    let player1 = players('player1','x')
    let player2 = players('player2','o')
    let tur =player1.mark
    let namm=player1.name
    function turn(){
        if(tur==player2.mark){
            tur=player1.mark
            namm=player1.name
        } 
        else{
            tur=player2.mark
            namm=player2.name
        }
    }
    function winner(){
        return namm
    }
    function currenturn(){
        return tur
    }
    function check(){
    const chances=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    let board = gameboard.getboard()
        for(let chan of chances){
           const [a,b,c]=chan
           if((board[a]==board[b] && board[b]==board[c])&& board[a]!==''){
            return 'win'
           }
        }
        if(!board.includes('')){   
           return 'it a ties'
        }
    }
    return {check,turn,currenturn,winner}
})();

const cell=Array.from (document.getElementsByClassName('cell'))
let res=document.getElementById('res')
cell.forEach(element => {
    element.addEventListener('click',()=>{

        if(((gameboard.getboard()[element.id])=='') && gameplay.check()==undefined){
        element.textContent=gameplay.currenturn()
        gameboard.update(element.id,gameplay.currenturn())
        gameplay.turn()
        console.log(gameplay.check())
        if(gameplay.check()=='win'){
            gameplay.turn()
            res.textContent=gameplay.winner()+"  "+gameplay.check()
        }
        else if(gameplay.check()=='it a ties'){
            res.textContent='it a tie'
        }
        }
    }) 
});

let resset = document.querySelector('button')
resset.addEventListener('click',()=>{
    gameboard.reset()
    res.textContent=' '
    cell.forEach(element => {
        element.textContent=''
        
    });
})