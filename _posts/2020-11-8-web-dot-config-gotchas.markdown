---
layout: post
title:  "web.config gotchas!"
date:   2020-11-8 21:44:03 -0400
categories: App-Service Windows web-dot-config
---
You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

Jekyll requires blog post files to be named according to the following format:

`YEAR-MONTH-DAY-title.MARKUP`

Where `YEAR` is a four-digit number, `MONTH` and `DAY` are both two-digit numbers, and `MARKUP` is the file extension representing the format used in the file. After that, include the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <system.webServer>
        <!-- BEGIN: New lines to add for GZIP! -->
        <urlCompression doStaticCompression="true" doDynamicCompression="true"/>
        <httpCompression>
            <dynamicTypes>
                <clear />
                <add enabled="true" mimeType="text/*"/>
                <add enabled="true" mimeType="message/*"/>
                <add enabled="true" mimeType="application/x-javascript"/>
                <add enabled="true" mimeType="application/javascript"/>
                <add enabled="true" mimeType="application/json"/>
                <add enabled="false" mimeType="*/*"/>
                <add enabled="true" mimeType="application/atom+xml"/>
                <add enabled="true" mimeType="application/atom+xml;charset=utf-8"/>
            </dynamicTypes>
            <staticTypes>
                <clear />
                <add enabled="true" mimeType="text/*"/>
                <add enabled="true" mimeType="message/*"/>
                <add enabled="true" mimeType="application/javascript"/>
                <add enabled="true" mimeType="application/atom+xml"/>
                <add enabled="true" mimeType="application/xaml+xml"/>
                <add enabled="true" mimeType="application/json"/>
                <add enabled="false" mimeType="*/*"/>
            </staticTypes>
        </httpCompression>
        <!-- END: New lines to add for GZIP! -->
        <rewrite>
            <rules>
                <rule name="WordPress: http://<!-- Your Site Name Here -->.azurewebsites.net" patternSyntax="Wildcard">
                    <match url="*"/>
                    <conditions>
                        <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true"/>
                        <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true"/>
                    </conditions>
                    <action type="Rewrite" url="index.php"/>
                </rule>
            </rules>
        </rewrite>
        <!-- BEGIN: New lines to add to block xmlrpc.php! -->
        <!-- 	  NOTE: You may want to disable the WP api as well with a plugin or block all access to wp-json/wp/v2/ -->
        <!-- NOTE: Disabling the WP API may break some plugins and features, do so carefully and make sure to test! -->
        <security>
            <requestFiltering>
                <denyUrlSequences>
                    <add sequence="xmlrpc.php" />
<!--                     the line below disables the whole wp api this may break something -->
                    <add sequence="wp-json/wp/v2/" />
                </denyUrlSequences>
            </requestFiltering>
        </security>
        <!-- END: New lines to add to block xmlrpc.php! -->
    </system.webServer>
</configuration>
{% endhighlight %}

