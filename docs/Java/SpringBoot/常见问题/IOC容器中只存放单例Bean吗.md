**是的，Spring IOC容器中只存放单例Bean**

IOC容器初始化的时候，会将所有的`bean`初始化在`singletonObjects`这个`ConcurrentHashMap`中， bean是单例的。

在获取bean的时候，首先会从`singletonObjects`去取，通过debug，发现如果`scope`是单例，则可以获取到`bean`，如果`scope`是多例，则获取不到`bean`，需要从一个叫`mergedBeanDefinitions`的`ConcurrentHashMap`中去获取`bean`的定义，
然后再根据`bean`的`scope`去决定如何创建`bean`，如果`scope=prototype`，则每次都会创建一个新的实例。

这里，我们可以大概得出这样的结论：

**IOC在初始化时，只会将scope= singleton（单例）的对象进行实例化，而不会去实例化scope=prototype的对象（多例）。**