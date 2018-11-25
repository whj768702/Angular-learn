## 响应式表单API

###类

| 类                | 说明                                                         |
| :---------------- | ------------------------------------------------------------ |
| `AbstractControl` | 所有三种表单空间类(`FormControl`、`FormGroup`、`FormArray`)的抽象基类。它提供了一些公共的行为和属性。 |
| `FormControl`     | 管理单体表单空间的值和有效性状态。它对应于`HTML`的表单控件，比如`<input>`或`<select>`。 |
| `FormGroup`       | 管理一组`AbstractControl`实例的值和有效性状态。该组的属性中包括了它的子控件。组件中的顶级表单就是`FormGroup`。 |
| `FormArray`       | 管理一些`AbstractControl`实例数组的值和有效性状态。          |
| `FormBuilder`     | 一个可注入的服务，提供一些用于提供创建控件实例的工厂方法。   |

### 指令

| 指令                   | 说明                                                         |
| ---------------------- | ------------------------------------------------------------ |
| `FormControlDirective` | 把一个独立的`FormControl`实例绑定到表单控件元素。            |
| `FormControlName`      | 把一个现有`FormGroup`中的`FormControl`实例根据名字绑定到表单控件元素。 |
| `FormGroupDirective`   | 把一个现有的`FormGroup`实例绑定到`DOM`元素。                 |
| `FormGroupName`        | 把一个内嵌的`FormGroup`实例绑定到一个`DOM`元素。             |
| `FormArrayName`        | 把一个内嵌的`FormArray`实例绑定到一个`DOM`元素。             |

