# Git

## 常用指令

```sh
git branch  # 列出所有分支
git checkout -b 新分支  # 基于当前分支创建并切换到新分支
git branch 新分支 A  # 基于A分支创建新分支
git merge B  # 合并B分支
git status  # 查看仓库当前的状态，显示有变更的文件
git remote -v  # 显示所有远程仓库
git fetch  # 从远程获取最新代码库,不会合并到本地工作目录
```

## 账户配置

- 配置账户信息

```sh
# 全局账户
git config --global user.name 'Your Name'
git config --global user.email 'Your Email'
# 局部账户, 只对当前项目文件生效
git config --local user.name 'Your Name'
git config --local user.email 'Your Email'
```

- 查看账户配置信息

```sh
git config --list
git config --global --list  # 全局
git config --local --list  # 局部
```

- 编辑配置文件

```sh
git config -e    # 针对当前仓库
git config -e --global   # 针对系统上所有仓库
```

## 创建并关联远程仓库

1. 新建本地分支

```sh
git init
git add .
git commit -m'init'
```

2. 关联远程分支

```sh
git remote add origin Url  # 关联远程仓库
git push -u origin master  # 关联分支并推送

# 本地已有分支设置关联
git branch --set-upstream-to=origin/master master
```

## 删除分支

- 删除本地分支

```sh
git branch -d dev
```

- 删除远程分支

```sh
git push origin --delete dev
```

## 撤销与回滚

撤销的几种含义

```sh
git reset --hard HEAD^  # 回退到上个版本
git reset --hard HEAD~n  # 代表回推到n次前的操作
git reset --hard commit_id  # 回退到指定的版本
```

` git reset` 和 `git revert` 区别:

- `reset`: 回到某次提交，提交及之前的 commit 都会被保留，但是此 commit id 之后的修改都会被删除
- `revert`: 用一次新的 commit 来回滚之前的 commit，此次提交之前的 commit 都会被保留

### 几种场景

#### 1. 只提交到暂存区(git add .)

```sh
git reset HEAD .
```

#### 2. 代码还未 push, 在本地分支中

```sh
git log  # 得到提交的commit_id
git reset --hard <commit_id>  # 回退到指定版本
```

#### 3. 代码已提交至远程仓库

```sh
git log  # 得到提交的commit_id
git reset --hard <commit_id>
#  强制提交一次，之前错误的提交从远程仓库删除
git push origin HEAD --force
```

## 查看提交历史

后缀可以同时使用, 更精准显示想要的日志信息

```sh
git log  # 详细历史提交记录
git log --oneline  # 简洁历史提交记录
git log --graph  # 拓扑图形式的提交记录
git log --reverse  # 逆向显示所有日志
git log --author=Tom  # 查看指定用户提交记录
git blame fileName  # 指定文件修改记录
```

## tag 标签

```sh
git tag -a v1.4 -m "my version 1.4"  # 创建一个带注解的标签
git tag -d v1.4  # 删除本地标签
git tag  # 列出所有标签

git push origin :refs/tags/v1.4  # 删除远程标签
git push origin v1.4  # 单个标签推送
git push origin --tags  # 推送所有标签
```
