#!/usr/bin/env python
# -*- coding: utf-8 -*-
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
    projects = [
        { 'id': 'fwc2014-aovivo', 'name': 'SporTV Ao Vivo na Copa do Mundo da FIFA', 'cover': 'cover.png', 'samples': ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png'], 'description': u'SporTV Ao Vivo na Copa do Mundo da FIFA has a mobile and tablet native app to cover the brazilian FIFA 2014 World Cup. Working with project coordinator, product owner and team my responsibilities are concept the product, ensure all things are going well and the development itself.', 'url': 'https://itunes.apple.com/br/app/sportv-ao-vivo-na-copa-do/id879180471?mt=8', 'attributes': { 'Date': 'June 2014', 'Service': 'iOS Development' }},
        { 'id': 'fwc2014-estatisticas', 'name': u'SporTV Estatísticas na Copa do Mundo da FIFA', 'cover': 'cover.png', 'samples': ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'], 'description': u'SporTV Estatísticas na Copa do Mundo da FIFA has a mobile and tablet native app to cover the brazilian FIFA 2014 World Cup. Working with project coordinator, product owner and team my responsibilities are concept the product, ensure all things are going well and the development itself.', 'url': 'https://itunes.apple.com/br/app/sportv-estatisticas-na-copa/id879191736?mt=8', 'attributes': { 'Date': 'June 2014', 'Service': 'iOS Development' }},
        { 'id': 'sochi2014', 'name': u'SporTV - Jogos Olímpicos de Inverno Sochi 2014', 'cover': 'cover.png', 'samples': ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png'], 'description': u'SporTV - Jogos Olímpicos de Inverno Sochi 2014 has a tablet native app to cover the russian Sochi 2014 Winter Olympics. My responsibilities are develop a backend API to deliver the content and support iOS development.', 'url': 'https://itunes.apple.com/br/app/sportv-jogos-olimpicos-inverno/id791584263?mt=8', 'attributes': { 'Date': 'February 2014', 'Service': 'iOS and Backend Development' }},
        { 'id': 'combate-play', 'name': u'Combate Play', 'cover': 'cover.png', 'samples': ['1.png', '2.png', '3.png', '4.png'], 'description': u'Combate Play is a native mobile and tablet app. My responsibilities are iOS development.', 'url': 'https://itunes.apple.com/br/app/combate-play/id777815939?mt=8', 'attributes': { 'Date': 'November 2013', 'Service': 'iOS Development' }},
        { 'id': 'receitas-gnt', 'name': u'Receitas GNT', 'cover': 'cover.png', 'samples': ['1.png', '2.png', '3.png', '4.png', '5.png'], 'description': u'Receitas GNT is a native mobile and tablet app. My responsibilities are iOS development.', 'url': 'https://itunes.apple.com/br/app/receitas-gnt/id668151960?mt=8', 'attributes': { 'Date': 'Jully 2013', 'Service': 'iOS Development' }},
        { 'id': 'mordomia', 'name': 'Mordomia', 'cover': '1.png', 'samples': ['1.png', '2.png', '3.png'], 'description': 'Mordomia is a delivery service made by Madre Mia!. This project is running on Python and Django instance at <a href="http://getupcloud.com/">Getup Cloud</a>.', 'url': 'http://madremia.la', 'attributes': { 'Client': 'Madre Mia!', 'Date': 'December 2013', 'Service': 'Web Development' }},
    ]
    template = JINJA_ENVIRONMENT.get_template('index.html')
    self.response.write(template.render({ 'projects': projects }))


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
