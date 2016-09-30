    function getQueryVariable(variable)
    {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++)
        {
            var pair = vars[i].split("=");
            if (pair[0] == variable)
            {
                return pair[1];
            }
        }
        return -1; //not found
    }

    var searchTerm = getQueryVariable('s');
     

var config = {

        apiKey: "AIzaSyBmkCEad6AxdRJVEy8MtrzETphHcnsNb24",
        authDomain: "map-data-1e0ef.firebaseapp.com",
        databaseURL: "https://map-data-1e0ef.firebaseio.com",
        storageBucket: "map-data-1e0ef.appspot.com",
        messagingSenderId: "729944294128"

    };

firebase.initializeApp(config);

var database = firebase.database();

database.ref(searchTerm).once("value").then(function(snapshot){
	var js = snapshot.val().javascript;
	var node = snapshot.val().node;
	var php = snapshot.val().php;
	var python = snapshot.val().python;
	var ruby = snapshot.val().ruby
	console.log('js', js);
	console.log('node', node);
	console.log('php', php);
	console.log('python', python);
	console.log('ruby', ruby);

	renderChart(js, node, php, python, ruby);


});


// window.onload = function () {
	function renderChart(js, node, php, python, ruby){
	var chart = new CanvasJS.Chart("chartContainer", {
		
		data: [              
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "pie",
			dataPoints: [
				{ label: "javscript",  y: js  },
				{ label: "node", y: node  },
				{ label: "php", y: php  },
				{ label: "python",  y: python  },
				{ label: "ruby",  y: ruby  }
			]
		}
		]
	});
	chart.render();
}

