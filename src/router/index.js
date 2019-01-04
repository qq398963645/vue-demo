import Vue from 'vue'
import Router from 'vue-router'
//路由懒加载
const Login=()=>import('@/page/Login')
const Home=()=>import('@/page/Home')

//数据可视化
const Map=()=>import('@/page/dataVisual/Map')
const ComEcharts=()=>import('@/page/dataVisual/ComEcharts')
const SpeEcharts=()=>import('@/page/dataVisual/SpeEcharts')

//表格分类
const ComTable=()=>import('@/page/tableClassify/ComTable')
const SpeTable=()=>import('@/page/tableClassify/SpeTable')
const MergeTable=()=>import('@/page/tableClassify/MergeTable')
const Drag=()=>import('@/page/tableClassify/Drag')

//富文本
const TextEditor=()=>import('@/page/richText/TextEditor')

//文件和图片上传
const FileCloud=()=>import('@/page/fileImg/FileCloud')
const UploadFile=()=>import('@/page/fileImg/UploadFile')
const UploadImg=()=>import('@/page/fileImg/UploadImg')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[
        {path:'/map',name:'map',component:Map},
        {path:'/comEcharts',name:'comEcharts',component:ComEcharts},
        {path:'/speEcharts',name:'speEcharts',component:SpeEcharts},
        {path:'/comTable',name:'comTable',component:ComTable},
        {path:'/speTable',name:'speTable',component:SpeTable},
        {path:'/mergeTable',name:'mergeTable',component:MergeTable},
        {path:'/textEditor',name:'textEditor',component:TextEditor},
        {path:'/drag',name:'drag',component:Drag},
        {path:'/fileCloud',name:'fileCloud',component:FileCloud},
        {path:'/uploadFile',name:'uploadFile',component:UploadFile},
        {path:'/uploadImg',name:'uploadImg',component:UploadImg},
      ]
    },
    {
      path:'/login',name:'login',component:Login
    },
  ]
})
