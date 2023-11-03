# index

看下边这个查询：

```sql
SELECT key_part1, key_part2, key_part3 FROM single_table WHERE key_part2 = 'abc';
```

由于`key_part2`并不是联合索引`idx_key_part`最左索引列，所以我们无法使用`ref`或者`range`访问方法来执行这个语句。但是这个查询符合下边这两个条件：

* 它的查询列表只有3个列：`key_part1`, `key_part2`, `key_part3`，而索引`idx_key_part`又包含这三个列。

* 搜索条件中只有`key_part2`列。这个列也包含在索引`idx_key_part`中。

也就是说我们可以直接通过遍历`idx_key_part`索引的叶子节点的记录来比较`key_part2 = 'abc'`这个条件是否成立，把匹配成功的二级索引记录的`key_part1`, `key_part2`, `key_part3`列的值直接加到结果集中就行了。
由于`二级索引记录`比`聚簇索引记录`小的多（**聚簇索引记录要存储所有用户定义的列以及所谓的隐藏列，而二级索引记录只需要存放索引列和主键**），
而且这个过程也不用进行`回表`操作，所以直接遍历二级索引比直接遍历聚簇索引的成本要小很多，设计MySQL的大叔就把这种采用遍历二级索引记录的执行方式称之为：`index`。

