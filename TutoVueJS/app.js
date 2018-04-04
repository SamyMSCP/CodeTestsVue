new Vue({
    el: '#vue-app',
    data: {
        name: '',
        age: '',
        age2: 20,
        a: 0,
        b: 0,
        x: 0,
        y: 0,
        available: false,
        nearby: false

    },
    methods:{
        add: function (nb) {
            this.age +=nb;
        },

        less: function (nb) {
            this.age-=nb;
        },

        updateXY: function (event) {
            this.x=event.offsetX;
            this.y=event.offsetY;
        },

        click: function () {
            alert('Veux-tu vraiment aller sur ce site ?');

        }





    },
    computed:{
        compClasses: function(){
            return{
                available:this.available,
                nearby:this.nearby
            }
        },
        addToA: function(){
            return this.a+this.age2;
        },

        addToB: function(){
            return this.b+this.age2;
        }
    }

});
