export class Router{
    add(routeName,page){
        this.route[routeName] = page
    }

    route(event){
        event =event || window.event 
        event.preventDefault()
        
      
    
        window.history.pushState({},"",event.target.href)
      
        this.handle()
    }
    
    handle(){
        const {pathname,href}= window.location
        const route = this.route[pathname] || this.routes[404]
       console.log(href)
        fetch(route)
        .then(data=>data.text())
        .then (html=>{
            document.querySelector('#app').innerHTML=html
        })
        const activePath= pathname.replace("/","")
        console.log(activePath)
        document.querySelector('#app').className=""
        document.querySelector('html').classList.add(activePath)
        
    }

}

