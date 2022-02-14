angular.module('myapp',['ngRoute'])
.config(function($routeProvider)
{
    $routeProvider.when('/aboutus',
    {
        templateUrl:'aboutus.html',
        
    }).when('/signin',
    {
        templateUrl:'doctor module/signin.html',
        
    }).when('/doctor',
    {
        templateUrl:'doctor.html',
        controller:'doctorctrl'
    })
})
.controller('myctrl',function()
{

})
.controller("doctorctrl",function($scope,$http)
{
    $http.get('https://raw.githubusercontent.com/csaranyamca/Angular-js/main/event.json')
    .success(function(response)
    {
        $scope.doctor=response.houseInformation;
    });
});
