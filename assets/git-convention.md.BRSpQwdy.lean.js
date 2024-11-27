import{$ as o,U as a,as as i,S as t}from"./chunks/framework.g7L9--Ci.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"git-convention.md","filePath":"git-convention.md","lastUpdated":1731398083000}'),l={name:"git-convention.md"};function c(n,e,d,s,r,g){return t(),a("div",null,e[0]||(e[0]=[i(`<h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>在实际开发中，会使用 git 作为版本控制工具来完成团队协作。因此，对基本的 git 操作指令进行总结是十分有必要的，本文对一些术语或者理论基础，不重新码字，可以<a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.liaoxuefeng.com%2Fwiki%2F0013739516305929606dd18361248578c67b8067c8c017b000" title="https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000" target="_blank" rel="noreferrer">参考廖雪峰老师的博文</a>，本文只对命令做归纳总结。</p><p>git 的通用操作流程如下图（来源于网络）</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/4/25/162fcc0987bf1c0a~tplv-t2oaga2asx-jj-mark:3024:0:0:0:q75.awebp#?w=1172&amp;h=340&amp;s=18854&amp;e=png&amp;a=1&amp;b=acd8e5" alt=""></p><p>主要涉及到四个关键点：</p><blockquote><ol><li>工作区：本地电脑存放项目文件的地方，比如 learnGitProject 文件夹；</li><li>暂存区（Index/Stage）：在使用 git 管理项目文件的时候，其本地的项目文件会多出一个. git 的文件夹，将这个. git 文件夹称之为版本库。其中. git 文件夹中包含了两个部分，一个是暂存区（Index 或者 Stage）, 顾名思义就是暂时存放文件的地方，通常使用 add 命令将工作区的文件添加到暂存区里；</li><li>本地仓库：.git 文件夹里还包括 git 自动创建的 master 分支，并且将 HEAD 指针指向 master 分支。使用 commit 命令可以将暂存区中的文件添加到本地仓库中；</li><li>远程仓库：不是在本地仓库中，项目代码在远程 git 服务器上，比如项目放在 github 上，就是一个远程仓库，通常使用 clone 命令将远程仓库拷贝到本地仓库中，开发后推送到远程仓库中即可；</li></ol></blockquote><p>更细节的来看：</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/4/25/162fcc0e7e711dc7~tplv-t2oaga2asx-jj-mark:3024:0:0:0:q75.awebp#?w=775&amp;h=387&amp;s=42560&amp;e=png&amp;b=f9f2ef" alt=""></p><p>日常开发时代码实际上放置在工作区中，也就是本地的 XXX.java 这些文件，通过 add 等这些命令将代码文教提交给暂存区（Index/Stage），也就意味着代码全权交给了 git 进行管理，之后通过 commit 等命令将暂存区提交给 master 分支上，也就是意味打了一个版本，也可以说代码提交到了本地仓库中。另外，团队协作过程中自然而然还涉及到与远程仓库的交互。</p><p>因此，经过这样的分析，git 命令可以分为这样的逻辑进行理解和记忆：</p><blockquote><ol><li>git 管理配置的命令；</li><li>工作区与暂存区的交互；</li><li>暂存区与本地仓库（分支）上的交互；</li><li>本地仓库与远程仓库的交互。</li></ol></blockquote><h2 id="配置命令" tabindex="-1">配置命令 <a class="header-anchor" href="#配置命令" aria-label="Permalink to &quot;配置命令&quot;">​</a></h2><h3 id="查询配置信息" tabindex="-1">查询配置信息 <a class="header-anchor" href="#查询配置信息" aria-label="Permalink to &quot;查询配置信息&quot;">​</a></h3><blockquote><ol><li>列出当前配置：<code>git config --list</code>;</li><li>列出 repository 配置：<code>git config --local --list</code>;</li><li>列出全局配置：<code>git config --global --list</code>;</li><li>列出系统配置：<code>git config --system --list</code>;</li></ol></blockquote><h3 id="配置用户信息" tabindex="-1">配置用户信息 <a class="header-anchor" href="#配置用户信息" aria-label="Permalink to &quot;配置用户信息&quot;">​</a></h3><blockquote><ol><li>配置用户名：<code>git config --global user.name &quot;your name&quot;</code>;</li><li>配置用户邮箱：<code>git config --global user.email &quot;youremail@github.com&quot;</code>;</li></ol></blockquote><h3 id="其他配置" tabindex="-1">其他配置 <a class="header-anchor" href="#其他配置" aria-label="Permalink to &quot;其他配置&quot;">​</a></h3><blockquote><ol><li>配置解决冲突时使用哪种差异分析工具，比如要使用 vimdiff：<code>git config --global merge.tool vimdiff</code>;</li><li>配置 git 命令输出为彩色的：<code>git config --global color.ui auto</code>;</li><li>配置 git 使用的文本编辑器：<code>git config --global core.editor vi</code>;</li></ol></blockquote><h2 id="工作区上的操作命令" tabindex="-1">工作区上的操作命令 <a class="header-anchor" href="#工作区上的操作命令" aria-label="Permalink to &quot;工作区上的操作命令&quot;">​</a></h2><h3 id="新建仓库" tabindex="-1">新建仓库 <a class="header-anchor" href="#新建仓库" aria-label="Permalink to &quot;新建仓库&quot;">​</a></h3><blockquote><ol><li>将工作区中的项目文件使用 git 进行管理，即创建一个新的本地仓库：<code>git init</code>；</li><li>从远程 git 仓库复制项目：<code>git clone &lt;url&gt;</code>，如：git clone git://github.com/wasd/example.git; 克隆项目时如果想定义新的项目名，可以在 clone 命令后指定新的项目名：<code>git clone git://github.com/wasd/example.git mygit</code>；</li></ol></blockquote><h3 id="提交" tabindex="-1">提交 <a class="header-anchor" href="#提交" aria-label="Permalink to &quot;提交&quot;">​</a></h3><blockquote><ol><li>提交工作区所有文件到暂存区：<code>git add .</code></li><li>提交工作区中指定文件到暂存区：<code>git add &lt;file1&gt; &lt;file2&gt; ...</code>;</li><li>提交工作区中某个文件夹中所有文件到暂存区：<code>git add [dir]</code>;</li></ol></blockquote><h3 id="撤销" tabindex="-1">撤销 <a class="header-anchor" href="#撤销" aria-label="Permalink to &quot;撤销&quot;">​</a></h3><blockquote><ol><li>删除工作区文件，并且也从暂存区删除对应文件的记录：<code>git rm &lt;file1&gt; &lt;file2&gt;</code>;</li><li>从暂存区中删除文件，但是工作区依然还有该文件:<code>git rm --cached &lt;file&gt;</code>;</li><li>取消暂存区已经暂存的文件：<code>git reset HEAD &lt;file&gt;...</code>;</li><li>撤销上一次对文件的操作：<code>git checkout --&lt;file&gt;</code>。要确定上一次对文件的修改不再需要，如果想保留上一次的修改以备以后继续工作，可以使用 stashing 和分支来处理；</li><li>隐藏当前变更，以便能够切换分支：<code>git stash</code>；</li><li>查看当前所有的储藏：<code>git stash list</code>；</li><li>应用最新的储藏：<code>git stash apply</code>，如果想应用更早的储藏：<code>git stash apply stash@{2}</code>；重新应用被暂存的变更，需要加上<code>--index</code>参数：<code>git stash apply --index</code>;</li><li>使用 apply 命令只是应用储藏，而内容仍然还在栈上，需要移除指定的储藏：<code>git stash drop stash{0}</code>；如果使用 pop 命令不仅可以重新应用储藏，还可以立刻从堆栈中清除：<code>git stash pop</code>;</li><li>在某些情况下，你可能想应用储藏的修改，在进行了一些其他的修改后，又要取消之前所应用储藏的修改。Git 没有提供类似于 stash unapply 的命令，但是可以通过取消该储藏的补丁达到同样的效果：<code>git stash show -p stash@{0} | git apply -R</code>；同样的，如果你沒有指定具体的某个储藏，Git 会选择最近的储藏：<code>git stash show -p | git apply -R</code>；</li></ol></blockquote><h3 id="更新文件" tabindex="-1">更新文件 <a class="header-anchor" href="#更新文件" aria-label="Permalink to &quot;更新文件&quot;">​</a></h3><blockquote><p>重命名文件，并将已改名文件提交到暂存区：<code>git mv [file-original] [file-renamed]</code>;</p></blockquote><h3 id="查新信息" tabindex="-1">查新信息 <a class="header-anchor" href="#查新信息" aria-label="Permalink to &quot;查新信息&quot;">​</a></h3><blockquote><ol><li>查询当前工作区所有文件的状态：<code>git status</code>;</li><li>比较工作区中当前文件和暂存区之间的差异，也就是修改之后还没有暂存的内容：git diff；指定文件在工作区和暂存区上差异比较：<code>git diff &lt;file-name&gt;</code>;</li></ol></blockquote><h2 id="暂存区上的操作命令" tabindex="-1">暂存区上的操作命令 <a class="header-anchor" href="#暂存区上的操作命令" aria-label="Permalink to &quot;暂存区上的操作命令&quot;">​</a></h2><h3 id="提交文件到版本库" tabindex="-1">提交文件到版本库 <a class="header-anchor" href="#提交文件到版本库" aria-label="Permalink to &quot;提交文件到版本库&quot;">​</a></h3><blockquote><ol><li>将暂存区中的文件提交到本地仓库中，即打上新版本：<code>git commit -m &quot;commit_info&quot;</code>;</li><li>将所有已经使用 git 管理过的文件暂存后一并提交，跳过 add 到暂存区的过程：<code>git commit -a -m &quot;commit_info&quot;</code>;</li><li>提交文件时，发现漏掉几个文件，或者注释写错了，可以撤销上一次提交：<code>git commit --amend</code>;</li></ol></blockquote><h3 id="查看信息" tabindex="-1">查看信息 <a class="header-anchor" href="#查看信息" aria-label="Permalink to &quot;查看信息&quot;">​</a></h3><blockquote><ol><li>比较暂存区与上一版本的差异：<code>git diff --cached</code>;</li><li>指定文件在暂存区和本地仓库的不同：<code>git diff &lt;file-name&gt; --cached</code>;</li><li>查看提交历史：git log；参数<code>-p</code>展开每次提交的内容差异，用<code>-2</code>显示最近的两次更新，如<code>git log -p -2</code>;</li></ol></blockquote><h3 id="打标签" tabindex="-1">打标签 <a class="header-anchor" href="#打标签" aria-label="Permalink to &quot;打标签&quot;">​</a></h3><p>Git 使用的标签有两种类型：<strong>轻量级的（lightweight）和含附注的（annotated）</strong>。轻量级标签就像是个不会变化的分支，实际上它就是个指向特定提交对象的引用。而含附注标签，实际上是存储在仓库中的一个独立对象，它有自身的校验和信息，包含着标签的名字，电子邮件地址和日期，以及标签说明，标签本身也允许使用 GNU Privacy Guard (GPG) 来签署或验证。一般我们都建议使用含附注型的标签，以便保留相关信息；当然，如果只是临时性加注标签，或者不需要旁注额外信息，用轻量级标签也没问题。</p><blockquote><ol><li>列出现在所有的标签：<code>git tag</code>;</li><li>使用特定的搜索模式列出符合条件的标签，例如只对 1.4.2 系列的版本感兴趣：<code>git tag -l &quot;v1.4.2.*&quot;</code>;</li><li>创建一个含附注类型的标签，需要加<code>-a</code>参数，如<code>git tag -a v1.4 -m &quot;my version 1.4&quot;</code>;</li><li>使用 git show 命令查看相应标签的版本信息，并连同显示打标签时的提交对象：<code>git show v1.4</code>;</li><li>如果有自己的私钥，可以使用 GPG 来签署标签，只需要在命令中使用<code>-s</code>参数：<code>git tag -s v1.5 -m &quot;my signed 1.5 tag&quot;</code>;</li><li>验证已签署的标签：git tag -v ，如<code>git tag -v v1.5</code>;</li><li>创建一个轻量级标签的话，就直接使用 git tag 命令即可，连<code>-a</code>,<code>-s</code>以及<code>-m</code>选项都不需要，直接给出标签名字即可，如<code>git tag v1.5</code>;</li><li>将标签推送到远程仓库中：git push origin ，如<code>git push origin v1.5</code>；</li><li>将本地所有的标签全部推送到远程仓库中：<code>git push origin --tags</code>;</li></ol></blockquote><h3 id="分支管理" tabindex="-1">分支管理 <a class="header-anchor" href="#分支管理" aria-label="Permalink to &quot;分支管理&quot;">​</a></h3><blockquote><ol><li>创建分支：<code>git branch &lt;branch-name&gt;</code>，如<code>git branch testing</code>；</li><li>从当前所处的分支切换到其他分支：<code>git checkout &lt;branch-name&gt;</code>，如<code>git checkout testing</code>；</li><li>新建并切换到新建分支上：<code>git checkout -b &lt;branch-name&gt;</code>;</li><li>删除分支：<code>git branch -d &lt;branch-name&gt;</code>；</li><li>将当前分支与指定分支进行合并：<code>git merge &lt;branch-name&gt;</code>;</li><li>显示本地仓库的所有分支：<code>git branch</code>;</li><li>查看各个分支最后一个提交对象的信息：<code>git branch -v</code>;</li><li>查看哪些分支已经合并到当前分支：<code>git branch --merged</code>;</li><li>查看当前哪些分支还没有合并到当前分支：<code>git branch --no-merged</code>;</li><li>把远程分支合并到当前分支：<code>git merge &lt;remote-name&gt;/&lt;branch-name&gt;</code>，如<code>git merge origin/serverfix</code>；如果是单线的历史分支不存在任何需要解决的分歧，只是简单的将 HEAD 指针前移，所以这种合并过程可以称为快进（Fast forward），而如果是历史分支是分叉的，会以当前分叉的两个分支作为两个祖先，创建新的提交对象；如果在合并分支时，遇到合并冲突需要人工解决后，再才能提交；</li><li>在远程分支的基础上创建新的本地分支<code>：git checkout -b &lt;branch-name&gt; &lt;remote-name&gt;/&lt;branch-name&gt;</code>，如<code>git checkout -b serverfix origin/serverfix</code>;</li><li>从远程分支 checkout 出来的本地分支，称之为跟踪分支。在跟踪分支上向远程分支上推送内容：<code>git push</code>。该命令会自动判断应该向远程仓库中的哪个分支推送数据；在跟踪分支上合并远程分支：<code>git pull</code>；</li><li>将一个分支里提交的改变移到基底分支上重放一遍：<code>git rebase &lt;rebase-branch&gt; &lt;branch-name&gt;</code>，如<code>git rebase master server</code>，将特性分支 server 提交的改变在基底分支 master 上重演一遍；使用 rebase 操作最大的好处是像在单个分支上操作的，提交的修改历史也是一根线；如果想把基于一个特性分支上的另一个特性分支变基到其他分支上，可以使用<code>--onto</code>操作：<code>git rebase --onto &lt;rebase-branch&gt; &lt;feature branch&gt; &lt;sub-feature-branch&gt;</code>，如<code>git rebase --onto master server client</code>；使用 rebase 操作应该遵循的原则是：<strong>一旦分支中的提交对象发布到公共仓库，就千万不要对该分支进行 rebase 操作</strong>；</li></ol></blockquote><h2 id="本地仓库上的操作" tabindex="-1">本地仓库上的操作 <a class="header-anchor" href="#本地仓库上的操作" aria-label="Permalink to &quot;本地仓库上的操作&quot;">​</a></h2><blockquote><ol><li>查看本地仓库关联的远程仓库：<code>git remote</code>；在克隆完每个远程仓库后，远程仓库默认为<code>origin</code>; 加上<code>-v</code>的参数后，会显示远程仓库的<code>url</code>地址；</li><li>添加远程仓库，一般会取一个简短的别名：<code>git remote add [remote-name] [url]</code>，比如：<code>git remote add example git://github.com/example/example.git</code>;</li><li>从远程仓库中抓取本地仓库中没有的更新：<code>git fetch [remote-name]</code>，如<code>git fetch origin</code>; 使用 fetch 只是将远端数据拉到本地仓库，并不自动合并到当前工作分支，只能人工合并。如果设置了某个分支关联到远程仓库的某个分支的话，可以使用<code>git pull</code>来拉去远程分支的数据，然后将远端分支自动合并到本地仓库中的当前分支；</li><li>将本地仓库某分支推送到远程仓库上：<code>git push [remote-name] [branch-name]</code>，如<code>git push origin master</code>；如果想将本地分支推送到远程仓库的不同名分支：<code>git push &lt;remote-name&gt; &lt;local-branch&gt;:&lt;remote-branch&gt;</code>，如<code>git push origin serverfix:awesomebranch</code>; 如果想删除远程分支：<code>git push [romote-name] :&lt;remote-branch&gt;</code>，如<code>git push origin :serverfix</code>。这里省略了本地分支，也就相当于将空白内容推送给远程分支，就等于删掉了远程分支。</li><li>查看远程仓库的详细信息：<code>git remote show origin</code>；</li><li>修改某个远程仓库在本地的简称：<code>git remote rename [old-name] [new-name]</code>，如<code>git remote rename origin org</code>；</li><li>移除远程仓库：<code>git remote rm [remote-name]</code>；</li></ol></blockquote><h2 id="忽略文件" tabindex="-1">忽略文件 <a class="header-anchor" href="#忽略文件" aria-label="Permalink to &quot;忽略文件&quot;">​</a></h2><p>一般我们总会有些文件无需纳入 Git 的管理，也不希望它们总出现在未跟踪文件列表。通常都是些自动生成的文件，比如日志文件，或者编译过程中创建的临时文件等。我们可以创建一个名为 .gitignore 的文件，列出要忽略的文件模式。如下例：</p><div class="language-plaintext vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 此为注释 – 将被 Git 忽略</span></span>
<span class="line"><span># 忽略所有 .a 结尾的文件</span></span>
<span class="line"><span>*.a</span></span>
<span class="line"><span># 但 lib.a 除外</span></span>
<span class="line"><span>!lib.a</span></span>
<span class="line"><span># 仅仅忽略项目根目录下的 TODO 文件，不包括 subdir/TODO</span></span>
<span class="line"><span>/TODO</span></span>
<span class="line"><span># 忽略 build/ 目录下的所有文件</span></span>
<span class="line"><span>build/</span></span>
<span class="line"><span># 会忽略 doc/notes.txt 但不包括 doc/server/arch.txt</span></span>
<span class="line"><span>doc/*.txt</span></span>
<span class="line"><span># 忽略 doc/ 目录下所有扩展名为 txt 的文件</span></span>
<span class="line"><span>doc/**/*.txt</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,44)]))}const b=o(l,[["render",c]]);export{h as __pageData,b as default};
