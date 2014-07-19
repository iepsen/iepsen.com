#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import os
import jinja2
import webapp2
import json
from google.appengine.api import mail

JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)


class MainPage(webapp2.RequestHandler):
  def get(self):
    template = JINJA_ENVIRONMENT.get_template('index.html')
    self.response.write(template.render({}))


class SendMail(webapp2.RequestHandler):
  def post(self):
    self.response.headers['Content-Type'] = 'application/json'

    name = self.request.get("name")
    email = self.request.get("email")
    message_body = self.request.get("message-body")
    print message_body
    message = mail.EmailMessage(sender="no-reply@iepsen.com", subject="Contact from site")

    message.to = "Marcelo Iepsen <iepsen@gmail.com>"
    message.body = "Mensagem recebida de %s <%s>:\n\n %s" % (name, email, message_body)

    if message.is_initialized():
      message.send()
      self.response.out.write(json.dumps({'result': True}))
    else:
      self.response.out.write(json.dumps({'result': False}))

app = webapp2.WSGIApplication([
  ('/', MainPage),
  ('/send-mail', SendMail),
], debug=True)
