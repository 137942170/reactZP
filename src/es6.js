// es6 语法
// 变量
// {
//   let a ='a'
// }
// console.log(a)

// let a = 'a'
// console.log(a);

// 字符串模版
 // a = 'a'
 // b = 'b'
 // console.log('hello '+ a +' b is' + b)
 // console.log(`${a}, ${b}`)

// 支持换行
// console.log(`
//
//
// abc
//
//
//   `)
// 定义函数
// function hello (a) {
//   console.log(`hello ${a}!`)
// }

// const hello1 = (a)=>{
//   console.log(`hello ${a}!`)
// }

// setTimeout (() => {
//     console.log(`xxxx`)
// },1000)
//
// hello(`abc`)
// hello1('cde')

// 只有一个函数值
// const double = x =>x*2
// console.log(double(5))

// 定义函数默认值

// const world2 =(name ='world')=>{
//   console.log(`${name}`)
// }

// world1()
// world2('woniu')

// function hello4 (name1, name2){
//   console.log(name1,name2)
// }
// let arr =['abc','cde']
// hello3.apply(null,arr)
// hello4(...arr)

// object获取对象 keys values

// const obj = {
//   name:'fwt',
//   course:'react app开发',
// }
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// 对象传值改变调用对象添加key
// const name = 'fwt'
// const obj1 = {
//   name:'hello'
// }
// obj1[name] = 'hello fwt'
// console.log(obj1)

// 对象传值改变key
// const name2 ='fwt'
// obj2[name2] = 'hello fwt'
// const obj2 = {
//   [name2]:'hello'
      // es5写法
      // hello:function(){
      //
      // }
      // es6 写法
      // hello1(){
      //
      // }
// }
// console.log(obj2)
// 对象扩展
// const obje1 = {
//   name:'fwt',
//   course:'react'
// }
// const obje3 = {
//   type:'IT',
//   name:'woniu'
// }
// console.log({...obje1,...obje3,data:'2017'})

// 解构赋值

// const arr1 = ['hello','world']
// let [arg1, arg2] =arr1
// console.log(arg1,'|',arg2)
//
// const objec = {
//   name:'fwt',
//   course:'react'
// }
// const {name, course} = objec
// console.log(name,'|',course)

// 类的实例化
// class MyApp {
//   constructor() {
//     this.name ='fwt'
//   }
//   sayHello(){
//     console.log(`${this.name}!`)
//   }
// }
// const app = new MyApp()
// app.sayHello()

// es6 的数据结构

// es6 的模块化

// es6的装饰器
