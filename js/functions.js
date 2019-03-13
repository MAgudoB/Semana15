function initMapCanvas() {
    $("#map").attr("width", CANVAS_WIDTH);
    $("#map").attr("height", CANVAS_HEIGHT);
    MAP_CTX = document.getElementById("map").getContext("2d");
}

function initCollisionCanvas() {
    $("#collision").attr("width", CANVAS_WIDTH);
    $("#collision").attr("height", CANVAS_HEIGHT);
    COLLISION_CTX = document.getElementById("collision").getContext("2d");
}

function initInteractiveCanvas() {
    $("#interactive").attr("width", CANVAS_WIDTH);
    $("#interactive").attr("height", CANVAS_HEIGHT);
    INTERACTIVE_CTX = document.getElementById("interactive").getContext("2d");
}


$(document).keydown(function (event) {
    if (event.key == "w") { Player.acceleration = 1; }
    if (event.key == "s") { Player.aceleration = -1; }
    if (event.key == "a") { Player.rotation = -0.15; }
    if (event.key == "d") { Player.rotation = +0.15; }    

    if (event.key == "q") { Player.shootPortal(0) }
    if (event.key == "e") { Player.shootPortal(1) }
    // if (event.key == " ") { Player.shoot(); }
    // if (event.key == "1") { Player.selectWeapon(1); }
    // if (event.key == "2") { Player.selectWeapon(2); }
    // if (event.key == "3") { Player.selectWeapon(3); }
});
$(document).keyup(function (event) {
    if (event.key == "w") { Player.acceleration = 0 }
    if (event.key == "s") { Player.acceleration = 0 }
    if (event.key == "a") { Player.rotation = 0 }
    if (event.key == "d") { Player.rotation = 0 }
});


function drawEnemies() {
    for (var e in enemiesArr) {
        enemiesArr[e].movement();
        enemiesArr[e].draw();
    }
}

function drawImageRot(micontexto, img, x, y, width, height, rad) {
    //Set the origin to the center of the image
    micontexto.translate(x + width / 2, y + height / 2);
    //Rotate the canvas around the origin
    micontexto.rotate(rad);
    //draw the image    
    micontexto.drawImage(img, width / 2 * (-1), height / 2 * (-1), width, height);
    //reset the canvas  
    micontexto.rotate((rad) * (-1));
    micontexto.translate((x + width / 2) * (-1), (y + height / 2) * (-1));
}

function drawEnemyBullets() {
    for (var e in enemiesArr) {
        for (var b in enemiesArr[e].bullets) {
            enemiesArr[e].bullets[b].movement();
            var collided = enemiesArr[e].bullets[b].collide();
            if (collided) { enemiesArr[e].bullets.splice(b, 1); }
            else {
                if (enemiesArr[e].bullets[b].posX < player.posX &&
                    enemiesArr[e].bullets[b].posX + enemiesArr[e].bullets[b].sprite.width > player.posX &&
                    enemiesArr[e].bullets[b].posY > player.posY &&
                    enemiesArr[e].bullets[b].posY + enemiesArr[e].bullets[b].sprite.height < player.posY + player.sprite.height) {
                    player.actualLife--;
                    enemiesArr[e].bullets.splice(b, 1);
                }
            }
        }
    }
}

function drawPlayerBullets() {
    for (var b in player.bullets) {
        player.bullets[b].movement();
        var collided = player.bullets[b].collide();
        if (collided) {
            player.bullets.splice(b, 1);
            break;
        }
        for (var e in enemiesArr) {
            if (player.bullets[b].posX < enemiesArr[e].posX &&
                player.bullets[b].posX + player.bullets[b].sprite.width > enemiesArr[e].posX &&
                player.bullets[b].posY > enemiesArr[e].posY &&
                player.bullets[b].posY + player.bullets[b].sprite.height < enemiesArr[e].posY + enemiesArr[e].sprite.height) {
                player.bullets.splice(b, 1);
                enemiesArr.splice(e, 1);
                break;
            }
        }
    }
}

function drawLife() {
    var missingLife = player.life - player.actualLife;
    for (var l = 0; l < player.actualLife; l++) {
        playableContext.drawImage(fullLifeSprite, 10 + (fullLifeSprite.width * l), 10);
    }
    for (var m = player.actualLife; m < player.life; m++) {
        playableContext.drawImage(blankLifeSprite, 10 + (blankLifeSprite.width * m), 10);
    }
}

function drawAmmo() {
    //this.ammoBag.set(initialWeapon, initialAmmo);
    player.ammoBag.forEach(logMapElements);
}

function logMapElements(value, key, map) {
    //console.log(value);
    for (var i = 0; i < value; i++) {
        playableContext.drawImage(ammoMap.get(key), playableCanvasWidth - (ammoMap.get(key).width + (20 * i)), 20 * key);
    }
}

function drawAmmoInMap() {
    for (var a in arrAmmoInMap) {
        arrAmmoInMap[a].draw();
    }
}

function drawWeaponInMap() {
    for (var w in arrWeaponInMap) {
        arrWeaponInMap[w].draw();
    }
}

function drawScene() {
    player.draw();
    drawLife();
    drawAmmo();
    drawEnemies();
    drawEnemyBullets();
    drawPlayerBullets();
    drawAmmoInMap();
    drawWeaponInMap();
}

function endGame() {
    if (player.actualLife <= 0) {
        gamePaused = true;
        $("#gameOver").show();
    }
    var rightImage = colorBackgroundContext.getImageData(player.posX + player.sprite.width + 5, player.posY, 1, 1).data[1];
    if (rightImage >= 250) {
        gamePaused = true;
        $("#youWon").show();
    }
}

function reload() {
    location.reload();
}

function backToMenu() {
    window.location.href = "index.html";
}


//SEMANA 14 NUEVO

function checkPixel(mapData, pixelOne, pixelTwo, pixelThree) {
    var isSelected = false;
    if (mapData[0] == pixelOne && mapData[1] == pixelTwo && mapData[2] == pixelThree) {
        isSelected = true;
    }
    return isSelected;
}

function loadImages() {
    doorImageV = new Image();
    openDoorImageV = new Image();
    switchOffImage = new Image();
    switchOnImage = new Image();
    switchOffImage.src = "img/deactivatedButton.png";
    switchOnImage.src = "img/activeButton.png";
    doorImageV.src = "img/closedDoorV.png";
    openDoorImageV.src = "img/openDoorV.png";
}

function initButtonsAndDoors() {
    door = new Door(704, 257, doorImageV, openDoorImageV);
    switchButton = new Switch(170, 450, switchOffImage, switchOnImage, door);
}

$(document).ready(function () {
    $("#newGame").click(function () {
        //CARGAR nueva partida base de datos y mantener al jugador en espera

        //Pruebas
        $("#menu").fadeOut("slow");
        loop();
    });
});

function squareCollision(x1, y1, w1, h1, x2, y2, w2, h2) {
    return x1 < x2 + w2
        && x1 + w1 > x2
        && y1 < y2 + h2
        && y1 + h1 > y2;
}