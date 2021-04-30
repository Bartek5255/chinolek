var express = require("express")
var app = express()
const PORT = process.env.PORT || 3000;
var gry = [];
var session = require('express-session')
var currentTime = 0
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { httpOnly: true },
    // rolling: true,
    idGry: 0,
    kolorgracza: "",
}))
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080")
    res.setHeader("Access-Control-Allow-Credentials", true)
    next()
})
app.use(express.static("chinol/dist"))

app.get("/loged", function (req, res) {
    var gracz = req.query
    console.log("/loged", gracz.name)

    var pustaGra = freeGame()
    var azjata = gamer(gracz.name, pustaGra)
    // console.log(gry)
    var idGry = gry.indexOf(pustaGra)

    req.session.idGry = idGry
    req.session.kolorgracza = azjata
    console.log(req.session);
    console.log(req.session.kolorgracza)
    console.log(req.session.idGry)
    req.session.save(function (e) {
        res.end();
    })
})

app.get("/gra", function (req, res) {

    var indexGry = req.session.idGry
    var daneGry = {
        dane: gry[indexGry],
        name: req.session.kolorgracza,
        czas: currentTime,

    }
    res.send(JSON.stringify(daneGry))
})
app.get("/rzut", function (req, res) {

    var roll = Math.floor((Math.random() * 6) + 1)
    console.log("tu rzuca kostka", roll)
    var indexGry = req.session.idGry
    var gracz = req.session.kolorgracza
    gry[indexGry][gracz].status = 4
    currentTime = 0
    kolejnaTura(gry[indexGry])
    res.send(JSON.stringify(roll))
})
app.post("/nextTura", function (req, res) {
    var indexGry = req.session.idGry
    console.log("idgry", indexGry)
    console.log("tablicagry", gry)
    kolejnaTura(gry[indexGry])
    res.end();
})
app.post("/gotowy", function (req, res) {

    var indexGry = req.session.idGry
    var gracz = req.session.kolorgracza
    if (gry[indexGry].gameStart) {
        res.end();
        return "nie tym razem gargamelu"
    }
    if (gry[indexGry][gracz].status == 1) {
        gry[indexGry][gracz].status = 2
    } else {
        gry[indexGry][gracz].status = 1
    }
    var gotowi = 0
    var aktywny = 0
    var kolory = ["czerwony", "zolty", "niebieski", "zielony"]
    for (var i = 0; i < kolory.length; i++) {
        var kolor = kolory[i]
        if (gry[indexGry][kolor].status != -1) {
            aktywny += 1
        }
        if (gry[indexGry][kolor].status == 2) {
            gotowi += 1
        }
    }
    if (aktywny == gotowi && aktywny > 1) {
        gameStart(gry[indexGry])
    }
    res.end();
})
function graGracza() {
    var cing = {
        wolnekolory: ["czerwony", "zolty", "niebieski", "zielony"],
        czerwony: {
            name: "",
            status: -1,

        },
        niebieski: {
            name: "",
            status: -1,

        },
        zielony: {
            name: "",
            status: -1,

        },
        zolty: {
            name: "",
            status: -1,

        },
        gameStart: false
    }
    gry.push(cing)
    return cing
}
function gamer(nazwa, gra) {

    var losowyid = Math.floor(Math.random() * gra.wolnekolory.length)
    var losowykolor = gra.wolnekolory[losowyid]
    gra.wolnekolory.splice(losowyid, 1)
    gra[losowykolor].name = nazwa
    gra[losowykolor].status = 1
    if (gra.wolnekolory.length == 0) {
        gameStart(gra)
    }
    return losowykolor

}
function freeGame() {
    if (gry.length == 0) {
        console.log("placki")
        return graGracza()
    }
    if (gry[gry.length - 1].gameStart == false) {
        return gry[gry.length - 1]
    } else {
        return graGracza()
    }
}
function gameStart(gra) {

    gra.gameStart = true
    var kolory = ["czerwony", "zolty", "niebieski", "zielony"]
    var dostepniGracze = []

    for (var j = 0; j <= kolory.length - 1; j++) {
        if (gra[kolory[j]].status >= 1) {
            dostepniGracze.push(kolory[j])
        }
    }
    for (var x = 0; x <= dostepniGracze.length - 1; x++) {
        gra[(dostepniGracze[x])].status = 2
    }
    var losowyIdCol = Math.floor(Math.random() * dostepniGracze.length)
    gra.aktywnygraczID = losowyIdCol
    gra[(dostepniGracze[losowyIdCol])].status = 3
    currentTime = 10

}

function kolejnaTura(gra) {
    console.log("gra", gra)
    if (currentTime > 0) {
        return false
    } else {
        console.log("zmieniam ture");

        var kolory = ["czerwony", "zolty", "niebieski", "zielony"]
        var dostepniGracze = []
        for (var j = 0; j <= kolory.length - 1; j++) {
            console.log("petla zium");

            if (gra[kolory[j]].status > 1) {
                dostepniGracze.push(kolory[j])
            }
        }
        console.log("dostepniGracze", dostepniGracze)
        var i = gra.aktywnygraczID
        if (i == 0) {
            gra[dostepniGracze[dostepniGracze.length - 1]].status = 3
        } else {
            gra[dostepniGracze[i - 1]].status = 3
        }
        gra[dostepniGracze[i]].status = 2
        currentTime = 10
        gra.aktywnygraczID--
        if (gra.aktywnygraczID < 0) {
            gra.aktywnygraczID = dostepniGracze.length - 1
        }
    }
}
setInterval(() => {
    currentTime = currentTime - 1
    console.log("zmiana czasu");

}, 1000)
app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})