<!--主界面Layout-->
<template>
  <div class="layout app-container">
    <navbar />
    <div class="content">
      <!--百度地图-->
      <baidu-map :center="center" :zoom="zoom" :style="select" :scroll-wheel-zoom="true" @ready="map_handler" />
      <side-menu/>
      <sidebar v-if="sidebarShow"/>
      <div class="app-main" :class="{'has-side': sidebarShow}">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import SideMenu from './components/SideMenu'
import Sidebar from './components/Sidebar/index'
import { mapGetters } from 'vuex'
export default {
  name: 'Index',
  components: {
    Navbar,
    SideMenu,
    Sidebar
  },
  data() {
    return {
      BMap: '',
      map: '',
      WBMap: '',
      Wmap: '',
      select: { width: '100%', height: '100%'},
      center: { lng: 112.547296, lat: 32.971788 },
      zoom: 12
    }
  },
  computed: {
    ...mapGetters([ 'sideMenuList' ]),

    sidebarShow() {
      return this.sideMenuList.length > 1
    }
  },
  mounted() {
  },
  methods: {
    map_handler({ BMap, map }) {
      let _this = this
      this.WBMap = BMap
      this.Wmap = map
      this.hand()
    },

    hand() {
      let BMap = this.WBMap
      let map = this.Wmap
      // this.find().then(() => {
      //   map.addControl(new BMap.MapTypeControl({
      //     mapTypes: [
      //       BMAP_NORMAL_MAP,
      //       BMAP_HYBRID_MAP
      //     ] }))
      //   var opts = {
      //     width: 250, // 信息窗口宽度
      //     height: 80, // 信息窗口高度
      //     title: '', // 信息窗口标题
      //     enableMessage: true// 设置允许信息窗发送短息
      //   }
      //   for (var i = 0; i < this.packings.length; i++) {
      //     if (this.packings[i].payStatus) {
      //       var myIcon = new BMap.Icon('http://resource.parking.dlkji.com/alreadypaid.png', new BMap.Size(100, 50))
      //     } else {
      //       var myIcon = new BMap.Icon('http://resource.parking.dlkji.com/nonpayment.png', new BMap.Size(100, 50))
      //     }
      //
      //     var marker = new BMap.Marker(new BMap.Point(this.packings[i].point.lng, this.packings[i].point.lat), { icon: myIcon }) // 创建标注
      //     var content = this.packings[i].tooltip
      //     map.addOverlay(marker)// 将标注添加到地图中
      //     addClickHandler(content, marker)
      //   }
      //   function addClickHandler(content, marker) {
      //     marker.addEventListener('click', function(e) {
      //       openInfo(content, e)
      //     }
      //     )
      //   }
      //   function openInfo(content, e) {
      //     var p = e.target
      //     var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat)
      //     var infoWindow = new BMap.InfoWindow(content, opts) // 创建信息窗口对象
      //     map.openInfoWindow(infoWindow, point) // 开启信息窗口
      //   }
      // })
    }
  }
}
</script>

<style scoped lang="scss">
  .layout {
    position: relative;
    .content {
      position: relative;
      top: 60px;
      height: calc(100% - 60px);
      .app-main {
        width: 1px;
        position: absolute;
        left: 0;
        top: 60px;
        right: 0;
        bottom: 0;
      }
      .has-side {
        left: 150px;
      }
    }
  }
</style>
