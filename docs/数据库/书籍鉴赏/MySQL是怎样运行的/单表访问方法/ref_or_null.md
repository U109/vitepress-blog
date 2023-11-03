# ref_or_null

有时候我们不仅想找出某个二级索引列的值等于某个常数的记录，还想把该列的值为NULL的记录也找出来，就像下边这个查询：

```sql
SELECT * FROM single_table WHERE key1 = 'abc' OR key1 IS NULL;

```

当使用二级索引而不是全表扫描的方式执行该查询时，这种类型的查询使用的访问方法就称为`ref_or_null`，这个`ref_or_null`访问方法的执行过程如下：

![img_3.png](/数据库/MySQL/单表访问方法/img_3.png)

可以看到，上边的查询相当于先分别从`idx_key1`索引对应的`B+`树中找出`key1 IS NULL`和`key1 = 'abc'`的两个连续的记录范围，然后根据这些二级索引记录中的`id`值再回表查找完整的用户记录。