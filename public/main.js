    import routerInstance from './routes.js'
    window.onload = () => {

        // let routerInstance = require('./routes')

        //get root div for rendering
        let root = document.getElementById('app');


        //create the route instance

        //get all router links
        let definedRoutes = Array.from(document.querySelectorAll('[router-link]'));


        // method to navigate
        let navigate = e => {
            let route = e.target.attributes[0].value;

            // redirect to the router instance
            let routeInfo = routerInstance.routes.filter(r => r.path === route)[0]
            if (!routeInfo) {
                window.history.pushState({}, '', 'error')
                root.innerHTML = `This route is not Defined`
            } else {
                window.history.pushState({}, '', routeInfo.path)
                root.innerHTML = `You are on the ${routeInfo.name} path`
            }
        }


        //iterate over all defined routes
        definedRoutes.forEach(route => {
            route.addEventListener('click', navigate, false)
        })


        // get current path
        let currentPath = window.location.pathname;
        if (currentPath === '/') {
            root.innerHTML = 'You are on Home page'
        } else {
            // check if route exist in the router instance 
            let route = routerInstance.routes.filter(r => r.path === currentPath)[0];
            if (route) {
                root.innerHTML = `You are on the ${route.name} path`
            } else {
                root.innerHTML = `This route is not Defined`
            }

        }
    }