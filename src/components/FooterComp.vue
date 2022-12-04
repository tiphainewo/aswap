<template>
  <div class="wrapper">
    <div class="contents">
        <div class="content">
            <div class="heading" @click="showcol1=!showcol1">
                <h2>EN SAVOIR PLUS ?</h2>
                <img src="@/assets/minus.png" alt="" class="icon"  v-if="showcol1">
                <img src="@/assets/plus.png" alt="" class="icon" v-else>
            </div>
            <ul class="list" :class="showcol1?'':'hide'">
                <li class="item"><img src="@/assets/right-arrow.png" alt=""> <a href="">Nos contributeurs</a></li>
                <li class="item"><img src="@/assets/right-arrow.png" alt=""> <a href="">Nos soutiens</a></li>
                <li class="item"><img src="@/assets/right-arrow.png" alt=""> <a href="">Espace Presse</a></li>
                <li class="item"><img src="@/assets/right-arrow.png" alt=""> <a href="">Notre Blog</a></li>
            </ul>
        </div>
        <div class="content">
            <div class="heading" @click="showcol2=!showcol2">
                <h2>A VOTRE SERVICE</h2>
                <img src="@/assets/minus.png" alt="" class="icon" v-if="showcol2">
                <img src="@/assets/plus.png" alt="" class="icon" v-else>
            </div>
            <ul class="list" :class="showcol2?'':'hide'">
                <li class="item"><img src="@/assets/right-arrow.png" alt=""> <a href="">Demander mon retour et passer au forfait</a></li>
                <li class="item"><img src="@/assets/right-arrow.png" alt=""> <a href="">Échanger mes jeux</a></li>
                <li class="item"><img src="@/assets/right-arrow.png" alt=""> <a href="">Je donne mon avis</a></li>
                <li class="item"><img src="@/assets/right-arrow.png" alt=""> <a href="">FAQ</a></li>
            </ul>
        </div>
        <div class="content">
            <div class="heading" @click="showcol3=!showcol3">
                <h2>NOUS CONTACTER</h2>
                <img src="@/assets/minus.png" alt="" class="icon" v-if="showcol3">
                <img src="@/assets/plus.png" alt="" class="icon" v-else>
            </div>
            <ul class="list" :class="showcol3?'':'hide'">
                <li class="item"><img src="@/assets/right-arrow.png" alt=""> <a href="">contact@aswap.com</a></li>
            </ul>
        </div>



    </div>
    <div class="copyright">
        <div class="logo">
            <h2>ASWAP - 2022</h2>
        </div>

        <ul class="list">
            <li class="item"> <img src="@/assets/right-arrow.png" alt=""> <a href="">Mentions légales</a></li>
            <li class="item"> <img src="@/assets/right-arrow.png" alt=""> <a href="">Conditions générales de location</a></li>
            <li class="item"> <img src="@/assets/right-arrow.png" alt=""> <a href="">Politique de confidentialité</a></li>
        </ul>

        <div class="social-icons">
            <a href=""> <img src="@/assets/facebook.png" alt="" class="icon"> </a>
            <a href=""> <img src="@/assets/instagram.png" alt="" class="icon"> </a>
        </div>

    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            showcol1:false,
            showcol2:false,
            showcol3:false,
        }
    }

}
</script>

<style lang="scss" scoped>
.wrapper{
    margin-top: 40px;
    width: 100%;
    .contents{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(30%, max-content));
        justify-content: center;
        justify-items: center;
        grid-gap: 20px;
        padding: 30px 20px;
        background-color: #D94693;

        @media only screen and (max-width:620px){
            grid-template-columns: repeat(1,1fr);
            justify-items: flex-start;
        }
        .content{
            @media only screen and (max-width:620px){
                width: 100%;
                padding-bottom: 20px;
                border-bottom: 1px solid #fff ;
            }
        }
        .heading{
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 15px;
            @media only screen and (max-width:620px){
                width: 100%;
            }
            h2{
                font-size: 15px;
            }
            .icon{
                width: 20px;
                display: none;
                @media only screen and (max-width:620px){
                    display: inline-block;
                }

            }
        }
        .list{
            list-style: none;
            font-size: 13px;
            a{
                text-decoration: none;
                color: rgb(236, 236, 236);
                text-align: left;
                &:hover{
                    color: #fff;
                }
            }
            .item{
                margin-bottom: 10px;
                display: flex;
                align-content: center;
                justify-content: flex-start;
                img{
                    height: 15px;
                    margin-right: 10px;
                }
            }
        }
        .hide{
            @media only screen and (max-width:620px){
                display: none;
            }
        }
    }
    .copyright{
        background-color: #50398E;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #fff;
        padding: 30px 20px;

        @media only screen and (max-width:968px){
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
        }

        .logo{
            margin-bottom: 15px;
        }
        .list{
            list-style: none;
            display: flex;
            align-items: center;
            @media only screen and (max-width:968px){
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                margin: 20px 0;
            }

            .item{
                display: flex;
                align-items: center;
                margin-right: 15px;
                @media only screen and (max-width:968px){
                    margin-bottom: 10px;
                    font-size: 13px;
                }
                img{
                    width: 15px;
                    margin-right: 10px;
                }
                a{
                    color: #fff;
                    text-decoration: none;
                    text-align: left;
                }
            }
        }


        .social-icons{
            display: flex;

            .icon{
                width: 30px;
                margin: 5px;
                @media only screen and (max-width:968px){
                    width: 20px;
                }
            }
        }
    }
}

</style>    