#!/bin/bash

java -Dfile.encoding=UTF8 -Xmx1536M -Xss1M -XX:+CMSClassUnloadingEnabled -XX:MaxPermSize=256m -jar sbt-launcher-0.11.0.jar $@
