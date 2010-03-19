
require 'cgi'

def title title, subheading
  %(<h1>#{title} <em>#{subheading}</em></h1>)
end

def project_url username, project
  "http://github.com/#{username}/#{project}"
end

def snippit name
  CGI.escapeHTML File.read(File.dirname(__FILE__) + "/../snippits/#{name}")
end

PROJECT_URL = project_url('visionmedia', 'express')
