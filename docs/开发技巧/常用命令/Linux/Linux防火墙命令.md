## CentOS7

`CentOS7` 的防火墙配置跟以前版本有很大区别，`CentOS7` 这个版本的防火墙默认使用的是`firewall`，与之前的版本使用`iptables`不一样

### 使用firewalld开启关闭防火墙与端口

关闭防火墙:

```shell
systemctl stop firewalld.service
```

开启防火墙:

```shell
systemctl start firewalld.service
```

若遇到无法开启

```shell
先用:systemctl unmask firewalld.service 
然后:systemctl start firewalld.service
```

开启开机启动:

```shell
systemctl enable firewalld.service
```

关闭开机启动:

```shell
systemctl disable firewalld.service
```

查看防火墙状态:

```shell
systemctl status firewalld 
# 或
firewall-cmd --state
```

开启端口:

```shell
#（--permanent永久生效，没有此参数重启后失效）
#注:可以是一个端口范围，如1000-2000/tcp
firewall-cmd --zone=public --add-port=80/tcp --permanent    
```

重启防火墙（重新载入，更新配置）:

```shell
firewall-cmd --reload
```

查询某个端口是否开放:

```shell
firewall-cmd --query-port=80/tcp
```

移除端口:

```shell
firewall-cmd --zone=public --remove-port=80/tcp --permanent
# 
firewall-cmd --permanent --remove-port=123/tcp
```

查询已经开放的端口列表:

```shell
firewall-cmd --list-port
```

命令含义:

```shell
--zone #作用域

--add-port=80/tcp #添加端口，格式为:端口/通讯协议

--remove-port=80/tcp #移除端口，格式为:端口/通讯协议

--permanent #永久生效，没有此参数重启后失效
```

### systemctl

```shell
systemctl是CentOS7的服务管理工具中主要的工具，它融合之前service和chkconfig的功能于一体。

启动一个服务:systemctl start firewalld.service
关闭一个服务:systemctl stop firewalld.service
重启一个服务:systemctl restart firewalld.service
显示一个服务的状态:systemctl status firewalld.service
在开机时启用一个服务:systemctl enable firewalld.service
在开机时禁用一个服务:systemctl disable firewalld.service
查看服务是否开机启动:systemctl is-enabled firewalld.service
查看已启动的服务列表:systemctl list-unit-files|grep enabled
查看启动失败的服务列表:systemctl --failed
```

### 配置firewalld-cmd

```shell
查看版本: firewall-cmd --version

查看帮助: firewall-cmd --help

显示状态: firewall-cmd --state

查看所有打开的端口: firewall-cmd --zone=public --list-ports

更新防火墙规则: firewall-cmd --reload

查看区域信息:  firewall-cmd --get-active-zones

查看指定接口所属区域: firewall-cmd --get-zone-of-interface=eth0

拒绝所有包:firewall-cmd --panic-on

取消拒绝状态: firewall-cmd --panic-off

查看是否拒绝: firewall-cmd --query-panic
```

### iptables

安装iptables-services :

```shell
yum install iptables-services 
```

进入下面目录进行修改:
`/etc/sysconfig/iptables`

## CentOS6

存在以下两种方式:

### 一、service方式

查看防火墙状态:

```shell
[root@centos6 ~]# service iptables status
iptables:未运行防火墙。
```

开启防火墙:

```shell
service iptables start
```

关闭防火墙:

```shell
service iptables stop
```

会重定向到`“/bin/systemctl stop iptables.service”`

### 二、iptables方式

先进入`init.d`目录，命令如下:

```shell
cd /etc/init.d/
```

然后查看防火墙状态:

```shell
/etc/init.d/iptables status
```

暂时关闭防火墙:

```shell
/etc/init.d/iptables stop
```

重启iptables:

```shell
/etc/init.d/iptables restart
```

## Ubuntu

`Ubuntu`安装`UFW`防火墙:

```shell
sudo apt-get install ufw
```

一般用户，只需如下设置:

```shell
sudo apt-get install ufw
sudo ufw enable
sudo ufw default deny
```
以上三条命令已经足够安全了，如果你需要开放某些服务，再使用sudo ufw allow开启。

开启防火墙:

```shell
sudo ufw enable 
sudo ufw default deny 
```

#运行以上两条命令后，开启了防火墙，并在系统启动时自动开启。
#关闭所有外部对本机的访问，但本机访问外部正常。

开启/禁用:

```shell
sudo ufw allow|deny [service] 
```

打开或关闭某个端口，例如:

```shell
sudo ufw allow smtp　      #允许所有的外部IP访问本机的25/tcp (smtp)端口 
sudo ufw allow 22/tcp      #允许所有的外部IP访问本机的22/tcp (ssh)端口 
sudo ufw allow 53          #允许外部访问53端口(tcp/udp) 
sudo ufw allow from 192.168.1.100 #允许此IP访问所有的本机端口 
sudo ufw allow proto udp 192.168.0.1 port 53 to 192.168.0.2 port 53 
sudo ufw deny smtp         #禁止外部访问smtp服务 
sudo ufw delete allow smtp #删除上面建立的某条规则 
```

查看防火墙状态:

```shell
sudo ufw status 

#补充:开启/关闭防火墙 (默认设置是’disable’)
ufw enable|disable

#转换日志状态
ufw logging on|off

#设置默认策略 (比如 “mostly open” vs “mostly closed”)
ufw default allow|deny

#许可或者屏蔽某些入埠的包 (可以在“status” 中查看到服务列表［见后文］)
#可以用“协议:端口”的方式指定一个存在于/etc/services中的服务名称，也可以通过包的meta-data。 ‘allow’ 参数将把条目加入 /etc/ufw/maps ，而 ‘deny’ 则相反。基本语法如下:
ufw allow|deny [service]
#显示防火墙和端口的侦听状态，参见 /var/lib/ufw/maps。括号中的数字将不会被显示出来。
ufw status
```

UFW使用范例:

```shell
#允许 53 端口
$ sudo ufw allow 53

#禁用 53 端口
$ sudo ufw delete allow 53

#允许 80 端口
$ sudo ufw allow 80/tcp

#禁用 80 端口
$ sudo ufw delete allow 80/tcp

#允许 smtp 端口
$ sudo ufw allow smtp

#删除 smtp 端口的许可
$ sudo ufw delete allow smtp

#允许某特定 IP
$ sudo ufw allow from 192.168.254.254

#删除上面的规则
$ sudo ufw delete allow from 192.168.254.254    
```

局域网ping不通mac主机的原因:

* 网络连接或网络不稳定
* mac电脑锁屏或关机
* 防火墙设置
* ICMP协议设置
