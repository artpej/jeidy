try {

	var plugins = project.getProperty("compile.order").split(",");
	var targets = project.getTargets();

	for each ( var plugin in plugins ){
	        if( project.getProperty(plugin+".enabled") == "true" && project.getProperty(plugin+".installed") && targets.containsKey(plugin+"-tests")){
			project.executeTarget(plugin+"-tests");
	        }
	}

}catch(e){
	println(e);
}

