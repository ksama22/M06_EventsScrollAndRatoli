class Player {
    constructor(id, mail, password, nick, character, points) {
        this.id = id;
        this.mail = mail;
        this.password = password;
        this.nick = nick;
        this.points = points;
        this.character = character
    }

}

class Character {
    constructor(id, name, attack, speed, hp) {
        this.id = id;
        this.name = name;
        this.speed = speed;
        this.attack = attack;
        this.hp = hp;
        this.originalhp = hp;
    }
    takeDamage(enemy) {
        //Treu la vida segons l'atac de l'enemic
        this.hp -= enemy.attack;
        if (this.hp <= 0) {
            //Si el numero es negatiu el fica a 0
            this.hp = 0;
            //True si s'aplica
            return true
        }
        return false;
    }

    applyCure(max, min) {
        //Si la vida es maxima no l'aplicara
        if (this.originalhp === this.hp) return false;
        //Aplica mes salut random
        this.hp += Math.floor(Math.random() * (max - min + 1) + min);
        //Si la vida total passa la original, la vidaTotal sera la original
        if (this.hp < this.originalhp) this.hp = this.originalhp
        //Retorna com si l'ha aplicat
        return true

    }
}

class Score {
    constructor(name, points, date) {
        this.name = name;
        this.points = points;
        this.date = date;
    }
    applyNewScore(npoints) {
        //Si s'actualitza la puntuacio la canviara
        if (this.points <= npoints) {
            this.points = npoints;
            return true;
        }
        //Si no hi han canvis retorna false
        return false;
    }
}

class Enemy {
    constructor(id, sprite, name, attack, speed, hp, pts) {
        this.id = id;
        this.sprite = sprite;
        this.name = name;
        this.attack = attack;
        this.speed = speed;
        this.hp = hp;
        this.pts = pts;
    }

    takeDamage(character) {
        //Treu la vida segons l'atac del character
        this.hp -= character.attack;
        if (this.hp <= 0) {
            //Si el numero es negatiu el fica a 0
            this.hp = 0;
            //Retorna com si l'ha aplicat
            return true
        }
        return false;
    }
}

