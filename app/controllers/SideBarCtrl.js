// app/controllers/SideBarCtrl.js

/**
  * SideBar controller: in charge of the sidebar responsivness
**/

angular.module('planner').controller('SideBarCtrl', SideBarCtrl);

function SideBarCtrl(EventService, SharedService, AuthService, $scope, $location) {
  var vm = this;
  vm.title = 'PLANNER'
  vm.currentSchedule = false
  vm.userData = null /*= null quand user non connecté*/
  vm.week = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
  ]
  vm.addEvent = function(){
    EventService.addEvent(vm.currentSchedule)
  }
  vm.logout = function(){
    AuthService.logout()
  }
  vm.addEvent2 = function(){
    EventService.addEvent2(vm.week[0])
  }

  $scope.$on('SharedService', function () {
    vm.currentSchedule = SharedService.currentSchedule
  })

  $scope.$on('onAuth', function (event, args) {
    vm.userData = args.data
  })
}
