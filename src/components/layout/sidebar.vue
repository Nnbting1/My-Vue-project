<template>
  <el-menu :router="true" :unique-opened="true" class="mymenu el-menu-vertical-demo">
    <!-- submenu：菜单栏中的一项 index: 它的标识（唯一）-->
    <el-submenu index="1">
      <!-- 这一项的图标&文字信息 -->
      <template slot="title">
        <i class="el-icon-user-solid"></i>
        <span>用户管理</span>
      </template>
      <!-- 最后一级子元素 -->
      <el-menu-item index="/users">
        <i class="el-icon-s-grid"></i>
        <span>用户列表</span>
      </el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <!-- 这一项的图标&文字信息 -->
      <template slot="title">
        <i class="el-icon-collection-tag"></i>
        <span>权限管理</span>
      </template>
      <!-- 最后一级子元素 -->
      <el-menu-item index="2-1">
        <i class="el-icon-s-grid"></i>
        <span>角色列表</span>
      </el-menu-item>
      <el-menu-item index="2-2">
        <i class="el-icon-s-grid"></i>
        <span>权限列表</span>
      </el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <!-- 这一项的图标&文字信息 -->
      <template slot="title">
        <i class="el-icon-shopping-bag-2"></i>
        <span>商品管理</span>
      </template>
      <!-- 最后一级子元素 -->
      <el-menu-item index="3-1">
        <i class="el-icon-s-grid"></i>
        <span>商品列表</span>
      </el-menu-item>
      <el-menu-item index="3-2">
        <i class="el-icon-s-grid"></i>
        <span>分类参数</span>
      </el-menu-item>
      <el-menu-item index="3-3">
        <i class="el-icon-s-grid"></i>
        <span>商品分类</span>
      </el-menu-item>
    </el-submenu>
    <el-submenu index="4">
      <!-- 这一项的图标&文字信息 -->
      <template slot="title">
        <i class="el-icon-sold-out"></i>
        <span>订单管理</span>
      </template>
      <!-- 最后一级子元素 -->
      <el-menu-item index="4-1">
        <i class="el-icon-s-grid"></i>
        <span>订单列表</span>
      </el-menu-item>
    </el-submenu>
    <el-submenu index="5">
      <!-- 这一项的图标&文字信息 -->
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>数据统计</span>
      </template>
      <!-- 最后一级子元素 -->
      <el-menu-item index="5-1">
        <i class="el-icon-s-grid"></i>
        <span>数据报表</span>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {}
</script>

<style>
</style>
