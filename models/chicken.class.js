class Chicken extends MovableObject {
    y = 340;
    width = 60;
    height = 80;
    speed;
    IMAGES_WALKING = ['img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
                      'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
                      'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',];

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.x = 200 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.25;
        this.loadImageCache(this.IMAGES_WALKING);
        this.animateMovement(this.IMAGES_WALKING);
        this.moveLeft(this.speed);
    }
}