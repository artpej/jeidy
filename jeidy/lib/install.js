try{
	var pluginsList = project.getProperty("jeidy.plugins");

	var plugins = pluginsList.split(",");
        var targets = project.getTargets();

	for each ( var plugin in plugins ){
		if( project.getProperty(plugin+".enabled") == "true" && !project.getProperty(plugin+".installed") && targets.containsKey(plugin+"-install")){
			project.executeTarget(plugin+"-install");
		}
	}
	println("Sucessfully updated!");
}catch(e){
	println(e);
}



