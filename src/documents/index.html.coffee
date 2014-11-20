--- cson

layout: 'default'
#styles1: ['/assets/styles/index.css']

---

div id:"impress", ->

  text @partial('overview.html.coffee')

  text @partial('discover.html.coffee')
  text @partial('discover/discover1.html.coffee')

  text @partial('plan.html.coffee')
  
  text @partial('produce.html.coffee')

  text @partial('optimize.html.coffee')

  
