let car = {
    name : "bmw",
    ph : 500,
    start : function(){
        console.log("engine is started")
    },
    stop : function(){
        console.log("engine is stoped")
    }
}

console.log(car.name); //프로퍼티(데이터 조회) . 점으로 선택
console.log(car.ph); //프로퍼티(데이터 조회) . 점으로 선택
car.start();//기능의 실행