<template>
    <div class="wrapper">
        <nav class="nav">
            <h2 class="logo">ASWAP</h2>
            <div class="login">
                <p>Se Connecter</p>
                <router-link to="/user">
                    <img src="@/assets/contact.png" alt="" class="userImage">
                </router-link>
            </div>
        </nav>
    </div>

</template>

<script>

export default {
   
}
</script>

<style lang="scss" scoped>
.nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10px;
    background-color: #EB6440;
    border-bottom: 1px solid #D6E4E5;
    .logo{
        color: #fff;
        @media only screen and (max-width:520px){
            font-size: 20px;
        }
    }
    .login{
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        font-weight: 600;
        color: #fff;
        .userImage{
            width: 40px;
            height: 40px;
            padding: 5px;
            border-radius: 50%;
            border: 1px solid #fff;
            margin-left: 5px;
        }

    }
}

</style>