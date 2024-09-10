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
    return {check}
})();