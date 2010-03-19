
require 'cgi'

def title title, subheading
  %(<h1>#{title} <em>#{subheading}</em></h1>)
end

def project_url username, project
  "http://github.com/#{username}/#{project}"
end

def highlight code
  CGI.escapeHTML(code).
    gsub(/(".*?"|'.*?')/, '<span class="string">\1</span>').
    gsub(/\b(return|function)\b/, '<span class="keyword">\1</span>')
end

def snippit name
  highlight(File.read(File.dirname(__FILE__) + "/../snippits/#{name}"))
end

PROJECT_URL = project_url('visionmedia', 'express')
