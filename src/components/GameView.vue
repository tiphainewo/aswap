<template>
  <div class="wrapper">
    <img :src="require(`@/assets/${game.image}`)" alt="" class="thumbnail">
    <div class="details">
        <h3 class="title">{{game.title}}</h3>
        <div class="owner">
            <img :src="require(`@/assets/${game.ownerImage}`)" alt="" class="picture">
            <h4 class="name">{{game.owner}}</h4>
            <div class="stars">
                <img src="@/assets/ystar.png" alt="" class="y-star" v-for="i in Math.floor(game.rating)" :key="i+10">
                <img src="@/assets/bstar.png" alt="" class="b-star" v-for="i in  Math.floor(5-Math.floor(game.rating))" :key="i+20">
            </div>
        </div>
        <span class="distance">{{game.distance}}km</span> 
        <a href="#" class="goMap">See on the map</a>
        <div class="tags">
            <p class="tag">{{game.type}}</p>
            <p class="tag">{{game.minPlayers}}-{{game.maxPlayers}} joueurs</p>
            <p class="tag">{{game.age}} ans</p>
        </div>
        <button class="sendOwner">Envoyer une demande</button>
    </div>
  </div>
</template>

<script>
export default {
    props:['game'],
    data(){
        return{
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper{
    width: 100%;
    text-align: left;
    border-radius: 20px 20px 0 0;
    transition: all .25s;
    color: #fff;
    
    .thumbnail{
        width: 100%;
        height: 180px;
        border-radius: 20px 20px 0 0;
    }
    .details{
        padding: 20px 10px;
        .title{
            margin-bottom: 10px;
        }
        .distance{
            font-size: 14px;
            margin-bottom: 5px;
        }
        .goMap{
            text-decoration: none;
            margin-left: 10px;
            color: #fff;
        }
        .owner{
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            .picture{
                width: 30px;
                height: 30px;
                border-radius: 50%;
                margin-right: 10px;
            }
            .name{}
            .stars{
                display: flex;
                align-items: center;
                margin-left: 10px;
                img{
                    width: 10px;
                    margin-right: 2px;
                }
            }
        }
        .tags{
            display: flex;
            margin-top: 20px;
            .tag{
                width: max-content;
                height: min-content;
                border-radius: 15px;
                background-color: rgb(163, 163, 163);
                padding: 5px 10px;
                margin: 5px;
                @media only screen and (max-width:480px){
                    font-size: 12px;
                }
            }
        }
    }
    .sendOwner{
        padding: 5px 20px;
        font-size: 18px;
        border-radius: 10px;
        background-color: #EB6440;
        cursor: pointer;
        transition: all .25s;
        margin-left: 50%;
        transform: translateX(-50%);
        margin-top: 30px;

        &:active{
            transform: translateX(-50%) scale(.95);
        }
    }
}

</style>