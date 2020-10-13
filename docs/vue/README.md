# 在Markdown中使用Vue

### 使用组件

<Button />

### 直接访问网站以及页面的数据

{{ JSON.stringify($page) }}

### 在标题上使用组件 <Badge text="默认主题" />

这个Badge组件是VuePress内置的，[更多内置组件](https://vuepress.vuejs.org/zh/guide/using-vue.html#%E5%86%85%E7%BD%AE%E7%9A%84%E7%BB%84%E4%BB%B6)

### 在Markdown中使用样式

<button class="text-center btn btn-primary">Github</button>

### 全局计算属性

#### $site

{{ JSON.stringify($site) }}

#### $page

{{ JSON.stringify($page) }}

#### $frontmatter

{{ JSON.stringify($frontmatter) }}

#### $lang

{{ JSON.stringify($lang) }}

#### $localePath

{{ JSON.stringify($localePath) }}

#### $title

{{ JSON.stringify($title) }}

#### $description

{{ JSON.stringify($description) }}

#### $themeConfig

{{ JSON.stringify($themeConfig) }}


<style lang="stylus">
  .text-center
    text-align: center !important
  .btn
    position: relative;
    display: inline-block
    padding: 5px 16px
    font-size: 14px
    font-weight: 500
    line-height: 20px
    white-space: nowrap
    vertical-align: middle
    cursor: pointer
    user-select: none
    border: 1px solid
    border-radius: 6px
    appearance: none
    color: #24292e
    background-color: #fafbfc
    border-color: rgba(27,31,35,.15)
    box-shadow: 0 1px 0 rgba(27,31,35,.04), inset 0 1px 0 hsla(0,0%,100%,.25)
    transition: background-color .2s cubic-bezier(.3,0,.5,1)
  .btn-primary
    color: #fff
    background-color: #2ea44f
    border-color: rgba(27,31,35,.15)
    box-shadow: 0 1px 0 rgba(27,31,35,.1), inset 0 1px 0 hsla(0,0%,100%,.03)
</style>
