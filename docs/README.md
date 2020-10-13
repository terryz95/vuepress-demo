# Hello VuePress

点链接看看路由
[Gallery](/gallery/)
[About](/about/)
[Vue](/vue/)

### 目录

[[toc]]

### Vue v-for 语法 + 引入npm依赖文件 示例

<p>
  <img v-for="n in 20" :key="n" src="~remixicon/icons/Logos/apple-fill.svg" width="24" height="24" />
</p>

### Table

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

### Emoji
:tada: :100: :clown_face: :space_invader:

### Custom Container

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger 危险警告
这是一个危险警告，展示了自定义容器的标题
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

### 高亮代码块

```js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

### 导入代码块

<<< @/docs/.vuepress/snippets/helloworld.js

<<< @/docs/.vuepress/snippets/fragments.js#snippet{2}


