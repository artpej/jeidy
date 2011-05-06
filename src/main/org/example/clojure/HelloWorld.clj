(ns org.example.clojure.HelloWorld
  (:gen-class))

(gen-class
  :name org.example.clojure.HelloWorld
  :methods [[sayHello [] void]])

(defn -sayHello [this]
  (.println System/out ( str "Say hello from Clojure!")))     
