window.onload = () => {
    //get root div for rendering
    let root = document.getElementById('app');


    //router instance
    let Router = function (name, routes) {
        return {
            name,
            routes
        }
    };

    let routerInstance = new Router('routerInstance', [{
            path: "/",
            name: "Root"
        },
        {
            path: '/about',
            name: "About"
        }

    ])

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