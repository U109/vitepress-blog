## 概述

Spring使用增强类定义横切逻辑，同时由于Spring只支持方法连接点，增强还包括在方法的哪一点加入横切代码的方位信息，所以**增强既包括横切逻辑，又包括部分连接点的信息**

## 增强类型

按照增强在目标类方法连接点的位置可以将增强划分为以下五类：

* **前置增强 (org.springframework.aop.BeforeAdvice)** 

    表示在目标方法执行前来实施增强

* **后置增强 (org.springframework.aop.AfterReturningAdvice)**

    表示在目标方法执行后来实施增强

* **环绕增强 (org.aopalliance.intercept.MethodInterceptor)**

    表示在目标方法执行前后同时实施增强

* **异常抛出增强 (org.springframework.aop.ThrowsAdvice)** 

    表示在目标方法抛出异常后来实施增强

* **引介增强 (org.springframework.aop.introductioninterceptor)**

    表示在目标类中添加一些新的方法和属性

其中引介增强是一种特殊的增强。它可以在目标类中添加属性和方法，通过拦截定义一个接口，让目标代理实现这个接口。

* 引介增强的连接点是类级别的，而前面的几种则是方法级别的。
* 环绕增强是AOP联盟定义的接口，其他四种增强接口则是Spring定义的接口。

这些增强接口都有一些方法，通过实现这些接口方法，并在接口方法中定义横切逻辑，就可以将它们织入目标类方法的相应连接点位置。

用Spring实现的话： 通过实现这些增强接口，在实现这些接口的方法当中定义横切逻辑，然后通过配置Spring的配置文件就可以完成将增强织入到目标方法当中了。
