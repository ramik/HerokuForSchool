import com.typesafe.startscript.StartScriptPlugin

name := "TeachingAssistant"

version := "0.1.0"

scalaVersion := "2.9.1"

libraryDependencies ++= Seq(
  "org.scalatra" %% "scalatra" % "2.0.0",
  "org.scalatra" %% "scalatra-scalate" % "2.0.0",
  "org.eclipse.jetty" % "jetty-webapp" % "7.4.5.v20110725",
  "org.eclipse.jetty" % "jetty-server" % "7.4.5.v20110725",
  "org.slf4j" % "slf4j-simple" % "1.6.1",
  "javax.servlet" % "servlet-api" % "2.5" % "provided"
)

seq(StartScriptPlugin.startScriptForClassesSettings: _*)

resolvers += "Sonatype OSS Snapshots" at "http://oss.sonatype.org/content/repositories/snapshots/"




