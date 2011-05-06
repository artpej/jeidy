package org.example.java;

class Example {

	public static void main(String[] args){
		org.example.groovy.HelloWorld groovy = 
			new org.example.groovy.HelloWorld();

		org.example.jruby.HelloWorld jruby = 
			new org.example.jruby.HelloWorld();

		org.example.clojure.HelloWorld clojure = 
			new org.example.clojure.HelloWorld();

		org.example.javascript.HelloWorld rhino = 
			new org.example.javascript.HelloWorld();

		org.example.scala.HelloWorld scala = 
			new org.example.scala.HelloWorld();

		groovy.sayHello();
		jruby.sayHello();
		clojure.sayHello();
		rhino.sayHello();
		scala.sayHello();

	}
}
