<template>
  <div class="game">
    <img :src="require(`@/assets/${game.image}`)" alt="" class="thumbnail">
    <div class="details">
        <h3 class="title">{{game.title}}</h3>
        <p class="distance">{{game.distance}}km</p>
        <div class="owner">
            <img :src="require(`@/assets/${game.ownerImage}`)" alt="" class="picture">
            <h4 class="name">{{game.owner}}</h4>
        </div>
        <div class="tags">
            <p class="tag" v-for="(tag, index) in game.tags" :key="index">{{tag}}</p>
            <p class="tag">see on map</p>   
        </div>
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
.game{
    width: 200px;
    text-align: left;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.5);
    transition: all .25s;
    cursor: pointer;
    @media only screen and (max-width:480px){
        width: 160px;        
    }
       
    &:hover{
        background-color: #fff;
        box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.2);
        .thumbnail{
            opacity: 1;
        }
    }
    .thumbnail{
        width: 200px;
        border-radius: 20px 20px 0 0;
        opacity: .85;
        transition: all .25s;
        @media only screen and (max-width:480px){
            width: 160px;        
        }
    }
    .details{
        padding: 20px 10px;
        .title{
        }
        .distance{
            font-size: 14px;
            margin-bottom: 5px;
        }
        .owner{
            display: flex;
            align-items: center;
            margin-bottom: 5px;
            .picture{
                width: 30px;
                height: 30px;
                border-radius: 50%;
                margin-right: 10px;
            }
            .name{}
        }
        .tags{
            display: flex;
            .tag{
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

}

</style>