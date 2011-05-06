try{
	if(project.getProperty("plugin.help") != null ){
		if(project.getProperty(project.getProperty("plugin.help")+".help") != null)
			println(project.getProperty(project.getProperty("plugin.help")+".help"));
	}else{

		var pluginsList = project.getProperty("jeidy.plugins");
		var plugins = pluginsList.split(",");
	        var targets = project.getTargets();
		for each ( var plugin in plugins ){
			if( project.getProperty(plugin+".enabled") && project.getProperty(plugin+".installed") && project.getProperty(plugin+".help") != null ){
				println(project.getProperty(plugin+".help"));
			}
		}
	}
}catch(e){
	println(e);
}



