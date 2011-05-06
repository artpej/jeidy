importClass(org.apache.tools.ant.types.Path);

try{
	var pluginsList = project.getProperty("jeidy.plugins");

	var plugins = pluginsList.split(",");
        var targets = project.getTargets();

	var path = new Path(project);

	for each ( var plugin in plugins ){
		if( project.getProperty(plugin+".enabled") && project.getProperty(plugin+".installed")){
			if(project.getReference(plugin+".build.path")!=null)
				path.add(project.getReference(plugin+".build.path"));
		}
	}
	 path.add(project.getReference("project.classpath"));
	project.addReference("build.classpath",path);

}catch(e){
	println(e);
}



