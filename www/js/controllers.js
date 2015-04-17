angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,Server, $ionicLoading) {
        $scope.data  = {};
        $scope.error = {
            messsage : ''
        };
        //get city
        Server.getDataFromServer('city').then(function(response){
            if(response.rajaongkir.status.code == 200){
                $scope.datkota = response.rajaongkir.results;
            }else{
              //do something
                $scope.error.messsage = 'Pengambilan data kota gagal';
            }
        });

        $scope.cekongkir = function(){

            $ionicLoading.show({
                template: 'Tunggu Sebentar...'
            });
            //get ongkir
            Server.getDataFromServer('cost/'+$scope.data.origin+'/'+$scope.data.destination+'/'+$scope.data.weight).then(function(response){
                if(response.rajaongkir.status.code == 200){
                    $scope.dataongkir = response.rajaongkir.results;
                }else{
                    //do something
                }
                $ionicLoading.hide();
            });
        };


})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
