require "java"

java_package "org.example.jruby"

class HelloWorld

  java_signature "void sayHello()"
  def sayHello
    puts "Say hello from JRuby!"
  end

end


