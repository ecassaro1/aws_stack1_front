let xhttp = new XMLHttpRequest();

//https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-generate-sdk-javascript.html

var apigClient = apigClientFactory.newClient();
//let url = "https://tox0fvc9e5.execute-api.us-east-1.amazonaws.com/test/resource1";

let get = () => {

    var additionalParams = {
        queryParams: {
            mode: document.getElementById('f1').value
        }
    };

    apigClient.resource1Get(
        null,
        null,
        additionalParams
    ).then(function (result) {
        const appRemote = document.getElementById('app-remote');
        appRemote.innerHTML = appRemote.innerHTML + "<p>Response from AWS for GET: "+result.data.message+"</p>";
    }).catch(function (result) {
        debugger;
    });
}

let post = () => {
    var body = {
        "teste":"testeValue"
      };
    
      var additionalParams = {
        // If there are any unmodeled query parameters or headers that must be
        //   sent with the request, add them here.
        headers: {
        },
        queryParams: {
        }
      };

    apigClient.resource1Post(
        null,
        body,
        additionalParams
    ).then(function (result) {
        const appRemote = document.getElementById('app-remote');
        appRemote.innerHTML = appRemote.innerHTML + "<p>Response from AWS for Post: "+result.status+"</p>";
    }).catch(function (result) {
        debugger;
    });


/*    
    var params = {
        // This is where any modeled request parameters should be added.
        // The key is the parameter name, as it is defined in the API in API Gateway.
        param0: '',
        param1: ''
    };

    var body = {
        // This is where you define the body of the request,
    };

    var additionalParams = {
        // If there are any unmodeled query parameters or headers that must be
        //   sent with the request, add them here.
        headers: {
            param0: '',
            param1: ''
        },
        queryParams: {
            param0: '',
            param1: ''
        }
    };

    apigClient.methodName(
        params,
        body,
        additionalParams
    ).then(function (result) {
        // Add success callback code here.
    }).catch(function (result) {
        // Add error callback code here.
    });
*/    
}
