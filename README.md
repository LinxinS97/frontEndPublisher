# 发布系统(前端)

这个项目是用来将前端的项目发布到对应的域名上（个人域名），项目也基本上是个人项目，用于展示或其他用途。这个项目中只包含了前端（用react编写），后端不在此进行展示。

### 项目结构

项目结构基本上分为两种，一种是h5专题，另一种是后台管理项目。

- h5专题项目

    专题一般用于一些活动，展示一些活动素材或者是个人根据兴趣写的页面。
    <br>
    h5专题一般发布在`special`目录下，目录结构如下：
    ```
    special_project
    --dist
    --node_modules
    --src
      --project_first
        --js
            --index.js
        --css
        --images
        --index.html
      --project_second
        --js
        --css
        --images
        --index.html
    --package.json
    --gulpfile.js
    --yarn.lock
    ```

- 后台管理系统

    后台管理系统一般用于课设、作业或者以后开发过程中遇到的需要长期开发和维护的大型项目，后台的项目我们推荐使用当前流行的MVVM框架`AngularJs`、`react`或者`vue`进行开发。
    一个后端的项目结构可能是这样：
    ```
    backend_project
    --dist
    --node_modules
    --src
      --js
        --index.js
      --css
      --images
      --index.html
    --package.json
    --gulpfile.js
    --yarn.lock
    ```
    这是一个标准的node项目结构，你可以使用你熟悉的任意前端自动化工具来进行前端开发。