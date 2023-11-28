## 1、什么是 Spring Boot？

`Spring Boot` 是 `Spring` 开源组织下的子项目，是 Spring 组件一站式解决方案，主要是简化了使用 `Spring` 的难度，简省了繁重的配置，提供了各种启动器，开发者能快速上手。

## 2、Spring Boot、Spring MVC 和 Spring 有什么区别？

**SpringFrame**

`SpringFramework` 最重要的特征是`依赖注入`。所有 `SpringModules` 不是`依赖注入`就是 `IOC控制反转`。

当我们恰当的使用 DI 或者是 IOC 的时候，我们可以开发松耦合应用。松耦合应用的单元测试可以很容易的进行。

**SpringMVC**

`Spring MVC` 提供了一种分离式的方法来开发 Web 应用。通过运用像 `DispatcherServelet`，`MoudlAndView` 和 `ViewResolver` 等一些简单的概念，开发 Web 应用将会变的非常简单。

**SpringBoot**

Spring 和 SpringMVC 的问题在于：需要配置大量的参数。

```xml
<pre>
<bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
    <property name="prefix">
        <value>/WEB-INF/views/</value>
    </property>
    <property name="suffix">
        <value>.jsp</value>
    </property>
</bean>
<mvc:resources mapping="/webjars/**" location="/webjars/"/>
</pre>
```

Spring Boot 通过一个`自动配置`和启动的项来目解决这个问题。为了更快的构建产品就绪应用程序，Spring Boot 提供了一些非功能性特征。

## 3、Spring Boot 有哪些优点？

Spring Boot 主要有如下优点：

1. 容易上手，提升开发效率，为 Spring 开发提供一个更快、更广泛的入门体验。
2. 开箱即用，远离繁琐的配置。
3. 提供了一系列大型项目通用的非业务性功能，例如：内嵌服务器、安全管理、运行数据监控、运行 状况检查和外部化配置等。
4. 没有代码生成，也不需要XML配置。
5. 避免大量的 Maven 导入和各种版本冲突。

## 4、为什么要用SpringBoot？

* 为了解决java开发中的，繁多的配置、底下的开发效率，复杂的部署流程，和第三方技术集成难度大的问题，产生了spring boot。
* springboot 使用`“习惯优于配置”`的理念让项目快速运行起来，使用springboot很容易创建一个独立运行的jar，内嵌servlet容器。
* springboot的核心功能一：独立运行spring项目，springboot可以以jar包的形式独立运行，运行一个springboot项目只需要 `java -jar xxx.jar` 来运行。
* springboot的核心功能二：内嵌servlet容器，可以内嵌tomcat，接天jetty，或者undertow，这样我们就可以不用war包形式部署项目。
* springboot的核心功能三，提供starter简化maven配置，spring提供了一系列starter pom 来简化maven的依赖加载， 当使用了 spring-boot-starter-web时，会自动加载所需要的依赖包。
* springboot的核心功能四：自动配置spring。sprintboot 会根据在类路径的jar包，类，为jar包中的类自动配置bean，这样会极大的减少使用的配置，会根据启动类所在的目录，自动配置bean。

## 5、什么是 Spring Boot Stater ？

>启动器是一套方便的依赖没描述符，它可以放在自己的程序中。你可以一站式的获取你所需要的Spring 和相关技术，而不需要依赖描述符的通过示例代码搜索和复制黏贴的负载。

例如，如果你想使用 Sping 和 JPA 访问数据库，只需要你的项目包含 `spring-boot-starter-data-jpa` 依赖项，你就可以完美进行。

## 6、Spring Boot 还提供了其它的哪些 Starter 选项？

spring Boot 也提供了其它的启动器项目包括，包括用于开发特定类型应用程序的典型依赖项。

* `spring-boot-starter-web-services` - SOAP Web Services
* `spring-boot-starter-web` - Web 和 RESTful 应用程序
* `spring-boot-starter-test` - 单元测试和集成测试
* `spring-boot-starter-jdbc` - 传统的 JDBC
* `spring-boot-starter-hateoas` - 为服务添加 HATEOAS 功能
* `spring-boot-starter-security` - 使用 SpringSecurity 进行身份验证和授权
* `spring-boot-starter-data-jpa` - 带有 Hibeernate 的 Spring Data JPA
* `spring-boot-starter-data-rest` - 使用 Spring Data REST 公布简单的 REST 服务

## 7、SpringBoot 是如何快速创建产品就绪应用程序的？

Spring Boot 致力于快速产品就绪应用程序。为此，它提供了一些譬如`高速缓存`，`日志记录`，`监控`和`嵌入式服务器`等开箱即用的非功能性特征。

* `spring-boot-starter-actuator` - 使用一些如监控和跟踪应用的高级功能
* `spring-boot-starter-undertow`, `spring-boot-starter-jetty`, `spring-boot-starter-tomcat` - 选择您的特定嵌入式 Servlet 容器
* `spring-boot-starter-logging` - 使用 logback 进行日志记录
* `spring-boot-starter-cache` - 启用 Spring Framework 的缓存支持

## 8、Spring2 和 Spring5 所需要的最低 Java 版本是什么？

Spring Boot 2.0 需要 Java8 或者更新的版本。Java6 和 Java7 已经不再支持。

## 9、Spring Boot 的核心注解是哪个？它主要由哪几个注解组成的？

启动类上面的注解是`@SpringBootApplication`，它也是 Spring Boot 的核心注解，主要组合包含了以下 3 个注解：
* **@SpringBootConfiguration**：组合了 `@Configuration` 注解，实现配置文件的功能。
* **@EnableAutoConfiguration**：打开自动配置的功能，也可以关闭某个自动配置的选项，如关闭数据源自动配置功能： `@SpringBootApplication(exclude = { DataSourceAutoConfiguration.class })`。
* **@ComponentScan**：Spring组件扫描。