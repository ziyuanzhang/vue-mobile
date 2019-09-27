<!--  -->
<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li
          v-for="(item,index) of goods"
          :key="index"
          class="menu"
          :class="{'current':currentIndex === index}"
          @click="selectMenu(index)"
          ref="liLeft"
        >
          <!--  -->
          <span class="text border-1px">{{item.sortDescript}}</span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodsWrapper">
      <ul>
        <!-- ...hook表示仅用于js操作选择，无表达效果。 -->
        <li v-for="(item,index) of goods" class="food-list food-list-hook" :key="index">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li v-for="(food,index) of item.pluAllList" :key="index" class="food-item border-1px">
              <div class="icon">
                <img width="57px" height="57px" :src="food.icon">
              </div>
              <div class="content">
                <h2 class="name">{{food.pluDescript}}</h2>
                <p v-show="food.description" class="description">{{food.description}}</p>
                <div class="data">
                  <span class="count">月售{{food.sellCount}}份</span>
                  <span class="rating">好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="new-price">￥{{food.price}}</span>
                  <span v-show="food.oldPrice" class="old-price">￥{{food.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
import BScroll from "better-scroll";
import data from "./data2.js";

export default {
  data() {
    return {
      goods: [], // 获取data.json中的goods数据，json里面是数组形式。
      listHeight: [], // 储存每一个food分类下的Y轴高度坐标值。
      scrollY: 0 // 右侧foods列表实时滚动的Y坐标值。
    };
  },
  created() {
    this.init();
  },

  computed: {
    currentIndex() {
      // 判断foods列表滚动的坐标Y处于哪个区间，返回对应的下标i。
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          // !height2用于判断i值最大的情况，此时height=undefined,取！值返回i。
          this._initLeftScroll(i);
          return i;
        }
      }
      return 0;
    }
  },

  methods: {
    init() {
      console.log(data);
      this.goods = data;
      this.$nextTick(() => {
        // vue是异步更新，必须加$nextTick,才能在nextTick里面更新。
        this._initScroll();
        this._calculateHeight(); // 计算food分类中每一个li层的坐标值并放进数组listHeight
      });
    },
    _calculateHeight() {
      // 计算food分类中每一个li层的坐标值并放进数组listHeight
      let foodList = this.$refs.foodsWrapper.getElementsByClassName(
        "food-list-hook"
      ); // 获取food-list-hook类的doom元素。
      let height = 0; // 临时变量，用于储存food分类的坐标值。
      this.listHeight.push(height);
      for (let i = 0; i < foodList.length; i++) {
        height = height + foodList[i].clientHeight; // 获得每一个food分类的高度数值，将其相加得到每一个food分类的坐标值。
        this.listHeight.push(height); // 将每一个food分类的坐标值推入数组。
      }
    },
    _initScroll() {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        // 初始化better-scroll
        click: true // better-scroll清除了原来的click，重新添加。
      });

      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
        probeType: 3 // probeType: 3表示实时传递滚动位置，相当于探针。用法见better-scroll，还可以为1,2，效果不一样。
      });

      this.foodsScroll.on("scroll", pos => {
        // 实时获得滚动轴的Y坐标。
        this.scrollY = Math.abs(Math.round(pos.y));
      });
    },
    selectMenu(index) {
      // 发生点击事件时，将被点击菜单栏的索引传递过来，与右侧food列表区域绑定，实现滚动。
      console.log(index);
      let foodList = this.$refs.foodsWrapper.getElementsByClassName(
        "food-list-hook"
      ); // 获取food列表区间数组集合。
      let el = foodList[index]; // 获取当前点击菜单栏对应的food列表区间，
      this.foodsScroll.scrollToElement(el, 300); // 调动接口函数，使得food列表实时滚动到el所在区间，300表示滚动时间。
    },
    _initLeftScroll(index) {
      console.log(index);
      let menu = this.$refs.liLeft;
      let el = menu[index];
      this.menuScroll.scrollToElement(el, 300);
    }
  }
};
</script>
<style lang="less" scoped>
.goods {
  display: flex;
  position: absolute;
  top: 174px;
  bottom: 56px;
  width: 100%;
  overflow: hidden;

  .menu-wrapper {
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;

    .menu {
      display: table;
      width: 56px;
      height: 54px;
      padding: 0 12px;
      line-height: 14px;

      &.current {
        position: relative;
        z-index: 10;
        top: -1px;
        background: #fff;
        font-weight: 700;
      }

      .text {
        display: table-cell;
        width: 56px;
        vertical-align: middle;
        font-size: 12px;

        .icon {
          margin-right: 2px;
        }
      }
    }
  }

  .foods-wrapper {
    flex: 1;

    .title {
      padding-left: 14px;
      font-size: 12px;
      height: 26px;
      line-height: 26px;
      border-left: 2px solid #d9dde1;
      font-size: 12px;
      font-weight: 700;
      color: rgb(147, 153, 159);
      background-color: #f3f5f7;
    }

    .food-item {
      display: flex;
      padding: 18px;

      .icon {
        flex: 0 0 57px;
        margin-right: 10px;
      }

      .content {
        flex: 1;
        font-size: 0;

        .name {
          margin: 2px 0 8px 0;
          height: 14px;
          line-height: 14px;
          color: rgb(7, 17, 27);
          font-size: 14px;
          font-weight: 700;
        }

        .description {
          display: inline-block;
          margin-bottom: 8px;
          line-height: 12px;
          color: rgb(147, 153, 159);
          font-size: 10px;
        }

        .data {
          height: 10px;
          line-height: 10px;
          font-size: 0;
          color: rgb(147, 153, 159);

          .count {
            font-size: 10px;
            margin-right: 12px;
          }

          .rating {
            font-size: 10px;
          }
        }

        .price {
          height: 24px;

          .new-price {
            margin-right: 8px;
            line-height: 24px;
            font-size: 14px;
            color: #f01414;
            font-weight: 700;
          }

          .old-price {
            line-height: 24px;
            font-size: 10px;
            color: rgb(147, 153, 159);
            font-weight: normal;
            text-decoration: line-through;
          }
        }
      }
    }
  }
}
.food-list {
  // height: 100px;
}
</style>
