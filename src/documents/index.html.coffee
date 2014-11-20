--- cson

layout: 'default'
#styles1: ['/assets/styles/index.css']

---

div id:"impress", ->

  text @partial('overview.html.coffee')

  text @partial('discovery.html.coffee')
  text @partial('discovery/discovery1.html.coffee')

  text @partial('design.html.coffee')
  
  text @partial('production.html.coffee')

  text @partial('optimization.html.coffee')

  
