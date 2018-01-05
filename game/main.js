enchant();

window.onload = function(){
    //解像度320x320のゲーム画面作成
    var x = 320;
    var y = 320;
    var core = new Game(x, y);
    //ゲーム開始時にロードするファイルを指定する
    core.preload("chara1.png");
    core.fps = 30;

    core.onload = function(){
        //スプライトを作る
        var bear_x = 32;
        var bear_y = 32;
        var bear = new Sprite(bear_x, bear_y);
        //画像ファイルを指定
        bear.image  = core.assets["chara1.png"];
        bear.x = 0;
        bear.y = 0;
        bear.frame = 0;

        bear.addEventListener("enterframe", function() {
            //動作が動いてみえる
            //this.frame = this.age % 3;
            this.frame = 0;

            var charax = x - bear_x;
            var charay = y - bear_y;

            //十字キーでx, y座標操作
            if (core.input.up) {
                this.y -= 2;
            }else if (core.input.down) {
                this.y += 2;
            }else if (core.input.right) {
                this.x += 2;
                this.frame = this.age % 3;
            }else if (core.input.left) {
                this.x -= 2;
                this.frame = this.age % 3;
            }
            
            //解像度の外に移動したら逆サイドからキャラが出てくる
            if(this.x > x){
                this.x = -(bear_x);
            }else if(this.x <= -(bear_x)){
                this.x = x;
            }
            
            if(this.y > y){
                this.y = -(bear_y);
            }else if(this.y <= -(bear_y)){
                this.y =y;
            }
            
            /*
            //解像度の側面をぐるぐる回るだけ
            var charax = x - bear_x;
            var charay = y - bear_y;
            if(this.x < charax && this.y === 0){
                this.x += 2;
            }else if(this.x === charax && this.y < charay) {
                this.y += 2;
            }else if(this.x > 0 && this.y === charay){
                this.x -= 2;
            }else if(this.x === 0 && this.y >= 0){
                this.y -= 2;
            }
            */

        });


        //画面に画像を表示する
        core.rootScene.addChild(bear);
    };

    //ゲーム開始
    core.start();
};