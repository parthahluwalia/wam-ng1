(function(){
    angular
        .module("WebAppMakerApp")
        .factory("ScriptService", scriptService);

    function scriptService($http) {
        var api = {
            createScript : saveScript,
            saveScript   : saveScript,
            findScript   : findScript
        };
        return api;
        
        function findScript(scope) {
            var url  = "/api";
                url += "/website/"+scope.websiteId;
                url += "/page/"+scope.pageId;
                url += "/widget/"+scope.widgetId;
                url += "/script";
            return $http.get(url);
        }

        function saveScript(scope, script) {
            var url  = "/api";
                url += "/website/"+scope.websiteId;
                url += "/page/"+scope.pageId;
                url += "/widget/"+scope.widgetId;
                url += "/script";
            return $http.post(url, script);
        }

        function apiBaseUrl(scope) {
            var url  = "/api";
                url += "/website/"+scope.websiteId;
                url += "/page/"+scope.pageId;
                url += "/widget/"+scope.widgetId;
            return url;
        }
    }
})();