<template>
    <div class="column">
        <div class="img">
            <img :src="item.thumb_url|imgSrc" alt="">
        </div>
        <div class="info">
            <p class="title ellipsis">{{item.title}}</p>
            <p class="detail">{{item.county.name}} | 朝{{item.towards_str}} | {{item.room}}室{{item.hall}}厅</p>
            <p class="price"><span class="sum">{{item.sum_price|paseInt}}万</span> <span class="avg">{{item.price|parseInt}} 元/㎡</span></p>
            <p class="tag">
                <span v-for="t in item.tag" :style="{background:t.background_color,color:t.font_color}">{{t.tag_name}}</span>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HouseColumn",
        props:['item']
    }
</script>

<style scoped lang="scss">
    .column{
        width:100%;
        height: px2rem(176);
        padding: px2rem(26) 0;
        border-bottom: px2rem(1) solid #ccc;
        display: flex;
        justify-content: space-between;
        /*background: red;*/
        .img{
            width: px2rem(116*2);
            height: px2rem(87*2);
            img{
                width:100%;
                height:100%;
            }
        }
        .info{
            width: px2rem(221*2);
            height: px2rem(90*2);
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            text-align: left;
            .title{
                font-size: px2rem(15*2);
                color:#333;
                font-weight: bold;
            };
            .detail{
                font-size: px2rem(13*2);
                padding:px2rem(1);
                color:#666;
            };
            .price{

                .sum{
                    color:#f60;
                    font-size: px2rem(30);
                    font-weight: bold;
                }
                .avg{
                    padding-left: px2rem(10);
                    color:#666;
                    font-size: px2rem(13*2)
                }
            }
            .tag{
                height: px2rem(25*2);
                span{
                    font-size: px2rem(14*2);
                    padding: px2rem(5) px2rem(10);
                    margin-right: px2rem(10)
                }
            }
        }
    }
</style>