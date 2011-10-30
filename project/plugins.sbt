resolvers += {
    val typesafeRepoUrl = new java.net.URL("http://typesafe.artifactoryonline.com/typesafe/ivy-releases/")
    val pattern = Patterns(false, "[organisation]/[module]/scala_2.9.1/sbt_[sbtversion]/[revision]/[type]s/[module](-[classifier]).[ext]")
    Resolver.url("Typesafe Ivy Snapshot Repository", typesafeRepoUrl)(pattern)
}

libraryDependencies <<= (libraryDependencies, sbtVersion) { (deps, version) =>
    deps :+ ("com.typesafe.startscript" % "xsbt-start-script-plugin" % "0.3.0" extra("sbtversion" -> version))
}

resolvers += "sbt-idea-repo" at "http://mpeltonen.github.com/maven/"

addSbtPlugin("com.github.mpeltonen" % "sbt-idea" % "0.11.0")