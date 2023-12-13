
## JDK1.9之前

## JDK1.9及之后

-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005


```shell
java -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005 -jar xxx.jar
```

其中suspend=y/n,设置是否等待调试器连接，默认是n，即不等待。
