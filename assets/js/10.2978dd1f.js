(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{363:function(t,a,s){"use strict";s.r(a);var v=s(45),e=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("img",{attrs:{src:"https://gitee.com/ye-xingchen/tuchuang/raw/master/img/image-20200417223245728.png",alt:"image-2020041723245728"}})]),t._v(" "),s("h1",{attrs:{id:"git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" Git")]),t._v(" "),s("h2",{attrs:{id:"版本管理简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#版本管理简介"}},[t._v("#")]),t._v(" 版本管理简介")]),t._v(" "),s("h3",{attrs:{id:"项目的版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目的版本"}},[t._v("#")]),t._v(" 项目的版本")]),t._v(" "),s("ul",[s("li",[t._v("版本和我们平常说的软件、游戏等的版本是一个意思，比如 1.2.8 版本、比如 第1版，比如webstorm2020。")]),t._v(" "),s("li",[t._v("所以，版本指的就是代码编写进度当中的一些节点。")]),t._v(" "),s("li",[t._v("比如一个项目：\n"),s("ul",[s("li",[t._v("搭建好目录结构 ---  第1版本")]),t._v(" "),s("li",[t._v("完成登录页面布局 --- 第2版本")]),t._v(" "),s("li",[t._v("完成登录功能 --- 第3版本")]),t._v(" "),s("li",[t._v("完成分类页面布局 --- 第4版本")]),t._v(" "),s("li",[t._v("...........")])])])]),t._v(" "),s("h3",{attrs:{id:"管理版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#管理版本"}},[t._v("#")]),t._v(" 管理版本")]),t._v(" "),s("ul",[s("li",[t._v("【记录】记录代码开发的过程，每一次代码的变化。")]),t._v(" "),s("li",[t._v("【回退】将代码回退到之前的版本")]),t._v(" "),s("li",[t._v("【查看】查看所有的版本")]),t._v(" "),s("li",[t._v("【协作】配合远程仓库，实现多人协作")])]),t._v(" "),s("h3",{attrs:{id:"使用版本管理软件的必要性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用版本管理软件的必要性"}},[t._v("#")]),t._v(" 使用版本管理软件的必要性")]),t._v(" "),s("p",[t._v("工作场景一：项目的需求不断的变化，改来改去，也可能需要改回原来的代码。")]),t._v(" "),s("ul",[s("li",[t._v("使用版本管理软件\n"),s("ul",[s("li",[t._v("可以对代码每次的改动做记录，记录一次，叫做形成一个版本。")]),t._v(" "),s("li",[t._v("可以轻松的将代码回退到任意一个版本。（可以使用之前版本中的代码、文件）")]),t._v(" "),s("li",[t._v("电脑关机了，版本也不会丢失。")])])])]),t._v(" "),s("p",[t._v("工作场景二：多个合作开发，代码不好合并。")]),t._v(" "),s("ul",[s("li",[t._v("使用版本管理软件 + 远程仓库，可以解决多人合作的问题。")])]),t._v(" "),s("h3",{attrs:{id:"版本管理软件的作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#版本管理软件的作用"}},[t._v("#")]),t._v(" 版本管理软件的作用")]),t._v(" "),s("ul",[s("li",[t._v("记录代码的版本，可以随时回退。")]),t._v(" "),s("li",[t._v("配合远程仓库，实现多人协作，可以很轻松的合并代码")])]),t._v(" "),s("h3",{attrs:{id:"版本管理软件分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#版本管理软件分类"}},[t._v("#")]),t._v(" 版本管理软件分类")]),t._v(" "),s("ul",[s("li",[t._v("集中式，典型代表 SVN")]),t._v(" "),s("li",[t._v("分布式，典型代表 "),s("code",[t._v("Git")]),t._v(" ---- 我们选择讲解Git。")])]),t._v(" "),s("h2",{attrs:{id:"git软件安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git软件安装"}},[t._v("#")]),t._v(" Git软件安装")]),t._v(" "),s("ul",[s("li",[t._v("双击，然后一直下一步安装即可。")]),t._v(" "),s("li",[s("strong",[t._v("不要安装到含有中文的路径中")]),t._v("。比如，不要安装到  “D:/软件/学习/Git”")]),t._v(" "),s("li",[t._v("安装完毕，绝对不可以剪切（移动）到其他文件夹。")]),t._v(" "),s("li",[t._v("比如安装到 "),s("code",[t._v("D:/aa/bb/cc")]),t._v(" 文件夹，千万不要"),s("strong",[t._v("重命名")]),t._v("路径中的任何一个文件夹")]),t._v(" "),s("li",[t._v("安装完毕，鼠标在任何文件夹空白位置右键，如果出现 "),s("code",[t._v("Git Bash Here")]),t._v("，则表示安装成功。(或者点击“Git Bash Here” --\x3e 输入 git --version  回车，如果看到版本号，则表示安装成功)")]),t._v(" "),s("li",[t._v("Mac用户，使用自带的终端。输入“git --version”，回车，如果看到版本号，则表示安装成功")])]),t._v(" "),s("blockquote",[s("p",[t._v("Mac用户需要额外配置一下：访达 -> 服务 -> 服务偏好设置 -> 勾选“新建位于文件夹位置的终端窗口”")])]),t._v(" "),s("h2",{attrs:{id:"告诉git-你是谁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#告诉git-你是谁"}},[t._v("#")]),t._v(" 告诉Git，你是谁？")]),t._v(" "),s("p",[t._v("Git软件在工作的时候，需要知道你是谁？所以需要设置一个用户名和邮箱。")]),t._v(" "),s("p",[t._v("这个用户名和邮箱，最好使用你的"),s("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("github"),s("OutboundLink")],1),t._v("账号或"),s("a",{attrs:{href:"https://gitee.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("码云"),s("OutboundLink")],1),t._v("账号（如果你有账号的话），当然随便填也可以。")]),t._v(" "),s("p",[t._v("具体做法：")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("任何")]),t._v("文件夹，空白处，右键 --\x3e Git Bash Here")]),t._v(" "),s("li",[s("strong",[t._v("依次")]),t._v("执行下面两行命令")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx"')]),t._v("\n\n")])])]),s("p",[t._v("配置之后，可以通过下面的命令来检查是否配置成功了")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看所有的全局配置项")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --list --global\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看单个的配置项，比如查看用户名")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config user.name\n")])])]),s("h2",{attrs:{id:"初体验"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初体验"}},[t._v("#")]),t._v(" 初体验")]),t._v(" "),s("h3",{attrs:{id:"使用git记录代码的每一次变更"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用git记录代码的每一次变更"}},[t._v("#")]),t._v(" 使用Git记录代码的每一次变更")]),t._v(" "),s("ul",[s("li",[t._v("创建一个项目文件夹，随便创建一个即可。")]),t._v(" "),s("li",[t._v("在项目文件夹里面的空白处，右键 --\x3e Git Bash Here，打开黑窗口。\n"),s("ul",[s("li",[t._v("在黑窗口中，输入 "),s("code",[t._v("git init")]),t._v(" 然后按回车，表示执行这条命令。")]),t._v(" "),s("li",[t._v("这一步是Git初始化。初始化之后，表示Git软件可以管理这个项目了")]),t._v(" "),s("li",[t._v("对于一个项目来说，初始化工作只需要做一次。")])])]),t._v(" "),s("li",[t._v("写代码测试\n"),s("ul",[s("li",[t._v("随便写点代码")]),t._v(" "),s("li",[t._v("执行命令 "),s("code",[t._v("git add .")])]),t._v(" "),s("li",[t._v("执行命令 "),s("code",[t._v("git commit -m '提交说明'")])]),t._v(" "),s("li",[t._v("执行完这两个命令，表示使用Git把当前代码及文件的改动记录起来了")])])]),t._v(" "),s("li",[t._v("重复这个过程，多使用Git记录几次")])]),t._v(" "),s("h3",{attrs:{id:"查看了所有的历史记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看了所有的历史记录"}},[t._v("#")]),t._v(" 查看了所有的历史记录")]),t._v(" "),s("p",[t._v("查看提交日志")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("git log")])]),t._v(" "),s("li",[s("code",[t._v("git log --oneline")])]),t._v(" "),s("li",[s("code",[t._v("git log --reflog")]),t._v("  或者 "),s("code",[t._v("git log --oneline --reflog")]),t._v("  查看所有的版本")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/ye-xingchen/tuchuang/raw/master/img/image-20200711115609455.png",alt:"image-2020071115609455"}})]),t._v(" "),s("h3",{attrs:{id:"体验在历史版本中穿梭"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#体验在历史版本中穿梭"}},[t._v("#")]),t._v(" 体验在历史版本中穿梭")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("git reset --hard 版本号")]),t._v("  --- 通过它，让代码整体，可以在历史版本中穿梭")])]),t._v(" "),s("blockquote",[s("p",[t._v("目前还有很多知识没有学习，所以，穿梭到历史之后，不要改代码，先体验一下穿梭的感觉。")])]),t._v(" "),s("h3",{attrs:{id:"穿梭到历史之后-如何查看所有的版本号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#穿梭到历史之后-如何查看所有的版本号"}},[t._v("#")]),t._v(" 穿梭到历史之后，如何查看所有的版本号")]),t._v(" "),s("p",[t._v("穿梭到历史版本之后，通过 "),s("code",[t._v("git log")]),t._v(" 查看不到之后的版本号。")]),t._v(" "),s("p",[t._v("需要加 "),s("code",[t._v("--reflog")]),t._v(" 选项，才能查看所有的版本号")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("git log --reflog")])]),t._v(" "),s("li",[s("code",[t._v("git log --reflog --oneline")])])]),t._v(" "),s("h2",{attrs:{id:"git初始化详解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git初始化详解"}},[t._v("#")]),t._v(" Git初始化详解")]),t._v(" "),s("p",[t._v("目的是学习，所以，随便创建一个项目文件夹，打开项目文件夹")]),t._v(" "),s("p",[s("strong",[s("code",[t._v("注意：一定要在项目文件夹")])]),t._v("，右键--\x3eGit Bash Here。")]),t._v(" "),s("blockquote",[s("p",[t._v("至于项目中有没有文件无所谓。")])]),t._v(" "),s("p",[t._v("执行下面的命令：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 初始化，表示使用Git管理我们的项目。这个命令只需要执行一次（注意空格）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n\n")])])]),s("ul",[s("li",[t._v("执行 "),s("code",[t._v("git init")]),t._v(" 命令之后，会在项目文件夹中生成一个隐藏的 "),s("code",[t._v(".git")]),t._v(" 文件夹")]),t._v(" "),s("li",[s("code",[t._v(".git")]),t._v(" 文件夹里面保存着当前项目文件的更改记录。所以这个文件夹不能删除")]),t._v(" "),s("li",[t._v("对于一个项目来说，"),s("code",[t._v("git init")]),t._v(" 只需要执行一次")]),t._v(" "),s("li",[t._v("切记，不要项目套项目。")])]),t._v(" "),s("h2",{attrs:{id:"查看提交日志详解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看提交日志详解"}},[t._v("#")]),t._v(" 查看提交日志详解")]),t._v(" "),s("p",[t._v("查看日志的命令：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log\n")])])]),s("p",[s("img",{attrs:{src:"https://gitee.com/ye-xingchen/tuchuang/raw/master/img/image-20201023143347036.png",alt:"image-2020102313347036"}})]),t._v(" "),s("p",[t._v("查看简略版的信息（前7位版本号 及 提交说明）：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --oneline\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --pretty"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("oneline\n")])])]),s("p",[t._v("如果回到历史版本，还想查看完整的历史记录，需要使用 --reflog 选项。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --reflog --oneline\n\n")])])]),s("p",[t._v("只查看最近的两次提交")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log -2\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log -2 --pretty"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("oneline\n\n")])])]),s("h2",{attrs:{id:"git工作时维护的几个区域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git工作时维护的几个区域"}},[t._v("#")]),t._v(" Git工作时维护的几个区域")]),t._v(" "),s("ul",[s("li",[t._v("工作区\n"),s("ul",[s("li",[t._v("工作区，指的是使用Git管理后的文件，这些文件显示在磁盘上，供我们使用或修改的区域。所以，粗略的说，项目文件夹就是工作区。")])])]),t._v(" "),s("li",[t._v("暂存区\n"),s("ul",[s("li",[t._v("执行 "),s("code",[t._v("git add .")]),t._v("之后，文件由工作区，添加到了暂存区。 暂存区保存了下次将提交的文件列表信息。")])])]),t._v(" "),s("li",[t._v("Git 仓库区、本地仓库\n"),s("ul",[s("li",[t._v("执行 "),s("code",[t._v("git commit -m '提交说明'")]),t._v(" 之后，代码会被提交到仓库区。仓库区是 Git 中最重要的部分，代码只有提交到仓库，才会形成一次历史记录，即才会形成一个版本。")])])]),t._v(" "),s("li",[t._v("远程仓库\n"),s("ul",[s("li",[t._v("Git服务器上的仓库，比如，码云或者github网站上创建的的仓库，叫做远程仓库。远程仓库用于存储代码和发布项目，多人协作也需要远程仓库。")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/ye-xingchen/tuchuang/raw/master/img/image-20210113104147694.png",alt:"image-20210113104147694"}})]),t._v(" "),s("h2",{attrs:{id:"添加提交命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加提交命令"}},[t._v("#")]),t._v(" 添加提交命令")]),t._v(" "),s("h3",{attrs:{id:"添加文件到暂存区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加文件到暂存区"}},[t._v("#")]),t._v(" 添加文件到暂存区")]),t._v(" "),s("blockquote",[s("p",[t._v("新文件，只有添加到暂存区，才叫做被Git管理。否则和Git没什么关系，即使文件在项目文件夹。")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加指定文件到暂存区")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" 文件名\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 以空格隔开可以一次 add 多个文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加指定目录到暂存区，包括子目录")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("dir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("dir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加当前目录的所有文件到暂存区，包括子目录")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n\n\n")])])]),s("blockquote",[s("p",[t._v("默认空文件夹，是不能添加，不能提交的")])]),t._v(" "),s("h3",{attrs:{id:"提交文件到仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提交文件到仓库"}},[t._v("#")]),t._v(" 提交文件到仓库")]),t._v(" "),s("blockquote",[s("p",[t._v("提交到仓库的文件，是暂存区中的文件。")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交暂存区到仓库区")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交暂存区的指定文件到仓库区")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". -m "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交工作区和暂存区自上次commit之后的变化，直接到仓库区。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新文件，从未被Git管理过，是不能直接提交到仓库区的")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -a -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"提交日志"')]),t._v("\n\n\n")])])]),s("p",[s("img",{attrs:{src:"https://gitee.com/ye-xingchen/tuchuang/raw/master/img/image-20200419100145919.png",alt:"image-2020041100145919"}})]),t._v(" "),s("h2",{attrs:{id:"撤销"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#撤销"}},[t._v("#")]),t._v(" 撤销")]),t._v(" "),s("blockquote",[s("p",[t._v("撤销，是把暂存区的代码撤销到工作区；或者把最后一次提交的代码撤销到暂存区和工作区")])]),t._v(" "),s("ul",[s("li",[t._v("暂存区 ---\x3e 工作区："),s("code",[t._v("git checkout 文件")])]),t._v(" "),s("li",[t._v("本地仓库 ---\x3e 暂存区："),s("code",[t._v("git reset 文件")])]),t._v(" "),s("li",[t._v("本地仓库 ---\x3e 暂存区/工作区："),s("code",[t._v("git reset --hard")])])]),t._v(" "),s("h2",{attrs:{id:"查看文件的状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看文件的状态"}},[t._v("#")]),t._v(" 查看文件的状态")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看文件的状态")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看简略版信息")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status -s\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status --short\n\n")])])]),s("ul",[s("li",[t._v("已提交（nothing to commit）\n"),s("ul",[s("li",[t._v("表示没有什么东西可以提交了；即，所有的内容都已经提交过了")]),t._v(" "),s("li",[t._v("有的文档也把这个状态叫做 "),s("strong",[t._v("未修改")]),t._v("，意思是自上次提交过后，代码还没有修改过")])])]),t._v(" "),s("li",[t._v("未跟踪（新增的文件）")]),t._v(" "),s("li",[t._v("已暂存（新增的文件，添加到暂存区之后的状态）")]),t._v(" "),s("li",[t._v("已修改（文件曾经被Git记录过了（无论是刚刚添加到暂存区，还是曾经被提交到仓库过），然后在工作区对他进行了修改）")])]),t._v(" "),s("p",[t._v("以"),s("strong",[t._v("精简模式")]),t._v("（git status -s）为例：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 未跟踪的结果 --- 新增文件，然后查看状态")]),t._v("\n?? xxx.html \n?? css/main.css\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 已暂存的结果 --- 新增文件，然后执行add命令")]),t._v("\nA xxx.html\nA css/main.css\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 已修改(并且已经暂存了) --- 新增文件，执行了add命令暂存了它，然后又修改了文件")]),t._v("\nAM xxx.html\nAM css/main.css\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 已修改（红色字体的M） --- 文件已经被提交到仓库了，然后又修改了它")]),t._v("\nM xxx.html\nM css/main.html\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 已修改（绿色字体的M） --- 文件已经被提交到了仓库，然后又修改了它，修改完毕又暂存了它")]),t._v("\nM xxx.html\nM css/main.html\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#####  如果查看到文件有上述三种状态，表示还有文件没有提交，需要提交这些文件 #####")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 已提交（未修改）")]),t._v("\nOn branch master\nnothing to commit "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\n")])])]),s("blockquote",[s("p",[t._v("初学者，只需要区分："),s("strong",[t._v("代码是否都被提交到仓库了")]),t._v("，即可。")])]),t._v(" "),s("h2",{attrs:{id:"分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分支"}},[t._v("#")]),t._v(" 分支")]),t._v(" "),s("p",[t._v("分支就是当前项目的一个副本（可以理解为把当前项目复制了一份，可以这样理解，但是要知道内部实现并非如此）。")]),t._v(" "),s("p",[t._v("初始化之后，默认是在master分支上进行操作的，master分支也叫做主分支。")]),t._v(" "),s("p",[t._v("实际开发中，正规的公司，都不允许直接在master分支上开发。需要创建分支，在分支上开发，最后将代码合并回master。")]),t._v(" "),s("h3",{attrs:{id:"分支常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分支常用命令"}},[t._v("#")]),t._v(" 分支常用命令")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看所有本地分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建新分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch 分支名\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 比如，创建一个叫做login的分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch login\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout 分支名\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 比如，切换到login分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout login\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 比如，切换到master分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout master\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除分支（删除时，必须先切换到其他分支）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -d 分支名\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -D 分支名  强制删除分支\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建并直接切换分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b 分支名\n\n")])])]),s("p",[t._v("体验：")]),t._v(" "),s("ul",[s("li",[t._v("创建并切换到dev分支上；在dev分支上，写点代码，提交一下。")]),t._v(" "),s("li",[t._v("切换分支，查看两个分支的不同。")])]),t._v(" "),s("blockquote",[s("p",[t._v("切换分支之前，必须把当前分支的代码全部提交到仓库。")])]),t._v(" "),s("h3",{attrs:{id:"快进合并-fast-forward"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快进合并-fast-forward"}},[t._v("#")]),t._v(" 快进合并（fast-forward）")]),t._v(" "),s("p",[t._v("特点：一个分支包含另一个分支的全部提交记录。")]),t._v(" "),s("p",[t._v("如果需要把dev分支的代码合并到master分支")]),t._v(" "),s("ul",[s("li",[t._v("切换到master")]),t._v(" "),s("li",[t._v("执行 "),s("code",[t._v("git merge add")]),t._v(" ，即可把add分支的代码合并到master")])]),t._v(" "),s("blockquote",[s("p",[t._v("合并之后，add和master分支的代码就回一样了。")])]),t._v(" "),s("h3",{attrs:{id:"三方合并-thirdparty-merge"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三方合并-thirdparty-merge"}},[t._v("#")]),t._v(" 三方合并（thirdparty merge）")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("两个分支，比如是master和dev，特点是都有新的提交")])]),t._v(" "),s("li",[s("p",[t._v("也就是说，一个分支"),s("strong",[t._v("不包括")]),t._v("另一个分支的全部提交记录")])]),t._v(" "),s("li",[s("p",[t._v("这种模式的合并，有可能会有冲突")])]),t._v(" "),s("li",[s("p",[t._v("合并方法，和前面一样")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("假设把dev的代码合并到master分支，切换到master "),s("code",[t._v("git checkout master")])])]),t._v(" "),s("li",[s("p",[t._v("执行 "),s("code",[t._v("git merge dev")]),t._v(" ，表示将dev分支的代码合并到当前（master）分支")])]),t._v(" "),s("li",[s("p",[t._v("然后就会出现如下两个画面中的一种")]),t._v(" "),s("ul",[s("li",[t._v("画面一：两个分支修改的代码不在同一个文件的同一行代码，出现下面的画面。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/ye-xingchen/tuchuang/raw/master/img/image-20200711164803953.png",alt:"image-2020071114803953"}})]),t._v(" "),s("ul",[s("li",[t._v("画面二：两个分支修改了同一个文件的同一行代码，出现下面的画面。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/ye-xingchen/tuchuang/raw/master/img/image-20200711170958994.png",alt:"image-2020071117098994"}})])])])])]),t._v(" "),s("p",[s("strong",[t._v("出现上述画面一")]),t._v("，表示已经合并完成了，但是需要提交一次；")]),t._v(" "),s("p",[t._v("出现的框是让我们输入提交说明；")]),t._v(" "),s("p",[t._v("需要执行下面的操作：")]),t._v(" "),s("ul",[s("li",[t._v("按 "),s("code",[t._v("i")]),t._v(" ，进入 “插入” 模式，就可以对画面中的文字进行修改了（直接输入也行）")]),t._v(" "),s("li",[t._v("按 “上下左右” 键，调整光标的位置，可以删除里面的内容，写自己的提交说明")]),t._v(" "),s("li",[t._v("上述画面中的 "),s("code",[t._v("# Please enter.....")]),t._v(" 表示注释，可以不用理会")]),t._v(" "),s("li",[t._v("按 "),s("code",[t._v("Esc")]),t._v(" 键，退出 “插入” 模式")]),t._v(" "),s("li",[t._v("直接输入 “"),s("code",[t._v(":wq")]),t._v("”，退出这个画面，从而完成合并。（一定是英文的冒号）")])]),t._v(" "),s("p",[s("strong",[t._v("出现上述画面二")]),t._v("，表示正在合并中，但是遇到冲突了；")]),t._v(" "),s("p",[t._v("需要在代码中解决掉冲突，然后保存代码；")]),t._v(" "),s("p",[t._v("最后，需要提交一次；")]),t._v(" "),s("ul",[s("li",[t._v("打开有冲突的文件")]),t._v(" "),s("li",[t._v("去掉分割线，保存代码，表示解决了冲突")]),t._v(" "),s("li",[t._v("保存代码，执行 "),s("code",[t._v("git add .")]),t._v(" 和 "),s("code",[t._v("git commit -m '提交说明'")]),t._v(" 从而完成这个合并。")])]),t._v(" "),s("h2",{attrs:{id:"远程仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库"}},[t._v("#")]),t._v(" 远程仓库")]),t._v(" "),s("h3",{attrs:{id:"注册码云或github账号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注册码云或github账号"}},[t._v("#")]),t._v(" 注册码云或github账号")]),t._v(" "),s("p",[t._v("码云和github都提供仓库的托管服务。")]),t._v(" "),s("p",[t._v("区别是码云是国内的服务器，打开速度较快；github是国外的服务器，打开速度不能保证。")]),t._v(" "),s("p",[t._v("码云：https://gitee.com/")]),t._v(" "),s("p",[t._v("github：https://github.com/")]),t._v(" "),s("p",[t._v("自行去这两个网站注册账号，最好使用"),s("code",[t._v("相同的邮箱")]),t._v(" 分别到码云和github上注册账号。")]),t._v(" "),s("blockquote",[s("p",[t._v("如果你不会在Github上注册，没关系，上课的时候，老师演示。")])]),t._v(" "),s("h3",{attrs:{id:"配置码云或github的ssh秘钥"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置码云或github的ssh秘钥"}},[t._v("#")]),t._v(" 配置码云或github的SSH秘钥")]),t._v(" "),s("p",[t._v("我们向码云或github网站推送代码的时候，最好使用SSH的方案，这个方案需要提前配置好秘钥。下面是具体的配置方法。")]),t._v(" "),s("p",[t._v("任何文件夹位置，空白处右键，选择右键菜单中的 “"),s("code",[t._v("Git Bash Here")]),t._v("”，执行下面的命令，可以生成SSH秘钥（包含一个公钥一个私钥）")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("ssh-keygen -t rsa -C "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"你的邮箱地址"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 比如")]),t._v("\nssh-keygen -t rsa -C "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tangfengpo@163.com"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 执行完这个命令之后，后面有一些询问，我们直接一路回车即可")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("注意，回车执行命令，然后继续回车，回车....直至生成完毕~")])]),t._v(" "),s("p",[t._v("最后生成的秘钥在：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Windows：\nC:\\Users\\用户名\\.ssh\n\nmac：\n你的用户名那个文件夹中。 按shift+Commend+.  可以显示隐藏文件，然后就可以看到 .ssh文件夹了\n")])])]),s("p",[t._v("找到 "),s("code",[t._v(".ssh/id_rsa.pub")]),t._v("，用vscode打开，复制里面全部的内容，配置到远程仓库，做法如下：")]),t._v(" "),s("ul",[s("li",[t._v("GitHub右上角的三角号")]),t._v(" "),s("li",[t._v("Settings")]),t._v(" "),s("li",[t._v("左侧有 SSH and GPG keys")]),t._v(" "),s("li",[t._v("在显示的界面中，点击右上角的 New SSH key，然后完成添加公钥操作")]),t._v(" "),s("li",[t._v("码云的配置方式和Github一样。")])]),t._v(" "),s("h3",{attrs:{id:"创建远程仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建远程仓库"}},[t._v("#")]),t._v(" 创建远程仓库")]),t._v(" "),s("ul",[s("li",[t._v("码云\n"),s("ul",[s("li",[t._v("右上角的 “+” ，选择新建仓库")]),t._v(" "),s("li",[t._v("填写仓库名，选择公开")]),t._v(" "),s("li",[t._v("点击创建按钮，创建。")])])]),t._v(" "),s("li",[t._v("github\n"),s("ul",[s("li",[t._v("右上角的 “+” ，选择 “New repository”")]),t._v(" "),s("li",[t._v("填写仓库名称")]),t._v(" "),s("li",[t._v("点击创建按钮，创建。")])])])]),t._v(" "),s("h3",{attrs:{id:"推送代码到远程【首次】"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#推送代码到远程【首次】"}},[t._v("#")]),t._v(" 推送代码到远程【首次】")]),t._v(" "),s("ul",[s("li",[t._v("进入本地项目文件夹，右键 --\x3e Git Bash Here，打开终端窗口。")]),t._v(" "),s("li",[t._v("远程仓库地址有两个（https、ssh地址），一定要选择ssh地址。")]),t._v(" "),s("li",[t._v("添加远程仓库地址（"),s("code",[t._v("git remote add 远程仓库地址别名 完整的远程仓库SSH地址")]),t._v("）")]),t._v(" "),s("li",[t._v("首次推送代码到远程仓库（"),s("code",[t._v("git push -u origin master")]),t._v("）")])]),t._v(" "),s("blockquote",[s("p",[t._v("只能把本地仓库的代码推送到远程仓库；不能把工作区的、暂存区的代码推到远程。")]),t._v(" "),s("p",[t._v("确保你的本地仓库有内容，别推送空的本地仓库。注意是本地仓库，不是工作区。")])]),t._v(" "),s("p",[t._v("首次使用SSH，会出现如下画面，输入 “yes”，回车即可。后面就不会再有了。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/ye-xingchen/tuchuang/raw/master/img/image-20200819170633759.png",alt:"image-2020081970633759"}})]),t._v(" "),s("h3",{attrs:{id:"再次及后续推送"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#再次及后续推送"}},[t._v("#")]),t._v(" 再次及后续推送")]),t._v(" "),s("ul",[s("li",[t._v("工作区编写代码")]),t._v(" "),s("li",[t._v("执行 add 命令，将代码添加到暂存区")]),t._v(" "),s("li",[t._v("执行 commit 命令，将代码提交到本地仓库。（因为只有本地仓库的代码才能推送到远程）")]),t._v(" "),s("li",[t._v("执行 "),s("code",[t._v("git push")]),t._v(" 命令，将这次改动推送到远程仓库。")])]),t._v(" "),s("h3",{attrs:{id:"常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),s("ul",[s("li",[t._v("执行完“"),s("strong",[t._v("git remote add origin ssh地址")]),t._v("”报错：fatal：remote origin already exists.\n"),s("ul",[s("li",[t._v("叫做 origin 的远程地址以及存在了。不能再使用这个名字了。")]),t._v(" "),s("li",[t._v("执行 "),s("code",[t._v("git remote -v")]),t._v(" 查看所有的远程地址。")]),t._v(" "),s("li",[t._v("可以选择性的 删除 远程地址。执行 "),s("code",[t._v("git remote remove 别名")]),t._v("，比如 "),s("code",[t._v("git remote remove origin")])])])]),t._v(" "),s("li",[t._v("首次推送的时候，提示输入账号密码\n"),s("ul",[s("li",[t._v("因为添加远程地址的时候，填错了，填成了 https 地址了。应该换成 ssh 地址。")]),t._v(" "),s("li",[t._v("可以选择改过来，也可以使用https地址。下次做项目，再使用ssh地址也可以。")])])])]),t._v(" "),s("p",[s("strong",[t._v("git remote add 那里，地址复制错了，能改吗？")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看所有可用的源（可用的远程地址）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除一个源")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote remove 远程仓库地址别名\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 然后重新添加新的地址")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" 远程仓库地址别名 SSH地址\n")])])]),s("p",[s("strong",[t._v("我电脑上有两个本地项目（仓库），能推送到一个远程仓库吗？")])]),t._v(" "),s("p",[t._v("没人这么干！！！！！！！！两个项目放一起，会出现混乱或者覆盖的呀！！！")]),t._v(" "),s("p",[s("strong",[t._v("推送总是不成功？")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("检查一下SSH秘钥配置好了吗")])]),t._v(" "),s("li",[s("p",[t._v("看看什么错误，直接把前因后果告诉老师吧~~~")])]),t._v(" "),s("li",[s("p",[t._v("实在不行，重新创建一个仓库试试，从头再来。")])])]),t._v(" "),s("h2",{attrs:{id:"多人协作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多人协作"}},[t._v("#")]),t._v(" 多人协作")]),t._v(" "),s("h3",{attrs:{id:"管理员角色"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#管理员角色"}},[t._v("#")]),t._v(" 管理员角色")]),t._v(" "),s("ul",[s("li",[t._v("创建远程仓库 或 创建本地仓库之后推送到远程仓库\n"),s("ul",[s("li",[t._v("初始化一个项目，"),s("code",[t._v("git init")])]),t._v(" "),s("li",[t._v("添加初始的代码到暂存区 "),s("code",[t._v("git add .")])]),t._v(" "),s("li",[t._v("提交初始的代码到本地仓库 "),s("code",[t._v('git commit -m "提交了初始的代码"')])])])]),t._v(" "),s("li",[t._v("推送到远程仓库\n"),s("ul",[s("li",[s("code",[t._v("git remote add origin SSH地址")])]),t._v(" "),s("li",[s("code",[t._v("git push -u origin master")])])])]),t._v(" "),s("li",[t._v("邀请成员")]),t._v(" "),s("li",[t._v("开发（add / commit / pull / push）\n"),s("ul",[s("li",[t._v("编辑自己的代码")]),t._v(" "),s("li",[t._v("把修改后的代码，添加到暂存区 "),s("code",[t._v("git add .")])]),t._v(" "),s("li",[t._v("把修改后的代码，推送到本地仓库 "),s("code",[t._v('git commit -m "xxx"')])]),t._v(" "),s("li",[t._v("如果有人在你之前推送了，则推送之前需要先拉取，将拉取下来的代码和你的代码合并 "),s("code",[t._v("git pull origin master")])]),t._v(" "),s("li",[t._v("合并如果有冲突，需要解决冲突，别忘记提交一次")]),t._v(" "),s("li",[t._v("最后推送 "),s("code",[t._v("git push origin master")])])])])]),t._v(" "),s("h3",{attrs:{id:"成员角色"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#成员角色"}},[t._v("#")]),t._v(" 成员角色")]),t._v(" "),s("ul",[s("li",[t._v("同意邀请")]),t._v(" "),s("li",[t._v("克隆项目到本地（注意路径）\n"),s("ul",[s("li",[t._v("执行 "),s("code",[t._v("git clone SSH地址")]),t._v(" ，将项目克隆到本地。然后关闭黑窗口。")]),t._v(" "),s("li",[t._v("进入项目文件夹，重新 "),s("code",[t._v("git Bash Here")]),t._v(" 打开黑窗口，这样可以保证路径正确。")])])]),t._v(" "),s("li",[t._v("开发（add / commit / pull / push）\n"),s("ul",[s("li",[t._v("编辑自己的代码")]),t._v(" "),s("li",[t._v("把修改后的代码，添加到暂存区 "),s("code",[t._v("git add .")])]),t._v(" "),s("li",[t._v("把修改后的代码，推送到本地仓库 "),s("code",[t._v('git commit -m "xxx"')])]),t._v(" "),s("li",[t._v("如果有人在你之前推送了，则推送之前需要先拉取，将拉取下来的代码和你的代码合并 "),s("code",[t._v("git pull origin master")])]),t._v(" "),s("li",[t._v("合并如果有冲突，需要解决冲突，别忘记提交一次")]),t._v(" "),s("li",[t._v("最后推送 "),s("code",[t._v("git push origin master")])])])])]),t._v(" "),s("h1",{attrs:{id:"附录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#附录"}},[t._v("#")]),t._v(" 附录")]),t._v(" "),s("h2",{attrs:{id:"git忽略和移除文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git忽略和移除文件"}},[t._v("#")]),t._v(" Git忽略和移除文件")]),t._v(" "),s("h3",{attrs:{id:"移除文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移除文件"}},[t._v("#")]),t._v(" 移除文件")]),t._v(" "),s("p",[t._v("只把文件从仓库中移除")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" --cached 文件\n\n")])])]),s("p",[t._v("把文件从工作区和仓库中同时移除")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -f 文件\n\n")])])]),s("h3",{attrs:{id:"git忽略文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git忽略文件"}},[t._v("#")]),t._v(" Git忽略文件")]),t._v(" "),s("p",[t._v("在项目中，创建 "),s("code",[t._v(".gitignore")]),t._v(" 文件，它就是git的忽略文件，记录了哪些文件不被Git管理。")]),t._v(" "),s("p",[t._v("如果有的文件已经被Git管理了，而又想设置为忽略文件，则需要使用 "),s("code",[t._v("git rm --cached 文件")]),t._v(" 将文件从仓库中移除才有效。")]),t._v(" "),s("p",[t._v("被成功忽略的文件，不会被添加到暂存区，不会被提交到本地仓库，不会被推送到远程仓库。这就是忽略的意思。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 展示 .gitignore 的写法")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 忽略当前目录中的 test 文件夹")]),t._v("\n/test\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 忽略任何目录中的 test 文件夹")]),t._v("\ntest/\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 忽略任何目录中的 png 图片")]),t._v("\n/**/*.png\n\n")])])]),s("h2",{attrs:{id:"分支和远程相关命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分支和远程相关命令"}},[t._v("#")]),t._v(" 分支和远程相关命令")]),t._v(" "),s("h3",{attrs:{id:"推送分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#推送分支"}},[t._v("#")]),t._v(" 推送分支")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u 仓库别名 本地分支:远程分支\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 比如，有个本地分支叫做 reg，推送到远程之后叫做 register")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin reg:register\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果本地分支和远程分支同名，可以省略 :远程分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 比如，有个本地分支叫做dev，推送到远程也叫做dev")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin dev\n\n\n")])])]),s("h3",{attrs:{id:"查看远程分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看远程分支"}},[t._v("#")]),t._v(" 查看远程分支")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote show 仓库别名\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 比如，查看一个叫做码云的远程仓库的分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote show mayun\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用下面的命令也可以查看所有的分支，a表示all，所有的意思")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -a\n\n")])])]),s("h3",{attrs:{id:"跟踪-下载-检出-分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#跟踪-下载-检出-分支"}},[t._v("#")]),t._v(" 跟踪（下载/检出）分支")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout 远程分支名\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 比如有个远程分支，叫做user，把他下载到本地也叫做user")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout user\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 比如有个远程分支，叫做user，把他下载到本地叫做user2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b user2 origin/user\n\n")])])]),s("h3",{attrs:{id:"删除远程分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除远程分支"}},[t._v("#")]),t._v(" 删除远程分支")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin --delete 分支名\n\n")])])]),s("h2",{attrs:{id:"vscode中的git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vscode中的git"}},[t._v("#")]),t._v(" VSCode中的Git")]),t._v(" "),s("p",[t._v("点点鼠标，即可完成日常开发。")]),t._v(" "),s("p",[t._v("工作也基本够用了。")]),t._v(" "),s("p",[t._v("当你看到这里的时候，其实你可以不用马上记住那么多命令的。")])])}),[],!1,null,null,null);a.default=e.exports}}]);