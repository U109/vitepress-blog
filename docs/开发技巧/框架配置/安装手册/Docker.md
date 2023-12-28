## Docker的自动化安装

Docker官方和国内daocloud都提供了一键安装的脚本，使得Docker的安装更加便捷。

官方的一键安装方式：

```shell
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```

国内 daocloud一键安装命令：

```shell
curl -sSL https://get.daocloud.io/docker | sh
```

执行上述任一条命令，耐心等待即可完成Docker的安装。

## Docker手动安装

手动安装Docker分三步：`卸载`、`设置仓库`、`安装`。

### 卸载Docker（可选）

第一步，卸载历史版本。这一步是可选的，如果之前安装过旧版本的Docker，可以使用如下命令进行卸载：

```shell
yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-selinux \
                  docker-engine-selinux \
                  docker-engine \
                  docker-ce
```

### 设置源仓库

第二步，设置仓库。新主机上首次安装Docker Engine-Community之前，需要设置Docker仓库。此后可从仓库安装和更新Docker。

在设置仓库之前，需先按照所需的软件包。yum-utils提供了yum-config-manager，并且device mapper存储驱动程序需要device-mapper-persistent-data和lvm2。

```shell
$ sudo yum install -y yum-utils \
  device-mapper-persistent-data \
  lvm2
```

执行上述命令，安装完毕即可进行仓库的设置。使用官方源地址设置命令如下：

```shell
$ sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
```

通常，官方的源地址比较慢，可将上述的源地址替换为国内比较快的地址：

* 清华大学源：https:**//mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/centos/**docker-ce.repo

仓库设置完毕，即可进行Docker的安装。

### Docker安装

执行一下命令，安装最新版本的 Docker Engine-Community 和 containerd。

```shell
sudo yum install -y docker-ce docker-ce-cli containerd.io
```

docker-ce为社区免费版本。稍等片刻，docker即可安装成功。但安装完成之后的默认是未启动的，需要进行启动操作。

如果不需要docker-ce-cli或containerd.io可直接执行如下命令：

```shell
yum install -y docker-ce
```

至此，完成Docker安装。

## Docker启动

启动Docker的命令：

```shell
sudo systemctl start docker
```

通过运行hello-world镜像来验证是否正确安装了Docker Engine-Community。

```shell
// 拉取镜像
sudo docker pull hello-world
// 执行hello-world
sudo docker run hello-world
```

如果执行之后，控制台显示如下信息，则说明Docker安装和启动成功：

```shell
[root@iZ8vb8pfb2awsz4qy7vm7qZ ~]# docker run hello-world

Hello from Docker!
This message shows that your installation appears to be working correctly.
……
```

除了启动Docker，一些其他启动相关的命令：

* 守护进程重启：`systemctl daemon-reload`
* 重启Docker服务：`systemctl restart docker / service docker restart`
* 关闭Docker服务：`docker service docker stop / docker systemctl stop docker`

## 删除Docker

删除安装包：

```shell
yum remove docker-ce
```

删除镜像、容器、配置文件等内容：

```shell
rm -rf /var/lib/docker
```

## Docker其他常见命令

安装完成Docker之后，这里汇总列一下常见的Docker操作命令：

* 搜索仓库镜像：`docker search 镜像名`
* 拉取镜像：`docker pull 镜像名`
* 查看正在运行的容器：`docker ps`
* 查看所有容器：`docker ps -a`
* 删除容器：`docker rm container_id`
* 查看镜像：`docker images`
* 删除镜像：`docker rmi image_id`
* 启动（停止的）容器：`docker start 容器ID`
* 停止容器：`docker stop 容器ID`
* 重启容器：`docker restart 容器ID`
* 启动（新）容器：`docker run -it ubuntu /bin/bash`
* 进入容器：`docker attach 容器ID` 或 `docker exec -it 容器ID /bin/bash`，推荐使用后者。

更多的命令可以通过`docker help`命令来查看。