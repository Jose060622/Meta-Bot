const ttthelp = (p) => {
  return `
『 \u{1F4AE} Tic Tac Toe \u{1F4AE}』 

[❗] SOLO PARA GRUPOS

『❗』 INICIAR
◪
├─ ❏ Para iniciar :
│     └「 ${p}ttt [ DIFICULDADE ] 」
└─ ❏ Solo una persona por vez

『❗』 DIFICULDADE
◪ 
├─ ❏ easy : totalmente aleatorio
│     (Tengo la mala suerte de perder en esto)
├─ ❏ normal : 66% 
│    de posibilidad de bloquear y ganar
├─ ❏ hard : 100% 
│    de posibilidad de bloquear y ganar 
└─ ❏ impossible : Solo dios puede ganar esto
         

『❗』TEMPORIZADOR
◪ 
├─ ❏ un nuevo partido solo se puede 
│    despues de un intervalo de    
│    4 minutos desde el inicio del 
│    partido anterior 
│
└─ ❏ La partida terminará 
         automaticamente despues de los 4 minutos

『❗』COMANDOS
◪ 
├─ ❏ Para ubicar use :
│     └「 ${p}coord [ COORDENADA ] 」
│
└─ ❏ Exemplo:
        └「   ${p}coord a1 
               ----------------------
               🌀1️⃣2️⃣3️⃣
               🅰️❌🔲🔲
               🅱️🔲🔲🔲
               ©️🔲🔲🔲  」

『❗』SU STATUS
◪ 
└─ ❏ Para ver su status digite:
        └「 ${p}tttme 」

『❗』RECOMPENSAS
◪ 
├─ ❏ EASY
│     ├ Victoria : +「 25 / 50 」
│     └ Derrota : -「 200 / 200 」
│
├─ ❏ NORMAL
│     ├ Victoria : +「 75 / 150 」
│     └ Derrota : -「 75 / 150 」
│
├─ ❏ HARD
│     ├ Victoria : +「 200 / 400 」
│     └ Derrota : -「 25 / 50 」
│
├─ ❏ IMPOSSIBLE
│     ├ Victoria : +「 1000 / 2000 」
│     └ Derrota : -「 0 / 0 」
│
├─ ❏ EMPATE
│     └「 0 / 0 」
│ 
└─ ❏ PARTIDA NO FINALIZADA
        └ -「 75 / 150 」
`
}

exports.ttthelp = ttthelp