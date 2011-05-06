try {

	var plugins = project.getProperty("compile.order").split(",");
	var targets = project.getTargets();

	for each ( var plugin in plugins ){
	        if( project.getProperty(plugin+".enabled") && project.getProperty(plugin+".installed") && targets.containsKey(plugin+"-clean")){
			project.executeTarget(plugin+"-clean");
	        }
	}

}catch(e){
	println(e);
}

